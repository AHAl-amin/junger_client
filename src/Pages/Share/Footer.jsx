import React from 'react'
import navberLogo from '../../../public/image/navberlogo.png';
function Footer() {
  return (
    <div className='bg-gradient-to-l from-[#085A4C] to-[#023129] text-white px-30 py-6 text-center flex justify-between items-center'>
      <div className='text-left'>
       <img src={navberLogo} alt="" />
      </div>
      <div className='space-x-4'>
        <a href='#imprint' className='text-white hover:underline'>Imprint</a>
        <a href='#privacy' className='text-white hover:underline'>Privacy</a>
        <a href='#contact' className='text-white hover:underline'>Contact</a>
      </div>
    </div>
  )
}

export default Footer