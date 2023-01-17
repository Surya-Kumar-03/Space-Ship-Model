import React, { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";

function HomePlanet() {
    //earthSelected europaSelected marsSelected
  const [earthSelected, setEarthSelected] = useState(true);
  const [europaSelected, setEuropaSelected] = useState(false);
  const [marsSelected, setMarsSelected] = useState(false);

  const handleChange = (event) => {
    switch (event.target.value) {
      case 0:
        setEarthSelected(true);
        setEuropaSelected(false);
        setMarsSelected(false);
        break;
      case 1:
        setEarthSelected(false);
        setEuropaSelected(true);
        setMarsSelected(false);
        break;
      case 2:
        setEarthSelected(false);
        setEuropaSelected(false);
        setMarsSelected(true);
        break;
      default:
        break;
    }
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
      <p>Home Planet:</p>
      <Select
        value={earthSelected ? 0 : europaSelected ? 1 : marsSelected ? 2 : -1}
        onChange={handleChange}
        style={{ marginLeft: "1rem" }}
      >
        <MenuItem value={0}>Earth</MenuItem>
        <MenuItem value={1}>Europa</MenuItem>
        <MenuItem value={2}>Mars</MenuItem>
      </Select>
    </div>
  );
}

export default HomePlanet;
