import React, { useState } from "react";
import { Slider } from "@material-ui/core";

function Age() {
    // age has value, isMinor
  const [age, setAge] = React.useState(18);
  const [isMinor, setIsMinor] = useState(false);

  const handleChange = (event, newAge) => {
    if(age < 18) setIsMinor(true);
    else setIsMinor(false);
    setAge(newAge);
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
