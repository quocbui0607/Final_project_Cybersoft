import "./navbar.scss";
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";

export default class Navbar extends Component {  
  render() {    
    return (
      <nav className="navbar custom-navbar navbar-expand-md">
        {/* Toggler/collapsibe Button */}
        <Link style={{ textDecoration: "none", marginLeft: "3%" }} to="/">
          <span className="logo">HOMEFLIX</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon custom-navbar-toggler-icon"></span>
        </button>
        <div className="container custom-container">
          <div className="left collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink exact className="nav-link custom-nav-link" to="/">
                  Home
                </NavLink>
              </li>                          
              <li className="nav-item">
                <NavLink className="nav-link custom-nav-link" to="/play-movie">
                  Watch Demo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link custom-nav-link" to="/list-movie">
                  Movies List 
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="right collapse navbar-collapse">
            <input placeholder="Search..." />
            <Search className="navbar-icon" />
            <Notifications className="navbar-icon" />
            <NavLink className="nav-link custom-nav-link loginBtn" to="/register">
              Login 
            </NavLink>
            <div className="profile">
              <ArrowDropDown className="navbar-icon" />
              <div className="options">
                <span>Setting</span>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
