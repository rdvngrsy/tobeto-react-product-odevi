import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDetailCarousel = (props) => {
  return (
    <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
      {props.images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ objectFit: "cover", height: "500px" }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductDetailCarousel;
