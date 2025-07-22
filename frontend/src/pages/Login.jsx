import {useState} from 'react'

const Login = () => {
  const[currentState,setCurrentState]=useState('Login')
  const onSubmitHandler=async(e)=>{
    e.preventDefault()
  }
  return (
    <form onSubmit={onSubmitHandler} className=' flex h-screen justify-center items-center rounded max-w-[400px] m-auto '>
      <div className='flex flex-col justify-center items-center bg-neutral-900 px-10 py-2 rounded'>
        <h2 className=' font-bold text-2xl text-yellow-500'>{currentState}</h2>
        <div className='flex flex-col'>
          {currentState==='Login'?'':
          <input className='w-full mt-5 px-3 py-2 border border-yellow-500 cursor-pointer rounded-lg text-yellow-500' name="name" type="text" placeholder='Enter your name'/>
          }
          <input className='w-full mt-4 px-3 py-2 border border-yellow-500 cursor-pointer rounded-lg text-yellow-500' name="email" type="email" placeholder='Enter email' />
          <input className='w-full mt-4 px-3 py-2 border border-yellow-500 cursor-pointer rounded-lg text-yellow-500' name="password" type="password" placeholder='Enter password' />
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