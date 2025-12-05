/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ironImages = [
  {
    id: 1,
    url: "https://bajajpeb.com/wp-content/uploads/2022/08/iocl-taloja3-1536x691.jpg",
    title: "Iron Gates",
    type: "large"
  },
  {
    id: 2,
    url: "https://i.pinimg.com/originals/79/92/96/7992968e3df23a326ad4e45e7519aff1.png",
    title: "Decorative Railings",
    type: "small"
  },
  {
    id: 3,
    url: "https://5.imimg.com/data5/SELLER/Default/2023/2/OQ/SN/NJ/1755908/wall-fitting-domestic-steel-almirah-500x500.jpeg",
    title: "Steel Almirah",
    type: "small"
  },
  {
    id: 4,
    url: "https://5.imimg.com/data5/LA/NM/GW/ANDROID-92444365/product-jpeg.jpeg",
    title: "Iron Grills",
    type: "large"
  }
];

function Iron() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="modern-product-section" style={{ background: "#fafafa" }}>
      <div id="iron"></div>
      <div className="container m-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="modern-section-title">Iron & Metal Works</h1>
            <p className="modern-section-subtitle">
              Custom iron gates, railings, grills, and decorative metal work
            </p>
          </motion.div>

          <div ref={ref} className="modern-gallery">
            {ironImages.map((image, index) => (
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
      <div id="recentwork"></div>
    </div>
  );
}

export default Iron;
