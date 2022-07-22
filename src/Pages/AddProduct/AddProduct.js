import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../Products/ProductsSlice";
import "./AddProduct.css";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const productNumber = useSelector((state) => state.productReducer.product);

  const addProductSubmit = (e) => {
    e.preventDefault();

    const productCurrentNumber = productNumber.length + 1;
    const product = { title, img: imgLink, desc, id: productCurrentNumber };

    dispatch(addProduct(product));
    navigate("/", { replace: true });

    setTitle("");
    setImgLink("");
    setDesc("");
  };

  return (
    <div className="add-product-card">
      <Card className="p-4">
        <h2 className="py-3 text-secondary">Please Add a Positive Review</h2>
        <Form onSubmit={addProductSubmit}>
          <Form.Group className="mb-3" controlId="formBasicReviewName">
            <input
              className="form-control rounded-0"
              type="text"
              value={title}
              placeholder="Enter Product Name"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicReviewName">
            <input
              className="form-control rounded-0"
              type="text"
              value={imgLink}
              placeholder="Enter Product Image Link"
              onChange={(e) => setImgLink(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicReviewName">
            <textarea
              name="description"
              placeholder="Product Description"
              className="w-100 form-control rounded-0"
              rows="9"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </Form.Group>

          <Button variant="warning" className="mt-4" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default AddProduct;
