import React from 'react'

const Button = ({text}) => {
  return (
    <div className=''>
        <button className='text-gray-800 font-semibold bg-yellow-600 p-4 shadow- rounded'>{text}</button>
    </div>
  )
}

export default Button