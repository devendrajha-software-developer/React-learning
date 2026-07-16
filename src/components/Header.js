import { useState } from "react";
import { LOGO_URL } from "../../utils/constants.js";
import {useState} from "react";
import { Link } from "react-router"

// Header Component
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
    return (
      <div className="header">
        <div className="logo">
          <img
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to= "/about">About </Link></li>
            <li> <Link to= "/contact">Contact</Link></li>
            <li>Cart</li>
            <button className="login-btn"
            onClick={() => {
              isLoggedIn === "Login" ?
              setIsLoggedIn("Logout"): setIsLoggedIn("Login");
            }}
            >{isLoggedIn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;