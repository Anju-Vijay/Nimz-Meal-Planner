import React from 'react'
import edit_icon from '../assets/edit_icon.png'
import pushpin_icon from '../assets/pushpin_icon.png'

const MealsCard = () => {
  return (
    <div className='flex flex-col items-center p-2 bg-yellow-500 w-50 h-35 rounded text-sm'>
        <img className='w-4' src={pushpin_icon} alt='edit icon'/>
        <h2 className='font-bold'>Sunday</h2>
        <h3 className='font-semibold'>Brakfast: <span className='font-normal'>Sanwitch</span></h3>
        <h3 className='font-semibold'>Lunch: <span className='font-normal'>Pulav</span></h3>
        <h3 className='font-semibold'>Dinner: <span className='font-normal'>Chapathi+kadala</span></h3>
        <div>
            <img className='w-4 mt-3 cursor-pointer' src={edit_icon} alt='edit icon'/>
        </div>
    </div>
  )
}

export default MealsCard