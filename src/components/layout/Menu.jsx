import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Menu extends Component {
  render() {
    return (
      <div>
        <nav className="main-menu">
          <ul className="menu">
            <li className="menu-item">
              <Link to={"/"} className="menu-link">
                Home
              </Link>
            </li>
            <li className="menu-item">
              <Link to={"/job_list"} className="menu-link">
                Job List
              </Link>
            </li>
            <li className="menu-item">
              <Link to={"/about_us"} className="menu-link">
                About Us
              </Link>
            </li>
            <li className="menu-item">
              <Link to={"/services"} className="menu-link">
                Services
              </Link>
            </li>
            <li className="menu-item">
              <Link to={"/Blog_details"} className="menu-link">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
