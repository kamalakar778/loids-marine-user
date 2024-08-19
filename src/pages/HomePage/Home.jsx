import React from 'react'
import Navbar from '../../components/Header/Navbar.jsx'
import Header from '../../components/Header/Header.jsx'
import WhyChooseSailorsWave from '../../components/WhyChooseSailorsWave/WhyChooseSailorsWave.jsx'
import TrustedByCompanies from '../../components/TrustedByCompanies/TrustedByCompanies.jsx'
import OurServices from '../../components/OurServices/OurServices.jsx'
import OurClients from '../../components/OurClients/OurClients.jsx'
import BecomeASailor from '../../components/BecomeASailor/BecomeASailor.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import AboutUs from '../../components/AboutUs/AboutUs.jsx'

const HomePage = () => {
  return (
    <>
    <Header />
    <Navbar />
    <AboutUs />
    <WhyChooseSailorsWave/>
    <TrustedByCompanies/>
    <OurServices/>
    <OurClients/>
    <BecomeASailor/>
    <Footer/>
    </>

  )
}

export default HomePage;
