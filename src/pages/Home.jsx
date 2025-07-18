import React from 'react'
import Header from '../components/Header'
import LeftSideBar from '../components/LeftSideBar'
import DailyMeals from './DailyMeals'
import GroceryList from './GroceryList'
import {Routes,Route} from 'react-router-dom'
import AddMeals from './AddMeals'

const Home = () => {
  return (
    <div className='w-full'>
        <Header/>
        <div className='flex'> 
            <aside className=' w-50 min-w-[150px] min-h-screen  border-r-5 border-yellow-600 pt-10'>
                <LeftSideBar/>
            </aside>
            <main className='flex-1'>
                <Routes>
                    <Route path='/daily-meals' element={<DailyMeals/>}/>
                    <Route path='/grocery-list' element={<GroceryList/>}/>
                    <Route path='/add-meals' element={<AddMeals/>}/>
                </Routes>
              
            </main>
        </div> 
    </div>
  )
}

export default Home