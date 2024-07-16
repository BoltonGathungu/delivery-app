import React,{useEffect,useState} from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useProduct } from "../../../store";
import { useNavigate } from "react-router-dom";
import { getCategories, deleteMenuItem } from "../../../apis";
import { useCategory, useSearchItem, useStore } from "../../../store";

function Table({ items,loading,setItems }) {
  // console.log(items);
  
  const navigate = useNavigate();

  const setProduct = useProduct((state) => state.setProduct)

  const [loadingCategory,setLoadingCategory] = useState(false);
  

  const [categories,setCategories] = useState([]);
  
  

  // const [selectedCategory, setSelectedCategory] = useState("");
  // creating an instance of the  global variables
  const updateCategoryId = useCategory((state) => state.updateCategoryId); //function 
  const categoryId = useCategory((state) => state.categoryId); //value

 const updateSearchItem = useSearchItem((state)=>state.updateSearchItem);
 const searchItem = useSearchItem((state)=>state.searchItem); 



 const updateProducts = useStore((state) => state.updateProducts)
 const products = useStore((state) => state.products)

  const deleteHandler = async (deletedItem)=>{
    if (window.confirm("Are you sure you want to delete this product?") == true) {
      console.log(deletedItem)
      try {
       
          // Remove item from products array
          const updatedProducts = items.filter(item => item._id !== deletedItem._id);
        
          // Update the products state
          setItems(updatedProducts);
        const response = await deleteMenuItem(deletedItem._id)
        console.log(response)        
      } catch (error) {
        console.log(error)
      }
    } else {
    }
  }

  const editHandler = (item)=>{
    setProduct(item)
    navigate(`/dashboard/edit/${item._id}`)
  }


  useEffect(() => {
    
    fetchCategories();
  
}, []);



const fetchCategories = async () => {
  setLoadingCategory(true);

  const res =  await getCategories();
  
   console.log(res.data.categories);

  setLoadingCategory(false);
  setCategories(res.data.categories);
};

  return (
    <div className="w-full mt-10 bg-gray-100">
      <div className="flex justify-between px-6">
      <div className=" text-lg font-semibold py-2"> items Table</div>
      <div className="flex space-x-2 p-2">
        <div>
       {!loadingCategory&& <select
          className="border border-black rounded-md"
          value={categoryId}
          onChange={(e) => {updateCategoryId(e.target.value)
               console.log(e.target.value);
          }

          }
        >
          <option value="">Choose Category</option>
          {categories.map((category,index)=>(
            <option value={category._id} key={index}>{category.name} </option>
          )
        )}
        </select> }
        </div>

        <div>
         <input type="text" name="search" placeholder="Search" className="" value={searchItem}
         
         onChange={(e)=>updateSearchItem(e.target.value)}/>

        </div>

      
        
      </div>


      </div>
     
      <table className=" w-full">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th>No.</th>
            <th>Image</th>
            <th>Name</th>
            <th>Restaurant Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        {loading?  <div className=" fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
            <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-black -py-1"></div>
          </div>:
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="text-center">{index + 1}.</td>
              <td className="flex justify-center"> <img src= {item.image[0]} alt="" className="h-10 w-10 rounded-full "/></td>
              <td className="text-center">{item.name}</td>
              <td className="text-center">{item.restaurantName}</td>
              <td className="text-center">ksh. {item.price}</td>
              <td className="flex justify-center ">
                <div className="flex items-center gap-x-2">
                  <div className="p-1 hover:bg-gray-400 rounded-full cursor-pointer " onClick={()=>editHandler(item)}>
                    <MdEdit className=" text-gray-800" />
                  </div>
                  <div className="p-1 hover:bg-gray-400 rounded-full cursor-pointer " onClick={()=>deleteHandler(item)}>
                    <MdDelete className="text-red-500" />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        
        </tbody>}
      </table>
    </div>
  );
}

export default Table;