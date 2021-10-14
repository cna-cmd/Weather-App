import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to='/'>
        <span className="navbar-brand">Weather App</span>
        </Link>
        <SearchBar onSearch={onSearch}/>
      </div>
    </nav>
  );
};

export default Nav;
