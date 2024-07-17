import { useState, useEffect } from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import { addMenuItem } from "../../apis";

function Upload() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [cost, setCost] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [category, setCategory] = useState();
  const [restaurantName, setRestaurantName] = useState();
  const [addOns, setAddOns] = useState([]);
  const [addOnName, setAddOnName] = useState();
  const [addOnImage, setAddOnImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXhYYIgGj21Z614wWjeEKaY86wq2KvfG-DBA&usqp=CAU");
  const [addOnPrice, setAddOnPrice] = useState();
  const [addOnDescription, setAddOnDescription] = useState();

  const addAddOnItems = ()=>{
    if(addOnImage|| addOnPrice&& addOnDescription&& addOnName){
      setAddOns(prevItems=>[...prevItems, {name: addOnName, image: addOnImage, price:addOnPrice, description:addOnDescription}])
    }
    console.log('AddOns Added', addOn)
  }

  const handleClick = async () => {
    try {
      if (!name || !description || !cost || category || restaurantName) {
        setErrorMsg("Please enter the required fields");
      } else {
        console.log("addign products");
        const res = await addMenuItem({
          name: name,
          categoryId: category,
          description: description,
          price: cost,
          restaurantName: restaurantName,
          image:
            "https://media.istockphoto.com/id/93456512/photo/raw-chicken.jpg?s=170667a&w=0&k=20&c=wKtim21u2NQ137WDMPOT4t3wE82pePf7H0e-KcN2Bgc=",
        });
        setErrorMsg("");
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(name);
    console.log(cost);
    console.log(description);
  }, [name, cost, description]);
  return (
    <Dashboard>
      <div>
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
              className=" border border-black rounded-md w-full py-2"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="">
            <div className="block text-sm font-medium text-black">
              Select Category
            </div>
            <select
              id="currency"
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              autoComplete="category"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm"
            >
              <option value="">Select currency</option>
              <option value="63ff3ae4033fe8a4e0989500">Food</option>
              <option value="640052ea68e94db42ffb8621">Beverages</option>
              <option value="646f495f5d3715d1caae1ef6">Appetizers</option>
              <option value="646f4a165d3715d1caae1efb">Fruits</option>
              <option value="646f4aa2ef37c9089deb6352">Alcohol</option>
              <option value="646f4b27d83d3c0fdbd2d7f5">Asian Cuisine</option>
              <option value="646f4b71d83d3c0fdbd2d7f7">Italian Cuisine</option>
              <option value="646f4b9ad83d3c0fdbd2d7f9">Healthy Options</option>
              <option value="646f4c34d83d3c0fdbd2d7fb">
                Breakfast and Brunch
              </option>
            </select>
          </div>

          <div className="">
            <div className="block text-sm font-medium text-black">
              Select Category
            </div>
            <select
              id="currency"
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              autoComplete="category"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm"
            >
              <option value="">Select Restaurant</option>
              <option value="educhicks">EduChicks</option>
            </select>
          </div>

          <div>
            <div className="">Cost</div>
            <input
              type="number"
              placeholder="Enter cost"
              name="cost"
              className=" border border-black rounded-md w-full py-2"
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
              className=" border border-black rounded-md w-full py-2"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <div className="">Product Image</div>
            <input
              type="file"
              placeholder="Upload Image"
              name="Product Image"
              className="rounded-md w-full"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <div className="">Extras</div>
          </div>

          <div>
            <div>Name</div>
            <input
              type="text"
              placeholder="Enter name"
              name="addOnname"
              className=""
              onChange={(e) => setAddOnName(e.target.value)}
            />
          </div>
          <div>
            <div>Price</div>
            <input
              type="text"
              placeholder="Enter name"
              name="addOnPrice"
              className=""
              onChange={(e) => setAddOnPrice(e.target.value)}
            />
          </div>
          <div>
            <div>Image</div>
            <input
              type="file"
              placeholder="Upload file"
              name="addOnImage"
              className=""
              onChange={(e) => setAddOnImage(e.target.value)}
            />
          </div>
          <div>
            <div className="">Description</div>
            <textarea
              rows={5}
              type="text"
              placeholder="Enter message"
              name="description"
              className=" border border-black rounded-md w-full py-2"
              onChange={(e) => setAddOnDescription(e.target.value)}
            />
          </div>

          <button
            className="p-2 bg-blue-500 rounded-full text-white "
            onClick={() => addAddOnItems()}
          >
            Save Extras
          </button>

          <div>
            <div>Extras Added</div>
            <div></div>
          </div>

          <button
            className="p-2 bg-blue-500 rounded-full text-white "
            onClick={() => handleClick()}
          >
            Submit
          </button>
        </div>
      </div>
    </Dashboard>
  );
}

export default Upload;
