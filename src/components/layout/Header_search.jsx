import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header_search extends Component {
  state = {
    show: false,
  };
  toggle = () =>
    this.setState((currentState) => ({ show: !currentState.show }));

  render() {
    return (
      <div className="header_search">
        <Link className="search_btn" tabIndex="1" onClick={this.toggle}>
          {" "}
          {this.state ? (
            <i className="fa fa-search" />
          ) : (
            <i className="fa fa-times" />
          )}
        </Link>
        {this.state.show && (
          <div className="header_search_content">
            <div className="header_search_content_inner">
              <Link className="close_btn" onClick={this.toggle}>
                <i class="ti ti-close"></i>
              </Link>
              <form id="searchbox">
                <input
                  type="text"
                  className="search_query"
                  name="searchbox"
                  placeholder="Type Word Then Enter.."
                />
                <button type="submit" className="btn close-search">
                  <i className="ti ti-search"></i>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Header_search;
