import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'
import image from '../Assetes/dev.png';

const Nav = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
    }, []); 
  return (


    <div className='navbar'>
         <div className="nav-logo">
        <NavLink to="/">
        <img className={`word-drop ${isVisible ? 'visible' : ''}`} src={image} alt='logo' />
       
          </NavLink>
          </div>
        <ul className='navbar-list'>
            <li className={`word-drop ${isVisible ? 'visible' : ''}`}>
                <NavLink to="/" style={{textDecoration:'none'}}>Home <hr/></NavLink>
            </li>
            <li className={`word-drop ${isVisible ? 'visible' : ''}`}>
                <NavLink to="/about" style={{textDecoration:'none'}}>About <hr/></NavLink>
            </li>
            <li className={`word-drop ${isVisible ? 'visible' : ''}`}>
                <NavLink to="/service" style={{textDecoration:'none'}}>Services  <hr/></NavLink>
            </li >
            <li className={`word-drop ${isVisible ? 'visible' : ''}`}>
                <NavLink to="/contact" style={{textDecoration:'none'}}>Contact  <hr/></NavLink>
            </li>
          
           
        </ul>
      
    </div>
  )
}

export default Nav;
