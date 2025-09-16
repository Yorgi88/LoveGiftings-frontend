import whatsapp from '../assets/whatsapp.svg'
import instagram from '../assets/instagram.svg'
import { Container, Row, Col } from 'react-bootstrap';
const Contact = () => {
  return (
    <section
      className="carousel-section"
      id="contact"
      style={{ backgroundColor: "#f2f2f2" }}
    >
      <Container>
        <div className="text-center mb-4">
          <h2>Contact Us</h2>
          <p>
            For specific orders or more inquiries, feel free to get in touch!
          </p>
        </div>
        <Row className="justify-content-center">
          <Col xs="auto">
            <a
              href="https://api.whatsapp.com/send?phone=2348140536334&text=Hello%20LOVE%20GIFTINGS%0AI%27ll%20like%20to%20make%20a%20purchase%20or%20enquiry%20about%20a%20Journal%2F%20Mug%2F%20Bottle%2F%20Gift%20box%F0%9F%8E%81&fbclid=PAQ0xDSwMDWw9leHRuA2FlbQIxMAABp5JVoGndzsLWL-jlXTuKBML_xvif_Q2iDgD5pwjG6EUPostoK2SY4ywRG0_K_aem_FYB014RKjgHNehzZq39mjQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="WhatsApp" className="social-icon" />
            </a>
          </Col>
          <Col xs="auto">
            <a
              href="https://www.instagram.com/reel/DMxdMAesN5_/?igsh=aXdsaXo3NXB6bGxy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className="social-icon" />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact