import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import OptionTab from '../../components/OptionTab/OptionTab'
import ShowMap from '../../components/ShowMap/ShowMap'

const Home = () => {
  return (
    <div className='h-screen overflow-y-scroll ease-in duration-300'>
        <Navbar/>
        <OptionTab/>
        <ShowMap/>
        <Footer/>
    </div>
  )
}

export default Home