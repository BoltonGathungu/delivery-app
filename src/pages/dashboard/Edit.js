import { useState, useEffect } from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import { useProduct } from "../../store";
import { useParams } from 'react-router-dom';
import { getMenuItem } from "../../apis";
import { updateMenuItem } from "../../apis";

function Edit() {
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  const [cost, setCost] = useState();
  const [errorMsg, setErrorMsg] = useState();
  let {id } = useParams();
  console.log(id);
  const fetchProduct = async () => {
      try {
        const res =await getMenuItem(id)
        console.log(res)
        setName(res?.data?.menu?.name)
        setCost(res?.data?.menu?.price)
        setDescription(res?.data?.menu?.description)
      } catch (error) {
        console.log(error)
      }
  
  }
  const updateProductItem= async() =>{
    try {
      
    } catch (error) {
      
    }
  }
  useEffect(()=>{fetchProduct()},[])
  const handleClick = () => {
    if (!name || !amount || !description || !cost) {
      setErrorMsg("Please enter the required fields");
    } else {
      setErrorMsg("");
    }
  };

  const product = useProduct((state) => state.product);

  
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
              value={name}
              className=" border border-black rounded-md w-full py-2"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          
          <div>
            <div className="">Cost</div>
            <input
              type="number"
              placeholder="Enter cost"
              name="cost"
              value={cost}
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
              value={description}
              className=" border border-black rounded-md w-full py-2"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button
            className="p-2 bg-blue-500 rounded-full text-white "
            onClick={()=>updateMenuItem()}
          >
            Submit
          </button>
        </div>
      </div>
    </Dashboard>
  );
}

export default Edit;
