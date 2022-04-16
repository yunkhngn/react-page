import React from 'react'
import Footer from '../../components/Footer/Footer'
import './Picturepage.css'

const Picturepage = () => {
  return (
    <div className="AppPage">
        <div className="HeaderPage">
          <div className="dotnav"/>
          <div className="dotnav yellow"/>
          <div className="dotnav green"/>
        </div>
        <div className="ContainerText">
            This is the Picturepage.
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
  )
}

export default Picturepage