import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/add">Add</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/show">Show</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>   
    </>
  )
}

export default NavBar