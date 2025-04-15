import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/Images/disney.png';
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiPlus,
  HiMiniEllipsisVertical,
} from 'react-icons/hi2';

import HeaderItem from './HeaderItem';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menu = [
    { name: 'HOME', icon: HiHome },
    { name: 'SEARCH', icon: HiMagnifyingGlass },
    { name: 'WATCH LIST', icon: HiPlus },
    { name: 'ORIGINALS', icon: HiStar },
    { name: 'MOVIES', icon: HiPlayCircle },
    { name: 'SERIES', icon: HiTv },
  ];

  return (
    <header className="flex items-center justify-between p-4 md:p-6">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          className="w-[50px] md:w-[120px] object-cover"
          alt="Disney Logo"
        />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8">
        {menu.map((item, index) => (
          <HeaderItem key={index} name={item.name} Icon={item.icon} />
        ))}
      </nav>

      {/* Mobile Menu */}
      <div className="flex md:hidden items-center gap-4 relative">
        {/* First 3 Menu Items */}
        <div className="flex gap-4">
          {menu.slice(0, 3).map((item, index) => (
            <HeaderItem key={index} name="" Icon={item.icon} />
          ))}
        </div>

        {/* Toggle Button */}
        <div ref={dropdownRef} className="relative">
          <button
            className="flex items-center"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle Menu"
          >
            <HeaderItem name="" Icon={HiMiniEllipsisVertical} />
          </button>

          {/* Dropdown Menu */}
          {toggle && (
            <div className="absolute top-10 right-0 bg-[#121212] border border-gray-700 shadow-xl rounded-lg p-4 min-w-[160px] z-50">
              {menu.slice(3).map((item, index) => (
                <div key={index} className="py-2 hover:bg-gray-800 rounded px-2">
                  <HeaderItem name={item.name} Icon={item.icon} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* User Avatar */}
      <div>
        <img
          src="https://www.pngarts.com/files/5/Cartoon-Avatar-Transparent-Image.png"
          className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full bg-yellow-300"
          alt="User Avatar"
        />
      </div>
    </header>
  );
};

export default Header;