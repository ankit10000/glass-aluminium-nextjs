/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { id: 1, name: 'Happy Clients', value: '1000+' },
  { id: 2, name: 'Years of Excellence', value: '15+' },
  { id: 3, name: 'Projects Delivered', value: '500+' },
  { id: 4, name: 'Product Categories', value: '4' },
]
export default function LogoClouds() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

    return (
      <div className="modern-stats-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="modern-section-title text-center"
        >
          Proven Excellence
        </motion.h2>
        <dl ref={ref} className="modern-stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="stat-card"
            >
              <dd className="stat-value">{stat.value}</dd>
              <dt className="stat-label">{stat.name}</dt>
            </motion.div>
          ))}
        </dl>
      </div>
      <div id="category"></div>
    </div>
    )
  }
  