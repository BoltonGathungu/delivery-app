import React from 'react'
import Sidebar from './Sidebar'


function Dashboard({children}) {
  return (
    <div className='flex'>
        
      <Sidebar/>

      <div className='flex-grow h-screen overflow-y-scroll'>
        {children}
      </div>
    </div>
  )
}

export default Dashboard
