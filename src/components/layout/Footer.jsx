import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer widget-footer bg-theme-DarkColor text-theme-WhiteColor clearfix">
        <div className="second-footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 widget-area">
                <div className="widget widget_text clearfix">
                  <div className="footer-logo">
                  <img
          id="logo-img"
          height="60"
          width="170"
          className="img-fluid auto_size"
          src="/logo-global.png"
          alt="logo-img"
          style={{objectFit:'cover'}}
        />
                  </div>
                  <p>
                    Global Recruitment is multi award-winning executive search, management
                    recruiter and employer branding organization. Our customized
                    recruiting process delivers fast & accurate results
                  </p>
                  <div className="d-flex align-items-center pt-15 pb-25">
                    <h6 className="fw-normal">Social Share: </h6>
                    <div className="social-icons">
                      <ul className="social-icons list-inline">
                        <li>
                          <Link
                            to="#facebook"
                            rel="noopener"
                            aria-label="facebook"
                          >
                            <i className="ti ti-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#twitter"
                            rel="noopener"
                            aria-label="twitter"
                          >
                            <i className="ti ti-twitter-alt"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#instagram"
                            rel="noopener"
                            aria-label="instagram"
                          >
                            <i className="ti ti-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#pinterest"
                            rel="noopener"
                            aria-label="pinterest"
                          >
                            <i className="ti ti-pinterest"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link
                    className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white"
                    to={"/contact_01"}
                  >
                    Request A Free Quotes
                  </Link>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 widget-area">
                <div className="widget widget-recent-post clearfix">
                  <h3 className="widget-title">Recent Posts</h3>
                  <ul className="widget-post ttm-recent-post-list">
                    <li>
                      <div className="post-detail">
                        <div className="cat-link">
                          <Link to={"/blog_details"}>business</Link>
                        </div>
                        <Link to={"/blog_details"}>
                          Are meetings falling to flat? Try these 10 tips
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="post-detail">
                        <div className="cat-link">
                          <Link to={"/blog_details"}>business</Link>
                        </div>
                        <Link to={"/blog_details"}>
                          Are You Moving Businesses To Another State?
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="post-detail">
                        <div className="cat-link">
                          <Link to={"/blog_details"}>business</Link>
                        </div>
                        <Link to={"/blog_details"}>
                          Shame: Does It Fine to Fit In The Workplace?
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 widget-area">
                <div className="widget widget-contact clearfix">
                  <h3 className="widget-title">Quick Contact!</h3>
                  <ul className="widget_contact_wrapper">
                    {/* <li>
                      <i className="ttm-textcolor-skincolor flaticon-phone-call"></i>
                      <h3>Call Us On:</h3>+44 7734 456458
                    </li> */}
                    <li>
                      <i className="ttm-textcolor-skincolor flaticon-placeholder"></i>
                      <h3>Address:</h3>292-294 Plashet Grove,London,E6 1DQ.
                    </li>
                    <li>
                      <i className="ttm-textcolor-skincolor flaticon-email"></i>
                      <h3>Email:</h3>
                      <Link to="mailto:info@theglobalrecruitment.com">info@theglobalrecruitment.com</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-6">
                <span className="copyright">
                  Copyright © 2025 <Link to={"/"}>Global Recruitment </Link>All rights
                  reserved.
                </span>
                <ul className="footer-nav-menu">
                  <li>
                    <Link to={"/"}>Privacy & Policy</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 d-lg-flex align-items-center justify-content-between">
                <form id="subscribe-form" className="subscribe-form">
                  <div
                    className="mailchimp-inputbox clearfix"
                    id="subscribe-content"
                  >
                    <input
                      type="email"
                      name="EMAIL"
                      id="txtemail"
                      placeholder="Enter Your Email Address..."
                      required=""
                    />
                    <button
                      className="submit ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-skincolor"
                      type="submit"
                    >
                      <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
