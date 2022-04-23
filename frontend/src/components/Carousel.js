import React, { useState, useEffect } from "react";
import "./Carousel.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { CSSTransition } from "react-transition-group";

const Carousel = () => {
  const [sliderIndex, setSliderIndex] = useState(1);
  const [quickSwitch, setQuickSwitch] = useState(
    "carousel-slide--quick-switch"
  );

  let transformStyles = {
    transform: `translateX(-${sliderIndex * 100}%)`,
    transition: `transform ${sliderIndex === 0 ? "0s" : "0.4s"} ease-in-out`,
  };
  const carouselImgs = [
    {
      id: "Pic-3-copy",
      alt: "",
      url: "https://images.unsplash.com/photo-1503431194692-82dd03d18093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    },
    {
      id: "Pic-1",
      alt: "",
      url: "https://images.unsplash.com/photo-1524275406383-49f669cf763a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: "Pic-2",
      alt: "",
      url: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "Pic-3",
      alt: "",
      url: "https://images.unsplash.com/photo-1503431194692-82dd03d18093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    },
    {
      id: "Pic-1-copy",
      alt: "",
      url: "https://images.unsplash.com/photo-1524275406383-49f669cf763a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  function moveCarouselLeft(e) {
    setSliderIndex((prevState) => {
      return prevState - 1;
    });
  }
  function moveCarouselRight(e) {
    setSliderIndex((prevState) => {
      return prevState + 1;
    });
  }

  useEffect(() => {
    setTimeout(() => {
      if (sliderIndex !== 0) return;
      else {
        setSliderIndex(carouselImgs.length - 2);
      }
    }, 400);
  }, [sliderIndex]);

  return (
    <div className="carousel--container">
      <div className="carousel-progress"></div>
      <button
        className="carousel-left-btn"
        value="left"
        onClick={moveCarouselLeft}
      >
        <ChevronLeftIcon sx={{ fontSize: 40 }} />
      </button>
      <button
        className="carousel-right-btn"
        value="right"
        onClick={moveCarouselRight}
      >
        <ChevronRightIcon sx={{ fontSize: 40 }} />
      </button>

      <div className="carousel-slide" style={transformStyles}>
        {carouselImgs.map((data) => (
          <img key={data.id} src={data.url} alt={data.alt} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
