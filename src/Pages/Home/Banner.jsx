import React from 'react'
import Bannerbg from '../../../public/image/banner.png'
import VoiceImg from '../../../public/image/voiceIcon.png'
import bannerMiddle from '../../../public/image/bannerMiddle.png'
import { Link } from 'react-router-dom'

function Banner() {
  return (
   <div
  className=" bg-cover bg-center"
  style={{ backgroundImage: `url(${Bannerbg})` }}
>
  <div className=' relative flex flex-col items-center justify-center h-[calc(100vh-100px)] bg-[linear-gradient(to_bottom_left,#0C4B4000,#E0ECE940,#FFFFFF)]  text-white text-center'>
    <h1 className='text-[#168F79] font-extrabold text-7xl product italic mt-10  '>Voice Survey</h1>
    <p className='text-lg md:text-xl  leading-relaxed font-semibold text-[#637270] md:w-1/3 text-center mt-4'>Answer a few questions to help us improve our services. Your feedback matters to us!</p>
    <div className='absolute mt-26 '>
      <div className=' flex justify-center items-center '>
        <img src={VoiceImg} alt="" className='w-70 h-70 ' />
      </div>
    </div>
      <img src={bannerMiddle} className='w-full md:px-20 mt-10 ' alt="" />
    <Link to="/start_survey">
    <button className='px-14 cursor-pointer rounded-full py-3 mt-10 bg-gradient-to-t from-[#02362E] to-[#298F7D]' >Get Started</button>
    </Link>
  </div>
</div>
  )
}

export default Banner

