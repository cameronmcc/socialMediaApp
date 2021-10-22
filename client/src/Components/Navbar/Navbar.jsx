import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  // State Values
  const [click, setClick] = useState(false);
  const clickHandler = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='nav'>
        <div className='nav__container'>
          <div className='nav__icon__container nav--item'>
            <FaUserFriends className=' nav--icon' />
          </div>
          <Link to='/' className='nav--item connect--logo'>
            Welcome to Connect
          </Link>
          <div className='nav--item logout'>
            <Link to='logout' className='link nav--link'>
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
