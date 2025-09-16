import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import LoadingIndicator from "./LoadingIndicator";
import { Card, Button} from "react-bootstrap";


const SuccessPayment = () => {
  const {reference} = useParams();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    async function verify() {
      try {
        const resp = await axios.get(`http://127.0.0.1:8000/api/paystack/verify/${reference}/`);
        setResult(resp.data);
      } catch (error) {
        console.error("Verify failed:", error);
      }finally{
        setLoading(false);
      }
    }
    verify()
  }, [reference])

    if (loading) {
     return <LoadingIndicator/>
  }




  return (
    <div className="d-flex justify-content-center mt-5">
      <Card
        className="shadow rounded-4 p-4 text-center"
        style={{ maxWidth: "480px", width: "100%" }}
      >
        <Card.Body>
          <h3 className="mb-3 text-success">✅ Payment Successful</h3>
          <p className="mb-1">
            <strong>Reference:</strong> {reference}
          </p>
          {result && (
            <>
              <p className="mb-1">
                <strong>Status:</strong> {result.status}
              </p>
              <p className="mb-1">
                <strong>Amount:</strong> ₦{result.amount}
              </p>
              <p className="mb-3">
                <strong>Email:</strong> {result.email}
              </p>
            </>
          )}
          <Link to="/">
            <Button variant="dark" className="w-100 rounded-pill">
              Continue Shopping
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SuccessPayment