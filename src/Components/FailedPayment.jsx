import { useParams, Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

export default function FailedPayment() {
  const { reference } = useParams();

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card className="p-4 shadow rounded-4 text-center" style={{ maxWidth: "480px", width: "100%" }}>
        <h2 className="mb-3 text-danger">Payment Failed ❌</h2>
        <p className="mb-2"><strong>Reference:</strong> {reference}</p>
        <p className="text-muted">
          If money was deducted, it will be auto-reversed by Paystack/bank.
        </p>
        <Button as={Link} to="/" variant="danger" className="mt-3">
          Try Again
        </Button>
      </Card>
    </Container>
  );
}
