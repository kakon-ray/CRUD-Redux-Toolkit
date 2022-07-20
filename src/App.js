import logo from "./logo.svg";
import "./App.css";
import React from "react";
import HeaderNavbar from "./Component/HeaderNavbar/HeaderNavbar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <React.Fragment>
      <HeaderNavbar />
      <Home />
    </React.Fragment>
  );
}

export default App;
