import React,{useEffect,useState} from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { getUser } from '../../apis'
import { useNavigate } from 'react-router-dom'



function Dashboard({children}) {
  const navigate = useNavigate();
  const [user,setUser] = useState();

  const fetchUser = async()=>{
    try {
      
      const res = await getUser();
      console.log(res);
      setUser(res?.data)


      if(res?.status !== 200 || res?.data?.role !== "admin"  ){
        navigate("/LoginUser")
      }
     



    } catch (error) {
      console.log(error);
      navigate("/LoginUser")

      
    }
  }

  useEffect(()=>{
     fetchUser();
  },[])

    

  return (
    <div className='flex'>
        
      <Sidebar/>

      <div className='flex-grow h-screen overflow-y-scroll'>
        <Header user ={user}/>
        {children}
      </div>
    </div>
  )
}

export default Dashboard
