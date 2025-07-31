import home_bg1 from '../assets/home_bg1.jpg'

const HomeBg = () => {
  return (
    <div className='w-full h-screen overflow-hidden flex justify-center'>
        <img className='w-full h-full object-cover object-center' src={home_bg1} alt="background image"/>
    </div>
  )
}

export default HomeBg