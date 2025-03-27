import React , {useState} from 'react'
import './navbar.css'
import {MdTravelExplore} from 'react-icons/md'
import { IoCloseCircle } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb"
import '../../app.css'
const Navbar = () => {
//code to toggle/show navbar
  const[activate, setActivate] = useState('navBar')
  const showNav = () => {
    setActivate('navBar activeNavbar')
  }

//code to remove NAVBAR

const removeNav = () => {
  setActivate('navBar')
}


  return (
    <section className='navbarSection'>
      <div className='header'>
        <div className='logoDiv'>
          <a href="#" className='logo'>
            <h1 className='flex'><MdTravelExplore className="icon"/>
            Briden </h1>

          </a>
        </div>
        
        <div className={activate}>
          <ul className='navLists flex'>
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Products</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Resources</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Contacts</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Blog</a>
            </li>


            <div className='headerBtns flex'>
              <button className='btn loginBtn'>
                <a href="#" className="login">Login</a>
              </button>

              <button className='btn SignupBtn'>
                <a href="#" className="login">Sign up</a>
              </button>
            </div>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
          <IoCloseCircle className='icon' />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
        <TbGridDots  className='icon'/>

        </div>

      </div>

    </section>
  )
}

export default Navbar