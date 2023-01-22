import React, { useState } from "react";
import { Slider } from "@material-ui/core";

function Age() {
    // age has value, isMinor
  const [age, setAge] = useState(18);

  const handleChange = (event, newAge) => {
    setAge(newAge);
    fetch(process.env.NODE_URL + "/api/age", {
      method: "POST",
      body: JSON.stringify({ age: age }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));    
  };
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>Age: </p>
      <p style={{ paddingLeft: "1rem",  paddingRight: "1rem", color:"darkblue"}}>{age}</p>
      <Slider
        value={age}
        onChange={handleChange}
        min={0}
        max={100}
        step={1}
        aria-labelledby="age-slider"
      />
    </div>
  );
}
export default Age;
