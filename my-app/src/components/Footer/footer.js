import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About</h2>
            <Link to='/About-Us'>About Us</Link>
            <Link to='/Blog'>Blog</Link>
            <Link to='/Stats'>Stats</Link>
            
          </div>
          <div class='footer-link-items'>
            <h2>Support</h2>
            <Link to='/Help-and-Support'>Help and Support</Link>
            <Link to='/Forward-Funds'>Forwards Funds</Link>
            <Link to='/Our-Rules'>Our Rules</Link>
           
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Top Creators</h2>
            <Link to='/Technology'>Technology</Link>
            <Link to='/Creative'>Creative</Link>
            <Link to='/Community'>Community</Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;