// import React from "react";
import logo from "/munchmate-logo2.png";
import { useState } from "react";
import { Link } from "react-router-dom";

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
            <li>
              <Link to="/" className="Link-tag">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="Link-tag">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="Link-tag">
                Contact
              </Link>
            </li>
            <li>Cart</li>
            <li className="log-btn">
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
