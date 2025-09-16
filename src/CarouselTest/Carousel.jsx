import React from "react";
import { Card, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/img-one.jpg";
import img2 from "../assets/img-two.jpg";
import img3 from "../assets/img-three.jpg";
import img4 from "../assets/img-four.jpg";
import img5 from "../assets/img-five.jpg";

const Carousels = () => {
  const products = [
    {
      id: 1,
      title: "Red Nike",
      price: "$99.99",
      description: "Short product description goes here.",
      image:img1,
    },
    {
      id: 2,
      title: "Black Converse",
      price: "$89.99",
      description: "Classic everyday wear with geshy curls and poignat st.",
      image:img2
    },
    {
      id: 3,
      title: "White Sneakers",
      price: "$79.99",
      description: "Comfortable for running.",
      image:img3    },
    {
      id: 4,
      title: "Blue Adidas",
      price: "$109.99",
      description: "New arrivals 2025 edition.",
      image:img4    
    },
        {
      id: 4,
      title: "Blue Adidas",
      price: "$109.99",
      description: "New arrivals 2025 edition.",
      image:img5    
    },
  ];

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
    <div className="mt-5 px-3">
      <h2 className="mb-4 text-center">Popular Products</h2>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={false}
        keyBoardControl={true}
        containerClass="carousel-container"
        itemClass="px-2"
      >
        {products.map((product) => (
          <Card
            key={product.id}
            className="h-100 mx-auto"
            style={{ width: "180px", minHeight: "370px" }}
          >
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.title}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title style={{ fontSize: "1rem" }}>
                  {product.title}
                </Card.Title>
                <Card.Text style={{ fontSize: "0.875rem" }}>
                  {product.description}
                </Card.Text>
              </div>
              <div>
                <h6 className="text-primary mb-2">{product.price}</h6>
                <Button variant="dark" size="sm" className="w-100">
                  Place Order
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousels;
