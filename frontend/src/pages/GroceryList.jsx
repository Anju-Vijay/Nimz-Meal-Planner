import {useContext, useEffect, useState} from 'react'
import bin_icon from '../assets/bin_icon.png'
import { MealContext } from '../context/MealContext'
import axios from 'axios'


const GroceryList = () => {
    const {token,backendUrl}=useContext(MealContext)
    const [inputValue, setInputValue]=useState('')
    const [groceryData,setGroceryData]=useState([])

    const onSubmitHandler=async(e)=>{
      e.preventDefault()
      try {
          const newItem = { id: Date.now().toString(), text: inputValue };
          const updatedList = [...groceryData, newItem];
          const response=await axios.post(backendUrl+"/api/grocery/add-grocery",{items: updatedList},{headers:{Authorization:`Bearer ${token}`}})
          if(response.data.success){
            console.log(response.data)
            setInputValue('')
            getGroceryList();
          }else{
            console.log(response.data.message) 
          }
      } catch (error) {
        console.log(error); 
      }
    }
    const getGroceryList=async()=>{
      try {
        const response=await axios.get(backendUrl+"/api/grocery/list-grocery",{headers:{Authorization:`Bearer ${token}`}})
        if(response.data.success){
          setGroceryData(response.data.groceryItems);
        }
      } catch (error) {
        console.log(error); 
      }
    }
    const removeAllList=async()=>{
      try {
        const response=await axios.delete(backendUrl+"/api/grocery/remove-grocery",{headers:{Authorization:`Bearer ${token}`}})
        if(response.data.success){
          console.log(response.data.message)
          setGroceryData([])
        }
      } catch (error) {
        console.log(error); 
      }
    }
    useEffect(()=>{
      if(token){
        getGroceryList()
      }
    },[token])
  return (
    <div className='flex flex-col justify-center items-center pt-10' >
      <div className='flex gap-4 ' >
        <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} className='border border-yellow-500 rounded p-2 cursor-pointer text-yellow-500' type='text' placeholder='Grocery Items..'/>
        <button onClick={onSubmitHandler} className='bg-yellow-500 text-gray-800 p-3 rounded cursor-pointer font-semibold'>Add Item</button>
      </div>
      <div className='relative mt-10 bg-yellow-500 text-gray-800 rounded w-70 h-60 p-4'>
        {groceryData?.map((item,index)=>(
        <div key={item.id} >
           <p className='font-semibold'>{index + 1}. {item.text}</p>
        </div>
         ))}
        <div className='absolute right-2 top-2'>
          <img onClick={removeAllList} className='w-4 cursor-pointer' src={bin_icon} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default GroceryList