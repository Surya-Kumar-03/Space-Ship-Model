import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { useState } from "react";

const SideSelector = () => {
  const [Side_P, setSideP] = useState(0);
  const [Side_S, setSideS] = useState(1);

  const handleChange = (event) => {
    if (event.target.value === "Side_P") {
      setSideP(1);
      setSideS(0);
    } else {
      setSideP(0);
      setSideS(1);
    }
  };

  return (
    <FormControl>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Side:</p>
        <RadioGroup
          style={{ marginLeft: "1rem", padding: "0" }}
          aria-label="side"
          name="side"
          value={Side_P ? "Side_P" : "Side_S"}
          onChange={handleChange}
        >
          <FormControlLabel
            style={{ margin: "0" }}
            value="Side_P"
            control={<Radio />}
            label="Port"
          />
          <FormControlLabel
            style={{ margin: "0" }}
            value="Side_S"
            control={<Radio />}
            label="Starboard"
          />
        </RadioGroup>
      </div>
    </FormControl>
  );
};

export default SideSelector;
