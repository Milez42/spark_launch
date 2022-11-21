import React, { useState, useEffect } from 'react'; 
import Footer from '../../components/Footer/footer'
import { NavigationBar } from '../../components/Navbar/Navigationbar';
import img1 from '../../images/minipupper.jpg';
import Image from 'next/image';



function ProjectPage () {

  return (
    <>
        <NavigationBar/>
        <br/> <br/> <br/> <br/>

        <h1></h1>
        <div class="Container">
         <div class="left-side">
         <Image src={img1} width="1200"/>

          <div class="left-container">

            <div class="sample">Image</div>
            <div class="sample2">Image</div>
            <div class="sample3">Image</div>

          </div>
        </div>

      <div class="right-side">

        <br/>

        <h2>Mini Pupper</h2>
        <br/>
        <h3>Technology</h3>
        <br/> <br/> <br/>
        <p className='description'>A mini robot puppy ready to be your companion!</p>

          <br/>

        <h4>Goal $10,000</h4>
        <p>Fund Raised $10,000</p>

         <br/>

        <h4>80</h4>
        <p>People have donated to this project</p> <br/><br/>

        <a className='button2'>DONATE TO THIS PROJECT</a>

      </div>

      <div class='abstract'>

        <h2>Abstract</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra ipsum at rutrum
           suscipit. Ut imperdiet volutpat purus. Morbi sed urna id tortor rhoncus bibendum finibus
           at dolor. Etiam nisi lorem, mollis vel semper ac, bibendum vel sem. Vestibulum auctor
           libero lectus, a semper elit pretium dignissim. Aliquam a enim ex. Mauris ut aliquam 
           augue. Donec lacinia, sapien sed efficitur faucibus, eros libero ultrices purus, ac 
           dignissim turpis orci ac purus.</p>

        <p>Fusce commodo nibh sit amet massa vehicula, eu molestie dui fermentum. Donec et nisi posuere,
           lacinia nibh nec, scelerisque odio. Pellentesque vitae vestibulum diam. Sed iaculis sem et 
           orci porttitor sagittis. Mauris id bibendum tellus, aliquet luctus lorem. Nam at viverra eros.
           In lorem magna, dignissim vitae ante vel, rhoncus dignissim felis. Maecenas tortor ante, 
           viverra id felis ut, iaculis fermentum neque. Quisque eu laoreet lectus.</p>

        <p>Nulla non tortor eu mi commodo vestibulum sit amet sit amet lorem. Nulla elementum vulputate
           odio. Fusce vitae massa ligula. Aliquam a auctor diam, vehicula tempus risus. Nunc semper, 
           leo ut ultricies auctor, quam justo vestibulum quam, vel posuere lacus nibh sed nibh. Praesent 
           posuere purus a luctus ullamcorper. Etiam sit amet ante dapibus, luctus risus sit amet, varius 
           ex. Cras molestie elit orci, vitae convallis dui venenatis eu. Morbi ac sodales metus, ac 
           eleifend enim.</p>

            </div>

           </div>

        <div
          style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '10vh'
          }}
        >
        </div>

        <Footer />
    </>
  );
}

export default ProjectPage;