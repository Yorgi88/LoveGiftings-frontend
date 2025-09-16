import {useState} from 'react'
import img1 from '../assets/img-one.jpg'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Form from '../Components/forms/Form';
import FormGift from '../Components/forms/FormGift';


const DetailsTest = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQty = () => setQuantity((prev) => prev + 1);
    const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  return (
    <div>
      <Container className="mt-5">
        <Row>
          {/* Image Column */}
          <Col md={5} className="text-center mb-4">
            <Image
              src={img1}
              alt={"haha"}
              fluid
              rounded
              style={{
                maxHeight: "250px",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Col>

          {/* Details Column */}
          <Col md={7}>
            <h2 className="mb-3">Red Bottle pr cup</h2>

            {/* Quantity Selector */}
            <div className="d-flex align-items-center mb-3">
              <span className="me-3">Quantity:</span>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={decreaseQty}
              >
                −
              </Button>
              <span className="mx-3">{quantity}</span>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={increaseQty}
              >
                +
              </Button>
            </div>

            <div className="mb-3">
              <h4 className="text-primary">₦5000</h4>
            </div>

            <p className="mb-4" style={{ fontSize: "0.95rem" }}>
              Good for your every talk and walk
            </p>

            <Form />
            <Button variant="dark" size="lg" className="mt-3 w-100">
              Add to Cart
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetailsTest