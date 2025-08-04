import Home from './pages/Home'
import { Route, Routes,Navigate } from 'react-router-dom'
import Login from './pages/Login'
import { useContext } from 'react'
import { MealContext } from './context/MealContext'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const {token} =useContext(MealContext)
  
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/*' element={token? <Home/>: <Navigate to="/login"/>}/>
        <Route path='/login' element={<Login/>}/> 
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  )
}

export default App