import {useState}from 'react'
import profile_icon from '../assets/profile_icon.png'
import menu_icon from '../assets/menu_icon.png'
import { Link,NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { MealContext } from '../context/MealContext'

const Header = () => {
  const [profileVisible, setProfileVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const {setToken,navigate} =useContext(MealContext)

  const logout=()=>{
    localStorage.removeItem('token')
    setToken(null);
    navigate('/login')
  }
  return (
    
    <div className='flex items-center justify-between bg-yellow-600 p-5'>
        {/* Logo */}
        <Link to='/' >
        <h1 className='font-bold text-2xl text-gray-800'>Nimz Meal Planner</h1>
        </Link> 
        <div className=' flex gap-2'>
          <div className='relative'>
          <img onClick={()=>setProfileVisible(prev=>!prev)} className='w-5 cursor-pointer'src={profile_icon} alt='Profile_icon'/>
          {profileVisible && (
            <div className='absolute right-1 top-9 bg-yellow-500 p-2 rounded cursor-pointer ' >
            <p onClick={logout}>Logout</p>
            </div>
          )}
          </div>
          {/* Sidebar menu for small screens*/}
          <div className='relative sm:hidden'>
          <img onClick={()=>setMenuVisible(prev=>!prev)} className='w-5 cursor-pointer'src={menu_icon} alt='menu_icon'/>
          {menuVisible && (
            <div className='absolute flex flex-col w-50 right-1 top-9 bg-yellow-500 p-4 rounded cursor-pointer ' >
            <NavLink className='p-3 shadow m-2 font-semibold' onClick={()=>setMenuVisible(false)} to='/daily-meals'>Daily Meals</NavLink>
            <NavLink className='p-3 shadow m-2 font-semibold' onClick={()=>setMenuVisible(false)} to='/grocery-list'>Grocery List</NavLink>
            <NavLink className='p-3 shadow m-2 font-semibold' onClick={()=>setMenuVisible(false)} to='/add-meals'>Add Meals</NavLink>
            </div>
          )}
          </div>
          
        </div>
    </div>
  )
}

export default Header