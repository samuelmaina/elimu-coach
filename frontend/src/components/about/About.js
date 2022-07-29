import React, { useTransition } from "react";
import "./About.css";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

import Convert from "../convertor/Convertor";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h2>A Conversion Calculator</h2>
        <p>
          The Number Systems and bases can be converted to each other base
          system, and represented in standard form.
        </p>
        <div
          style={{
            width: "100%",
            marginLeft: "0",
            backgroundColor: "white",
            border: "solid blue 50%",
          }}
        >
          <Convert base={2} />
        </div>
      </div>
    </div>
  );
};

export default About;

<div className="card-container">
  <a href="/convert/2">
    <div className="card">
      <AboutCard
        icon={<SiHiveBlockchain className="icon" />}
        heading="The Binary, Base 2"
        text="The Binary converter, Base 2"
      />
    </div>
  </a>
  <div className="card">
    <a href="/convert/16">
      <AboutCard
        icon={<SiStrapi className="icon" />}
        heading="The Hexadecimal, Base 16"
        text="Convert any number to hexadecimal, base 16."
      />
    </a>
  </div>

  <a href="/convert/10">
    <div className="card">
      <AboutCard
        icon={<SiFsecure className="icon" />}
        heading="The Decimal, Base 10"
        text="Convert any number to Decimal, base 10."
      />
    </div>
  </a>

  <a href="/convert/8">
    <div className="card">
      <AboutCard
        icon={<VscServerProcess className="icon" />}
        heading="The Octal, Base 8"
        text="Convert any number to Octal, base 8."
      />
    </div>
  </a>
</div>;
