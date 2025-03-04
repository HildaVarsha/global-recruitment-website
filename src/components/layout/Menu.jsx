import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

export class Menu extends Component {
  state = {
    show: false,
  };
  render() {
    return (
      <div>
        <nav className="main-menu">
          <ul className="menu">
            <li className="mega-menu-item">
              <Link to={"/"} className="mega-menu-link">
                Home
              </Link>
              <ul className="mega-submenu">
                <li>
                  <Link to={"/"}>Job Seeker</Link>
                </li>
                <li>
                  <Link to={"/home2"}>Job Consultancy</Link>
                </li>
                <li>
                  <Link to={"/home3"}>Human Resource</Link>
                </li>
              </ul>
            </li>
            <li className="mega-menu-item">
              <Link to={"/about_us"} className="mega-menu-link">
                Pages
              </Link>
              <ul className="mega-submenu">
                <li>
                  <Link to={"/about_us"}>About Us</Link>
                </li>
                <li>
                  <Link to={"/services"}>Services</Link>
                </li>
                <li>
                  <Link to={"/services_details"}>Services Details</Link>
                </li>
                <li>
                  <Link to={"/carrer_01"}>Carrer</Link>
                </li>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/register"}>Register</Link>
                </li>
                <li>
                  <Link to={"/error_404"}>Error 404</Link>
                </li>
                <li>
                  <Link to={"/error_405"}>Error 405</Link>
                </li>
                <li>
                  <Link to={"/contact_01"}>Contact us 01</Link>
                </li>
                <li>
                  <Link to={"/contact_02"}>Contact us 02</Link>
                </li>
              </ul>
            </li>
            <li className="mega-menu-item">
              <Link to={"/job_list"} className="mega-menu-link">
                Jobs
              </Link>
              <ul className="mega-submenu">
                <li>
                  <Link to={"/job_list"}>Job List</Link>
                </li>
                <li>
                  <Link to={"/job_details"}>Job Details</Link>
                </li>
              </ul>
            </li>
            <li className="mega-menu-item">
              <Link to={"/employers_list"} className="mega-menu-link">
                Employers
              </Link>
              <ul className="mega-submenu">
                <li>
                  <Link to={"/employers_list"}>Employers List</Link>
                </li>
                <li>
                  <Link to={"/employers_details"}>Employers Details</Link>
                </li>
              </ul>
            </li>
            <li className="mega-menu-item">
              <Link to={"/candidate_list"} className="mega-menu-link">
                Candidates
              </Link>
              <ul className="mega-submenu">
                <li>
                  <Link to={"/candidate_list"}>Candidate List</Link>
                </li>
                <li>
                  <Link to={"/candidate_details"}>Candidate Details</Link>
                </li>
              </ul>
            </li>
            <li className="mega-menu-item">
              <Link to={"/blog_classic"} className="mega-menu-link">
                Blog
              </Link>
              <ul className="mega-submenu">
                <li>
                  <Link to={"/blog_classic"}>Blog Classic</Link>
                </li>
                <li>
                  <Link to={"/blog_grid"}>Blog Grid</Link>
                </li>
                <li>
                  <Link to={"/blog_details"}>Blog Details</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
