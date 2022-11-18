import React from "react";
import about from "../img/about.jpg";

function ImageSection() {
  return (
    <div className="imageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          My Name is <span>Jeethesh</span>
        </h4>
        {/* <p className="about-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. FCulpa harum
          nulla saepe sunt aperiam voluptatem!
        </p> */}
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Address</p>
            <p>Qualification</p>
            <p>Graduated </p>
            <p>Institution </p>
            <p>University</p>
          </div>
          <div className="right-section">
            <p>: Jeethesh H K</p>
            <p>: Kudupu,</p>
            <p>: B.C.A / M.C.A</p>
            <p>: 2019</p>
            <p>: St Joseph Engineering College, Vamanjoor (SJEC)</p>
            <p>: Visvesvaraya Technological University (VTU)</p>
          </div>
        </div>
        <button className="btn">download cv</button>
      </div>
    </div>
  );
}

export default ImageSection;
