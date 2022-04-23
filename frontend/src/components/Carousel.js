import React, { useState } from "react";
import "./Carousel.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Carousel = () => {
  const [sliderIndex, setSliderIndex] = useState(1);
  const [styleNames, setStyleNames] = useState("carousel-slide--transition");
  const [progressActive, setProgressActive] = useState(
    "carousel-progress-btn--active"
  );

  let transformStyles = {
    transform: `translateX(-${sliderIndex * 100}%)`,
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
      console.log(prevState);
      return prevState - 1;
    });
    console.log(transformStyles);
  }
  function moveCarouselRight(e) {
    if (sliderIndex > 3) return;
    setSliderIndex((prevState) => {
      console.log(prevState);
      return prevState + 1;
    });
    console.log(transformStyles);
  }

  function switchSides(e) {
    console.log(e);
    if (sliderIndex < 1) {
      setStyleNames("carousel-slide--notransition");
      setSliderIndex(carouselImgs.length - 2);
    } else if (sliderIndex > carouselImgs.length - 2) {
      setStyleNames("carousel-slide--notransition");
      setSliderIndex(1);
    } else {
      setStyleNames("carousel-slide--transition");
    }
  }

  return (
    <div className="carousel--container">
      <div className="carousel-progress"></div>
      <button
        className="carousel-left-btn"
        value="left"
        onClick={moveCarouselLeft}
      >
        <AiFillCaretLeft />
      </button>
      <button
        className="carousel-right-btn"
        value="right"
        onClick={moveCarouselRight}
      >
        <AiFillCaretRight />
      </button>

      <div
        className={`carousel-slide ${styleNames}`}
        style={transformStyles}
        onTransitionEnd={switchSides}
      >
        {carouselImgs.map((data) => (
          <img key={data.id} src={data.url} alt={data.alt} />
        ))}
      </div>
      <div className="carousel-progress">
        <div className="carousel-progress-btn carousel-progress-left"></div>
        <div className="carousel-progress-btn carousel-progress-middle"></div>
        <div className="carousel-progress-btn carousel-progress-right"></div>
      </div>
    </div>
  );
};

export default Carousel;
