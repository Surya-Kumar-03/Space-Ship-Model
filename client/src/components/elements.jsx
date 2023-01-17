import React from "react";
import CryoSleep from "./cryosleep";

function Elements() {
  return (
    <div style={{margin:"0.5rem"}}>
      <h1>Fill out the parameters to predict your survival!</h1>
      <CryoSleep></CryoSleep>
    </div>
  );
}

export default Elements;
