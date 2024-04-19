import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import vector from '../assets/Vector.png';
import '../landing.css';

function Header() {


  
  return (
    <div className='bg-slate-100 mb-16'>
  <div className='flex justify-between items-center w-10/12 mx-auto p-3'>
    {/* Logo on the left */}
    <Link to='/'>
      <img src={logo} alt='Logo' className='logo' />
    </Link>

    {/* Button on the right */}
    <div className=' md:flex relative'>
      <button className='btn3 '>Continue</button>
      <img className='absolute top-7 left-3/4' src={vector} alt="" />
    </div>
  </div>
</div>

  );
}

export default Header;
