import React, { Component } from "react";
import Header from "../components/layout/Header";
import PageHeader from "../components/layout/PageHeader";
import { Footer } from "../components/layout/Footer";
import { Link } from "react-router-dom";

export class blog_details extends Component {
  render() {
    return (
      <div className="site-main">
        <Header />

        {/* PageHeader */}
        <PageHeader title="blog details" breadcrumb="blog" />
        {/* PageHeader end */}

        <div className="ttm-row sidebar ttm-sidebar clearfix">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-8 content-area">
                {/* post */}
                <article className="post ttm-blog-single clearfix">
                  {/* post-featured-wrapper */}
                  <div className="ttm-post-featured-wrapper ttm-featured-wrapper">
                    <div className="ttm-post-featured">
                      <img
                        className="img-fluid"
                        src="https://images.pexels.com/photos/5439470/pexels-photo-5439470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="blog-img"
                      />
                    </div>
                  </div>
                  {/* post-featured-wrapper end */}
                  {/* ttm-blog-classic-content */}
                  <div className="ttm-blog-single-content">
                    <div className="ttm-post-entry-header">
                      <div className="post-meta">
                        <span className="ttm-meta-line author">
                          <img
                            src="https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            className="img-fluid"
                            height="80"
                            width="80"
                            alt="author"
                          />
                          By: Edward Samuel
                        </span>
                        <span className="ttm-meta-line comment-links">
                          <i className="fa fa-comments"></i>03 Comments
                        </span>
                        <span className="ttm-meta-line date">
                          <i className="fa fa-calendar"></i>17 Apr 2021
                        </span>
                      </div>
                    </div>
                    <div className="entry-content">
                      <div className="ttm-box-desc-text">
                        <p>
                        Welcome to our Global Recruitment Hub! In today's interconnected world, businesses thrive on diverse talent from across the globe. Our blog explores the latest trends, insights, and strategies in international hiring, helping companies and job seekers navigate the evolving job market. From visa sponsorship updates to remote work opportunities, we provide valuable resources to connect top talent with leading employers worldwide. Stay informed, stay ahead!
                        </p>

                        <p>
                        The global recruitment landscape is constantly evolving, shaping new opportunities for businesses and professionals alike. Since the early days of workforce expansion, companies have sought skilled talent from diverse backgrounds to drive innovation and growth. 
                        </p>

                        <blockquote>
                          <div className="qoute-text">
                          Our platform is dedicated to connecting top-tier professionals with organizations worldwide, ensuring seamless hiring experiences and career advancements. Stay updated with industry insights, hiring trends, and expert advice to navigate the world of global recruitment successfully.
                          </div>
                          <cite>Alex Sam Martin</cite>
                        </blockquote>

                        <p>
                        Contrary to popular belief, the world of global recruitment is more dynamic than ever. As industries expand across borders, the demand for skilled professionals continues to rise. Our blog delves into key hiring trends, workforce mobility, and expert insights to help businesses and job seekers navigate the international job market. Whether you're an employer looking for top talent or a professional seeking new career opportunities, stay informed with our latest updates and strategies for success.
                        </p>

                        <div className="d-md-flex align-items-center mb-20">
                          {/* <img
                            className="img-fluid alignleft"
                            src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
"
                            alt="single-07"
                          /> */}
                          <div className="pt-10 pb-15">
                            <h3>Compatible Data</h3>
                            <p>
                            Global recruitment is transforming the way businesses connect with top talent. In today's competitive job market, companies seek skilled professionals who can drive innovation and growth.{" "}
                            </p>
                            <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                              <li>
                                <i className="fas fa-long-arrow-alt-right"></i>
                                <div className="ttm-list-li-content">
                                Our platform provides insights into international hiring trends,
                                </div>
                              </li>
                              <li>
                                <i className="fas fa-long-arrow-alt-right"></i>
                                <div className="ttm-list-li-content">
                                Explore expert advice and industry updates to navigate the evolving world of recruitment with confidence.
                                </div>
                              </li>
                              <li>
                                <i className="fas fa-long-arrow-alt-right"></i>
                                <div className="ttm-list-li-content">
                                Workforce mobility, and career opportunities, helping both employers and job seekers stay ahead
                                </div>
                              </li>
                              <li>
                                <i className="fas fa-long-arrow-alt-right"></i>
                                <div className="ttm-list-li-content">
                                  Nulla at metus ultricies, placerat augue sed.
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h3>Is Business Tech Accessible To All Employees?</h3>
                        <p>
                          We offers the highest level of comfort and relaxation.
                          Large selection of rooms loram and apartments for
                          every taste and for every need. Qualified staff,
                          delicious dinners, bar, drinks, relaxation area and
                          underground parking.
                        </p>
                        <div className="social-media-block">
                          <div className="d-sm-flex justify-content-between">
                            <div className="ttm_tag_lists mt-15">
                              <span className="ttm-tags-links-title">
                                <i className="fa fa-tags"></i>Tags:
                              </span>
                              <span className="ttm-tags-links">
                                Damage, Maintenance, Roof
                              </span>
                            </div>
                            <div className="ttm-social-share-wrapper mt-15">
                              <h6 className="pr-10">Share : </h6>
                              <ul className="social-icons">
                                <li>
                                  <Link
                                    to="#"
                                    rel="noopener"
                                    aria-label="facebook"
                                  >
                                    <i className="ti ti-facebook"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    rel="noopener"
                                    aria-label="twitter"
                                  >
                                    <i className="ti ti-twitter-alt"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    rel="noopener"
                                    aria-label="linkedin"
                                  >
                                    <i className="ti ti-linkedin"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="ttm-blog-classic-box-comment clearfix">
                          <div id="comments" className="comments-area">
                            <div className="comment-respond">
                              <h3 className="comment-reply-title">
                                Leave a Reply
                              </h3>
                              <form
                                id="comment_form"
                                className="comment_form wrap-form"
                              >
                                <div className="row ttm-boxes-spacing-15px">
                                  <div className="col-lg-6">
                                    <label>
                                      <input
                                        type="text"
                                        name="first_name"
                                        placeholder="First Name"
                                      />
                                    </label>
                                  </div>
                                  <div className="col-lg-6">
                                    <label>
                                      <input
                                        type="text"
                                        name="last_name"
                                        placeholder="Last Name"
                                      />
                                    </label>
                                  </div>
                                  <div className="col-lg-6">
                                    <label>
                                      <input
                                        type="email"
                                        name="email_id"
                                        placeholder="Email"
                                      />
                                    </label>
                                  </div>
                                  <div className="col-lg-6">
                                    <label>
                                      <input
                                        type="tel"
                                        name="phone_number"
                                        placeholder="Phone"
                                      />
                                    </label>
                                  </div>
                                  <div className="col-lg-12">
                                    <label>
                                      <input
                                        type="text"
                                        name="address"
                                        placeholder="Address"
                                      />
                                    </label>
                                  </div>
                                  <div className="col-lg-12">
                                    <label>
                                      <textarea
                                        name="message"
                                        rows="6"
                                        placeholder="Message"
                                        required="required"
                                      ></textarea>
                                    </label>
                                  </div>
                                  <div className="col-lg-12">
                                    <label>
                                      <button
                                        type="submit"
                                        className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                                      >
                                        send a message
                                      </button>
                                    </label>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ttm-blog-classic-content end */}
                </article>
                {/* post end */}
              </div>
              <div className="col-lg-4 widget-area">
                <div className="sidebar-right">
                  <aside className="widget widget-search">
                    <form role="search" className="search-form">
                      <label>
                        <span className="screen-reader-text">Search for:</span>
                        <input
                          type="search"
                          className="input-text"
                          placeholder="Your Keyword...."
                          value=""
                        />
                      </label>
                      <button className="btn" type="submit">
                        <i className="fa fa-search"></i>{" "}
                      </button>
                    </form>
                  </aside>
                  <aside className="widget widget-Categories with-title">
                    <h3 className="widget-title">Categories</h3>
                    <ul>
                      <li>
                        <Link to={"/blog_details"}>Digital Marketing</Link>
                      </li>
                      <li>
                        <Link to={"/blog_details"}>
                          Search Engine Optimization
                        </Link>
                      </li>
                      <li>
                        <Link to={"/blog_details"}>UI/UX Design Task</Link>
                      </li>
                      <li>
                        <Link to={"/blog_details"}>Web development</Link>
                      </li>
                      <li>
                        <Link to={"/blog_details"}>Digital Marketing</Link>
                      </li>
                      <li>
                        <Link to={"/blog_details"}>Investment</Link>
                      </li>
                    </ul>
                  </aside>
                  <aside className="widget widget-recent-post with-title">
                    <h3 className="widget-title">Recent Posts</h3>
                    <ul>
                      <li>
                        <Link to={"/blog_details"}>
                          <img
                            className="img-fluid"
                            src="https://images.pexels.com/photos/5439428/pexels-photo-5439428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="post-img"
                          />
                        </Link>
                        <div className="post-detail">
                          <Link to={"/blog_details"}>
                            How Sources Utilize Sleuth Skill Beyond Work
                          </Link>
                          <span className="post-date">October 10, 2020</span>
                        </div>
                      </li>
                      <li>
                        <Link to={"/blog_details"}>
                          <img
                            className="img-fluid"
                            src="https://images.pexels.com/photos/5439453/pexels-photo-5439453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="post-img"
                          />
                        </Link>
                        <div className="post-detail">
                          <Link to={"/blog_details"}>
                            Let's Create Your Own Competitive News Feeder For
                            Free
                          </Link>
                          <span className="post-date">October 10, 2020</span>
                        </div>
                      </li>
                      <li>
                        <Link to={"/blog_details"}>
                          <img
                            className="img-fluid"
                            src="https://images.pexels.com/photos/8636626/pexels-photo-8636626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="post-img"
                          />
                        </Link>
                        <div className="post-detail">
                          <Link to={"/blog_details"}>
                            Remote Hiring Trends Report 2021: Review Hire
                            Process
                          </Link>
                          <span className="post-date">October 10, 2020</span>
                        </div>
                      </li>
                    </ul>
                  </aside>
                  <aside className="widget widget-banner">
                    <div className="ttm-col-bgcolor-yes bg-theme-DarkColor col-bg-img-seven ttm-col-bgimage-yes ttm-bg p-30 pb-50 pt-45">
                      <div
                        className="ttm-col-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor"
                        style={{
                          backgroundImage:
                            "url(https://via.placeholder.com/875x583?text=875x583+col-bgimage-7.jpg)",
                        }}
                      >
                        <div className="ttm-col-wrapper-bg-layer-inner bg-theme-DarkColor"></div>
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
                          className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                          to={"/"}
                        >
                          appoinments!
                        </Link>
                      </div>
                    </div>
                  </aside>
                  <aside className="widget tagcloud-widget with-title">
                    <h3 className="widget-title">Popular Tags</h3>
                    <div className="tagcloud">
                      <Link to={"/blog_details"} className="tag-cloud-link">
                        Agency
                      </Link>
                      <Link to={"/blog_details"} className="tag-cloud-link">
                        Business
                      </Link>
                      <Link to={"/blog_details"} className="tag-cloud-link">
                        Corporate
                      </Link>
                      <Link to={"/blog_details"} className="tag-cloud-link">
                        Creative
                      </Link>
                      <Link to={"/blog_details"} className="tag-cloud-link">
                        Design
                      </Link>
                      <Link to={"/blog_details"} className="tag-cloud-link">
                        inspiration
                      </Link>
                      <Link to={"/blog_details"} className="tag-cloud-link">
                        Marketing
                      </Link>
                      <Link to={"/blog_details"} className="tag-cloud-link">
                        Startup
                      </Link>
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

export default blog_details;
