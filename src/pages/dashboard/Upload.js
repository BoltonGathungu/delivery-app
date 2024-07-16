import { useState,useEffect } from 'react'
import Dashboard from '../../components/dashboard/Dashboard'
import { addMenuItem } from '../../apis';
import { IoAddCircleOutline } from "react-icons/io5";




function Upload() {

   
    const [name,setName] = useState();
  
    const [description,setDescription] = useState();
    const [cost, setCost] = useState();
    const [errorMsg, setErrorMsg] = useState();
    const [category,setCategory] = useState();
    const[restaurantName, setRestaurantName] = useState();
    const[addOns, setAddOns] = useState([]);
    const[addOnName, setaddOnName] = useState();
    const[addOnImage, setaddOnImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXhYYIgGj21Z614wWjeEKaY86wq2KvfG-DBA&usqp=CAU");
    const[addOnPrice, setaddOnPrice] = useState();
    const[addOnDescription, setaddOnDescription] = useState();
    const[showExtras,setShowExtras] = useState(false);

    const addAddOnItems = ()=>{
      if(addOnImage&& addOnPrice&& addOnDescription&& addOnName){
        setAddOns(prevItems=>[...prevItems, {name: addOnName, image: addOnImage,
           price: addOnPrice, description:addOnDescription}])
          }
       console.log("AddOns added", addOns)   
          
        
    }

    const handleClick = async()=> {

        try {
            // if(!name||!category||!restaurantName|| !description||!cost){
            //     setErrorMsg('Please enter the required fields')
            //    } else {
                console.log("adding products")
                console.log(name,category, description, restaurantName, cost, addOns)
               
                const res =await addMenuItem({name:name,categoryId:category,description:description,price:cost,restaurantName:restaurantName,
                    image:"https://media.istockphoto.com/id/93456512/photo/raw-chicken.jpg?s=170667a&w=0&k=20&c=wKtim21u2NQ137WDMPOT4t3wE82pePf7H0e-KcN2Bgc=", extras:addOns});
                setErrorMsg("");
                console.log(res);
            //    }
            
        } catch (error) {
          console.log(error)  
        }
      
    }
    

    useEffect  (()=> {
        console.log(name);
       
        console.log(cost)
        console.log(description)
    },[name, cost, description]);
  return (
    <Dashboard>
        <div >
       <div className='text-center mt-5 font-bold tracking-wide text-2xl '>
           Uploading Product
      </div>

      {errorMsg && <div className='text-sm text-center text-red-500'>{errorMsg}</div>}


      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-10 '>
        <div>
            <div className=''>Name</div>
            <input type='text' placeholder='Enter item name' name='ItemName' className=' border border-black rounded-md w-full py-2' 
            
            onChange={(e)=> 
                setName(e.target.value)
                
            }/>
        </div>
        <div className="">
          <div className="block text-sm font-medium text-black">
            Select Category
          </div>
          <select
            id="category"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            autoComplete="category"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm  sm:text-sm"
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
            <option value="646f4c34d83d3c0fdbd2d7fb">BreakFast and Brunch</option>
           
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
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm  sm:text-sm"
          >
            <option value="">Select restaurant</option>
            <option value="Educhiks">Educhiks</option>
          
          </select>
        </div>
        
        <div>
            <div className=''>Cost</div>
            <input type='number' placeholder='Enter cost' name='cost' className=' border border-black rounded-md w-full py-2'
            
            onChange={(e)=> 
                setCost(e.target.value)
                
            }/>
        </div>

        <div>
            <div className=''>Description</div>
            <textarea rows={5} type='text' placeholder='Enter message' name='description' className=' border border-black rounded-md w-full py-2'
            onChange={(e)=> 
                setDescription(e.target.value)
                
            }/>
        </div> 
        <div>
            <div className=''>Product Image</div>
            <input type='file' placeholder='Upload image ' name='ProductImage' className='  rounded-md w-full ' 
            
            onChange={(e)=> 
                setName(e.target.value)
                
            }/>
        </div>
      
        
       

      
        

        

      

     

      </div>

      <div className='flex justify-between'>
        <div className=''>Extras </div>
        < IoAddCircleOutline  className= "text-3xl cursor-pointer"
        onClick={()=>setShowExtras(!showExtras)}/>
        </div>

      {showExtras&& <div className='grid grid-cols-2 gap-4'>
       <div>
          <div className=''>Name</div>
          <input type='text' placeholder='Enter name' name="addOnname"
           className='border border-black rounded-md w-full py-2'
           onChange={(e)=>setaddOnName(e.target.value)} />
        </div>
        <div>
          <div className=''>Price</div>
          <input type='number' placeholder='Enter price' name="addOnprice" 
          className='border border-black rounded-md w-full py-2'
          onChange={(e)=>setaddOnPrice(e.target.value)} />
        </div>
        <div>
          <div className=''>Image</div>
          <input type='file' placeholder='Upload file' 
          name="addOnimage" className='border border-black rounded-md w-full py-2'
          onChange={(e)=>setaddOnImage(e.target.value)} />
        </div>
        <div>
            <div className=''>Description</div>
            <textarea rows={5} type='text' placeholder='Enter message' name='addOndescription' className=' border border-black rounded-md w-full py-2'
            onChange={(e)=> 
                setaddOnDescription(e.target.value)
                
            }/>
        </div>

         <div></div>
        <button className='p-2 bg-blue-500 rounded-full text-white ' 
        onClick={()=>addAddOnItems()}>addOnSave</button> 

       </div>}

       <div>
        <div>Extras added</div>
        <div>{addOns.map((addOn, index)=>
        
      <div key={index}> {addOn.name}</div>)}
      </div>
        </div>

        <div></div>
        <button className='p-2 bg-blue-500 rounded-full text-white ' 
        onClick={()=>handleClick()}>Submit</button>

      </div>

    </Dashboard>
   
  )
}

export default Upload
