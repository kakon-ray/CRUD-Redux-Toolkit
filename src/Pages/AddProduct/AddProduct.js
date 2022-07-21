import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import "./AddProduct.css";
const AddProduct = () => {
  return (
    <div className="add-product-card">
      <Card className="p-4">
        <h2 className="py-3 text-secondary">Please Add a Positive Review</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicReviewName">
            <input
              className="form-control rounded-0"
              type="text"
              placeholder="Enter Product Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicReviewName">
            <input className="form-control rounded-0" type="file" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicReviewName">
            <textarea
              name="description"
              placeholder="Product Description"
              className="w-100 form-control rounded-0"
              rows="9"
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
