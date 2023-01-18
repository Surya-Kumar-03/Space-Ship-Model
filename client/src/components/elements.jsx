import React, { useState } from "react";
import CryoSleep from "./cryosleep";
import Age from "./age";
import Vip from "./vip";
import Expense from "./expense";
import Group from "./groups";
import RoomNumber from "./roomNumber";
import HomePlanet from "./homePlanet";
import DestinationPlanet from "./destinationPlanet";
import DeckSelector from "./decks";
import { Button } from "@material-ui/core";
import SideSelector from "./side";

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
        <RoomNumber></RoomNumber>
        <HomePlanet></HomePlanet>
        <DestinationPlanet></DestinationPlanet>
        <DeckSelector></DeckSelector>
        <SideSelector></SideSelector>
        <div>
          <Button
            style={{
              fontWeight: "bolder",
              backgroundColor: "gray",
              margin:"1rem"
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
  }
}

export default Elements;
