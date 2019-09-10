import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <Link className="navbar-brand" to="/" >Icon Home</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Posts <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile/id" >Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register" >Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
