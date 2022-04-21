import "./App.css";
import React, { useState } from "react";
import Carousel from "./components/Carousel";
import Navigation from "./components/Navigation";
import SideNavigation from "./components/SideNavigation";
import Home from "./pages/Home";

function App() {
  const [sideNavHider, setSideNavHider] = useState("");
  function sideNavHelper(classN) {
    setSideNavHider(classN);
  }
  return (
    <div className="App">
      <Navigation sideNavHelper={sideNavHelper} />
      <SideNavigation sideNavHider={sideNavHider} />
      <Home />
    </div>
  );
}

export default App;
