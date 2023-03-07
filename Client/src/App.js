import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Checkout from "./components/Pages/Checkout";
import Details from "./components/Pages/Details";
import Home from "./components/Home/Home";
import { theme } from "./styles/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/details/:id" exact element={<Details />} />
          <Route path="/checkout" exact element={<Checkout />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
