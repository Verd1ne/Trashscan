import React from 'react'
import { Link } from "react-router-dom";
// import Banner from '../images/ts-banner.png';

function Regis(){
    return(
    <div className='h-screen overflow-hidden container'>
      {/* <img src={Pagebg} alt='background' className='w-full'/> */}
      <div className='h-screen bg-white pb-12 font-semibold p-2 mx-auto'>
        {/* <img src={Icon} alt='icon' className="object-contain h-24 lg:h-36 xl:h-[160px] w-24 lg:w-36 xl:w-[160px]  mx-auto mt-12" /> */}
        <h2 className='text-4xl text-center font-semibold text-black mt-12 mb-8'>Register</h2>
        <div className='font-semibold bg-white rounded-3xl mt-4 mb-2 mx-[40px] p-[35px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.4)]'>
          <h3 className='mb-1 font-bold text-black text-md m'>Username</h3> 
          <input type='text' className='my-2 w-full rounded-full hover:border-2 focus:outline-none border-2 border-[#FFD700] pl-3 h-[35px]'/>
          <h3 className='mt-2 mb-1 font-bold text-black text-md '>Email</h3> 
          <input type='email' className='my-2 w-full rounded-full hover:border-2 focus:outline-none border-2 border-[#FFD700] pl-3 h-[35px]'/>
          <h3 className='mt-4 mb-3 font-bold text-black text-md '>Password</h3>
          <input type='password' className='w-full rounded-full hover:border-2 focus:outline-none border-2 border-[#FFD700] pl-3 h-[35px]'/>
          <h3 className='mt-4 mb-3 font-bold text-black text-md'>Confirm Password</h3>
          <input type='password' className='w-full rounded-full hover:border-2 focus:outline-none border-2 border-[#FFD700] pl-3 h-[35px]'/>
        </div>
        <div className='w-screen ml-20'>
            <button className=' mt-6 animate-bounce rounded-2xl bg-[#FFEC44] py-3 px-5'>
                <Link to='/' className="text-center text-xl text-black mt-3">Continue</Link>
            </button> 
        </div>
        

        
      </div>
    </div>
    )
}

export default Regis;