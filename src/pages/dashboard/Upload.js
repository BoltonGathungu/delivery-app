import { useState, useEffect } from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import { addMenuItem } from "../../apis";
import { IoAddCircleOutline } from "react-icons/io5";
import { firebaseUploadImg } from "../../apis/Upload";
import { getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [name, setName] = useState();

  const [description, setDescription] = useState();
  const [cost, setCost] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [category, setCategory] = useState();
  const [restaurantName, setRestaurantName] = useState();
  const [addOns, setAddOns] = useState([]);

  const [productImage, setProductImage] = useState();
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      if (
        !name ||
        !category ||
        !restaurantName ||
        !description ||
        !cost ||
        !productImage
      ) {
        // setErrorMsg("");
        return toast.error("Please enter the required fields!");
      } else {
        console.log("adding products");
        console.log(name, category, description, restaurantName, cost);

        const res = await addMenuItem({
          name: name,
          categoryId: category,
          description: description,
          price: cost,
          restaurantName: restaurantName,
          image: productImage,
          extras: [],
        });
        toast.success("Product uploaded!");
        navigate("/dashboard/products");
        setErrorMsg("");
        console.log(res);
        if (res.status !== 201) {
          toast.error("Something went wrong!");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
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
            console.log("productImage: ", url);
            setProductImage(url);
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
          Uploading Product
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
              className=" rounded-md w-full py-2 px-3  border border-black"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="">
            <div className=" block text-sm font-medium ">Select Category</div>
            <select
              id="category"
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              autoComplete="category"
              className="mt-1 block w-full rounded-md border border-black bg-white py-2 px-3 shadow-sm  sm:text-sm"
            >
              <option value="">Select category</option>
              <option value="63ff3ae4033fe8a4e0989500">Food</option>
              <option value="640052ea68e94db42ffb8621">Beverages</option>
              <option value="646f495f5d3715d1caae1ef6">Appetizers</option>
              <option value="646f4a165d3715d1caae1efb">Fruits</option>
              <option value="646f4b27d83d3c0fdbd2d7f5">Asian Cusine</option>
              <option value="646f4aa2ef37c9089deb6352">Alcohol</option>
              <option value="646f4b71d83d3c0fdbd2d7f7">Italian Cusine</option>
              <option value="646f4b9ad83d3c0fdbd2d7f9">Healthy Options</option>
              <option value="646f4c34d83d3c0fdbd2d7fb">
                BreakFast and Brunch
              </option>
            </select>
                    
          </div>
          <div className="">
            <div className="block text-sm font-medium text-black">
              Select Restaurant
            </div>
            <select
              id="restaurant"
              name="restaurant"
              onChange={(e) => setRestaurantName(e.target.value)}
              autoComplete="restaurant"
              className="mt-1 block w-full rounded-md border border-black bg-white py-2 px-3 shadow-sm  sm:text-sm"
            >
              <option value="">Select restaurant</option>
              <option value="Educhiks">Educhiks</option>
            </select>
                    
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
              className="border border-black rounded-md w-full py-2"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <div className="">Product Image</div>
            <input
              type="file"
              placeholder="Upload image "
              name="ProductImage"
              className="  rounded-md w-full "
              accept="image/*"
              onChange={(e) => uploadImage(e)}
            />

            {productImage && (
              <img
                src={productImage}
                alt="food"
                className="h-40 w-40 object-cover"
              />
            )}
          </div>
        </div>

        <div></div>
        <button
          className=" mx-10 px-10 mt-10 bg-blue-500 rounded-full text-white "
          onClick={() => handleClick()}
        >
          Submit
        </button>
      </div>
      <ToastContainer position="top-center" />
    </Dashboard>
  );
}

export default Upload;
