import React from 'react'
import Logo from "../images/trashscan-icon.png";

export default function Header() {
  return (
    <header className="absolute bg-yellow-300 rounded-3xl rounded-t-none pt-3 ">
      <img src={Logo} alt='logo' className="object-contain h-16 w-16 flex ml-72 pb-3 drop-shadow-2xl" ></img>
    </header>
  )
}
