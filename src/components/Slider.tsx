/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slide1 from "../images/downloaded/1.webp";
import slide3 from "../images/downloaded/3.webp";
import slide9 from "../images/downloaded/9.webp";

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
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="modern-hero">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="hero-image-wrapper"
        >
          <img
            src={images[currentSlide].src}
            alt={`Slide ${currentSlide + 1}`}
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </motion.div>
      </AnimatePresence>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hero-text-container"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hero-label"
          >
            PREMIUM CRAFTSMANSHIP
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hero-title"
          >
            Transform Your Space<br />
            <span className="hero-title-accent">With Custom Furniture</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="hero-description"
          >
            Expert manufacturing and onsite installation for glass, furniture, aluminum, and iron works
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="hero-buttons"
          >
            <a href="#category" className="hero-btn-primary">
              Explore Collections
            </a>
            <a href="#contact" className="hero-btn-secondary">
              Get Quote
            </a>
          </motion.div>
        </motion.div>
      </div>

      <button onClick={prevSlide} className="hero-nav-btn hero-nav-prev">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button onClick={nextSlide} className="hero-nav-btn hero-nav-next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>

      <div className="hero-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`hero-indicator ${currentSlide === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
