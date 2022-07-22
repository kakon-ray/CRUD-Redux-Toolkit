import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../Products/ProductsSlice";
import { useParams } from "react-router-dom";

const Editproduct = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const location = useLocation();

  const product = location.state;
  const id = product.id;

  const [title, setTitle] = useState(product.title);
  const [img, setImgLink] = useState(product.img);
  const [desc, setDesc] = useState(product.desc);

  const addProductSubmit = (e) => {
    e.preventDefault();

    const product = { title, img, desc, id };
    console.log(product);

    dispatch(updateProduct(product));
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
              defaultValue={product.title}
              placeholder="Enter Product Name"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicReviewName">
            <input
              className="form-control rounded-0"
              type="text"
              defaultValue={product.img}
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
              defaultValue={product.desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </Form.Group>

          <Button variant="warning" className="mt-4" type="submit">
            Update
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Editproduct;
