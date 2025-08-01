import home_bg1 from '../assets/home_bg1.jpg'

const HomeBg = () => {
  return (
    <div className='w-full relative h-screen overflow-hidden flex flex-col justify-center items-center'>
        <img className='w-full h-full object-cover object-center' src={home_bg1} alt="background image"/>
        <div className='absolute bg-black/70 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-2xl w-11/12 text-center p-4  rounded'>
          <blockquote className='text-3xl italic text-yellow-500'> "Smart meal planning turns kitchen chaos into time saved  and groceries well spent"</blockquote>
        </div>
      
    </div>
  )
}

export default HomeBg