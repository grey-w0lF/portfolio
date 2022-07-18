import React from "react";
import "./about.css";

import programmer from "./../../assests/programmer.svg";
import developer from "./../../assests/fullstack.svg";

import LeetCode from "./../../assests/leetcode.svg";
import CodeForces from "./../../assests/codeforces.svg";
import CodeChef from "./../../assests/codechef.svg";
import GFG from "./../../assests/gfg.svg";

import Node from "./../../assests/node.svg";
import ReactImg from "./../../assests/react.png";
import Mongo from "./../../assests/mongo.png";
import JS from "./../../assests/javascript.png";

const about = () => {
  return (
    <div
      id="about"
      className="about-container" /*data-aos="fade-up" data-aos-duration="1000"*/
    >
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="about-heading"
      >
        What I Do ?
      </div>
      <div className="cp">
        <div
          data-aos="fade-right"
          data-aos-duration="2500"
          className="programmer-image"
        >
          <img className="cp-image" src={programmer} alt="Pogrammer" />
        </div>
        <div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="competitive"
          >
            Multi Language Programming
          </div>

          <div className="cp-description">
            <div data-aos="fade-left" data-aos-duration="1400">
              ⚡ I use C++ for Programming Problems
            </div>
            <div data-aos="fade-left" data-aos-duration="1600">
              ⚡ I use JavaScript For Development
            </div>
          </div>
        </div>
      </div>
      <div className="dev">
        <div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="development"
          >
            Full Stack Development
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="dev-logo"
          >
            <img className="js-img" src={JS} alt="HTML JavaScript CSS" />
            <img className="react-img" src={ReactImg} alt="ReactJs" />
            <img className="node-img" src={Node} alt="NodeJs" />
            <img className="mongo-img" src={Mongo} alt="MongoDB" />
          </div>

          <div className="developer-description">
            <div
              data-aos="fade-right"
              data-aos-duration="1400"
              className="dev-front"
            >
              ⚡ Building resposive website front end using React
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1600"
              className="dev-back"
            >
              ⚡ Creating application backend in Node, Express
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1600"
          className="developer-image"
        >
          <img className="dev-image" src={developer} alt="Pogrammer" />
        </div>
      </div>
    </div>
  );
};

export default about;
