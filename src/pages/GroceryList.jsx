import {useState} from 'react'
import bin_icon from '../assets/bin_icon.png'

const GroceryList = () => {
    const [items, setItems]=useState([])
    const [inputValue, setInputValue]=useState('')

    const onSubmitHandler=(e)=>{
      e.preventDefault()
      setItems((prev)=>[...prev,{id:Date.now().toString(), text:inputValue}])
      setInputValue('')

    }
    const removeAllList=()=>{
      setItems([])
    }
  return (
    <div className='flex flex-col justify-center items-center pt-10' >
      <div className='flex gap-4 ' >
        <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} className='border border-yellow-500 rounded p-2 cursor-pointer text-yellow-500' type='text' placeholder='Grocery Items..'/>
        <button onClick={onSubmitHandler} className='bg-yellow-500 text-gray-800 p-3 rounded cursor-pointer font-semibold'>Add Item</button>
      </div>
      <div className='relative mt-10 bg-yellow-500 text-gray-800 rounded w-70 h-60 p-4'>
        {items?.map((item,index)=>(
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