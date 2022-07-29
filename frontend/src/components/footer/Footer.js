import React from "react";
import "./Footer.css";

const footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col">
          <h4>Number Systems</h4>
          <p>Origin</p>
          <p>History</p>
          <p>Algorithm</p>
          <p>Binary Coded Decimal</p>
        </div>
        <div className="col">
          <h4 style={{ color: "white" }}>How it Works</h4>
          <p>Directions</p>
          <p>Working</p>
          <p>Base/Radix</p>
          <p>Convertor</p>
        </div>

        <div className="col">
          <h4>Community</h4>
          <p>Notifications</p>
          <p>Analytics</p>
          <p>Subscriptions</p>
          <p>About Kokotoa</p>
        </div>
      </div>
    </div>
  );
};

export default footer;
