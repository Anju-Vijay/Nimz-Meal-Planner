import React from 'react'
import Button from './Button'

const LeftSideBar = () => {
  return (
    <div className='flex flex-col border-r-5 border-yellow-500  gap-4 pl-5 pt-10 w-50 h-[85vh] '>
        <Button text="Daily Meals"/>
        <Button text="Grocery List"/>
    </div>
  )
}

export default LeftSideBar