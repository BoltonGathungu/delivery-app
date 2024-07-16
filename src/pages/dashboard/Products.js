import React, { useState, useEffect } from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import { IoIosSettings } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import Table from "../../components/dashboard/products/Table";
import { getMenuItems,getMenuItemsByCategoryId,searchMenuItem } from "../../apis";
import { useStore,useCategory,useSearchItem } from "../../store";




export default function Products() {
  const [loading, setLoading] = useState(false);
  const [items , setItems] = useState([])

const categoryId = useCategory((state) => state.categoryId);
const searchItem = useSearchItem((state)=>state.searchItem);
const updateProducts = useStore((state) => state.updateProducts)
const products = useStore((state) => state.products)
  
useEffect(()=>{
     updateProducts(items.length);

   

  },[items]);


  useEffect(() => {
   
     if(categoryId && categoryId.length >0){
      fetchDataByCategoryId();

     } else{
      fetchData();
     }
    
    
  }, [categoryId,searchItem]);



  const fetchData = async () => {
    setLoading(true);

    const res =  await searchMenuItem(searchItem);
    
     console.log(res.data.menuItemsResults);
 
    setLoading(false);
    setItems(res.data.menuItemsResults);
  };
 
  const fetchDataByCategoryId = async () => {
    setLoading(true);

    const res =  await getMenuItemsByCategoryId(categoryId);
    
     console.log(res.data.menuItems);
 
    setLoading(false);
    setItems(res.data.menuItems);
  };

 
  return (
    <Dashboard>
      <div className="bg-gray-100 h-screen w-full">

        <div className="flex space-x-10 mx-2 ">
        <div className="border flex bg-white items-center gap-x-4 flex-grow rounded-md shadow-md">
            <div className="p-2 bg-[#15A1BC] text-white rounded-tl-md rounded-bl-md">
              <FaShoppingCart className="text-2xl" />
            </div>
            <div className="text-center">Buy Food From Us</div>
          </div>
          <div className={products>5?"border flex bg-white items-center gap-x-4 flex-grow rounded-md shadow-md": "border flex bg-red-500 text-white items-center gap-x-4 flex-grow rounded-md shadow-md"}>
            <div className="p-2 bg-[#15A1BC] text-white rounded-tl-md rounded-bl-md">
              <IoIosSettings className="text-2xl" />
            </div>
            <div className="text-center">Settings</div>
          </div>
          <div className="border flex bg-white items-center gap-x-4 flex-grow rounded-md shadow-md">
            <div className="p-2 bg-[#15A1BC] text-white rounded-tl-md rounded-bl-md">
              <AiFillLike className="text-2xl" />
            </div>
            <div className="text-center">Like Us</div>
          </div>
        </div>
        <Table items={items} loading={loading} setItems={setItems} />
      </div>
    </Dashboard>
  );
}