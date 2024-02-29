import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Body.css";
import Experiences from "./Experiences";
import Awards from "./Awards";
import "./Experiences.css";

function Body() {
  return (
    <>
      {/* --------part1 landing page start--------- */}
      <div className="part1">
        <div className="part1__left">
          <div className="part1__left__cont">
            <p>Associate Professor</p>
            <h1>Dr. Arun Kumar</h1>
            <h1>Dubey</h1>
          </div>
        </div>
        <div className="part1__photo"></div>
        <div className="part1__right">
          <div className="part1__right__line"></div>
          <div className="part1__right__cont">
            <p>
              Arun Kumar Dubey received his Ph.D. in Computer <br /> Science &
              Engineering at USICT, GGSIPU Delhi, <br /> India. His research
              interests are in the areas <br /> of Medical Computer vision using
              <br />
              Deep Learning.
            </p>
          </div>
        </div>
      </div>
      {/* --------part1 landing page end--------- */}
      {/* --------part2 landing page start--------- */}
      <div className="part2">
        <Experiences line="experience__line1" line2="card__line"></Experiences>
      </div>
      {/* --------part2 landing page end--------- */}
      {/* --------part3 landing page start--------- */}
      <div className="part3">
        <Awards></Awards>
      </div>
      {/* --------part3 landing page end--------- */}
      {/* -------part4 start----------- */}
      <div className="part4" id="patent">
        <div className="part4__head">
        <div className="experiences">
          <div className="experiences__heading">
            <div className="experiences__heading__h1">
              <h1>PATENT</h1>
              <div className="experiences__line" id="line1"></div>
            </div>
          </div>
        </div>
        </div>
        <div className="patent__cont">
          <p>
            Australian Patent Granted: Title of the invention: Intelligent
            System & Method for Home surveillance with warning of robber
            activities using IOT and Artificial Intelligence” Application
            No.2021105181, File Date : 09/08/2021, The Patent Office Journal No.
            44/2021 Dated 29/10/2021
          </p>
          <p>
            Indian Patent Granted: “IOT AND MACHINE LEARNING BASED SMART
            HEALTHCARE DEVICE” Design No: 400064-001on 16/11/2023 .
          </p>
        </div>
      </div>
      {/* -------part4 end----------- */}
    </>
  );
}

export default Body;
