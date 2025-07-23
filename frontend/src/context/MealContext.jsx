import { createContext,useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom';



export const MealContext=createContext()

const MealContextProvider = (props) => {
  
  const navigate=useNavigate();
  const backendUrl= import.meta.env.VITE_BACKEND_URL

  const [token,setToken]=useState('')

   useEffect(()=>{
      if(!token && localStorage.getItem('token')){
          setToken(localStorage.getItem('token'))
      }
     },[])

     const value={token, setToken, backendUrl, navigate}
  return (
    <MealContext.Provider value={value}>
      {props.children}
    </MealContext.Provider>
  )
}

export default MealContextProvider