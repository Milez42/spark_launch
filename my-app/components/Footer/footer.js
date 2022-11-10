import React from 'react';
function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About</h2>
            {/* <Link to='/About-Us'>About Us</Link>
            <Link to='/Blog'>Blog</Link>
            <Link to='/Stats'>Stats</Link> */}
            <li>About Us</li>  
            <li>Blog</li>  
            <li>Stats</li>  
            
          </div>
          <div class='footer-link-items'>
            <h2>Support</h2>
            {/* <Link to='/Help-and-Support'>Help and Support</Link>
            <Link to='/Forward-Funds'>Forward Funds</Link>
            <Link to='/Our-Rules'>Our Rules</Link> */}
            <li>Help and Support</li>  
            <li>Forward Funds</li>  
            <li>Our Rules</li>  
           
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Top Creators</h2>
            {/* <Link to='/Technology'>Technology</Link>
            <Link to='/Creative'>Creative</Link>
            <Link to='/Community'>Community</Link> */}           
            <li>Technology</li>  
            <li>Creative</li>  
            <li>Community</li>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;