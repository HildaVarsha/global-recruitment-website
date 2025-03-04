import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { BrowserRouter as Router } from "react-router-dom";

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
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    Home
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link to={"/"}>
                      Homepage 1
                    </MDBDropdownItem>
                    <MDBDropdownItem link to={"/Home2"}>
                      Homepage 2
                    </MDBDropdownItem>
                    <MDBDropdownItem link to={"/Home3"}>
                      Homepage 3
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    Pages
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link to={"/about_us"}>
                      About Us
                    </MDBDropdownItem>
                    <MDBDropdownItem link to={"/services"}>
                      Services
                    </MDBDropdownItem>
                    <MDBDropdownItem link to={"/services_details"}>
                      Services Details
                    </MDBDropdownItem>
                    <MDBDropdownItem link to={"/carrer_01"}>
                      Career
                    </MDBDropdownItem>
                    <MDBDropdownItem link to={"/login"}>
                      Login
                    </MDBDropdownItem>
                    <MDBDropdownItem link to={"/register"}>
                      Register
                    </MDBDropdownItem>
                    <MDBDropdownItem link to={"/error_404"}>
                      Error 404
                    </MDBDropdownItem>
                    <MDBDropdownItem link to={"/error_405"}>
                      Error 405
                    </MDBDropdownItem>
                    <MDBDropdownItem link to={"/contact_01"}>
                      Contact us 01
                    </MDBDropdownItem>
                    <MDBDropdownItem link to={"/contact_02"}>
                      Contact us 02
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    Jobs
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link to={"/job_list"}>
                      Job List
                    </MDBDropdownItem>
                    <MDBDropdownItem link to={"/job_details"}>
                      Job Details
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    Employers
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link to={"/employers_list"}>
                      Employers List
                    </MDBDropdownItem>
                    <MDBDropdownItem link to={"/employers_details"}>
                      Employers Details
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    Candidates
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link to={"/candidate_list"}>
                      Candidate List
                    </MDBDropdownItem>
                    <MDBDropdownItem link to={"/candidate_details"}>
                      Candidate Details
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    Blog
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link to={"/blog_classic"}>
                      Blog Classic
                    </MDBDropdownItem>
                    <MDBDropdownItem link to={"/blog_grid"}>
                      Blog Grid
                    </MDBDropdownItem>
                    <MDBDropdownItem link to={"/blog_details"}>
                      Blog Details
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default MobileMenu;
