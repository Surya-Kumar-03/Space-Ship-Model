import React from "react";
import CryoSleep from "./cryosleep";
import Age from "./age";
import Vip from "./vip";

function Elements() {
  return (
    <div style={{margin:"0.5rem"}}>
      <h1>Fill out the parameters to predict your survival!</h1>
      <CryoSleep></CryoSleep>
      <Age></Age>
      <Vip></Vip>
    </div>
  );
}

export default Elements;
