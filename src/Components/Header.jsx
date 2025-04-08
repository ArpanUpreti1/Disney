import React, { useState } from 'react'
import logo from '../assets/Images/disney.png'
import { 
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv,
    HiPlus,
    HiMiniEllipsisVertical
} from "react-icons/hi2";

import HeaderItem from './HeaderItem';

const Header = () => {
  const [toogle, setToogle] = useState(false);
    const menu = [
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGNALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ];

    return (
        <div className='flex items-center justify-between p-5 md:p-5'>
            <div className='flex items-center gap-8 md:gap-[400px]'>
                <img src={logo} className='w-[60px] md:w-[130px] object-cover' alt="Logo" />
                
                
                <div className='hidden md:flex gap-[4vw] items-center'>
                    {menu.map((item, index) => (
                        <HeaderItem key={index} name={item.name} Icon={item.icon} />
                    ))}
                </div>
                
          
                <div className='flex md:hidden gap-8 items-center'>
                    {menu.slice(0, 3).map((item, index) => (
                        <HeaderItem key={index} name={''} Icon={item.icon} />
                      
                    ))}
                </div>
                <div className='md:hidden' onClick={()=>setToogle(!toogle)}>
                    <HeaderItem name={''} Icon={HiMiniEllipsisVertical} />
                    {toogle?
                    <div className='absolute mt-3 bg-[#f7f7f7] p-3 '>
                    {menu.slice(3, 6).map((item, index) => (
                        <HeaderItem key={index} name={item.name} Icon={item.icon} />
                      
                    ))}
                    </div>:null}
                </div>
            </div>
                <img 
                    src="https://www.pngarts.com/files/5/Cartoon-Avatar-Transparent-Image.png" 
                    className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full bg-yellow-300' 
                    alt="Avatar" 
                />
            
                
       
        </div>
    );
};

export default Header;