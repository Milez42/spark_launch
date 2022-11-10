import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img1 from '../../images/rhswebtoon.jpg';
import img2 from '../../images/cruise.jpg';
import img3 from '../../images/bionichand.jpg';
import img4 from '../../images/islandskies.jpg';
import img5 from '../../images/minipupper.jpg';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import { useEffect, useState } from "react";
import axios from "axios";
import request from "../../Request_Api";
import Home from '../../pages/home';

const MovieContainer = ({item}) => {

    return (
          < >  
            <div   className=" w-[280px] mx-[5px] h-[23rem] inline-block cursor-pointer relative rounded overflow-hidden shadow-md shadow-blue-500/40">
              <figure className="cards__item__pic-wrap"  data-category={item?.category} >
                
                <img className="w-[280px] h-[180px] object-cover block" src={'Assets/'+item?.backdrop_path}    alt="" />
              </figure>
              
              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/10 opacity-100 hover:opacity-100'></div>
  
              <ul>
                <li className='flex mt-4'>
                  <p className='mx-2 text-projnameblue'>{item?.title} </p> 
                  <p className='mx-2'>Funded {item?.funded}%</p>  
                </li>
                <li className='mx-2  static   whitespace-normal'> 
                  {item?.description}
                </li>
              </ul>
            </div> 
        </ >
    )
  }
  
  export const MovieRow= ({title, fetchURL, rowID}) => {
      const [movies, setMovies] = useState([])
  
      useEffect(()=> {
        axios.get(fetchURL).then((response)=>(
          setMovies(response.data.results)
        ))
  
      },[fetchURL]) 
  
      console.log(movies)
  
      const sliderLeft = () => {
        var slider = document.getElementById('slider' +rowID);
        slider.scrollLeft = slider.scrollLeft - 700;
      }
      const sliderRight = () => {
        var slider = document.getElementById('slider'+rowID);
        slider.scrollLeft = slider.scrollLeft + 700;
      }
  
      return (
        <div className='w-screen '>
              <h3 htmlFor="" className='flex mx-[5rem]  text-black text-[1.4rem] '>{title}</h3><br /> 
  
          <div className='relative flex items-center group w-screen'>
                <i onClick={sliderLeft} className=" z-30 fa-solid fa-chevron-left absolute left-1 text-white  ml-[0rem]  text-[2rem] bg-black/40 py-[3.2rem] px-[1rem] opacity-100 hover:opacity-100 hidden group-hover:block rounded-lg"></i>
            <div id={'slider'+ rowID} className=' px-[5rem] w-screen h-full overflow-x-scroll scrollbar-hide scroll whitespace-nowrap scroll-smooth  relative'>
              {movies.map((item, id)=>(
                <MovieContainer item={item} index = {id} />
              ))}
            </div> 
                  <i onClick={sliderRight} className=" z-30 fa-solid fa-chevron-right absolute right-0 text-white mr-[1.2rem]  text-[2rem] bg-black/40 py-[3.2rem] px-[1rem] opacity-100 hover:opacity-100 hidden group-hover:block rounded-lg"></i>
            </div>
        </div>
      )
  
  }
  
  
   export const HomeComponents = () => {
    return (
      <div className=' bg-homebackground h-full  '>
  
          <div className=''>
            <div className='grid gap-y-[2rem]  mb-[8.1rem]'>
              <MovieRow rowID="1" title="Popular Projects" fetchURL={request.requestPopular} />
              <MovieRow rowID="2" title="New Projects" fetchURL={request.requestNew} />
            </div>
          </div>
      </div>
    )
  }

