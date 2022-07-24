import React from 'react'
import Layout from '../components/Layout';
import DailyTask from "../components/Dailytask"
import Logo from "../images/trashscan-icon.png";
import Card2 from "../images/displaycard1.png";

function Achievements() {
  return (
    <Layout>
    <div className='bg-gradient-to-b from-gray-900 to-gray-500'
      style={{
        display: "",
        flexDirection: "",
        alignItems: "",
        backgroundColor: "black",
      }}
    >
      <title>TrashScan</title>
      <div className="HomeDiv w-screen justify-center mx-auto sm:max-w-sm h-screen">
        <div>
          <header className="bg-yellow-300 rounded-3xl rounded-t-none pl-4 pt-4">
              <img src={Logo} alt='logo' className="TrashLogo object-contain h-16 w-20 flex pb-2 ml-72" ></img>
          </header>
        </div>
        <DailyTask/>
      </div>
      
    </div>
  </Layout>
  )
}

export default Achievements