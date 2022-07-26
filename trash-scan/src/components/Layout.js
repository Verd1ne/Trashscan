import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className='mx-auto'>
      <div>
        { children }
      </div>
      <Navbar />
    </div>
  )
}