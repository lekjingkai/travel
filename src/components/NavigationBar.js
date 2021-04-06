import { useState, useEffect } from 'react'
import React from 'react'
import "./NavigationBar.css"


const NavigationBar = () => {
const [navbar, setNavbar] = useState(false);
const [showMobileNav, setShowMobileNav] = useState(false);

//changes the css class of navbar when scrolled
const changeBackground = () => {
    if(window.scrollY >= 80) {
        setNavbar(true);
    }else{
        setNavbar(false);
    }
};

const showMobileNavFunc = () => {
    // const currentState = showMobileNav.currentState;

    // setShowMobileNav(!currentState);

    setShowMobileNav(state => !state);
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


window.addEventListener('scroll', changeBackground);

    return (

        // <div className={navbar ? 'topnav active' : 'topnav'}>
<nav className={`navbar ${navbar ? "sticky" : ""} ${showMobileNav ? "show" : ""}`}>
<div className="content">

    <div className={`logoTitle ${navbar ? "logoSticky" : ""}`} onClick={scrollToTop}>Travel
    <i className={`fa fa-globe icon-padding ${navbar ? "iconSticky" : ""}`}></i>
    </div>
  <ul className="menu-list">
    <div className="icon cancel-btn" onClick={showMobileNavFunc}>
      <i className="fa fa-times"></i>
    </div>
    <li><a className={`${navbar ? "sticky" : ""}`} href="" target="_blank">Sample Link</a></li>
    <li><a className={`${navbar ? "sticky" : ""}`} href="">Sample Link 2</a></li>
  </ul>
  <div className="icon menu-btn" onClick={showMobileNavFunc}>
    <i className="fa fa-bars"></i>
  </div>
</div>
</nav>
    )
}

export default NavigationBar
