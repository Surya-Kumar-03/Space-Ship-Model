import React from "react";
import bgImg from "../images/background.jpg";
import "./container.css";
import { Container as ElementsContainer } from "@material-ui/core";

function Container() {
  return (
    <div className="container">
      <div className="img-wrapper">
        <img src={bgImg} className="img-fluid" alt="Background" />
        <ElementsContainer
          style={{
            backgroundColor: "rgba(69, 69, 69, 0.3)",
            display: "flex",
            marginTop: "5rem",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80vh",
            borderRadius: "4rem",
          }}
        ></ElementsContainer>
      </div>
    </div>
  );
}

export default Container;
