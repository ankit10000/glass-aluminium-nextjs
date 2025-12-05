/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Img1 = "/images/4v.webp";
const Img2 = "/images/29.webp";
const Img3 = "/images/21.webp";
const Img4 = "/images/34.webp";
const aluminumImages = [
  {
    id: 1,
    url: Img1,
    title: "Aluminum Windows",
    type: "small"
  },
  {
    id: 2,
    url: Img2,
    title: "Aluminum Doors",
    type: "large"
  },
  {
    id: 3,
    url: Img3,
    title: "Partitions",
    type: "large"
  },
  {
    id: 4,
    url: Img4,
    title: "Aluminium Ceiling Panel",
    type: "small"
  }
];

function Aluminium() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="modern-product-section">
      <div id="aluminium"></div>
      <div className="container m-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="modern-section-title">Aluminum Work</h1>
            <p className="modern-section-subtitle">
              High-quality aluminum windows, doors
            </p>
          </motion.div>

          <div ref={ref} className="modern-gallery">
            {aluminumImages.map((image, index) => (
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

export default Aluminium;
