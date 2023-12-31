import React from 'react';
import "./Navbar.scss";
import logo from "../../Helper/logo(1).png"

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="logo">
    <img src={logo} width="100px" alt="" />
    </div>
    <div className="links">
        <a href="#horoscope">Horoscope</a>
        <a href="#Daily">Daily</a>
        <a href="#Tarot">Tarot</a>
        <a href="#Article">Article</a>
        <a href="#Contact">Contact</a>
    </div>


        
    </div>
  )
}

export default Navbar