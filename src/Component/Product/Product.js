import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Product.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const Product = ({ title, description, img }) => {
  return (
    <div className="col-md-4">
      <Card>
        <Card.Img variant="top" src={img} style={{ height: "400px" }} />
        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <div className="btn-container">
          <ButtonGroup>
            <ToggleButton variant="secondary">Edit</ToggleButton>
            <ToggleButton variant="danger">Delete</ToggleButton>
          </ButtonGroup>
        </div>
      </Card>
    </div>
  );
};

export default Product;
