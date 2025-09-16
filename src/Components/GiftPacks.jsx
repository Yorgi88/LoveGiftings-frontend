import { useEffect } from "react";
import { fetchProducts } from "../features/products/productSlice";
import { useSelector, useDispatch } from "react-redux";
import LoadingIndicator from "./LoadingIndicator";
import { Card, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const GiftPacks = () => {

  const dispatch = useDispatch();
  const {productsByCategory, isLoading, error} = useSelector((state)=>state.products);

  const gifts = productsByCategory['giftpacks'] || [];
  
  useEffect(()=>{
    dispatch(fetchProducts('giftpacks'));
  }, [dispatch]);

  if (isLoading) {
  return (
    <LoadingIndicator/>
  );
}

if (error) {
  return <h3>Error Loading Bottle: {error}</h3>
}


    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1440 },
          items: 4,
        },
        desktop: {
          breakpoint: { max: 1440, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1,
        },
    };
  

  return (
    <section className="carousel-section" id="gifts">
      <div className="text-center mb-4">
        <h2>Gift Boxes</h2>
        <p>Take a look at Gifts</p>
      </div>

      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        itemClass="px-2"
      >
        {gifts.map((product) => (
          <Card
            key={product.id}
            className="h-100 mx-auto"
            style={{ width: "180px", minHeight: "370px" }}
          >
            <Link to={`products/category/${product.slug}`}>
            <Card.Img
              variant="top"
              src={product.static_image}
              alt={product.name}
              style={{ height: "200px", objectFit: "cover" }}
            />
            </Link>

            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title style={{ fontSize: "1rem" }}>
                  {product.name}
                </Card.Title>
                <Card.Text style={{ fontSize: "0.875rem" }}>
                  {product.description}
                </Card.Text>
              </div>
              <div>
                <h6 className="text-primary mb-2">₦{product.price}</h6>
                <Link to={`products/category/${product.slug}`}>
                  <Button variant="dark" size="sm" className="w-100">
                    Place Order
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Carousel>
    </section>
  );
}

export default GiftPacks;