import React, { useState } from "react";
import { TextField } from "@material-ui/core";

function RoomNumber() {
  const [roomNumber, setRoomNumber] = useState(1);

  const handleChange = (event) => {
    if(event.target.value < 0) setRoomNumber(0);
    else if(event.target.value > 24) setRoomNumber(24);
    else setRoomNumber(event.target.value);
  };
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <p>Room Number [1 - 24]:</p>
      <TextField
        style={{ marginLeft: "1rem" }}
        label="Number"
        type="number"
        inputProps={{ min: "1", max: "24", step: "1" }}
        value={roomNumber}
        onChange={handleChange}
      />
    </div>
  );
}

export default RoomNumber;
