import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          {/* Brand/Logo */}
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="fw-bold">LoveGiftings</h5>
            <p className="small mb-0">
              Making gifting simple, thoughtful, and memorable.
            </p>
          </Col>

          {/* Links */}
          <Col md={4} className="text-center mb-3 mb-md-0">
            <Link
              to="/privacy"
              className="text-light text-decoration-none mx-2"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-light text-decoration-none mx-2">
              Terms & Conditions
            </Link>
            <Link
              to="/contact"
              className="text-light text-decoration-none mx-2"
            >
              Contact
            </Link>
          </Col>

          {/* Copyright */}
          <Col md={4} className="text-center text-md-end">
            <p className="small mb-0">
              © {new Date().getFullYear()}{" "}
              <span className="text-primary fw-semibold">LoveGiftings</span>.
              All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer