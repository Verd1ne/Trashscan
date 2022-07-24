import React from 'react'
// import Pagebg from '../images/loginpagebg.svg'
import Icon from '../images/trashscan-icon.png'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className='h-screen overflow-hidden container'>
      {/* <img src={Pagebg} alt='background' className='w-full'/> */}
      <div className='h-screen bg-white pb-12 font-semibold p-1  mx-auto'>
        <img src={Icon} alt='icon' className="object-contain h-24 w-24 mx-auto mt-12" />
        <h2 className='text-4xl text-center font-semibold text-black mt-12 mb-4'>Login</h2>
        <div className='font-semibold bg-white rounded-3xl mt-4 mb-2 mx-[40px] p-[20px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.4)]'>
          <h3 className='mb-1 font-bold text-black text-md'>Username</h3> 
          <input type='text' className='my-2 w-full rounded-full hover:border-2 focus:outline-none border-2 border-[#FFD700] pl-3 h-[35px]'/>
          <h3 className='mt-2 mb-1 font-bold text-black text-md'>Password</h3>
          <input type='password' className='w-full rounded-full hover:border-2 focus:outline-none border-2 border-[#FFD700] pl-3 h-[35px]'/>
        </div>
        <h4 className='w-full text-center text-xs text-black font-bold'>Don't have an account? <Link to="/register"> Register Now!</Link></h4>
      </div>
    </div>
  )
}