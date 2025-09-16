import { Container } from "react-bootstrap"
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container className="py-5">
      <h1 className="mb-3">Terms & Conditions</h1>
      <p className="lead">Effective: {new Date().getFullYear()}</p>

      <section className="mb-4">
        <h5>1. Acceptance</h5>
        <p className="small mb-0">
          By using LoveGiftings and placing orders you agree to these Terms &
          Conditions. Please read them carefully before ordering.
        </p>
      </section>

      <section className="mb-4">
        <h5>2. Orders & guest checkout</h5>
        <p className="small mb-0">
          You can place orders as a guest. You must provide accurate contact and
          delivery information. We reserve the right to refuse or cancel orders
          for any reason (pricing errors, stock issues, or suspected fraud).
        </p>
      </section>

      <section className="mb-4">
        <h5>3. Pricing & payment</h5>
        <p className="small mb-0">
          Prices are shown in Nigerian Naira (₦) unless stated otherwise. We
          accept payments via Paystack. Payment is processed by Paystack and is
          subject to their terms. We do not store full card details.
        </p>
      </section>

      <section className="mb-4">
        <h5>4. Shipping & delivery</h5>
        <p className="small mb-0">
          Delivery times are estimates. Shipping charges (if any) will be
          communicated at when due. We are not responsible for courier delays
          outside our control.
        </p>
      </section>

      {/* <section className="mb-4">
        <h5>5. Returns & refunds</h5>
        <p className="small mb-0">
          Returns and refunds depend on the product and reason for return.
          Contact support within 48 hours of delivery for issues. Refunds for
          successful claims are processed after verification and may take a few
          business days depending on the payment provider.
        </p>
      </section> */}

      <section className="mb-4">
        <h5>6. Intellectual property</h5>
        <p className="small mb-0">
          All content on the site (images, text, logos) is owned or licensed to
          LoveGiftings. You may not reuse our content without permission.
        </p>
      </section>

      <section className="mb-4">
        <h5>7. Liability</h5>
        <p className="small mb-0">
          To the extent permitted by law, LoveGiftings is not liable for
          indirect or consequential losses. Our liability for direct losses is
          limited to the order value.
        </p>
      </section>

      <section className="mb-4">
        <h5>8. Changes to these terms</h5>
        <p className="small mb-0">
          We may update these Terms from time to time. We will post the revised
          version here with an updated effective date.
        </p>
      </section>

      <section className="mb-4">
        <h5>9. Contact</h5>
        <p className="small mb-0">
          For questions about these Terms, <Link to={'/contact'}>contact us</Link>
        </p>
      </section>

      <p className="small fst-italic">

      </p>
    </Container>
  );
}

export default Terms