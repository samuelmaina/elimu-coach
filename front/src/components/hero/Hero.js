import React from "react";
import Mainvideo from "../../assets/video.mp4";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={Mainvideo} type="video/mp4" />
      </video>
      <div className="hero-text">
        <h1>Converter</h1>
        <h1>
          <span className="blue">Number</span>Systems
        </h1>
        <p>
          Conversion in Number Systems from any base with chronological steps
        </p>
        <div className="btn-group">
          <button className="btn">Number Systems</button>
          <button className="btn btn-outline ">Documentation</button>
          <button className="btn btn-outline">FAQ</button>
        </div>
      </div>
      <div className="bottom-text">
        <h2>Total Number of Base systems available: 62 </h2>
      </div>
    </div>
  );
};

export default Hero;
