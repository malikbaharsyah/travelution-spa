import React, {useRef, useEffect, useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import "../style/navbar.css";
import NavbarLogo from "../img/logo2.png";
import LandingPage from "../pages/landingpage";

function Navbar() {
  const navRef = useRef();
  const [isSticky, setIsSticky] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div className={`logo ${isSticky ? 'sticky-nav' : ''}`}>
        <img src={NavbarLogo} alt="logo" />
      </div>
      <nav ref={navRef} className={` ${isSticky ? 'sticky-nav' : ''}`}>
        <a href="LandingPage">Home</a>
        <a href="#">Menu</a>
        <a href="#">About</a>
        <a href="#">Jason</a>
        <a href="#">...</a>
      </nav>
    </header>
  );
}

export default Navbar;
