import React from 'react';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import otpLottie from '../../assets/otpverify.json'

const OTP_Verification = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
 
      <div className="w-full bg-gray-900 md:w-1/2 h-[30vh] md:h-screen relative">
     <h1 className='text-white'>otp verificaition logo</h1>
     
      </div>


      <div className="w-full md:w-1/2 min-h-[100vh] md:h-screen relative">
       
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] md:h-screen p-8">
          <div className="w-full max-w-xl space-y-8">
          

            <form className="backdrop-blur-sm bg-white/10 p-10 mb-10 rounded-lg border border-gray-200 shadow-lg">
              <h2 className="text-3xl font-bold text-[#B28D28] mb-10 text-center">Verify your OTP</h2>
              <div className="form-control w-full mb-6">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter your OTP" 
                    className="input input-bordered border-[#B28D2866]/40 w-full pl-10 bg-white/20  text-black placeholder-gray-300" 
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>


<div className='pb-2'>
    
<Link to="/reset_password">
<button className="btn bg-[#B28D28] text-white rounded-full w-full text-base ">Next</button>
</Link>
<div className='flex mx-auto justify-center'>
<Link to="/login" className='font-semibold mt-4 text-sm  text-[#B28D28]  hover:underline'>Resend Code</Link>
</div>
</div>

            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTP_Verification;