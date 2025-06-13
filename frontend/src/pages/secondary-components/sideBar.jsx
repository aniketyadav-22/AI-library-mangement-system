import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineDashboard,
  AiOutlineBook,
  AiOutlineHeart,
  AiOutlineInbox,
  AiOutlineLogout
} from 'react-icons/ai';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const handleLogout = () => {
    alert('Logging out...');
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      style={{ width: '280px', height: '93vh' }}
    >
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <AiOutlineDashboard size={32} className="me-2" />
        <span className="fs-4">E-Library</span>
      </Link>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            to="/home"
            className={`nav-link text-white ${activeLink === 'home' ? 'active bg-primary' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            <AiOutlineDashboard className="me-2" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className={`nav-link text-white ${activeLink === 'dashboard' ? 'active bg-primary' : ''}`}
            onClick={() => handleLinkClick('dashboard')}
          >
            <AiOutlineBook className="me-2" />
            All books
          </Link>
        </li>
        <li>
          <Link
            to="/orders"
            className={`nav-link text-white ${activeLink === 'orders' ? 'active bg-primary' : ''}`}
            onClick={() => handleLinkClick('orders')}
          >
            <AiOutlineHeart className="me-2" />
            Recommended books
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className={`nav-link text-white ${activeLink === 'products' ? 'active bg-primary' : ''}`}
            onClick={() => handleLinkClick('products')}
          >
            <AiOutlineInbox className="me-2" />
            Current issued books
          </Link>
        </li>
      </ul>

      <hr />

      <button
        onClick={handleLogout}
        className="btn btn-danger mt-auto d-flex align-items-center justify-content-center"
        style={{ width: '100%' }}
      >
        <AiOutlineLogout className="me-2" />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
