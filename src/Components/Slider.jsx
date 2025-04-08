import React, { use, useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'
const screenWidth = window.innerWidth;
const Slider = () => {
    const [movieList, setMovieList] = useState([])
    const elementRef = useRef()
    useEffect(()=>{
        getTrendingMovies()

    },[])
    const getTrendingMovies = ()=>{
        GlobalApi.getTrendingVideoes.then((response)=>{
            console.log(response.data.results)
            setMovieList(response.data.results)
        })
    }
  const sliderRight = (element)=>{
    element.scrollLeft += screenWidth-85
  }
  const sliderLeft = (element)=>{
    element.scrollLeft -= screenWidth-85
  }
  return (
    <div>
      <HiOutlineChevronLeft className='hidden md:block text-[30px] absolute mx-8 mt-[12.5vw] cursor-pointer' onClick={()=>sliderLeft(elementRef.current)}/>
      <HiOutlineChevronRight className='hidden md:block text-[30px] absolute mx-8 mt-[12.5vw] cursor-pointer right-0' onClick={()=>sliderRight(elementRef.current)}/>

    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
      {movieList.map((movieList, index)=>(
        <img 
        src={IMAGE_BASE_URL+movieList.backdrop_path}
        className='min-w-full md:h-[25vw] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-200 transition-all duration-300 ease-in-out'
        alt="" srcset="" />

      ))}
    </div>
    </div>
  )
}

export default Slider
