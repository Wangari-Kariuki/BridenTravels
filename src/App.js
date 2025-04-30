import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Destinations from './Components/Destinations/Destinations'
import About from './Components/About/About'
import Offers from './Components/Offers/Offers'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Destinations/>

    {/* <Offers/>
    <About/>
    <Blog/>
    <Footer/> */}
    </>
    
  )
}

export default App