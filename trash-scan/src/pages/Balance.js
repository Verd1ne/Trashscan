import React from 'react'
import Layout from '../components/Layout';
import Card from "../components/Card"
import Logo from "../images/trashscan-icon.png";
import Card2 from "../images/displaycard1.png";

function BalanceSection() {
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
      <div className="HomeDiv w-screen justify-center mx-auto sm:max-w-sm has-text-centered has-text-white h-screen">
        <div>
          <header className="bg-yellow-300 rounded-3xl rounded-t-none pl-4 pt-4">
              <img src={Logo} alt='logo' className="TrashLogo object-contain h-16 w-20 flex pb-2 ml-72" ></img>
          </header>
        </div>
        <Card
          money={              
          <p>Rp 1.000.000</p>
          }
          points={
          <p>500</p>
          }
          name={
            <p>Adrian Joseph</p>
          }
        />
        <h5>WHY WE SHOULD RECYCLE OUR TRASH</h5>
        <div>
            <section className="LowerGradient block bg-black-500 h-96 pt-9">
              <div> 
                <img src={Card2} alt='card2' className="displaycard1 rounded-3xl object-center"></img>
              </div>

            </section>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default BalanceSection