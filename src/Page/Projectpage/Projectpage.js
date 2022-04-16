import React from 'react'
import Footer from '../../components/Footer/Footer'
import './Projectpage.css'

const Projectpage = () => {
  return (
    <div className="AppPage">
        <div className="HeaderPage">
          <i className="fas fa-circle dotnav"></i>
          <i className="fas fa-circle dotnav yellow"></i>
          <i className="fas fa-circle dotnav green"></i>
        </div>
        <div className="ContainerText">
            This is the projectpage.
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
  )
}

export default Projectpage