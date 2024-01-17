import React from 'react';
import './navbar.css';
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
        <div className='navbar'>
            <div className='navbar-left'>
                <img src={Logo} alt=""/>
            </div>
            <div className='navbar-right'>
                <div className='navbar-right-button'><Link to={"/courses"}>Course</Link></div>
                <div className='navbar-right-button'>How to use</div>
                <div className='navbar-right-button'>About Us</div>
            </div>
        </div>
    </div>
  )
}
