import React from "react";
import logo from "/munchmate-logo2.png";
import { useState } from "react";

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);

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
            <li>
              {/* use conditional rendering for login and logout */}
              {isLoggedin ? (
                <button
                  className="logout-btn"
                  onClick={() => setIsLoggedin(false)}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="login-btn"
                  onClick={() => setIsLoggedin(true)}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
