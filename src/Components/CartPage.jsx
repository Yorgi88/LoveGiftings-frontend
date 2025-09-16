import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import LoadingIndicator from './LoadingIndicator'
import {useNavigate} from 'react-router-dom'
import { fetchCartItems} from '../features/cart/cartSlice';
import { checkoutCart } from '../features/cart/cartSlice';
// import { removeItem } from '../features/cart/cartSlice';

import axios from 'axios';

const CartPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state)=>state.cart.items.items) || [];
  


  useEffect(()=>{
    dispatch(fetchCartItems());
  }, [dispatch])

  const loading = useSelector((state) => state.cart.loading);
    if (loading) {
      return <LoadingIndicator />;
  }




  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/cart/items/delete/${id}/`);
      dispatch(fetchCartItems());
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  const handleCheckout = () => {
    dispatch(checkoutCart())
    .unwrap()
    .then(()=> {
      navigate('/checkout')
    })
    .catch((err)=> {
      console.error('checkout failed', err)
    })

  }

  const totalPrice = cartItems.reduce((sum, item)=> {
    return sum  + item.product.price * item.quantity
  }, 0);





  // const handleRemove = (cartItemId) => {
  //   dispatch(deleteCartItem(cartItemId));
  // }

  // const subtotal = items.reduce((acc, item)=> acc+item.product.price * item.quantity,0);
  // const total = subtotal;

  // console.log("items:",cartItems, "isArray?", Array.isArray(cartItems), "type:", typeof cartItems);
  // const totalPrice = Array.isArray(items)
  //   ? items.reduce((sum, item) => {
  //       if (item.product && item.product.price) {
  //         return sum + item.product.price * item.quantity;
  //       }
  //       return sum;
  //     }, 0)
  //   : 0;


  // console.log("This is items ", items);


  
  return (
    <Container className="mt-5">
      <h2 className="mb-4">Your Cart</h2>

      {!cartItems || cartItems.length === 0 ? (
        <Card className="p-3 text-center shadow-sm">
          <h5>Your cart is empty.</h5>
        </Card>
      ) : (
        <>
          {cartItems.map((item) => (
            <Card key={item.id} className="mb-4 shadow-sm p-3">
              <Row className="align-items-center">
                <Col xs={4}>
                  <img
                    src={`http://127.0.0.1:8000${item.product.static_image}`}
                    alt={item.product.name}
                    className="img-fluid rounded"
                    style={{ maxHeight: "120px", objectFit: "contain" }}
                  />
                </Col>
                <Col xs={8}>
                  <h5 className="mb-1">{item.product.name}</h5>
                  <p className="mb-2 text-muted">₦{item.product.price}</p>
                  <p className="mb-2">Qty: {item.quantity}</p>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleRemove(item.id)}
                    disabled={loading}
                  >
                    {/* {loading ? "Removing..." : "Remove"} */}
                    Remove
                  </Button>
                </Col>
              </Row>
            </Card>
          ))}

        

          {/* Order Summary */}
          <Card className="shadow-sm p-3">
            <h5>Order Summary</h5>
            <hr />
            <div className="d-flex justify-content-between">
              <span>Subtotal:</span>
              <span>₦{totalPrice}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Shipping Fee:</span>
              <span className="text-danger">Not Included</span>
            </div>
            <div className="d-flex justify-content-between fw-bold mt-2">
              <span>Total:</span>
              <span>₦{totalPrice}</span>
            </div>
            <Button variant="dark" className="w-100 mt-3" onClick={handleCheckout} >
              Proceed to Checkout
            </Button>
          </Card>
        </>
      )}
      
    </Container>
  );
}

export default CartPage