import { useState, useEffect } from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import { addCategory } from "../../apis";
import { IoAddCircleOutline } from "react-icons/io5";
import { firebaseUploadImg } from "../../apis/Upload";
import { getDownloadURL } from "firebase/storage";

function Categories() {
  const [name, setName] = useState();

  const [description, setDescription] = useState();
  const [errorMsg, setErrorMsg] = useState();

  const [categoryImage, setCategoryImage] = useState();

  const handleClick = async () => {
    try {
      // if(!name||!category||!restaurantName|| !description||!cost){
      //     setErrorMsg('Please enter the required fields')
      //    } else {
      console.log("adding a new category");
      console.log(name, description);

      const res = await addCategory({
        name: name,
        description: description,
        image: categoryImage,
      });
      setErrorMsg("");
      console.log(res);
      //    }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(name);
    console.log(description);
  }, [name, description]);

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
            console.log("Category Image: ", url);
            setCategoryImage(url);
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
          Add Category
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
            <div className="">Category Image</div>
            <input
              type="file"
              placeholder="Upload image "
              name="categoryImage"
              className="  rounded-md w-full border border-black "
              accept="image/*"
              onChange={(e) => uploadImage(e)}
            />

            {categoryImage && (
              <img
                src={categoryImage}
                alt="food"
                className="h-40 w-40 object-cover"
              />
            )}
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
          
        </div>

        <button
          className=" mx-10 px-10 mt-10 bg-blue-500 rounded-full text-white "
          onClick={() => handleClick()}
        >
          Submit
        </button>
      </div>
    </Dashboard>
  );
}

export default Categories;
