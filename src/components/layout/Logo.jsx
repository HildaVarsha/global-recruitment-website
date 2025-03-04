import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logo extends Component {
  render() {
    return (
      <Link className="home-link" to={"/"} title="Hireco" rel="home">
        <img
          id="logo-img"
          height="42"
          width="170"
          className="img-fluid auto_size"
          src="images/logo-img.svg"
          alt="logo-img"
        />
      </Link>
    );
  }
}

export default Logo;
