import React, { Component } from 'react'
import Layout from '../components/Layout';
import Logo from "../images/trashscan-icon.png";
import Scanner from "../components/Scanner"
 
class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      result: 'No result',
    }
 
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    this.setState({
      result: data,
    })
  }
  handleError(err){
    console.error(err)
  }
}

function Scan() {
    return (  
        <Layout>
          <div className='ScanDiv mx-auto bg-gradient-to-b from-gray-900 to-gray-500'>
          <div>
            <header className="bg-yellow-300 rounded-3xl rounded-t-none pt-4 pl-4 sm:max-w-sm mx-auto">
                <img src={Logo} alt='logo' className="object-contain h-16 w-20 flex ml-72 pb-2" ></img>
            </header>
          </div>
          </div>
          <div>
            <Scanner/>
          </div>
          <div>
            <footer className="ScanFooter bg-black rounded-3xl rounded-b-none rounded-t-none mx-auto">
             <p className="scantext1 text-white text-2xl font-bold">
                Scan and Receive
             </p>
             <p className='scantext2 text-yellow-300 text-lg font-bold pt-2'>
                Make sure the entire QR Code is inside the yellow box to start scanning
             </p>
            </footer>
          </div>
        </Layout>
    )
}



export default Scan;