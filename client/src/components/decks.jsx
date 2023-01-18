import { Select, MenuItem } from "@material-ui/core";
import { useState } from "react";

function DeckSelector() {
  //Deck_A, Deck_B, Deck_C, Deck_D, Deck_E, Deck_F, Deck_G, Deck_T
  const [Deck_A, setDeckA] = useState(1);
  const [Deck_B, setDeckB] = useState(0);
  const [Deck_C, setDeckC] = useState(0);
  const [Deck_D, setDeckD] = useState(0);
  const [Deck_E, setDeckE] = useState(0);
  const [Deck_F, setDeckF] = useState(0);
  const [Deck_G, setDeckG] = useState(0);
  const [Deck_T, setDeckT] = useState(0);
  const [selectedDeck, setSelectedDeck] = useState("Deck_A");

  const handleChange = (event) => {
    setSelectedDeck(event.target.value);
    switch (event.target.value) {
      case "Deck_A":
        setDeckA(1);
        setDeckB(0);
        setDeckC(0);
        setDeckD(0);
        setDeckE(0);
        setDeckF(0);
        setDeckG(0);
        setDeckT(0);
        break;
      case "Deck_B":
        setDeckA(0);
        setDeckB(1);
        setDeckC(0);
        setDeckD(0);
        setDeckE(0);
        setDeckF(0);
        setDeckG(0);
        setDeckT(0);
        break;
      case "Deck_C":
        setDeckA(0);
        setDeckB(0);
        setDeckC(1);
        setDeckD(0);
        setDeckE(0);
        setDeckF(0);
        setDeckG(0);
        setDeckT(0);
        break;
      case "Deck_D":
        setDeckA(0);
        setDeckB(0);
        setDeckC(0);
        setDeckD(1);
        setDeckE(0);
        setDeckF(0);
        setDeckG(0);
        setDeckT(0);
        break;
      case "Deck_E":
        setDeckA(0);
        setDeckB(0);
        setDeckC(0);
        setDeckD(0);
        setDeckE(1);
        setDeckF(0);
        setDeckG(0);
        setDeckT(0);
        break;
      case "Deck_F":
        setDeckA(0);
        setDeckB(0);
        setDeckC(0);
        setDeckD(0);
        setDeckE(0);
        setDeckF(1);
        setDeckG(0);
        setDeckT(0);
        break;
      case "Deck_G":
        setDeckA(0);
        setDeckB(0);
        setDeckC(0);
        setDeckD(0);
        setDeckE(0);
        setDeckF(0);
        setDeckG(1);
        setDeckT(0);
        break;
      case "Deck_T":
        setDeckA(0);
        setDeckB(0);
        setDeckC(0);
        setDeckD(0);
        setDeckE(0);
        setDeckF(0);
        setDeckG(0);
        setDeckT(1);
        break;
      default:
        break;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>Deck:</p>
      <Select value={selectedDeck} onChange={handleChange} style={{marginLeft:"1rem"}}>
        <MenuItem value="Deck_A">Deck A</MenuItem>
        <MenuItem value="Deck_B">Deck B</MenuItem>
        <MenuItem value="Deck_C">Deck C</MenuItem>
        <MenuItem value="Deck_D">Deck D</MenuItem>
        <MenuItem value="Deck_E">Deck E</MenuItem>
        <MenuItem value="Deck_F">Deck F</MenuItem>
        <MenuItem value="Deck_G">Deck G</MenuItem>
        <MenuItem value="Deck_T">Deck T</MenuItem>
      </Select>
    </div>
  );
}

export default DeckSelector;
