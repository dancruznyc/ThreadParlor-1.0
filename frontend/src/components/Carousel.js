import React from "react";

const Carousel = () => {
  const carouselImgs = [];
  return (
    <div className="carousel--container">
      <div className="carousel-img--prev"></div>
      <div className="carousel-img--curr"></div>
      <div className="carousel-img--next"></div>
    </div>
  );
};

export default Carousel;
