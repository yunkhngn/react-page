import React from 'react'
import Footer from '../../components/Footer/Footer'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className="AppPage">
        <div className="HeaderPage">
          <i className="fas fa-circle dotnav"></i>
          <i className="fas fa-circle dotnav yellow"></i>
          <i className="fas fa-circle dotnav green"></i>
        </div>
        <div className="ContainerText">
          <h1>Sites are under constructions</h1>
          <a href="https://yunkhngn.github.io/portfolio/">Please click this for portfolio</a>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
  )
}

export default Homepage