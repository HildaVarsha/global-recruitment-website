import React, { Component } from "react";
import Menu from "./Menu";
import Mobile_menu from "./Mobile_menu";
import Logo_white from "./Logo_white";
import Header_search from "./Header_search";
import { Link } from "react-router-dom";

export class Header extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.isSticky);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.isSticky);
  }

  isSticky = (e) => {
    const header = document.querySelector("header");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-Sticky")
      : header.classList.remove("is-Sticky");
  };

  render() {
    return (
      <header
        id="masthead"
        className="header ttm-header-style-02 bg-theme-DarkColor"
      >
        {/* site-header-menu */}
        <div id="site-header-menu" className="site-header-menu">
          <div className="site-header-menu-inner ttm-stickable-header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  {/* site-navigation */}
                  <div className="site-navigation d-flex align-items-center justify-content-between">
                    {/* site-branding */}
                    <div className="site-branding">
                      <Logo_white />
                    </div>
                    {/* site-branding end */}
                    <div className="border-box-block text-theme-WhiteColor">
                      <div className="top_bar d-flex align-items-center justify-content-between">
                        <div className="d-flex w-auto">
                          <div className="top_bar_contact_item">
                            <div className="top_bar_icon">
                              <i className="flaticon flaticon-phone-call"></i>
                            </div>
                            <span>(+01)123 456 789</span>
                          </div>
                          <div className="top_bar_contact_item">
                            <div className="top_bar_icon">
                              <i className="flaticon flaticon-email"></i>
                            </div>
                            <span>
                              <Link to="mailto:info@example.com">
                                info@example.com
                              </Link>
                            </span>
                          </div>
                          <div className="top_bar_contact_item">
                            <div className="top_bar_icon">
                              <i className="flaticon flaticon-placeholder"></i>
                            </div>
                            <span>Suite 20 Golden Street USA</span>
                          </div>
                        </div>
                        <div className="media-block ms-auto">
                          <ul className="social-icons">
                            <li>
                              <Link
                                className="facebook"
                                to="/"
                                rel="noopener"
                                aria-label="facebook"
                              >
                                <i className="ti ti-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="twitter"
                                to="/"
                                rel="noopener"
                                aria-label="twitter"
                              >
                                <i className="ti ti-twitter-alt"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="google"
                                to="/"
                                rel="noopener"
                                aria-label="google"
                              >
                                <i className="ti ti-google"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="linkedin"
                                to="/"
                                rel="noopener"
                                aria-label="linkedin"
                              >
                                <i className="ti ti-linkedin"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        {/* menu */}
                        <Menu />
                        <div className="mobile-menu">
                          <Mobile_menu />
                        </div>
                        {/* menu end */}
                        <div className="header_extra ml-auto d-flex align-items-center">
                          <div className="header_search">
                            <div className="header_search_content">
                              <div className="header_search_content_inner">
                                <form id="searchbox">
                                  <input
                                    type="text"
                                    className="search_query"
                                    name="searchbox"
                                    placeholder="search"
                                  />
                                  <button
                                    type="submit"
                                    className="btn close-search"
                                  >
                                    <i className="ti ti-search"></i>
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="header_btn">
                      <Link
                        className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill
                                            ttm-icon-btn-left ttm-btn-color-skincolor d-flex align-items-center"
                      >
                        <i className="far fa-user fa-sm"></i>
                        <Link className="alert-heading" to={"/register"}>
                          sign up{" "}
                        </Link>
                        <span className="ml-10 mr-10">/</span>
                        <i className="ti ti-lock fa-sm"></i>
                        <Link className="alert-heading" to={"/login"}>
                          login{" "}
                        </Link>
                      </Link>
                    </div>
                  </div>
                  {/* site-navigation end */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* site-header-menu end */}
      </header>
    );
  }
}

export default Header;