function Cards() {

  const slideLeft = () => {
    var slider = document.getElementsByClassName('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideright = () => {
    var slider = document.getElementsByClassName('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (

    <div className='cards mt-[3rem]'>
        <h3 className='flex mx-[5rem]'>Launched Projects</h3>
        <div className='cards__container'>
            <div className='cards__wrapper w-screen'>
                <ul className='flex w-full px-[5rem] mb-[2rem]'>
                    <CardItem 
                    src={img1}
                    name="Refund High School"
                    text="Find out what happens to our heroine in her otherworldly experience on a school in the afterlife" 
                    label="Creative" 
                    path="/Refund-High-School"
                    funded="100"/>

                    <CardItem 
                    src={img2}
                    name="Random Cruise Ship"
                    text="Travel in a Private Cruise!" 
                    label="Community" 
                    path="/Random-Cruise-Ship"
                    funded="100"/>
                </ul>

                <ul className='flex w-full px-[5rem]'>
                    <CardItem 
                    src={img3}
                    name="Bionic Hand"
                    text="Giving a 'hand' to the amputees and the born hand-less" 
                    label="Technology" 
                    path="/Bionic-Hand"
                    funded="100"/>
                    

                    <CardItem 
                    src={img4}
                    name="PuffPals"
                    text="A wholesome life simulator game where you can collect, farm, customize and explore new lands with cute and fluffy PuffPals!" 
                    label="Creative" 
                    path="/Random-Cruise-Ship"
                    funded="100"/>

                    <CardItem 
                    src={img5}
                    name="Mini Pupper"
                    text="A mini robot puppy ready to be your companion!" 
                    label="Technology" 
                    path="/Random-Cruise-Ship"
                    funded="100"/>
                </ul>
            </div>
        </div>

    

        {/* <h3>Popular Projects</h3> */}

        {/* <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src={img1}
                    name="Refund High School (Webtoon)"
                    text="[90% FUNDED] Find out what happens to our heroine in her otherworldly experience on a school in the afterlife" 
                    label="Creative" 
                    path="/Refund-High-School"/>

                    <CardItem 
                    src={img2}
                    name="Random Cruise Ship"
                    text="[48% FUNDED] Travel in a Private Cruise!" 
                    label="Community" 
                    path="/Random-Cruise-Ship"/>

                    <CardItem 
                    src={img3}
                    name="Bionic Hand"
                    text="[82% FUNDED] Giving a 'hand' to the amputees and the born hand-less" 
                    label="Technology" 
                    path="/Bionic-Hand"/>

                    <CardItem 
                    src={img4}
                    name="PuffPals - Island Skies"
                    text="[100% FUNDED] A wholesome life simulator game where you can collect, farm, customize and explore new lands with cute and fluffy PuffPals!" 
                    label="Creative" 
                    path="/Random-Cruise-Ship"/>
                </ul>

            </div>
        </div> */}

        {/* <h3>New Projects</h3> */}
        {/* <div className='cards__container'>
            <div className='cards__wrapper'>

                <ul className='cards__items'>
                    <CardItem 
                    src={img1}
                    name="Refund High School (Webtoon)"
                    text="[90% FUNDED] Find out what happens to our heroine in her otherworldly experience on a school in the afterlife" 
                    label="Creative" 
                    path="/Refund-High-School"/>

                    <CardItem 
                    src={img2}
                    name="Random Cruise Ship"
                    text="[48% FUNDED] Travel in a Private Cruise! making sure there's no icebergs on the way." 
                    label="Community" 
                    path="/Random-Cruise-Ship"/>

                    <CardItem 
                    src={img3}
                    name="Bionic Hand"
                    text="[82% FUNDED] Giving a 'hand' to the amputees and the born hand-less" 
                    label="Technology" 
                    path="/Bionic-Hand"/>

                    <CardItem 
                    src={img4}
                    name="PuffPals - Island Skies"
                    text="[100% FUNDED] A wholesome life simulator game where you can collect, farm, customize and explore new lands with cute and fluffy PuffPals!" 
                    label="Creative" 
                    path="/Random-Cruise-Ship"/>

                </ul>

            </div>
            
        </div> */}
    </div>
  )
}

export default Cards;
