/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Img1 = "/images/25.webp";
const Img2 = "/images/24.webp";
const Img3 = "/images/15-k.webp";
const Img4 = "/images/8.webp";
const furnitureImages = [
  {
    id: 1,
    url: Img1,
    title: "Custom Bedroom",
    type: "small"
  },
  {
    id: 2,
    url: Img2,
    title: "Office Furniture",
    type: "large"
  },
  {
    id: 3,
    url: Img3,
    title: "Kitchen Cabinets",
    type: "large"
  },
  {
    id: 4,
    url: Img4,
    title: "Living Room",
    type: "small"
  }
];

function Furniture() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="modern-product-section" style={{ background: "#fafafa" }}>
      <div id="furniture"></div>
      <div className="container m-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="modern-section-title">Custom Furniture</h1>
            <p className="modern-section-subtitle">
              Premium quality custom furniture for homes and offices
            </p>
          </motion.div>

          <div ref={ref} className="modern-gallery">
            {furnitureImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`gallery-item ${image.type}`}
              >
                <div className="gallery-image-wrapper">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="gallery-image"
                  />
                  <div className="gallery-overlay">
                    <h3 className="gallery-title">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Furniture;
