"use client";
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Company</h3>
            <p className="text-gray-400">
              Specializing in premium glass, aluminum, iron, and furniture solutions for modern living spaces.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#glass" className="hover:text-purple-400 transition-colors">Glass Works</a></li>
              <li><a href="#aluminium" className="hover:text-purple-400 transition-colors">Aluminium Works</a></li>
              <li><a href="#furniture" className="hover:text-purple-400 transition-colors">Furniture</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="text-gray-400 space-y-3">
              <p>Petunia 201, Manglam Aananda, Sanganer<br/>Jaipur, Rajasthan 302029</p>
              <p>thefloordecor.jpr@gmail.com</p>
              <p>Phone: +91-9828101833</p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-purple-500 p-3 rounded-full transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-purple-500 p-3 rounded-full transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-purple-500 p-3 rounded-full transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-purple-500 p-3 rounded-full transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;