// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './bookstore-removebg.png';

const Header = () => {
  return (
    <div  className="nav-bar">
      <img src={logo} alt="Logo" />
      <h1>Online <span>Bookstore</span></h1>
    <header>
      <div>     
      <nav>
        <ul >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search for books..." />
          <button>Search</button>
          <br/>
        </div> 
      </nav>
      </div>
    </header>
    </div>
  );
};

export default Header;
