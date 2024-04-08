import React from 'react'

const Button = ({children, type = "button", className, props}) => {
  return (
    <>
        <button type={type} className={`bg-pink-500 rounded-lg uppercase font-bold hover:text-pink-500 hover:bg-black duration-75 w-full py-2 mt-3 ${className}`} {...props}>{children}</button>
    </>
  )
}

export default Button