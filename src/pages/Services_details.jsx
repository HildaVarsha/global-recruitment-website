import React, { Component } from "react";
import Header from "../components/layout/Header";
import PageHeader from "../components/layout/PageHeader";
import { Footer } from "../components/layout/Footer";
import { Link } from "react-router-dom";

export class Services_details extends Component {
  render() {
    return (
      <div className="site-main">
        <Header />

        {/* PageHeader */}
        <PageHeader title="services details" breadcrumb="services" />
        {/* PageHeader end */}

        <div className="ttm-row sidebar ttm-sidebar clearfix">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-8 content-area order-lg-2">
                {/* ttm-service-single-content-area */}
                <div className="ttm-service-single-content-area">
                  <div className="ttm_single_image-wrapper">
                    <img
                      className="img-fluid"
                      src="https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="services-img"
                    />
                  </div>
                  <div className="ttm-service-description mt-40">
                    <h3 className="mb-20">Description For Our Service</h3>
                    <p>
                    In today’s interconnected world, businesses are no longer limited by geography when searching for top talent. Our recruitment services are designed to bridge the gap between employers and skilled professionals worldwide. Whether you are looking for local hires or international candidates, we provide tailored solutions to help you build a diverse and high-performing team.
                    </p>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        {/* featured-icon-box */}
                        <div className="featured-icon-box icon-align-before-content icon-ver_align-top mr-50 mr-md-0 mt-20">
                          <div className="featured-icon">
                            <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                              <i className="flaticon-research"></i>
                            </div>
                          </div>
                          <div className="featured-content">
                            <div className="featured-title">
                              <h3>Water & Soil Quality</h3>
                            </div>
                            <div className="featured-desc">
                              <p>
                              Connecting businesses with skilled professionals worldwide.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* featured-icon-box end */}
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        {/* featured-icon-box */}
                        <div className="featured-icon-box icon-align-before-content icon-ver_align-top mr-50 mr-md-0 mt-20">
                          <div className="featured-icon">
                            <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                              <i className="flaticon-healthcare"></i>
                            </div>
                          </div>
                          <div className="featured-content">
                            <div className="featured-title">
                              <h3>Water & Soil Quality</h3>
                            </div>
                            <div className="featured-desc">
                              <p>
                              Visa Sponsorship Assistance – Helping companies and candidates navigate work visa processes.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* featured-icon-box end */}
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        {/* featured-icon-box */}
                        <div className="featured-icon-box icon-align-before-content icon-ver_align-top mr-50 mr-md-0 mt-20">
                          <div className="featured-icon">
                            <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                              <i className="flaticon-conveyor"></i>
                            </div>
                          </div>
                          <div className="featured-content">
                            <div className="featured-title">
                              <h3>Water & Soil Quality</h3>
                            </div>
                            <div className="featured-desc">
                              <p>
                              Employer Branding & HR Consulting – Helping organizations attract and retain top talent.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* featured-icon-box end */}
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        {/* featured-icon-box */}
                        <div className="featured-icon-box icon-align-before-content icon-ver_align-top mr-50 mr-md-0 mt-20">
                          <div className="featured-icon">
                            <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                              <i className="flaticon-human-resources-3"></i>
                            </div>
                          </div>
                          <div className="featured-content">
                            <div className="featured-title">
                              <h3>Water & Soil Quality</h3>
                            </div>
                            <div className="featured-desc">
                              <p>
                              Remote Hiring Solutions – Enabling companies to build international remote teams.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* featured-icon-box end */}
                      </div>
                    </div>
                    <div className="ttm-horizontal_sep width-100 mt-25 mb-35"></div>
                    <div className="row">
                      <div className="col-md-6">
                        <h4>The Best Aquarist You Can Make is In Your Self</h4>
                        <p>
                        Job Matching & Career Guidance – Personalized job recommendations and career advice.
                        </p>
                        <ul className="ttm-list ttm-list-style-square ttm-list-icon-color-skincolor mb-30">
                          <li>
                            <div className="ttm-list-li-content">
                            Hiring global talent comes with challenges
                            </div>
                          </li>
                          <li>
                            <div className="ttm-list-li-content">
                              There are many variations of passages 
                            </div>
                          </li>
                          <li>
                            <div className="ttm-list-li-content">
                            Personalized Job Matching – Recommending the best job opportunities based on skills and experience.
                            </div>
                          </li>
                          <li>
                            <div className="ttm-list-li-content">
                            Employer Branding Support – Assisting companies in building strong employer brands to attract top talent.
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <div className="ttm_single_image-wrapper mb-30">
                          <img
                            className="img-fluid"
                            src="https://via.placeholder.com/1200x800?text=1200x800+services-02-1200x800.jpg"
                            alt="services-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <p>
                        For job seekers, navigating the job market can be overwhelming. We offer personalized job matching services based on your skills, experience, and career aspirations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ttm-service-single-content-are end */}
              </div>
              <div className="col-lg-4 widget-area">
                <div className="sidebar-right">
                  <aside className="widget widget-nav-menu">
                    <ul>
                      <li>
                        <Link className="active" to={"/services_details"}>
                          Manpower Supply
                        </Link>
                      </li>
                      <li>
                        <Link to={"/services_details"}>Technical Services</Link>
                      </li>
                      <li>
                        <Link to={"/services_details"}>Executive Search</Link>
                      </li>
                      <li>
                        <Link to={"/services_details"}>Forte Acquisition</Link>
                      </li>
                      <li>
                        <Link to={"/services_details"}>Human Resource</Link>
                      </li>
                      <li>
                        <Link to={"/services_details"}>Retained search</Link>
                      </li>
                    </ul>
                  </aside>
                  <aside className="widget widget-download">
                    <ul className="download">
                      <li>
                        <span className="download-img">
                          <img src="images/pdf-img.png" alt="pdf-img" />
                        </span>
                        <span className="download-caption">
                          <span>Case Studies</span>
                          <h6>Audit & Assuarance</h6>
                          <Link
                            className="ttm-btn btn-inline ttm-btn-size-md ttm-icon-btn-left ttm-btn-color-grey"
                            to="/"
                          >
                            <i className="ti ti-arrow-right"></i>Download (3.5
                            MB)
                          </Link>
                        </span>
                      </li>
                    </ul>
                  </aside>
                  <aside className="widget widget-banner">
                    <div className="ttm-col-bgcolor-yes bg-theme-DarkColor ttm-bg p-30 pb-50 pt-45">
                      <div className="ttm-col-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor">
                        <div className="ttm-col-wrapper-bg-layer-inner"></div>
                      </div>
                      <div className="layer-content text-center text-theme-WhiteColor">
                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-style-round ttm-icon_element-color-skincolor ttm-icon_element-size-xl">
                          <i className="far fa-comments"></i>
                        </div>
                        <h3>Do You Need Any Help?</h3>
                        <div className="ttm-horizontal_sep width-100 mt-25 mb-25"></div>
                        <ul>
                          <li>+1 800 556 77 894</li>
                          <li>info@yourmailexample.com</li>
                        </ul>
                        <Link
                          className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill 
                                                ttm-btn-color-skincolor"
                          to={"/contact_01"}
                        >
                          appoinments!
                        </Link>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
            {/* row end */}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Services_details;
