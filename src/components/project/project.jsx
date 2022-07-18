import React from "react";
import "./project.css";

import DevHireimg from "./../../assests/DevHire.png";
import visitorcounterimg from "./../../assests/visitorCounter.png";
import actodcconvoimg from "./../../assests/actodcconvo.jpg";
import WeatherApp from "./../../assests/weatherapp.png";
import NameIt from "./../../assests/nameit.png";
import FlashType from "./../../assests/flashtype.png";

import Project from "./../../assests/projects_image.svg";

const project = () => {
  return (
    <div id="project" className="project-container">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="project-heading"
      >
        Projects
      </div>
      <div className="project-section">
        <div data-aos="fade-right" data-aos-duration="1200">
          <img className="project-img" src={Project} alt="Project" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1600"
          className="project-quote"
        >
          My projects makes use of variety of technology tools. My best
          experience is to create Full Stack projects and deploy them to web
          applications.
        </div>
      </div>
      <div className="all-projects">
        <div className="all-project-top">
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="project-cafebristo"
          >
            <img className="cafebristo-img" src={DevHireimg} alt="CafeBristo" />
            <div className="cafebristo-description">
              A FullStack Hiring Website built in Html Css Raect.js Node.js
              where a user can Hire Developers Testers And Many Others And Also
              Can Get Hired On Various Job Profiles
            </div>
            <div className="cafebristo-code-options">
              <a
                href="https://github.com/grey-w0lF/DevHire"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className="cb-src-code-btn">Source Code</div>
              </a>
              <a
                href="https://adityashekhartiwary.github.io/cafebristo/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className="cb-live-site-btn">Live Site</div>
              </a>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="project-flashtype"
          >
            <img
              className="flashtype-img"
              src={visitorcounterimg}
              alt="Flashtype"
            />
            <div className="flashtype-description">
              A Electronics Based Project Which Automatically Turns On And Off
              The Load According To The Number Of Peoples Visiting And Leaving.
            </div>
            <div className="flashtype-code-options">
              <a
                href="https://github.com/grey-w0lF/VisitorCounter"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className="ft-src-code-btn">Report</div>
              </a>
              <a
                href="https://drive.google.com/file/d/1N4l-wwonk3EftFa7ivGJZNJ8pZmIjib9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className="ft-live-site-btn">Video</div>
              </a>
            </div>
          </div>
        </div>
        <div className="all-project-bottom">
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="project-nameit"
          >
            <img className="nameit-img" src={actodcconvoimg} alt="Nameit" />
            <div className="nameit-description">
              An Electronic Circuit That Converts The AC Mains Supply Voltage
              Into DC Voltage of 5 Volts
            </div>
            <div className="nameit-code-options">
              <a
                href="https://github.com/grey-w0lF/AcToDcConverter"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className="ni-src-code-btn">Report</div>
              </a>
              <a
                href="https://drive.google.com/file/d/1N4l-wwonk3EftFa7ivGJZNJ8pZmIjib9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className="ni-live-site-btn">Video</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default project;
