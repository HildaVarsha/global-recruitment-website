import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarItem,
} from "mdb-react-ui-kit";
import { Link, BrowserRouter as Router } from "react-router-dom";

const MobileMenu = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarToggler
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNav(!showNav)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNav} navbar>
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <Link className="m-2" to="/">
                  Home
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="m-2" to="/job_list">
                  Job List
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="m-2" to="/about_us">
                  About Us
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="m-2" to="/services">
                  Services
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="m-2" to="/Blog_details">
                  Blog
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default MobileMenu;
