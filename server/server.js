const express = require("express");
const path = require("path");
const request = require("request");
const app = express();
require("dotenv").config();

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public", "/index.html"));
});

app.listen(process.env.PORT || 5000, function () {
  console.log("Server Up and Running!");
});

app.get("/get-request", (req, res) => {
  const json = [
    {
      CryoSleep: 0, //Yes or No Toggle //0 or 1
      Age: 40.0, //Slider //0 - 100
      VIP: 1, //Toggle Yes or No //0 or 1
      RoomService: 4200.0, // Expense Number input 0 - 35000
      FoodCourt: 1539.0, //Expense  number input 0 - 35000
      ShoppingMall: 3000.0, //Expense number input 0 - 35000
      Spa: 0.0, //Expense number input 0 - 35000
      VRDeck: 0.0, //Expense number input 0 - 35000
      Group: 2, // 1 - 6 //drop down
      Num: 0, // Room Number (1 - 25) (minus 1)
      Minor: 1, //if age < 18 return 1 else return 0
      Total_Expense: 8739.0, //Sum of the top 5 expenses
      Expenditure: 1, //if total_expense == 0  return 0 else return 1
      HomePlanet_Earth: 0, //Choose home planet
      HomePlanet_Europa: 1,
      HomePlanet_Mars: 0,
      "Destination_55 Cancri e": 0, //Choose Destination planet
      "Destination_PSO J318.5-22": 0,
      "Destination_TRAPPIST-1e": 1,
      Deck_A: 1, // A  - T (Choose Deck Drop-Down)
      Deck_B: 0,
      Deck_C: 0,
      Deck_D: 0,
      Deck_E: 0,
      Deck_F: 0,
      Deck_G: 0,
      Deck_T: 0,
      Side_P: 0, // P - S Port, Starboard Side (left or right)
      Side_S: 1,
    },
  ];
  request.get(
    {
      url: process.env.API,
      json: true,
      body: json,
    },
    (error, response, body) => {
      if (error) {
        return res.status(500).send(error);
      }
      res.status(200).send({ value: body });
    }
  );
});
