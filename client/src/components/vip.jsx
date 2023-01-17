import React from "react";
import { FormControlLabel, Radio } from "@material-ui/core";

function Vip() {
  //Result in selectedVIP
  const [selectedVIP, setSelectedValue] = React.useState("1"); //Default is Yes
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <p>VIP: </p>
      <FormControlLabel
        style={{ paddingLeft: "1rem" }}
        control={
          <Radio
            checked={selectedVIP === "1"}
            onChange={handleChange}
            value="1"
            name="yes-no"
            color="primary"
          />
        }
        label="Yes"
      />
      <FormControlLabel
        control={
          <Radio
            checked={selectedVIP === "0"}
            onChange={handleChange}
            value="0"
            name="yes-no"
            color="primary"
          />
        }
        label="No"
      />
    </div>
  );
}

export default Vip;
