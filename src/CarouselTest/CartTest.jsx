import React from 'react';
import img1 from '../assets/img-one.jpg';
import img2 from '../assets/img-two.jpg';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const CartTest = () => {
  return (
    <Container className="mt-5">
      <h2 className="mb-4">Your Cart</h2>

      {/* Cart Item 1 */}
      <Card className="mb-4 shadow-sm p-3">
        <Row className="align-items-center">
          <Col xs={4}>
            <img
              src={img1}
              alt="Product"
              className="img-fluid rounded"
              style={{ maxHeight: "100px", objectFit: "contain" }}
            />
          </Col>
          <Col xs={8}>
            <h5 className="mb-1">Red Bottle pr cup</h5>
            <p className="mb-2 text-muted">₦5000</p>
            <p className="mb-2">Qty: 1</p>
            <Button variant="outline-danger" size="sm">
              Remove
            </Button>
          </Col>
        </Row>
      </Card>

      {/* Cart Item 2 */}
      <Card className="mb-4 shadow-sm p-3">
        <Row className="align-items-center">
          <Col xs={4}>
            <img
              src={img2}
              alt="Product"
              className="img-fluid rounded"
              style={{ maxHeight: "100px", objectFit: "contain" }}
            />
          </Col>
          <Col xs={8}>
            <h5 className="mb-1">Gift Pack for Her</h5>
            <p className="mb-2 text-muted">₦7000</p>
            <p className="mb-2">Qty: 2</p>
            <Button variant="outline-danger" size="sm">
              Remove
            </Button>
          </Col>
        </Row>
      </Card>

      {/* Summary */}
      <Card className="shadow-sm p-3">
        <h5>Order Summary</h5>
        <hr />
        <div className="d-flex justify-content-between">
          <span>Subtotal:</span>
          <span>₦19000</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Shipping Fee:</span>
          <span className="text-danger">Not Included</span>
        </div>
        <div className="d-flex justify-content-between fw-bold mt-2">
          <span>Total:</span>
          <span>₦19000</span>
        </div>
        <Button variant="dark" className="w-100 mt-3" disabled>
          Proceed to Checkout
        </Button>
      </Card>
    </Container>
  );
}

export default CartTest