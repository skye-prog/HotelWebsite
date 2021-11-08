import React from "react";
import "./header.css";
import NavBar from "./navbar";

function Header() {
  return (
    <div className='header_frame'>
      <NavBar />
      <div className='header_content'>
        <div className='header_p1'>Welcome to Grand Hotel</div>
        <div className='header_p2'>Make your life luxurious</div>
        <button>Book Now</button>
      </div>
    </div>
  );
}

export default Header;
