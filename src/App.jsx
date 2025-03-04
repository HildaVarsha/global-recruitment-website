import React from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/vendor/flaticon.css";
import "./css/vendor/fontawesome.min.css";
import "./css/vendor/themify-icons.css";
import "./css/vendor/animate.css";
import "./index.scss";

import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";

import About_us from "./pages/About_us";
import Services from "./pages/Services";
import Services_details from "./pages/Services_details";
import Blog_classic from "./pages/Blog_classic";
import Blog_grid from "./pages/Blog_grid";
import Blog_details from "./pages/Blog_details";
import Contact_01 from "./pages/Contact_01";
import Contact_02 from "./pages/Contact_02";
import Job_list from "./pages/Job_list";
import Job_details from "./pages/Job_details";
import Carrer_01 from "./pages/Carrer_01";
import Error_404 from "./pages/Error_404";
import Error_405 from "./pages/Error_405";
import Employers_list from "./pages/Employers_list";
import Employers_details from "./pages/Employers_details";
import Candidate_list from "./pages/Candidate_list";
import Candidate_details from "./pages/Candidate_details";
import Login from "./pages/Login";
import Register from "./pages/Register";

import ScrollToTop from "./components/layout/Gotop";

function App() {
  return (
    <div className="page">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Home2" element={<Home2 />} />
          <Route path="/Home3" element={<Home3 />} />

          <Route path="/About_us" element={<About_us />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Services_details" element={<Services_details />} />
          <Route path="/Blog_classic" element={<Blog_classic />} />
          <Route path="/Blog_grid" element={<Blog_grid />} />
          <Route path="/Blog_details" element={<Blog_details />} />
          <Route path="/Contact_01" element={<Contact_01 />} />
          <Route path="/Contact_02" element={<Contact_02 />} />
          <Route path="/Job_list" element={<Job_list />} />
          <Route path="/Job_details" element={<Job_details />} />
          <Route path="/Carrer_01" element={<Carrer_01 />} />
          <Route path="/Error_404" element={<Error_404 />} />
          <Route path="/Error_405" element={<Error_405 />} />
          <Route path="/Employers_list" element={<Employers_list />} />
          <Route path="/Employers_details" element={<Employers_details />} />
          <Route path="/Candidate_list" element={<Candidate_list />} />
          <Route path="/Candidate_details" element={<Candidate_details />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
