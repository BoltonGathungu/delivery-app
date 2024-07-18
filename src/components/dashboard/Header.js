import React from 'react'

const Header = () => {
  console.log(JSON.parse(localStorage.getItem('user')))
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className="mx-2 py-5 text-lg font-bold">Dashboard V2</div>
        <div className='px-5'>{user?.email}</div>
      </div>
    </div>
  )
}

export default Header
