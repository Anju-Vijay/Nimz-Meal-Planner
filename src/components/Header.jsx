import React from 'react'
import profile_icon from '../assets/profile_icon.png'

const Header = () => {
  return (
    <div className='flex items-center justify-between bg-yellow-500 p-5'>
        <h1 className='font-bold text-2xl text-gray-800'>Nimz Meal Planner</h1>
        <img className='w-5'src={profile_icon} alt=''></img>
    </div>
  )
}

export default Header