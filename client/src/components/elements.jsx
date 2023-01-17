import React, { useState } from "react";
import CryoSleep from "./cryosleep";
import Age from "./age";
import Vip from "./vip";
import Expense from "./expense";
import Group from "./groups";

function Elements() {
  const [pageNumber, setPageNumber] = useState(1);

  function changePageNumber() {
    setPageNumber(pageNumber + 1);
  }

  if (pageNumber === 1) {
    return (
      <div style={{ margin: "1rem" }}>
        <h1>Fill out the parameters to predict your survival!</h1>
        <CryoSleep></CryoSleep>
        <Age></Age>
        <Vip></Vip>
        <Expense changePage={changePageNumber}></Expense>
      </div>
    );
  } else if (pageNumber === 2) {
    return (
      <div style={{ margin: "1rem" }}>
        <h1>Just a few more!</h1>
        <Group></Group>
      </div>
    );
  }
}

export default Elements;
