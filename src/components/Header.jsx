import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import vector from '../assets/Vector.png';
import humburger from '../assets/humb.png';
import '../landing.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const closeMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className='bg-slate-100 mb-16'>
      <div className='flex justify-between items-center w-10/12 mx-auto p-3'>
        <Link to='/'>
          <img src={logo} alt='Logo' className='logo' />
        </Link>

        <div className='hidden md:flex gap-20 font-normal text-lg'>
          <Link to='/'><div onClick={handleItemClick}>Home</div></Link>
          <Link to='/about'><div onClick={handleItemClick}>About</div></Link>
          <Link to='/services'><div onClick={handleItemClick}>Services</div></Link>
          <Link to='/join'><div onClick={handleItemClick}>Join Us</div></Link>
        </div>

        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            <img src={humburger} alt="Menu" className="block h-6 w-6" />
          </button>
        </div>

        {isOpen && (
          <div ref={menuRef} className='md:hidden absolute top-16 right-0 bg-white shadow-lg transition-transform transform w-full'>
            <ul className='flex flex-col items-center'>
              <Link to='/'><li className='py-2' onClick={handleItemClick}>Home</li></Link>
              <Link to='/about'><li className='py-2' onClick={handleItemClick}>About</li></Link>
              <Link to='/services'><li className='py-2' onClick={handleItemClick}>Services</li></Link>
              <Link to='/join'><li className='py-2' onClick={handleItemClick}>Join Us</li></Link>
              <Link to='/contact'><li className='py-2' onClick={handleItemClick}>Contact</li></Link>
            </ul>
          </div>
        )}

        <div className='hidden md:flex relative'>
          <button className='btn-gradient-2' onClick={handleItemClick}>Find Hosts Now</button>
          <img className='absolute top-7 left-3/4' src={vector} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;