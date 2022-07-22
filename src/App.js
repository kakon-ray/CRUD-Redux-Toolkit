import logo from "./logo.svg";
import "./App.css";
import React from "react";
import HeaderNavbar from "./Component/HeaderNavbar/HeaderNavbar";
import Home from "./Pages/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import AddProduct from "./Pages/AddProduct/AddProduct";
import Editproduct from "./Pages/EditProduct/Editproduct";
function App() {
  return (
    <React.Fragment>
      <HeaderNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="editProduct" element={<Editproduct />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
