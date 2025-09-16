import { Container } from "react-bootstrap"
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <Container className="py-5">
      <h1 className="mb-3">Privacy Policy</h1>
      <p className="lead">Last updated: {new Date().getFullYear()}</p>

      <section className="mb-4">
        <h5>1. Introduction</h5>
        <p className="small">
          LoveGiftings is committed to protecting your
          privacy. This Privacy Policy explains what personal data we collect,
          why we collect it, how we use it, and the choices you have.
        </p>
      </section>

      <section className="mb-4">
        <h5>2. Information we collect</h5>
        <ul className="small">
          <li>
            <strong>Provided by you:</strong> name, phone number, delivery
            address, and email when placing an order or contacting support.
          </li>
          <li>
            <strong>Payment information:</strong> We do not store full card
            details. Payment processing is handled by Paystack — we receive
            payment references and transaction status only.
          </li>
          <li>
            <strong>Technical data:</strong> browser type, IP address, device,
            and cookies for analytics and to improve the site experience.
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h5>3. Why we collect your data</h5>
        <p className="small mb-0">
          We use your data to process and fulfill orders, communicate about
          orders and support requests, detect and prevent fraud, and comply with
          legal obligations.
        </p>
      </section>

      <section className="mb-4">
        <h5>4. Who we share data with</h5>
        <p className="small mb-0">
          We share necessary data with third parties who help deliver our
          services, including:
        </p>
        <ul className="small">
          <li>
            Payment provider: Paystack (for payment processing & verification).
          </li>
          <li>Delivery partners: courier services for order fulfillment.</li>
          <li>Analytics providers: to understand and improve the site.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h5>5. Data retention</h5>
        <p className="small mb-0">
          We retain order and transaction records for as long as necessary to
          fulfill orders, comply with legal obligations, and resolve disputes.
          You may contact us to request deletion where applicable.
        </p>
      </section>

      <section className="mb-4">
        <h5>6. Security</h5>
        <p className="small mb-0">
          We implement reasonable measures to protect your data. However, no
          internet service is 100% secure. Please avoid sending highly sensitive
          personal information via unencrypted channels.
        </p>
      </section>

      <section className="mb-4">
        <h5>7. Cookies & tracking</h5>
        <p className="small mb-0">
          We use cookies and similar technologies for session management,
          analytics, and to improve the shopping experience. You can control
          cookie settings in your browser.
        </p>
      </section>

      <section className="mb-4">
        <h5>8. Your rights</h5>
        <p className="small mb-0">
          Depending on your jurisdiction, you may have rights to access,
          correct, or delete your personal data. Contact us using the details
          below to exercise these rights.
        </p>
      </section>

      <section className="mb-5">
        <h5>9. Contact</h5>
        <p className="small mb-0">
          For questions or requests about privacy, <Link to={'/contact'}>reach out</Link> to us

          .
        </p>
      </section>

      <p className="small fst-italic">
        Note: This Privacy Policy is a simple template for an MVP and does not
        constitute legal advice. Consider having a lawyer review it before going
        fully live.
      </p>
    </Container>
  );
}

export default Privacy