import {useEffect, useState,useContext}from 'react'
import pushpin_icon from '../assets/pushpin_icon.png'
import axios from 'axios'
import { MealContext } from '../context/MealContext'
import { toast } from 'react-toastify'

const MealsCard = () => {
  const{token,backendUrl}=useContext(MealContext)
  
  const[meals,setMeals]=useState([])

  const getMealData=async()=>{
    try {
      const response=await axios.get(backendUrl+"/api/meals/daily-meals",{headers:{Authorization: `Bearer ${token}`}})
      if(response.data.success){
        console.log(response.data)
        setMeals(response.data.mealData)
      }else{
        console.log(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message) 
    }
  }
  useEffect(()=>{
    getMealData()
  },[])

  const weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const sortedMeals=[...meals].sort((a,b)=>
    weekDays.indexOf(a.day) - weekDays.indexOf(b.day)
  )
 
  return (
    <>
    {meals.length === 0 ? (
     <p className="text-center text-gray-600">No meals found.</p>
    ) : (
     sortedMeals.map((item)=>(
      <div key={item._id}className='flex flex-col items-center justify-center p-2 bg-yellow-500 w-55 h-40 transition-transform duration-300 hover:scale-105 overflow-auto break-words rounded text-sm'>
        <img className='w-4' src={pushpin_icon} alt='edit icon'/>
        <h2 className='font-bold'>{item.day}</h2>
        <h3 className='font-semibold'>Breakfast: <span className='font-normal'>{item.meals.breakfast}</span></h3>
        <h3 className='font-semibold'>Lunch: <span className='font-normal'>{item.meals.lunch}</span></h3>
        <h3 className='font-semibold'>Dinner: <span className='font-normal'>{item.meals.dinner}</span></h3>
      </div>
    ))
)}
    </>
  )
}

export default MealsCard