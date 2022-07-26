import React from 'react'
import Layout from '../components/Layout';
import Logo from "../images/trashscanIcon.svg";
import Card from "../images/card-template.png";
import Card2 from "../images/displaycard1.png";

function Home() {
  return (
    <Layout className="LowerGradient ">
      <div className=''
        style={{
          display: "",
          flexDirection: "",
          alignItems: "",
          backgroundColor: "",
        }}
      >
        <title>TrashScan</title>
        <div className="HomeDiv w-screen justify-center mx-auto sm:max-w-sm h-screen">
          <div>
            <header className="bg-yellow-300 rounded-3xl rounded-t-none pl-4 pt-4">
                <img src={Logo} alt='logo' className="TrashLogo object-contain h-16 w-20 flex pb-2 ml-72 drop-shadow-2xl" ></img>
            </header>
          </div>
          <br />
          <div>
              <section className="block bg-black-500 h-96 pt-9">
                <div> 
                  <img src={Card2} alt='card2' className="displaycard1 rounded-3xl object-center"></img>
                </div>
              </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
