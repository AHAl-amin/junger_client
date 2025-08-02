import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Share/Navbar'
import Footer from '../Pages/Share/Footer'

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-t from-[#0C4B4000] via-[#E0ECE940] to-[#FFFFFF]">
      {/* Navbar */}
      {/* <div className="">
        <Navbar />
      </div> */}

      {/* Main content area */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <div className="">
        <Footer />
      </div>
    </div>

  )
}

export default Main
