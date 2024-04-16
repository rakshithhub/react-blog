import React,{useId} from "react"

const Input = React.forwardRef(function Input ({ label, className, type = "text", placeholder = "", ...props }, ref) {
    const id = useId();
  return (
    <>  
        <div className='w-full py-2'>
            <label htmlFor={id} className='text-black font-semibold uppercase inline'> {label} </label>
            <input type={type} id={id} placeholder={placeholder} className={`border-none outline-none font-semibold px-1 py-2 w-full focus:bg-gray-500 focus:text-white duration-75 rounded-lg shadow-lg ${className}`} {...props} ref={ref}/>
        </div>
    </>
  )
})
export default Input