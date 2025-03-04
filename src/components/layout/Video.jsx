import React, { Component, useState } from "react";
import FsLightbox from "fslightbox-react";
import { Link } from "react-router-dom";

const Video = ({ className }) => {
  const [toggler, setToggler] = useState(false);

  return (
    <div className="Video-content">
      <Link onClick={() => setToggler(!toggler)} className=" d-flex">
        <i className={className}></i>
      </Link>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=YLN1Argi7ik"]}
      />
    </div>
  );
};

export default Video;
