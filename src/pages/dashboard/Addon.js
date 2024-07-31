import { useState, useEffect } from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import { addMenuItem } from "../../apis";
import { IoAddCircleOutline } from "react-icons/io5";
import { firebaseUploadImg } from "../../apis/Upload";
import { getDownloadURL } from "firebase/storage";
import Button from "../../components/dashboard/Button";

function Addon() {
  const [name, setName] = useState();

  const [description, setDescription] = useState();
  const [cost, setCost] = useState();
  const [errorMsg, setErrorMsg] = useState();

  const [addonImage, setAddonImage] = useState();
  const [loading, setLoading] = useState();

  const handleClick = async () => {
    setLoading(true)    
    try {
      // if(!name||!category||!restaurantName|| !description||!cost){
      //     setErrorMsg('Please enter the required fields')
      //    } else {
      console.log("adding addons");
      console.log(name, description, cost);

      const res = await addMenuItem({
        name: name,
        description: description,
        price: cost,
        image: addonImage,
      });
      setErrorMsg("");
      console.log(res);
      //    }
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  };

  useEffect(() => {
    console.log(name);

    console.log(cost);
    console.log(description);
  }, [name, cost, description]);

  const uploadImage = (input) => {
    const files = input.target.files || [];
    console.log(files);
    if (files.length === 0) {
      return false;
    }
    const reader = new FileReader();

    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      // setFileLoading(true);
      const uploadTask = firebaseUploadImg(files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (err) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log("addonImage: ", url);
            setAddonImage(url);
          });
        }
      );

      return true;
    };

    reader.onprogress = function (e) {
      //Loader
    };
  };

  return (
    <Dashboard>
      <div className="max-w-4xl mx-auto mt-5 p-5 bg-white ">
        <div className="text-center mt-5 font-bold tracking-wide text-2xl ">
          Uploading Addon
        </div>

        {errorMsg && (
          <div className="text-sm text-center text-red-500">{errorMsg}</div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 ">
          <div>
            <div className="">Name</div>
            <input
              type="text"
              placeholder="Enter item name"
              name="ItemName"
              className=" rounded-md border border-black w-full py-2 px-3  "
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <div className="">Cost</div>
            <input
              type="number"
              placeholder="Enter cost"
              name="cost"
              className=" border border-black  rounded-md w-full py-2"
              onChange={(e) => setCost(e.target.value)}
            />
          </div>

          <div>
            <div className="">Description</div>
            <textarea
              rows={5}
              type="text"
              placeholder="Enter message"
              name="description"
              className=" rounded-md border border-black w-full py-2"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <div className="">Product Image</div>
            <input
              type="file"
              placeholder="Upload image "
              name="ProductImage"
              className="  rounded-md w-full border border-black "
              accept="image/*"
              onChange={(e) => uploadImage(e)}
            />

            {addonImage && (
              <img
                src={addonImage}
                alt="food"
                className="h-40 w-40 object-cover"
              />
            )}
          </div>
        </div>

        <Button 
          action='Submit'
          onClickHandler={()=>handleClick()}
          className='mx-10 px-10 mt-10 rounded-full'
          loading={loading}
        />
        
      </div>
    </Dashboard>
  );
}

export default Addon;
