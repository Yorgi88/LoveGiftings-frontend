import { useEffect, useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
// import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { fetchProducts } from '../features/products/productSlice';
import Form from './forms/Form';
import FormGift from './forms/FormGift';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { addToCart } from '../features/cart/cartSlice';
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'

const ProductDetails = () => {
  const navigate  = useNavigate();
    const [quantity, setQuantity] = useState(1);

    const increaseQty = () => setQuantity((prev) => prev + 1);
    const decreaseQty = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const customizationRef = useRef();

  const {slug} = useParams();
  const dispatch = useDispatch();
  const productsByCategory = useSelector((state)=>state.products.productsByCategory);

  useEffect(()=>{
    if(Object.keys(productsByCategory).length === 0){
      dispatch(fetchProducts());
    }
  }, [dispatch, productsByCategory])

  // const allProd = Object.values(productsByCategory).flat();
  // const product = allProd.find((p)=> p.slug === slug);
  const product = useMemo(() => {
    const allProd = Object.values(productsByCategory).flat();
    return allProd.find((p) => p.slug === slug);
  }, [productsByCategory, slug]);

    if (!product) {
    return <h3>Loading Product Details...</h3>;
  }



  const handleAddToCart = () => {
    Swal.fire({
        title: "Added to Cart!",
        icon: "success",
      });
      setTimeout(() => {
      navigate('/cart')
    }, 2000);
    const customizations = customizationRef.current?.getFormData?.() || {};
    dispatch(
      addToCart({
        product_id: product.id,
        quantity,
        customizations,
      })
    )

}



  return (
    <Container className="mt-5">
      <Row>
        {/* Image Column */}
        <Col md={5} className="text-center mb-4">
          <Image
            src={product.static_image}
            alt={product.name}
            fluid
            rounded
            style={{
              maxHeight: "300px",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </Col>

        {/* Details Column */}
        <Col md={7}>
          <h2 className="mb-3">{product.name}</h2>

          <div className="d-flex align-items-center mb-3">
            <span className="me-3">Quantity:</span>
            <Button variant="outline-secondary" size="sm" onClick={decreaseQty} aria-label='Decrease quantity'>
              −
            </Button>
            <span className="mx-3">{quantity}</span>
            <Button variant="outline-secondary" size="sm" onClick={increaseQty} aria-label='Increase quantity'>
              +
            </Button>
          </div>

          <div className="mb-3">
            <h4 className="text-primary">₦{product.price}</h4>
          </div>

          <p className="mb-4" style={{ fontSize: "0.95rem" }}>
            {product.description}
          </p>

          {/* Show appropriate form */}
          {product.category.slug === "giftpacks" ? (
            <FormGift product={product} ref={customizationRef} />
          ) : (
            <Form ref={customizationRef}/>
          )}

          <Button
            variant="dark"
            size="lg"
            className="mt-3 w-100"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails