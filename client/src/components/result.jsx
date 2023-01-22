import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../helper";

function Result() {
  const [display, setDisplay] = useState("Loading...");

  async function getPrediction() {
    try {
      const response = await axios.get(BASE_URL + "/get-request");
      setDisplay(response.data.value);
    } catch (error) {
      console.log(error);
      setDisplay("Model Error!");
    }
  }

  useEffect(() => {
    getPrediction();
  }, []);
  return (
    <div>
      <p style={{ fontSize: "5rem", display:"flex", justifyContent:"center" }}>{display}</p>
      <h1>[Note: Default values assigned for unfilled parameters]</h1>
    </div>
  );
}

export default Result;
