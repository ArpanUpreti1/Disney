import React, { useState } from 'react'
import disney from '../assets/Images/disney.png'
import marvel from '../assets/Images/marvel.png'
import pixar from '../assets/Images/pixar.png'
import nationalG from '../assets/Images/nationalG.png'
import starwars from '../assets/Images/starwar.png'

import disneyV from '../assets/Videoes/disney.mp4'
import marvelV from '../assets/Videoes/marvel.mp4'
import pixarV from '../assets/Videoes/pixar.mp4'
import nationalGV from '../assets/Videoes/national-geographic.mp4'
import starwarsV from '../assets/Videoes/star-wars.mp4'


const ProductionHouse = () => {
    const list = [
        {
            id: 1,
            image: disney,
            video: disneyV
        },
        {
            id: 2,
            image: marvel,
            video: marvelV
        },
        {
            id: 3,
            image: pixar,
            video: pixarV
        },
        {
            id: 4,
            image: nationalG,
            video: nationalGV
        },
        {
            id: 5,
            image: starwars,
            video: starwarsV
        }
    ]
  return (
    <div className='flex gap-5 p-2 px-5 md:px-16'>
      {list.map((item) => (
        <div 
          key={item.id} 
          className='relative border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-black overflow-hidden group'
        >
           <img 
             src={item.image} 
             alt={`${item.id} logo`} 
             className='w-full relative z-10'
           /> 
           <video 
             src={item.video} 
             autoPlay 
             loop 
             playsInline 
             muted
             className='absolute top-0 left-0 w-full h-full object-cover z-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300'
           />
        </div>
      ))}
    </div>
  )
}

export default ProductionHouse