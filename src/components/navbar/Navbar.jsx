import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  // console.log(isScroll);
  return (
    <div className={isScroll ? "navbar scroll" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://assets-global.website-files.com/5ab51e98ef3b980e8d0a4e37/604a418de4663bf59767f987_Cliente-Netflix.svg"
            alt=""
          />
          <span>Home</span>
          <span>Series</span>
          <span>Movie</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img src="/img/images.png" alt="" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
