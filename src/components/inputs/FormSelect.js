const FormSelect = ({label,name,options,className, onChangeHandler}) => {


 
  return (
    <div>
      <div className='block text-sm font-medium'>{label}</div>
      <select
      id={name}
      name={name}
      onChange={onChangeHandler}
      autoComplete={name}
      className={`mt-1 block w-full rounded-md border border-black py-2 px-3 shadow-sm sm:text-sm ${className}`}>

     <option value="">Select {label.toLowerCase()}</option>
     {options.map(option=>(
        <option key={option.value} value={option.value}>
            {option.label}
        </option>
     ))}

      </select>
    </div>
  )
}

export default FormSelect
