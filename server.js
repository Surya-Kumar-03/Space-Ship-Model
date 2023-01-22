const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const request = require("request");
const app = express();
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./client/build")));


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/public", "/index.html"));
});

var ourCryoSleep = 0;
var ourAge = 18;
var ourMinor = 1;
var ourVip = 1;
var ourRoom = 4200;
var ourFood = 1539;
var ourShop = 3000;
var ourSpa = 0;
var ourVr = 0;
var totalExpense = 8739;
var ourGroup = 1;
var ourCancri = 1;
var ourPso = 0;
var ourTrap = 0;
app.post("/api/CryoSleep", (req, res) => {
  ourCryoSleep = req.body.selectedValue;
});

app.post("/api/age", (req, res) => {
  ourAge = req.body.age;
  if (ourAge < 18) ourMinor = 0;
  else ourMinor = 1;
  res.status(200).send("Age Received");
});

app.post("/api/vip", (req, res) => {
  ourVip = req.body.selectedVal;
});

app.post("/api/expense", (req, res) => {
  ourRoom = req.body.roomPass;
  ourFood = req.body.foodPass;
  ourShop = req.body.shopPass;
  ourSpa = req.body.spaPass;
  ourVr = req.body.vrPass;
  totalExpense = req.body.totalPass;
});

app.post("/api/group", (req, res) => {
  ourGroup = req.body.selectedGroup;
});

app.post("/destinationPlanet", (req, res) => {
  ourCancri = req.body.cancri;
  ourPso = req.body.pso;
  ourTrap = req.body.trap;
});

app.listen(process.env.PORT || 5000, function () {
  console.log("Server Up and Running!");
});

app.get("/get-request", (req, res) => {
  const json = [
    {
      CryoSleep: ourCryoSleep, //Yes or No Toggle //0 or 1
      Age: ourAge, //Slider //0 - 100
      VIP: ourVip, //Toggle Yes or No //0 or 1
      RoomService: ourRoom, // Expense Number input 0 - 35000
      FoodCourt: ourFood, //Expense  number input 0 - 35000
      ShoppingMall: ourShop, //Expense number input 0 - 35000
      Spa: ourSpa, //Expense number input 0 - 35000
      VRDeck: ourVr, //Expense number input 0 - 35000
      Group: 2, // 1 - 6 //drop down
      Num: 0, // Room Number (1 - 25) (minus 1)
      Minor: ourMinor, //if age < 18 return 1 else return 0
      Total_Expense: totalExpense, //Sum of the top 5 expenses
      Expenditure: 1, //if total_expense == 0  return 0 else return 1
      HomePlanet_Earth: 0, //Choose home planet
      HomePlanet_Europa: 1,
      HomePlanet_Mars: 0,
      "Destination_55 Cancri e": ourCancri, //Choose Destination planet
      "Destination_PSO J318.5-22": ourPso,
      "Destination_TRAPPIST-1e": ourTrap,
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
