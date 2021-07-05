import "./App.css";
import ButtonAppBar from "./Components/appBar";
import { useState } from "react";
import sc from "./assets/sc.png";

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
      <div className="content">
        <div className="Container">
          {/* <div className="content-image"></div> */}
          <img src={sc} alt="Not found" />
        </div>
      </div>
    </div>
  );
}

export default App;
