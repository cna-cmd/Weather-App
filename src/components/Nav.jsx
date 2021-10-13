import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({ onSearch }) {
  return (
    // <nav className="navbar navbar-dark bg-dark">
    //   {/* <img src='' alt=""width="30" height="30" className="d-inline-block align-top"/> */}
    //   <span>Weather App</span>
    //   <SearchBar onSearch={onSearch}/>
    // </nav>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand">Weather App</span>
        <SearchBar onSearch={onSearch}/>
      </div>
    </nav>
  );
};

export default Nav;
