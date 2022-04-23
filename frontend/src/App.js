import "./App.css";
import React, { useState } from "react";
import Navigation from "./components/Navigation";
import SideNavigation from "./components/SideNavigation";
import Home from "./pages/Home";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
