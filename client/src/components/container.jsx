import React from "react";
import bgImg from "../images/background.jpg";
import "./container.css";

function Container() {
    return (
      <div className="container">
        <div className="img-wrapper">
          <img src={bgImg} className="img-fluid" alt="Background" />
        </div>
      </div>
    );
  }
  
export default Container;
