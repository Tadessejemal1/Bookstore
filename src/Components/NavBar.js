import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="header">
    <h1 className="logo">Bookstore CMS</h1>
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">BOOKS</Link></li>
        <li className="nav-item"><Link to="/categories">CATEGORIES</Link></li>
        <img src="" alt="" />
      </ul>
    </nav>
  </div>
);

export default NavBar;
