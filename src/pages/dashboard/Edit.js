import { useState, useEffect } from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import { useProduct } from "../../store";

function Edit() {
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  const [cost, setCost] = useState();
  const [errorMsg, setErrorMsg] = useState();

  const handleClick = () => {
    if (!name || !amount || !description || !cost) {
      setErrorMsg("Please enter the required fields");
    } else {
      setErrorMsg("");
    }
  };

  const product = useProduct((state) => state.product);

  useEffect(() => {
    console.log(name);
    console.log(amount);
    console.log(cost);
    console.log(description);
  }, [name, cost, amount, description]);
  return (
    <Dashboard>
      <div>
        <div className="text-center mt-5 font-bold tracking-wide text-2xl ">
          Edit Product
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
              value={product.name}
              className=" border border-black rounded-md w-full py-2"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <div className="">Amount</div>
            <input
              type="number"
              placeholder="Enter amount"
              name="amount"
              className=" border border-black rounded-md w-full py-2"
              onChange={(e) => setAmount(e.target.value)}
            />
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

          <button
            className="p-2 bg-blue-500 rounded-full text-white "
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    </Dashboard>
  );
}

export default Edit;
