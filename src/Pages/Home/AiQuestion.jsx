

"use client"

import { useState } from "react"
import { Volume2, Mic } from "lucide-react"
import Bannerbg from '../../../public/image/banner.png'
import bannerMiddle from '../../../public/image/bannerMiddle.png'
import logo from '../../../public/image/logo.png';

export default function AiQuestion() {
    const [isRecording, setIsRecording] = useState(false)

    const toggleRecording = () => {
        setIsRecording(!isRecording)
    }

    return (
        <div className="bg-cover bg-center "
            style={{ backgroundImage: `url(${Bannerbg})` }}



        >


            <div className="hidden md:block">
                <img src={bannerMiddle} className="w-full absolute px-30  bottom-38  h-50" alt="" />
            </div>

            <div className="bg-[linear-gradient(to_bottom_left,#0C4B4000,#E0ECE940,#FFFFFF)]">
                    <div className=" px-30 pt-6  mx-auto flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <img src={logo} alt="Logo" className="md:h-14 h-10 w-auto" />
                        </div>


                    </div>
                <div className=" flex flex-col justify-center items-center ">
                    {/* Progress indicator */}

                    {/* Main content */}
                    <div className=" px-4 max-w-4xl mx-auto w-full mt-10 relative space-y-4">
                        <div className="text-center ">

                            <p className="text-[#168F79] font-semibold text-xl">Question 1 of 10</p>
                        </div>
                        <button className="rounded-full absolute left-[-50px] bg-[#0C4B401A] cursor-pointer  border border-gray-200 h-12 w-12 flex items-center justify-center shadow hover:shadow-md">
                            <Volume2 className="h-5 w-5 text-[#0C4B40]" />
                        </button>
                        {/* Question section */}
                        <div className="flex items-center justify-center mb-8">


                            <div className="text-center">
                                <h1 className="text-[16px] md:text-3xl font-semibold text-gray-800 mb-2">
                                    Do you use public transportation regularly?
                                </h1>
                                <p className="text-gray-500 text-[18px]">Language: English</p>
                            </div>
                        </div>

                        {/* Transcript and Translation cards */}
                        <div className="grid md:grid-cols-2 gap-6 w-full">
                            <div className="p-6 bg-white shadow-lg min-h-[300px] rounded-lg">
                                <h3 className="text-gray-500 text-sm font-medium mb-4">Transcript</h3>
                                <div className="text-gray-300 text-center flex items-center justify-center h-32">
                                    {isRecording && <p className="text-gray-600 animate-pulse">Listening...</p>}
                                </div>
                            </div>

                            <div className="p-6 bg-white shadow-lg min-h-[300px] rounded-lg">
                                <h3 className="text-gray-500 text-sm font-medium mb-4">Translation</h3>
                                <div className="text-gray-300 text-center flex items-center justify-center h-32">
                                    {isRecording && <p className="text-gray-600 animate-pulse">Translating...</p>}
                                </div>
                            </div>
                        </div>

                        {/* Voice recording section */}

                        <div className="my-16">
                            <div className="relative flex flex-col items-center md:mt-22 md:my-0 my-10  ">


                                {/* Microphone button */}
                                <div className="relative">
                                    {isRecording && (
                                        <>
                                            <div className="absolute inset-0 rounded-full bg-emerald-400 opacity-20 animate-ping scale-150"></div>
                                            <div className="absolute inset-0 rounded-full bg-emerald-400 opacity-30 animate-pulse scale-125"></div>
                                            <div className="absolute inset-0 rounded-full bg-emerald-400 opacity-40 animate-pulse scale-110"></div>
                                        </>
                                    )}

                                    <button
                                        onClick={toggleRecording}
                                        className={`relative rounded-full md:h-22 h-18 w-18 md:w-22  transition-all duration-300 transform flex items-center justify-center cursor-pointer ${isRecording
                                            ? "bg-gradient-to-br from-[#1D8C79] to-[#03493D] shadow-2xl shadow-emerald-500/50 scale-110 hover:scale-115"
                                            : "bg-gradient-to-br from-[#1D8C79] to-[#03493D] shadow-xl shadow-gray-500/30 hover:shadow-2xl hover:shadow-gray-500/40 hover:scale-105"
                                            }`}
                                        style={{
                                            boxShadow: isRecording
                                                ? "0 0 30px rgba(16, 185, 129, 0.6), 0 0 60px rgba(16, 185, 129, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.2)"
                                                : "0 8px 25px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1)",
                                        }}
                                    >
                                        <Mic className={`h-8 w-8 text-white transition-all duration-200 ${isRecording ? "animate-pulse" : ""}`} />
                                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
                                    </button>


                                </div>
                            </div>

                            {/* Recording status */}
                            {isRecording && (
                                <div className="md:mt-6 bottom-10 text-center">
                                    <p className="text-[#03493D]  text-lg font-medium animate-pulse flex items-center justify-center gap-2">
                                        <span className="w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
                                        Recording... Tap to stop
                                        <span className="w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
                                    </p>

                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
