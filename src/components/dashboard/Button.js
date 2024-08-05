import React from 'react'

function Button({ type, action, onClickHandler, className, loading }) {
  return (
    <button
      type={type}
      className={`bg-blue-600 text-white hover:bg-blue-700 ${className}`}
      onClick={onClickHandler}>
        {loading ? (
          <div className=" flex justify-center items-center">
          <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-white -py-1"></div>
        </div>
        ) : 
          "This is a Button"
        }
    </button>
  )
}

export default Button
