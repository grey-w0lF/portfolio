import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import navLogo from "../../assests/logo.png";

const Nav = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      className="nav-container"
    >
      <div className="nav-left">
        <div className="name">
          {" "}
          <img className="navLogo" src={navLogo}></img>{" "}
        </div>
      </div>
      <div className="menus">
        <a href="#home" style={{ textDecoration: "none" }}>
          <div className="home">Home</div>
        </a>
        <a href="#about" style={{ textDecoration: "none" }}>
          <div className="About">About</div>
        </a>
        <a href="#project" style={{ textDecoration: "none" }}>
          <div className="project">Project</div>
        </a>
        <a href="#contact" style={{ textDecoration: "none" }}>
          <div className="contact">Contact</div>
        </a>
      </div>
    </div>
  );
};
export default Nav;
