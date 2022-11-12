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
    <nav className={ "navbarscrolled transition ease-out duration-500 z-40"}>
        <div className='flex justify-between w-screen'> 
            <ul className='flex items-center mx-[3rem] my-0'>
                <Image src={logo} alt='/' className='navlogo' />   
                <li className='navTextIcon mx-2 flex'>SparkLaunch </li>
                <i class="fa-solid fa-magnifying-glass  navIcon " ></i>
            </ul>
            <ul className='flex  items-center mr-[12rem] my-0'>
                <li className='navText px-4'>Technology</li>
                <li className='navText px 4'>Creative</li>
                <li className='navText px-4'>Community</li>
            </ul>
            <ul className='flex items-center mx-[5rem] my-0'>    
                <li className='navText'>Log in</li>
            </ul>
            
        </div>
    </nav>
     
    )
}


export default NavigationBar;

