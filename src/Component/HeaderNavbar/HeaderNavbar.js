import React from "react";
import "./HeaderNavbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
const HeaderNavbar = () => {
  return (
    <Navbar bg="light" expand="xl">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link link-style">
              Home
            </Link>
            <Link to="/addproduct" className="nav-link link-style">
              Add Product
            </Link>

            <Nav.Link href="#link" className="link-style">
              About Us
            </Nav.Link>
            <Nav.Link href="#link" className="link-style">
              Order
            </Nav.Link>
            <Nav.Link href="#link" className="link-style">
              All Product
            </Nav.Link>
            <Nav.Link href="#link" className="link-style">
              Services
            </Nav.Link>

            <Nav.Link href="#link" className="link-style">
              Contact
            </Nav.Link>

            <NavDropdown title="Importent Link" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
