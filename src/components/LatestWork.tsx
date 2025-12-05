/* eslint-disable @next/next/no-img-element */
import React from 'react';

const projects = [
  {
    title: 'Modern Glass Partition',
    category: 'Glass Work',
    image: '/images/1.webp',
  },
  {
    title: 'Minimalist Aluminum Window',
    category: 'Aluminum',
    image: '/images/10s.webp',
  },
  {
    title: 'Custom Iron Railing',
    category: 'Iron Work',
    image: '/images/11-k.webp',
  },
  {
    title: 'Elegant Oak Table',
    category: 'Furniture',
    image: '/images/13-k-s.webp',
  },
  {
    title: 'Sleek Storefront System',
    category: 'Commercial',
    image: '/images/14-k-s.webp',
  },
  {
    title: 'Ornate Wrought Iron Gate',
    category: 'Iron Work',
    image: '/images/15-k.webp',
  },
];

const LatestWork = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Latest Work</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover a selection of our finest projects, showcasing our commitment to quality craftsmanship and innovative design.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="text-sm font-medium text-gray-300">{project.category}</p>
                <h3 className="text-2xl font-semibold text-white mt-2">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestWork;
