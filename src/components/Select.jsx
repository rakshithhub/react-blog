import React from 'react';
import { useId } from 'react'

const Select = ({label, options, className, ...props}, ref) => {
    const Id = useId();
  return (
    <div className="w-full">
        {label && <label htmlFor={Id} className=''></label>}

        <select id={Id} {...props} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} 
        ref={ref}>
            {
                options && options.map( (option) => (
                    <option key={option}>
                        {option}
                    </option>
                ) )
            }
        </select>
    </div>
  )
}

export default React.forwardRef(Select);