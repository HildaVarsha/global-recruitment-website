import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logo extends Component {
  render() {
    return (
      <Link className="home-link" to={"/"} title="" rel="home">
        <img
          id="logo-img"
          height="60"
          width="170"
          className="img-fluid auto_size"
          src="/logo-global.png"
          alt="logo-img"
          style={{objectFit:'cover'}}
        />
      </Link>
    );
  }
}

export default Logo;
