import React from "react";
import logo from "/munchmate-logo2.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <a href="/">
          {/* <h2>MunchMate</h2> */}
          <img src={logo} alt="Logo" className="logo" />
        </a>

        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
