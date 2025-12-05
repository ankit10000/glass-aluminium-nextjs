/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import slide1 from "../images/downloaded/4v.webp";
import slide2 from "../images/downloaded/2v.webp";
import slide3 from "../images/downloaded/16-v.webp";
import Link from "next/link";
const callouts = [
  {
    id: 1,
    name: "Glass",
    description: "Custom glass installations, partitions, doors, and decorative glass work",
    imageSrc: "/images/5s.webp",
    imageAlt:
      "Professional glass work and installations",
    href: "#glass",
  },
  {
    id: 2,
    name: "Furniture",
    description: "Premium custom furniture manufacturing for homes and offices",
    imageSrc: "/images/2v.webp",
    imageAlt:
      "High quality custom furniture manufacturing",
    href: "#furniture",
  },
  {
    id: 3,
    name: "Aluminium",
    description: "Aluminum windows, doors, partitions, and fabrication work",
    imageSrc: "/images/35.jpg",
    imageAlt: "Professional aluminum fabrication and installation",
    href: "#aluminium",
  },
  {
    id: 4,
    name: "Iron",
    description: "Decorative iron gates, railings, grills, and metal work",
    imageSrc: "https://i.pinimg.com/originals/79/92/96/7992968e3df23a326ad4e45e7519aff1.png",
    imageAlt: "Custom iron work and metal fabrication",
    href: "#iron",
  },
];

export default function Category() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="modern-category-section">
      <div className="m-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="m-auto py-24 lg:max-w-none lg:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="modern-section-title">
              Our Expertise
            </h2>
            <p className="modern-section-subtitle">
              Crafting excellence across multiple categories
            </p>
          </motion.div>

          <div ref={ref} className="modern-category-grid">
            {callouts.map((callout, index) => (
              <motion.div
                key={callout.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="modern-category-card"
              >
                <Link href={callout.href} className="category-link">
                  <div className="category-image-wrapper">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="category-image"
                    />
                    <div className="category-overlay">
                      <span className="category-cta">View Collection →</span>
                    </div>
                  </div>
                  <div className="category-content">
                    <h3 className="category-title">{callout.name}</h3>
                    <p className="category-description">{callout.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
