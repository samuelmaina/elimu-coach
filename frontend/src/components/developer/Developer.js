import React from "react";
import "./Developer.css";
import Terminal from "../../assets/terminal.png";

const Developer = () => {
  return (
    <div className="developers">
      <div className="container">
        <div className="left">
          <h2>Workbook for recent conversions</h2>
          <p>
            Checkout the <span className="blue">WORKBOOK</span>, the{" "}
            <span className="blue">quick start </span>
            or a guide below to follow the steps used in conversion from the
            source radix to the destination base. The workbook shows how the
            sytem arrived at the displayed result. The working is shown in
            chronological order from the very first step , including any
            intermediary conversions to the last step that leads to the
            displayed result.{" "}
          </p>
        </div>
        <div className="right">
          <div className="img-container">
            <img style={{ height: "350px" }} src={Terminal} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
