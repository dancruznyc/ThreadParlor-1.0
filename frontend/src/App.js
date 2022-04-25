import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import SideNavigation from "./components/SideNavigation";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import LookBook from "./pages/LookBook";

function App() {
  const [sideNavHider, setSideNavHider] = useState("");
  function sideNavHelper(classN) {
    setSideNavHider(classN);
  }
  return (
    <div className="App">
      <Router>
        <Navigation sideNavHelper={sideNavHelper} />
        <SideNavigation sideNavHider={sideNavHider} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/lookbook" element={<LookBook />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
