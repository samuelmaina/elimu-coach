import React from "react";
import Convert from "../convertor/Convertor";
import "./About.css";

const AboutCard = ({ base, icon, heading, text }) => {
  return (
    <a onClick={(e) => {}}>
      <div className="icon-container">{icon}</div>
      <h3>{heading}</h3>
      <p>{text}</p>
    </a>
  );
};

export default AboutCard;
