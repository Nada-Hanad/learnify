import "./App.css";
import ButtonAppBar from "./Components/appBar";
import { useState } from "react";
import sc from "./assets/sc.png";
import React from "react";

function App() {
  const [menu, setmenu] = useState([
    "Acceuil",
    "Description du jeu",
    "Lien et guide d'installation",
    "Comment jouer?",
    "A propos",
  ]);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="App">
      <ButtonAppBar
        prevOpen={prevOpen}
        handleClose={handleClose}
        handleListKeyDown={handleListKeyDown}
        handleToggle={handleToggle}
        menuItems={menu}
        anchorRef={anchorRef}
        open={open}
        setOpen={setOpen}
      ></ButtonAppBar>
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
