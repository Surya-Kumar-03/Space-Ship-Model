import React from "react";
import { Slider } from "@material-ui/core";

function Age() {
    // age has value
  const [age, setAge] = React.useState(18);

  const handleChange = (event, newAge) => {
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
