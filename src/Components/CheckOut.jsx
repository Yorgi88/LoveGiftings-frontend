import { useState, useEffect } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import Logo from '../assets/love-giftings-logo.svg';
import { useDispatch, useSelector } from "react-redux";
import { fetchCheckoutPage } from "../features/cart/cartSlice";
import LoadingIndicator from "./LoadingIndicator";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const CheckOut = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {checkoutSummary, loading} = useSelector((state)=> state.cart)

  useEffect(()=> {
    dispatch(fetchCheckoutPage());
  }, [dispatch])

  
  if (loading) {
    return(
      <LoadingIndicator/>
    )
  }

  const handleCancelOrder = async (id) => {
    // dispatch action to delete order  
    if (!checkoutSummary?.id) {
      alert("No order to cancel");
      return;
    }

    try {
      await axios.delete(`http://127.0.0.1:8000/api/order/delete/${id}/`);
          Swal.fire({
            icon: "success",
            title: "Order Cancelled",
            text: "Your order has been cancelled successfully!",
            confirmButtonText: "OK",
            confirmButtonColor: "#3085d6",
          });
      navigate('/')
    } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong while cancelling your order!",
          });
       console.error("Error cancelling order:", error);
    }


  }
  const handlePayWithPaystack = async() => {
    if (!email) {
      alert("You need to enter your email address")
      return;
    }
    

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/paystack/initialize/", {
          order_id: checkoutSummary.id,
          email: email,
          amount: checkoutSummary.total_price,
        }
      )

    // Paystack returns data like { status: true, data: { authorization_url: "..." } }

    if (response.data && response.data.status) {
      const authUrl = response.data.data.authorization_url;
      window.location.href = authUrl  //redirect to the paystack url
    }else{
      alert("Unable to initialize payment, try again later")
    }

    } catch (error) {
        console.error("Payment initialization error:", error);
        alert("Something went wrong with Paystack initialization");
    }
  }

  
  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card
        className="p-4 shadow rounded-4"
        style={{ maxWidth: "480px", width: "100%" }}
      >
        {/* Business Logo */}
        <div className="mb-4 text-center">
          <img
            src={Logo}
            alt="Business Logo"
            style={{ maxHeight: "70px", objectFit: "contain" }}
            className="img-fluid"
          />
        </div>

        {/* Order ID */}
        <div className="text-center mb-3">
          <small className="text-muted">Order ID:</small>
          <h6 className="fw-bold mt-1">{checkoutSummary?.id || "--"}</h6>
        </div>

        {/* Total Amount */}
        <div className="d-flex justify-content-between align-items-center border rounded-3 px-3 py-2 mb-4">
          <span className="fw-semibold">Total Amount:</span>
          <span className="fw-bold fs-5">
            #{checkoutSummary?.total_price || "0.00"}
          </span>
        </div>

        {/* Email Field */}
        <Form.Group className="mb-4">
          <Form.Label className="fw-semibold">Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Text className="text-muted">
            You’ll get your receipt and order updates here.
          </Form.Text>
        </Form.Group>

        <p className="small text-muted text-center mb-3">
          By completing this purchase you agree to our{" "}
          <Link to="/terms">Terms & Conditions</Link> and{" "}
          <Link to="/privacy">Privacy Policy</Link>.
        </p>

        {/* Pay Button */}
        <Button
          variant="dark"
          className="w-100 py-2 mb-3 rounded-3"
          onClick={handlePayWithPaystack}
        >
          Pay Securely with Paystack
        </Button>

        {/* Cancel Button */}
        <Button
          variant="outline-danger"
          className="w-100 py-2 mb-3 rounded-3"
          onClick={() => handleCancelOrder(checkoutSummary.id)}
        >
          Cancel Order
        </Button>

        {/* Security Note */}
        <div className="text-center">
          <small className="text-muted">
            🔒 Secure payment powered by Paystack
          </small>
        </div>
      </Card>
    </Container>
  );
}

export default CheckOut