import React from 'react'
import Layout from '../components/Layout';
import Logo from "../images/trashscan-icon.png";

function Data() {
    return (
        <Layout>
        <div className=''
        style={{
          display: "",
          flexDirection: "",
          alignItems: "",
          backgroundColor: "",
        }}
        >
        <div className="HomeDiv w-screen justify-center mx-auto sm:max-w-sm has-text-centered has-text-white">
        <div>
            <header className="bg-yellow-300 rounded-3xl rounded-t-none pl-4 pt-4">
              <img src={Logo} alt='logo' className="TrashLogo object-contain h-16 w-20 flex pb-2 ml-72" ></img>
          </header>
        </div>
            <div class="graphs-container" data-title="Horizontal Graph">
                <div class="data-container column is-full columns is-mobile is-size-7 has-text-white is-marginless">
                    <div data-title="One" data-value="10"></div>
                    <div data-title="Two" data-value="50"></div>
                    <div data-title="Three" data-value="100"></div>
                </div>
            </div>
        </div>
        </div>
        </Layout>
    )
}

export default Data
