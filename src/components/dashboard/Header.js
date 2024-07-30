import React from 'react'
import { CiLogout } from "react-icons/ci";
import { logout } from '../../apis';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate();

  const getLogoutUser = async()=>{
    try {
      const res = await logout();
      console.log(res);
      navigate("/LoginUser")
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div >
      <div className='flex items-center justify-between'>
        <div className="mx-2 py-5 text-lg font-bold">Dashboard V2</div>
        <div className='flex items-center space-x-5 mr-5'>
        <div className=''>{props?.user?.email}</div>
        <div  onClick={getLogoutUser} className='cursor-pointer hover:text-red-500 p-1'  >
          <CiLogout/>
        </div>
        </div>

       
      </div>
    </div>
  )
}

export default Header
