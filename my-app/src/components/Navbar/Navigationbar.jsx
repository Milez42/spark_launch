import React from 'react';
import {FaSearch} from 'react-icons/fa';
import logo from '../../images/sl_logo.png'
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'


export const NavigationBar = () => {
    const[isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? true: false);
      return () => (window.onscroll = null)
    }

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
      setModal(!modal)
    };

    const [notif, setNotif] = useState(false)

    const toggleNotif = () => {
      setNotif(!notif)
    };


    return (
    <nav className={isScrolled ? "navbardefault transition ease-in duration-500 z-40 ": "navbarscrolled transition ease-out duration-500 z-40"}>
      <div className='fixed h-[4.25rem] flex items-center    w-screen'>  
        <div className='flex justify-between w-screen items-center '> 
            <ul className='flex items-center mx-[3rem] pt-[1rem] '>
                <img src={logo} alt="" />
                <li className=''> <Link to="/" className='navTextIcon mx-2 flex'>SparkLaunch</Link></li>
                <i class="fa-solid fa-magnifying-glass  navIcon " ></i>
            </ul>
            <ul className='flex  items-center  pt-[1rem] mr-[12rem] '>
                <li> <Link className='navText px-4'>Technology</Link></li>
                <li> <Link className='navText px 4'>Creative</Link></li>
                <li> <Link className='navText px-4'>Community</Link></li>
            </ul>
            <ul className='flex items-center mx-[5rem] pt-1  '>    
                <li> <Link className='navText'>Log in</Link></li>
            </ul>
            
        </div>
      </div>
    </nav>
     
    )
}


export default NavigationBar;

