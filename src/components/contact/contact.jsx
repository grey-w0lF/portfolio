import React from "react";
import "./contact.css";

import Man from "./../../assests/contact.svg";
import Linkedin from "./../../assests/linkedin.png";
import Github from "./../../assests/github.png";
import Facebook from "./../../assests/facebook.png";
import Gmail from "./../../assests/google.png";

const contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div data-aos="fade-up" data-aos-duration="1000" className="contact-text">
        Contact
      </div>
      <div className="contact-area">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="contact-area-img"
        >
          <img className="contact-img" src={Man} alt="Contact mail" />
        </div>
        <div className="description-and-logo">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="contact-description"
          >
            I am available on almost every social media. You can message me, I
            will reply within 24 hours. I can help you with ReactJS,NodeJs and
            Javascript
          </div>
          <div className="social-media-logo">
            <div
              data-aos="fade-left"
              data-aos-duration="1200"
              className="linkedin-logo"
            >
              <a
                href="https://www.linkedin.com/in/abhinav-raj-a47588209/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="linkedin-img" src={Linkedin} alt="l" />
              </a>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="1400"
              className="github-logo"
            >
              <a
                href="https://github.com/grey-w0lF"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="github-img" src={Github} alt="g" />
              </a>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="1600"
              className="gmail-logo"
            >
              <a
                href="mailto:abhinavrocky7488@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="gmail-img" src={Gmail} alt="gm" />
              </a>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/15G3RskOo0hA1FguP9UJT1KwrT2bs2Wlq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div
              data-aos="fade-left"
              data-aos-duration="1400"
              className="resume"
            >
              See My Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default contact;
