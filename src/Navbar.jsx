import React from "react";
import "./Navbar.css";
import {Link, NavLink, Route, Routes} from 'react-router-dom'
// import Experiences from "./Experiences";
// import Awards from "./Awards";
import Body from "./Body";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
          <NavLink to={""} id={"logo"}>Dr. Arun Kumar Dubey</NavLink>
          <NavLink to={"/experiences"}>Experiences</NavLink>
          <NavLink to={""}>Achievements</NavLink>
          <NavLink to={"/awards"}>Awards</NavLink>
          <NavLink to={"/publications"}>Publications</NavLink>
          <NavLink to={"/"}>Patent</NavLink>
        </div>
        <div className="navbar__right">
          <i class="ri-twitter-fill"></i>
          <i class="ri-search-line"></i>
          <i class="ri-moon-fill"></i>
        </div>
      </div>
    </>
  );
}

export default Navbar;
