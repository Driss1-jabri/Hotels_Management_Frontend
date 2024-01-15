import React from 'react'
import { useState, useRef } from 'react';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../Assets/Images/Black Gold Modern Circle Monoline Hotel Branding Logo (1).png'
function NavBar() {
  
  const [menuHeight, setMenuHeight] = useState(0);
  

  // const toggleMenu = () => {
  //   setMenuHeight((prevHeight) => (prevHeight === 0 ? '100vh' : 0));
  // };
  const toggleMenu = () => {
    if(menuHeight ===0){
        setMenuHeight('100vh');
    }
    else{
      setMenuHeight(0);
    }
  };
  return (
    <div>
      <header>
          <div className="content flex_space">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navlinks">
              <ul  style={{ maxHeight: menuHeight }}>
                <li><a href="#home">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#rooms">rooms</a></li>
                <li><a href="#pages">pages</a></li>
                <li><a href="#news">news</a></li>
                <li><a href="#contact">contact</a></li>
                <li><button className="primary-btn">BOOK NOW</button></li>
              </ul>
              <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu} />
            </div>
          </div>
        </header>
    </div>
  );
}

export default NavBar