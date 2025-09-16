import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Spinner, Alert } from "react-bootstrap";
import { getSessionId } from "../utils/session";
import LoadingIndicator from "./LoadingIndicator";

const MyOrders = () => {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    

    useEffect(()=> {
        const fetchOrders = async() => {
            try {
                const session_id = getSessionId();
                if (!session_id) {
                setOrders([]);
                setLoading(false);

                return;
            }

            const resp = await axios.get(`http://127.0.0.1:8000/api/orders/?session_id=${session_id}` );
            // Some APIs return a single object, wrap it into array for consistency
            const data = Array.isArray(resp.data)? resp.data : [resp.data];
            setOrders(data);
            } catch (err) {
                setError("Failed to fetch your orders." + err.message);
            }finally{
                setLoading(false);
            }
        }
        fetchOrders();
    }, [])

    if (loading) {
        return <LoadingIndicator/>
    }

  return (
    <Container className="mt-5">
      <h3 className="mb-4 text-center fw-bold">📦 My Orders</h3>

      {/* Loading state */}
      {loading && (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      )}

      {/* Error state */}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Base case - no orders */}
      {!loading && orders.length === 0 && (
        <Alert variant="info" className="text-center">
          You currently have no orders
        </Alert>
      )}

      {/* Orders list */}
      {orders.map((order) => (
        <Card key={order.id} className="mb-3 shadow-sm rounded-4">
          <Card.Body>
            <Card.Title>Order #{order.id}</Card.Title>
            <Card.Text>
              <strong>Total:</strong> ₦{order.total_price} <br />
              <strong>Status:</strong>{" "}
              <span
                className={
                  order.status === "Paid"
                    ? "text-success fw-bold"
                    : "text-warning fw-bold"
                }
              >
                {order.status}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}

      {/* Footer note */}
      <div className="mt-4 text-center text-muted">
        <small>
          We will communicate with you via email and phone number 📧📱
        </small>
      </div>
    </Container>
  );
}

export default MyOrders