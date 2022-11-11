import React from 'react';
import Image from 'next/image';
// import {FaSearch} from 'react-icons/fa';
import logo from '../../images/sl_logo.png' 
import { useEffect, useState } from "react";
// import {Link} from 'react-router-dom'


export const NavigationBar = () => {
    // const[isScrolled, setIsScrolled] = useState(false);
    //   window.onscroll = () => {
    //     setIsScrolled(window.pageYOffset === 0 ? true: false);
    //     return () => (window.onscroll = null)
    //   }
    // <nav className={isScrolled ? "navbardefault transition ease-in duration-500 z-40 ": "navbarscrolled transition ease-out duration-500 z-40"}></nav>

    return (
    <nav className= "navbarscrolled transition ease-out duration-500 z-40">
      <div className='fixed h-[4.25rem] flex items-center    w-screen'>  
        <div className='flex justify-between w-screen items-center '> 
            <ul className='flex items-center mx-[3rem] pt-[1rem] '>
                <Image src={logo} alt='/' className='navlogo' />   
                <li className='navTextIcon mx-2 flex'>SparkLaunch </li>
                <i class="fa-solid fa-magnifying-glass  navIcon " ></i>
            </ul>
            <ul className='flex  items-center  pt-[1rem] mr-[12rem] '>
                <li className='navText px-4'>Technology</li>
                <li className='navText px 4'>Creative</li>
                <li className='navText px-4'>Community</li>
            </ul>
            <ul className='flex items-center mx-[5rem] pt-1  '>    
                <li className='navText'>Log in</li>
            </ul>
            
        </div>
      </div>
    </nav>
     
    )
}


export default NavigationBar;
