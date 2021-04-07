import React from "react";
import "./Header.css";
import "./Header2.css";
import testimage from "./assets/nature.jpg";
const Header = () => {
  const handleSectionClick = () => {
    document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div>
      <div className="gradient"></div>
      <div
        className="image2"
        style={{ backgroundImage: `url(${testimage})` }}
      ></div>
      <div className="headerContainer">
        <h1 className="header mainHeader">Travel Anywhere</h1>
        <h2 className="header subHeader">Explore the World</h2>
        <p className="header headerText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button onClick={handleSectionClick} className="header-btn">Get Started</button>
      </div>
    </div>
  );
};

export default Header;
