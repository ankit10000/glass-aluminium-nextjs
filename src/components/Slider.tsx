/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import slide1 from "../images/downloaded/1.webp";
import slide3 from "../images/downloaded/3.jpg";
import slide9 from "../images/downloaded/9.jpg";

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [slide1, slide3, slide9];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change the interval duration as per your requirement (in milliseconds)

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="slider">
      <button onClick={prevSlide} className="arrow prev">
        &#10094;
      </button>
      <button onClick={nextSlide} className="arrow next">
        &#10095;
      </button>
      <img src={images[currentSlide].src} alt={`Slide ${currentSlide + 1}`} />
      <div className="text-center carsol-name">
        <h1 className="title">
          <span className="title-word title-word-1">The </span>
          <span className="title-word title-word-2"> Floor</span>
          <span className="title-word title-word-3"> Decor </span>
        </h1>
        <div>Make You Quality </div>
        <div>And Safety of The Product</div>
      </div>
    </div>
  );
};

export default Slider;
