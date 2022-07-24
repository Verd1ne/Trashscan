import React from 'react'
import Layout from '../components/Layout';
import ProfileCard from "../components/ProfileCard"
import Person from '../images/yellowPerson.svg'
import Logo from "../images/trashscanIcon.svg";


function Profile() {
  return (
    <Layout>
    <div className='gray-900'
      style={{
        display: "",
        flexDirection: "",
        alignItems: "",
        backgroundColor: "black",
      }}
    >
      <title>TrashScan</title>
      <div className="HomeDiv w-screen justify-center mx-auto sm:max-w-sm has-text-centered has-text-white">
        <div>
          <header className="bg-yellow-300 rounded-3xl rounded-t-none pl-4 pt-4">
              <img src={Logo} alt='logo' className="TrashLogo object-contain h-16 w-20 flex pb-2 ml-72" ></img>
          </header>
        </div>
        <ProfileCard
          profilepicture={              
          <img src={Person} className="mx-auto"/>
          }
          name={
            <p>Adrian Joseph Santoso</p>
          }
          email={
            <p>AdrianJoseph@gmail.com</p>
          }
          number={
            <p>(+62)800-000-001</p>
          }
          idnumber={
            <p>000 - 001</p>
          }
        />
        <div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default Profile