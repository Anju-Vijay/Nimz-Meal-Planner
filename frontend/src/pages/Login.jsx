import {useState, useContext} from 'react'
import axios from 'axios'
import { MealContext } from '../context/MealContext'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Login = () => {
  const {backendUrl, token, setToken,navigate}=useContext(MealContext)

  const[currentState,setCurrentState]=useState('Login')
  const [name, setName]=useState('')
  const [phone, setPhone]=useState('')
  const [password, setPassword]=useState('')
  const [email, setEmail]=useState('')

  const onSubmitHandler=async(e)=>{
    e.preventDefault()
    try {
      if(currentState==='Sign Up'){
        const response=await axios.post(backendUrl+"/api/user/register",{name,phone, email,password})
        if(response.data.success){
          console.log(response.data)
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
          toast.success("Successfully registered")
        }else{
          console.log(response.data.message)
        }
      }else{
        const response=await axios.post(backendUrl+"/api/user/login",{email,password})
        if(response.data.success){
          console.log(response.data)
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
          toast.success("Successfully Login")
          }else{    
            console.log(response.data.message)  
          } 
        }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])
  return (
    <form onSubmit={onSubmitHandler} className=' flex h-screen justify-center items-center rounded max-w-[400px] m-auto '>
      <div className='flex flex-col justify-center items-center bg-neutral-900 px-10 py-2 rounded'>
        <h2 className=' font-bold text-2xl text-yellow-500'>{currentState}</h2>
        <div className='flex flex-col'>
          {currentState==='Login'?'':<>
          <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full mt-5 px-3 py-2 border border-yellow-500 cursor-pointer rounded-lg text-yellow-500' name="name" type="text" placeholder='Enter your name'/>
          <input onChange={(e)=>setPhone(e.target.value)} value={phone} className='w-full mt-5 px-3 py-2 border border-yellow-500 cursor-pointer rounded-lg text-yellow-500' name="number"  type="text" placeholder='Enter phone number'/>
          </>}
          <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full mt-4 px-3 py-2 border border-yellow-500 cursor-pointer rounded-lg text-yellow-500' name="email" type="email" placeholder='Enter email' />
          <input onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full mt-4 px-3 py-2 border border-yellow-500 cursor-pointer rounded-lg text-yellow-500' name="password" type="password" placeholder='Enter password' />
          <button className='w-full mt-4 px-3 py-2 cursor-pointer bg-yellow-500 rounded-lg font-bold text-[#222222] '>{currentState}</button>
          <div className='mt-2'>
            {currentState==='Login'? 
            <p onClick={()=>setCurrentState('Sign Up')} className='text-yellow-500 mb-4 text-[12px] cursor-pointer '>Create an account?</p>: 
            <p onClick={()=>setCurrentState('Login')} className='text-yellow-500 mb-4 text-[12px] cursor-pointer '>Already have an account?</p> }
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login