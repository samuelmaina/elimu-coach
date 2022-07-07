import React from "react";
import "./About.css";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h2>A Conversion Calculator</h2>
        <p>
          The Number Systems and bases can be converted to each other base
          system, and represented in standard form.
        </p>
        <div className="card-container">
          <div className="card">
            <a>
              <AboutCard
                base={3}
                icon={<SiHiveBlockchain className="icon" />}
                heading="The Binary, Base 2"
                text="The Binary converter, Base 2"
              />
            </a>
          </div>
          <div className="card">
            <AboutCard
              base={2}
              icon={<SiStrapi className="icon" />}
              heading="The Hexadecimal, Base 16"
              text="Convert any number to hexadecimal, base 16."
            />
          </div>
          <div className="card">
            <AboutCard
              base={16}
              icon={<SiFsecure className="icon" />}
              heading="The Decimal, Base 10"
              text="Convert any number to Decimal, base 10."
            />
          </div>
          <div className="card">
            <AboutCard
              base={32}
              icon={<VscServerProcess className="icon" />}
              heading="The Octal, Base 8"
              text="Convert any number to Octal, base 8."
            />
          </div>
        </div>
        <a href="/" className="btn">
          Use Defi
        </a>
      </div>
    </div>
  );
};

export default About;
