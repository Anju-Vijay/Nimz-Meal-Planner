import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({text, path='/'}) => {
  return (
    <div className=''>
        <NavLink to={path}>
        <button className='text-gray-800 font-semibold bg-yellow-500 p-4 min-w-[120px] cursor-pointer rounded'>{text}</button>
        </NavLink>
    </div>
  )
}

export default Button