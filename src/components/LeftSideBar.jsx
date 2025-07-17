import React from 'react'
import Button from './Button'

const LeftSideBar = () => {
  return (
    <div className='flex flex-col gap-4 pl-5'>
        <Button text="Daily Meals"/>
        <Button text="Grocery List"/>
    </div>
  )
}

export default LeftSideBar