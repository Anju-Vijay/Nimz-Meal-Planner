import {useState}from 'react'
import profile_icon from '../assets/profile_icon.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { MealContext } from '../context/MealContext'

const Header = () => {
  const[visible,setVisible]=useState(false)
  const {setToken,navigate} =useContext(MealContext)

  const logout=()=>{
    localStorage.removeItem('token')
    setToken(null);
    navigate('/login')
  }
  return (
    
    <div className='flex items-center justify-between bg-yellow-600 p-5'>
        <Link to='/' ><h1 className='font-bold text-2xl text-gray-800'>Nimz Meal Planner</h1></Link> 
        <div className='relative'>
          <img onClick={()=>setVisible(prev=>!prev)} className='w-5 cursor-pointer'src={profile_icon} alt='Profile_icon'/>
          {visible && (
            <div className='absolute right-1 top-7 bg-yellow-500 p-2 rounded cursor-pointer ' >
            <p onClick={logout}>Logout</p>
          </div>
        )}
          
        </div>
    </div>
  )
}

export default Header