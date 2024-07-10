import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'


function Dashboard({children}) {
  return (
    <div className='flex'>
        
      <Sidebar/>

      <div className='flex-grow h-screen overflow-y-scroll'>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Dashboard
