import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import { BiX, BiMenu } from "react-icons/bi";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="navbar">
      <div className="container">
        <h1 style={{ marginLeft: "1rem", color: "#00d8ff" }}>KOKOTOA</h1>
        <ul className={click ? "nav active" : "nav"}>
          <li className="nav-item">
            <a href="/">Platform</a>
          </li>
          <li className="nav-item">
            <a href="/">Workbook</a>
          </li>
          <li className="nav-item">
            <a href="/">Contact Us</a>
          </li>
          <li className="nav-item">
            <a href="/">Profile</a>
          </li>
          <li className="nav-item">
            <a href="/" className="btn" style={{ color: "white" }}>
              About
            </a>
          </li>
        </ul>
        <div onClick={handleClick} className="hamburger">
          {click ? <BiX className="icon" /> : <BiMenu className="icon" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
