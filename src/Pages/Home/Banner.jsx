import React from 'react'
import Bannerbg from '../../../public/image/banner.png'
import VoiceImg from '../../../public/image/voiceIcon.png'
import bannerMiddle from '../../../public/image/bannerMiddle.png'
import logo from '../../../public/image/logo.png';
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div
      className=" bg-cover bg-center"
      style={{ backgroundImage: `url(${Bannerbg})` }}
    >
      <div className='bg-[linear-gradient(to_bottom_left,#0C4B4000,#E0ECE940,#FFFFFF)]  h-[calc(100vh-7.5rem)] '>
        <div className=" px-30 pt-6  mx-auto flex justify-between items-center   ">
          <div className="flex md:items-center items-start space-x-4">
            <img src={logo} alt="Logo" className="md:h-14 h-10 w-auto" />
          </div>


        </div>
        <div className=' relative flex flex-col items-center justify-center     text-white text-center'>
          <h1 className='text-[#168F79] font-extrabold md:text-7xl text-3xl product italic mt-10  '>Voice Survey</h1>
          <p className='text-[12px] md:text-xl  leading-relaxed font-semibold text-[#637270] lg:w-1/3 px-2 md:1/2 text-center mt-4'>Answer a few questions to help us improve our services. Your feedback matters to us!</p>
          <div className='absolute bottom-24 '>
            <div className=' flex justify-center items-center '>
              <img src={VoiceImg} alt="" className='md:w-60 w-40 md:h-60 h-40 ' />
            </div>
          </div>
          <img src={bannerMiddle} className='w-full  md:mt-16 md:h-50 h-40 ' alt="" />
          <Link to="/ai_question" className='mt-10'>
            <button className='px-14 cursor-pointer rounded-full py-3   mt-10  bg-gradient-to-t from-[#02362E] to-[#298F7D]' >Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner

