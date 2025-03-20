import React, { Component } from "react";
import Header from "../components/layout/Header";
import PageHeader from "../components/layout/PageHeader";
import { Footer } from "../components/layout/Footer";
import { Link } from "react-router-dom";

export class Contact_01 extends Component {
  render() {
    return (
      <div className="site-main">
        <Header />

        {/* PageHeader */}
        <PageHeader title="Contact us" breadcrumb="Contact 01" />
        {/* PageHeader end */}

        {/* grid-section */}
        <section className="ttm-row grid-section clearfix">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="featured-imagebox box-shadow">
                  <div className="featured-thumbnail">
                    <img
                      className="img-fluid location-icon"
                      src="\images\bg-image\London.jpg"
                      alt="country-01"
                    />
                  </div>
                  <div className="featured-content p-30">
                    <div className="featured-title">
                      <h3>
                        <Link to={"/"}>London</Link>
                      </h3>
                    </div>
                    <div className="featured-desc">
                      <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                        <li className="pb-5">
                          <i className="fas fa-map-marker-alt"></i>
                          <div className="ttm-list-li-content">
                            Addres: 292-294 Plashet Grove, London, England, E6
                            1DQ.
                          </div>
                        </li>
                        <li className="pb-5">
                          <i className="fas fa-phone-alt"></i>
                          <div className="ttm-list-li-content">
                            Call Us:+44-20 3490 9639
                          </div>
                        </li>
                        <li>
                          <i className="fa fa-envelope"></i>
                          <div className="ttm-list-li-content">
                            <Link to="mailto:info@theglobalrecruitment.com">
                              Email:info@theglobalrecruitment.com
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="featured-imagebox box-shadow">
                  <div className="featured-thumbnail">
                    <img
                      className="img-fluid location-icon"
                      src="\images\bg-image\Dubhai.jpg"
                      alt="country-02"
                    />
                  </div>
                  <div className="featured-content p-30">
                    <div className="featured-title">
                      <h3>
                        <Link to={"/"}>Dubai</Link>
                      </h3>
                    </div>
                    <div className="featured-desc">
                      <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                        <li className="pb-5">
                          <i className="fas fa-map-marker-alt"></i>
                          <div className="ttm-list-li-content">
                            Addres: AI Saaha Offices C Old Town, Downtown Dubai
                            Level 2 Office no.W202 PO BOX 282615, Dubai.
                          </div>
                        </li>
                        <li className="pb-5">
                          <i className="fas fa-phone-alt"></i>
                          <div className="ttm-list-li-content">
                            Call Us:+44-20 3490 9639
                          </div>
                        </li>
                        <li>
                          <i className="fa fa-envelope"></i>
                          <div className="ttm-list-li-content">
                            <Link to="mailto:info@theglobalrecruitment.com">
                              Email:info@theglobalrecruitment.com
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="featured-imagebox box-shadow">
                  <div className="featured-thumbnail">
                    <img
                      className="img-fluid location-icon"
                      src="\images\bg-image\India.jpg"
                      alt="country-03"
                    />
                  </div>
                  <div className="featured-content p-30">
                    <div className="featured-title">
                      <h3>
                        <Link to={"/"}>India</Link>
                      </h3>
                    </div>
                    <div className="featured-desc">
                      <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                        <li className="pb-5">
                          <i className="fas fa-map-marker-alt"></i>
                          <div className="ttm-list-li-content">
                            Addres: 2-48/5/6, Vyshnavi's Cynosure, Gachibowli
                            Road, Hyderabad, Telangana 500032, India.
                          </div>
                        </li>
                        <li className="pb-5">
                          <i className="fas fa-phone-alt"></i>
                          <div className="ttm-list-li-content">
                            Call Us:+44-20 3490 9639
                          </div>
                        </li>
                        <li>
                          <i className="fa fa-envelope"></i>
                          <div className="ttm-list-li-content">
                            <Link to="mailto:info@theglobalrecruitment.com">
                              Email:info@theglobalrecruitment.com
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* row end */}
          </div>
        </section>
        {/* grid-section end */}

        {/* map-section */}
        <section className="ttm-row map-section bg-theme-GreyColor clearfix">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-12">
                {/* section title */}
                <div className="section-title title-style-center_text pb-15">
                  <div className="title-header">
                    <h3>
                      get in <span className="text-theme-SkinColor">touch</span>
                    </h3>
                    <h2 className="title">Feel Free To Contact</h2>
                  </div>
                </div>
                {/* section title end */}
              </div>
              <div className="col-lg-6">
                <iframe
                  height="530"
                  width="100%"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.061057809051!2d0.05099831576038158!3d51.53903617964156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7c7b1a3b8e3%3A0x5d5e5d5e5d5e5d5e!2s292-294%20Plashet%20Grove%2C%20London%2C%20E6%201DQ%2C%20UK!5e0!3m2!1sen!2sin!4v1616161616161!5m2!1sen!2sin"
                />
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.061057809051!2d0.05099831576038158!3d51.53903617964156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7c7b1a3b8e3%3A0x5d5e5d5e5d5e5d5e!2s292-294%20Plashet%20Grove%2C%20London%2C%20E6%201DQ%2C%20UK!5e0!3m2!1sen!2sin!4v1616161616161!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}

              </div>
              <div className="col-lg-6">
                <div className="ttm-col-bgcolor-yes ttm-bg bg-theme-WhiteColor z-index-2 p-40 p-lg-30 mt-lg-30">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                  <div className="layer-content">
                    <form id="contact_form" className="contact_form wrap-form">
                      <div className="row ttm-boxes-spacing-10px">
                        <div className="col-md-12 ttm-box-col-wrapper">
                          <label>
                            <input
                              name="name"
                              type="text"
                              placeholder="Your Name"
                              required="required"
                            />
                          </label>
                        </div>
                        <div className="col-md-6 ttm-box-col-wrapper">
                          <label>
                            <input
                              name="email"
                              type="text"
                              placeholder="Your Email"
                              required="required"
                            />
                          </label>
                        </div>
                        <div className="col-md-6 ttm-box-col-wrapper">
                          <label>
                            <input
                              name="subject"
                              type="text"
                              placeholder="Subject"
                              required="required"
                            />
                          </label>
                        </div>
                        <div className="col-md-12 ttm-box-col-wrapper">
                          <label>
                            <input
                              name="phone"
                              type="text"
                              placeholder="Phone Number"
                              required="required"
                            />
                          </label>
                        </div>
                        <div className="col-md-12 ttm-box-col-wrapper">
                          <label>
                            <textarea
                              name="message"
                              rows="7"
                              placeholder="Message"
                              required="required"
                            ></textarea>
                          </label>
                        </div>
                      </div>
                      <button
                        className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill 
                                            ttm-btn-color-skincolor w-100"
                        type="submit"
                      >
                        send a message!
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* row end */}
          </div>
        </section>
        {/* map-section end */}

        {/* action-section */}
        <section className="ttm-row action-section bg-theme-SkinColor text-theme-WhiteColor clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-md-flex align-items-center justify-content-between">
                  {/* featured-icon-box */}
                  <div className="featured-icon-box icon-align-before-content style2">
                    <div className="featured-icon">
                      <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-white ttm-icon_element-size-xl">
                        <i className="flaticon flaticon-recruitment-5"></i>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3>Incredible Recruitment & Staffing Agency</h3>
                      </div>
                      <div className="featured-desc">
                        <p>
                          We have over 30 years experience oft Business porro
                          qusquam dol ipsum quia dolor sit amet.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* featured-icon-box end */}
                  <Link
                    className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white"
                    to={"/contact_01"}
                  >
                    Hiring Now!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* action-section end */}

        <Footer />
      </div>
    );
  }
}

export default Contact_01;
