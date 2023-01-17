import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Checkout from "./components/Pages/Checkout";
import Details from "./components/Pages/Details";
import Home from "./components/Pages/Home";
function App() {
  return (
    <Router>
      <div id="container">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/details" exact element={<Details />} />
          <Route path="/checkout" exact element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
