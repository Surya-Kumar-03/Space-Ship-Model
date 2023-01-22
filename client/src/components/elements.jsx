import React, { useState } from "react";
import CryoSleep from "./cryosleep";
import Age from "./age";
import Vip from "./vip";
import Expense from "./expense";
import Group from "./groups";
import HomePlanet from "./homePlanet";
import DestinationPlanet from "./destinationPlanet";
import { Button } from "@material-ui/core";
import Result from "./result";

function Elements() {
  const [pageNumber, setPageNumber] = useState(1);

  function changePageNumber() {
    setPageNumber(pageNumber + 1);
  }

  function pageNumberDecrementor() {
    setPageNumber(pageNumber - 1);
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
      <div
        style={{
          margin: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Just a few more!</h1>
        <Group></Group>
        <HomePlanet></HomePlanet>
        <DestinationPlanet></DestinationPlanet>
        <div>
          <Button
            style={{
              fontWeight: "bolder",
              backgroundColor: "gray",
              margin: "1rem",
            }}
            onClick={pageNumberDecrementor}
          >
            Back
          </Button>
          <Button
            style={{
              fontWeight: "bolder",
              backgroundColor: "skyblue",
            }}
            onClick={changePageNumber}
          >
            Predict
          </Button>
        </div>
      </div>
    );
  } else if(pageNumber == 3) {
    return (<Result></Result>)
  }
}

export default Elements;
