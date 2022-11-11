import React from 'react'; 
// import './Cards.css'; 
import { useEffect, useState } from "react";
import axios from "axios"; 
import request from "../../Request_Api"; 

const MovieContainer = ({item}) => {

    return (
          < >  
            <div   className=" w-[280px] mx-[5px] h-[23rem] inline-block cursor-pointer relative rounded overflow-hidden shadow-md shadow-blue-500/40">
              <figure className="cards__item__pic-wrap"  data-category={item?.category} >
                
                <img className="w-[280px] h-[180px] object-cover block" src={'Assets/'+item?.backdrop_path}    alt="" />
              </figure>
              
              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/10 opacity-100 hover:opacity-100'></div>
  
              <ul>
                <li className='flex mt-4 px-4'>
                  <p className='mx-2 text-projnameblue'>{item?.title} </p> 
                  <p className='mx-2'>Funded {item?.funded}%</p>  
                </li>
                <li className='mx-2 p-4 static   whitespace-normal'> 
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
  
const PopNew= () => {
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

  
export default PopNew;