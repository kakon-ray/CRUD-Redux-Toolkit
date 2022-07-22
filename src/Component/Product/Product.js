import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Product.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../Pages/Products/ProductsSlice";
import { Link } from "react-router-dom";

const Product = ({ title, desc, img, id }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="col-md-3">
      <Card>
        <Card.Img variant="top" src={img} style={{ height: "300px" }} />
        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
        <div className="btn-container">
          <ButtonGroup>
            <Link to="editProduct" state={{ title, desc, img, id }}>
              <ToggleButton variant="secondary">Update</ToggleButton>
            </Link>
            <ToggleButton variant="danger" onClick={() => handleDelete(id)}>
              Delete
            </ToggleButton>
          </ButtonGroup>
        </div>
      </Card>
    </div>
  );
};

export default Product;
