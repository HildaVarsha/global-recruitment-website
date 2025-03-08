import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ title, content, breadcrumb, className }) => {
  return (
    <div
      className="page-header-area bg-img"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/8866776/pexels-photo-8866776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
      }}
    >
      <div className="page-header-area-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="page-header-content-inner">
                <div className="page-header-content">
                  <h2>{title}</h2>
                  <div>{content}</div>
                  <div className="breadcrumb-wrapper">
                    <span>
                      <Link to={"/"} title="Homepage">
                        <i className="ti ti-home" />
                        &nbsp;&nbsp;Home
                      </Link>
                    </span>
                    <span className="bread-sep">&nbsp;/&nbsp;</span>
                    {breadcrumb}
                  </div>
                  <div className={className}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
