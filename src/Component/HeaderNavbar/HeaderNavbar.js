import React from "react";
import "./HeaderNavbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const HeaderNavbar = () => {
  return (
    <Navbar bg="light" expand="xl">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="link-style">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="link-style">
              About Us
            </Nav.Link>
            <Nav.Link href="#link" className="link-style">
              Order
            </Nav.Link>
            <Nav.Link href="#link" className="link-style">
              Product
            </Nav.Link>
            <Nav.Link href="#link" className="link-style">
              Services
            </Nav.Link>
            <Nav.Link href="#link" className="link-style">
              Our Tem
            </Nav.Link>
            <Nav.Link href="#link" className="link-style">
              Projects
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
