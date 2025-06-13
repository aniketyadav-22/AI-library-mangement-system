import React from 'react';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: '#5f4c4c' }}>
      <div className="container d-flex justify-content-between align-items-center w-100">
        
        {/* Empty div for left side to help center the heading */}
        <div style={{ width: '30px' }}></div>

        {/* Center Heading */}
        <h4 className="text-white m-0 text-center flex-grow-1">
          E-Library Management System
        </h4>

        {/* Logo on the right with larger profile icon */}
        <a className="navbar-brand" href="#">
          <CgProfile style={{ fontSize: '2.5rem' }} /> {/* Increased size */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
