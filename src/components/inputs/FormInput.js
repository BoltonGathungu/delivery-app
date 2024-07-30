import React from 'react'

function FormInput({label, type, placeholder,name,className,onChangeHandler}) {
  return (
    <div>
        
            <div className="">{label}</div>
            <input
              type={type}
              placeholder={placeholder}
              name={name}
              className={`rounded-md w-full py-2 px-3  border border-black ${className}`}
              onChange={onChangeHandler}
            />

           
    </div>
  )
}

export default FormInput
