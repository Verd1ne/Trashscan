import React from 'react'
import { Link } from "react-router-dom";
// import Banner from '../images/ts-banner.png';

function Regis(){
    return(
    <div className='h-screen overflow-hidden container'>
      {/* <img src={Pagebg} alt='background' className='w-full'/> */}
      <div className='h-screen bg-white pb-12 font-semibold p-10 lg:p-16 lg:px-[48px] xl:px-[60px] w-4/5 mx-auto'>
        {/* <img src={Icon} alt='icon' className="object-contain h-24 lg:h-36 xl:h-[160px] w-24 lg:w-36 xl:w-[160px]  mx-auto mt-12" /> */}
        <h2 className='text-4xl lg:text-5xl xl:text-6xl text-left lg:text-center font-semibold ml-12 lg:ml-0 text-black mt-12 mb-8 lg:mb-12'>Register</h2>
        <div className='font-semibold bg-white rounded-3xl mt-4 mb-2 mx-[40px] p-[35px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.4)]'>
          <h3 className='mb-3 lg:mb-[24px] xl:mb-[32px] font-bold text-black text-md md:text-lg lg:text-xl xl:text-2xl'>Username</h3> 
          <input type='text' className='my-2 md:my-[16px] lg:my-[24px] xl:my-[32px] w-full rounded-full hover:border-2 focus:outline-none border-2 border-[#FFD700] pl-3 h-[35px]'/>
          <h3 className='mt-4 mb-3 lg:mb-[24px] xl:mb-[32px] font-bold text-black text-md md:text-lg lg:text-xl xl:text-2xl'>Email</h3> 
          <input type='email' className='my-2 md:my-[16px] lg:my-[24px] xl:my-[32px] w-full rounded-full hover:border-2 focus:outline-none border-2 border-[#FFD700] pl-3 h-[35px]'/>
          <h3 className='mt-4 mb-3 font-bold text-black text-md md:text-lg lg:text-xl xl:text-2xl'>Password</h3>
          <input type='password' className='w-full rounded-full hover:border-2 focus:outline-none border-2 border-[#FFD700] pl-3 h-[35px]'/>
          <h3 className='mt-4 mb-3 font-bold text-black text-md md:text-lg lg:text-xl xl:text-2xl'>Confirm Password</h3>
          <input type='password' className='w-full rounded-full hover:border-2 focus:outline-none border-2 border-[#FFD700] pl-3 h-[35px]'/>
        </div>
        <div className='ml-0 mr-auto place-content-end'>
            <button className=' mt-6 animate-bounce rounded-2xl bg-[#FFEC44] py-3 px-5'>
                <Link to='/' className="text-center text-xl text-black mt-3">Continue</Link>
            </button> 
        </div>
        

        
      </div>
    </div>
    )
}

export default Regis;