import React from "react";
import { TextField, Button } from "@material-ui/core";

function Expense(props) {
  //RoomService FoodCourt ShoppingMall Spa VRDeck Total_Expense 
  //Set Expenditure need to test
  const [RoomService, setRoomService] = React.useState(0);
  const [FoodCourt, setFoodCourt] = React.useState(0);
  const [ShoppingMall, setShoppingMall] = React.useState(0);
  const [Spa, setSpa] = React.useState(0);
  const [VRDeck, setVRDeck] = React.useState(0);
  const [Total_Expense, setTotal_Expense] = React.useState(0);
  const [Expenditure, setExpenditure] = React.useState(0);

  const handleChange1 = (event) => {
    if (event.target.value < 0) setRoomService(0);
    else if (event.target.value > 35000) setRoomService(35000);
    else setRoomService(event.target.value);
  };

  const handleChange2 = (event) => {
    if (event.target.value < 0) setFoodCourt(0);
    else if (event.target.value > 35000) setFoodCourt(35000);
    else setFoodCourt(event.target.value);
  };

  const handleChange3 = (event) => {
    if (event.target.value < 0) setShoppingMall(0);
    else if (event.target.value > 35000) setShoppingMall(35000);
    else setShoppingMall(event.target.value);
  };

  const handleChange4 = (event) => {
    if (event.target.value < 0) setVRDeck(0);
    else if (event.target.value > 35000) setVRDeck(35000);
    else setVRDeck(event.target.value);
  };

  const handleChange5 = (event) => {
    if (event.target.value < 0) setSpa(0);
    else if (event.target.value > 35000) setSpa(35000);
    else setSpa(event.target.value);
  };

  const calculateTotal = () => {
    setTotal_Expense(
      parseFloat(RoomService) +
        parseFloat(FoodCourt) +
        parseFloat(ShoppingMall) +
        parseFloat(Spa) +
        parseFloat(VRDeck)
    );
    if(Total_Expense > 0) setExpenditure(1)
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p style={{ margin: "0" }}>Your Expenditure: [0 - 35,000]</p>
      <TextField
        label="Room Service"
        onChange={handleChange1}
        type="number"
        min={0}
        max={35000}
      />
      <TextField
        label="Food Court"
        onChange={handleChange2}
        type="number"
        min={0}
        max={35000}
      />
      <TextField
        label="Shopping Mall"
        onChange={handleChange3}
        type="number"
        min={0}
        max={35000}
      />
      <TextField
        label="Spa"
        onChange={handleChange4}
        type="number"
        min={0}
        max={35000}
      />
      <TextField
        label="VR Deck"
        onChange={handleChange5}
        type="number"
        min={0}
        max={35000}
      />
      <Button
        style={{
          margin: "1rem",
          fontWeight: "bolder",
          backgroundColor: "gray",
        }}
        onClick={() => {
          calculateTotal();
          props.changePage();
        }}
      >
        Next
      </Button>
    </div>
  );
}

export default Expense;
