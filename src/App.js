import logo from "./logo.svg";
import "./App.css";
import React from "react";
import HeaderNavbar from "./Component/HeaderNavbar/HeaderNavbar";
import Home from "./Pages/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import AddProduct from "./Pages/AddProduct/AddProduct";

function App() {
  return (
    <React.Fragment>
      <HeaderNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addproduct" element={<AddProduct />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
