import React from "react";  
import { Carousel } from 'react-bootstrap'; 
import Banner1 from '../../images/autism foundation.jpeg';
import Banner2 from '../../images/save cordillera.jpg';
import Banner3 from '../../images/home for dogs.jpg';
import Image from 'next/image';
import Link from 'next/link';

function Banner() {
    return (
      <Carousel>
        <Carousel.Item interval={5000}>
          <Link href="/projectpage">
           <div className="w-full h-[23rem]">
              <div className="absolute w-full h-full bg-black/40"></div>
              <Image
               className="d-block w-full object-cover"
               src={Banner1}
               style={{'height':"23rem"}}
              />
           </div>
          </Link>
          <Carousel.Caption>
            <h3 className="flex">Autism Foundation</h3>
            <p className="flex"> 95% FUNDED - vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <Link href="/projectpage">
           <div className="w-full h-[23rem]">
              <div className="absolute w-full h-full bg-black/40"></div>
              <Image
               className="d-block w-full object-cover"
               src={Banner2}
                style={{'height':"23rem"}}
              />
           </div>
           </Link>
          <Carousel.Caption>
            <h3 className="flex" >Cordillera Reforestation Project</h3>
            <p className="flex">76% FUNDED - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  interval={5000}>
        <Link href="/projectpage">
           <div className="w-full h-[23rem]">
              <div className="absolute w-full h-full bg-black/40"></div>
              <Image
               className="d-block w-full object-cover"
               src={Banner3}
                style={{'height':"23rem"}}
              />
           </div>
           </Link>
          <Carousel.Caption>
            <h3 className="flex">Home for Dogs Charity</h3>
            <p className="flex">91% FUNDED - Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Banner;