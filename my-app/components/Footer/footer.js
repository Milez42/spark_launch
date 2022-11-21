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
            <a class="classf">About Us</a>  
            <a class="classf">Blog</a>  
            <a class="classf">Stats</a>  
            
          </div>
          <div class='footer-link-items'>
            <h2>Support</h2>
            {/* <Link to='/Help-and-Support'>Help and Support</Link>
            <Link to='/Forward-Funds'>Forward Funds</Link>
            <Link to='/Our-Rules'>Our Rules</Link> */}
            <a class="classf">Help and Support</a>  
            <a class="classf">Forward Funds</a>  
            <a class="classf">Our Rules</a>  
           
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Top Creators</h2>
            {/* <Link to='/Technology'>Technology</Link>
            <Link to='/Creative'>Creative</Link>
            <Link to='/Community'>Community</Link> */}           
            <a class="classf">Technology</a>  
            <a class="classf">Creative</a>  
            <a class="classf">Community</a>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;