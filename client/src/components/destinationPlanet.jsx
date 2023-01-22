import React, { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";
import axios from "axios";

function DestinationPlanet() {
    //cancriSelected psoSelected trappistSelected
  const [cancriSelected, setCancriSelected] = useState(true);
  const [psoSelected, setPsoSelected] = useState(false);
  const [trappistSelected, setTrappistSelected] = useState(false);

  function callChange(){
    axios.post("/destinationPlanet", {
      cancri : cancriSelected,
      pso : psoSelected,
      trap : trappistSelected
    })
  }

  const handleChange = (event) => {
    switch (event.target.value) {
      case 0:
        setCancriSelected(true);
        setPsoSelected(false);
        setTrappistSelected(false);
        break;
      case 1:
        setCancriSelected(false);
        setPsoSelected(true);
        setTrappistSelected(false);
        break;
      case 2:
        setCancriSelected(false);
        setPsoSelected(false);
        setTrappistSelected(true);
        break;
      default:
        break;
    }
    callChange();
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
      <p>Destination Planet:</p>
      <Select
        value={cancriSelected ? 0 : psoSelected ? 1 : trappistSelected ? 2 : -1}
        onChange={handleChange}
        style={{ marginLeft: "1rem" }}
      >
        <MenuItem value={0}>55 Cancri e</MenuItem>
        <MenuItem value={1}>PSO J318.5-22</MenuItem>
        <MenuItem value={2}>TRAPPIST-1e</MenuItem>
      </Select>
    </div>
  );
}

export default DestinationPlanet;
