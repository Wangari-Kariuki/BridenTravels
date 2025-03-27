import React from 'react'
import './navbar.css'
import {MdTravelExplore} from 'react-icons/md'
import { IoCloseCircle } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb"
import '../../app.css'
const Navbar = () => {
  return (
    <section className='navbarSection'>
      <div className='header'>
        <div className='logoDiv'>
          <a href="#" className='logo'>
            <h1 className='flex'><MdTravelExplore className="icon"/>
            Briden </h1>

          </a>
        </div>
        
        <div className="navBar">
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


            <div className="headerbtns flex">
              <button className='btn loginBtn'>
                <a href="#" className="login">Login</a>
              </button>

              <button className='btn loginBtn'>
                <a href="#" className="login">Sign up</a>
              </button>
            </div>
          </ul>
          <div className="closeNavbar">
          <IoCloseCircle className='icon' />
          </div>
        </div>
        <div className="toggleNavbar">
        <TbGridDots  className='icon'/>

        </div>

      </div>

    </section>
  )
}

export default Navbar