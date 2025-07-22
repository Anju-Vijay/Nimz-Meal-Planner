import React from 'react'
import Button from './Button'

const LeftSideBar = () => {
  return (
    <div className='flex flex-col gap-4 pl-5'>
        <Button text="Daily Meals" path='/daily-meals'/>
        <Button text="Grocery List" path='/grocery-list'/>
        <Button text="Add Meals" path='/add-meals'/>
    </div>
  )
}

export default LeftSideBar