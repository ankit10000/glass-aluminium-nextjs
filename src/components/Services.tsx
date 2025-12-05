"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaIndustry, FaTools, FaPaintBrush, FaTruck } from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: <FaIndustry className="w-12 h-12" />,
    title: "Custom Manufacturing",
    description: "State-of-the-art manufacturing facility producing high-quality furniture, glass, aluminum, and iron products tailored to your specifications."
  },
  {
    id: 2,
    icon: <FaTools className="w-12 h-12" />,
    title: "Onsite Installation",
    description: "Professional installation services with experienced technicians ensuring perfect fit and finish at your location."
  },
  {
    id: 3,
    icon: <FaPaintBrush className="w-12 h-12" />,
    title: "Interior Design Consultation",
    description: "Expert design consultation to help you choose the right materials, colors, and styles that match your vision and space."
  },
  {
    id: 4,
    icon: <FaTruck className="w-12 h-12" />,
    title: "Delivery & Maintenance",
    description: "Safe delivery of products and ongoing maintenance support to ensure long-lasting quality and customer satisfaction."
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="modern-services-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="modern-section-title">Our Services</h2>
          <p className="modern-section-subtitle">
            Comprehensive solutions from design to installation
          </p>
        </motion.div>

        <div ref={ref} className="modern-services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-item"
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">
                {service.title}
              </h3>
              <p className="service-text">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
