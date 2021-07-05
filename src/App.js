import { Description } from "@material-ui/icons";
import "./App.css";
import ButtonAppBar from "./Components/appBar";
import { useState } from "react";

function App() {
  const [menu, setmenu] = useState([
    "Acceuil",
    "Description du jeu",
    "Lien et guide d'installation",
    "Comment jouer?",
    "A propos",
  ]);

  return (
    <div className="App">
      <ButtonAppBar menuItems={menu}></ButtonAppBar>
    </div>
  );
}

export default App;
