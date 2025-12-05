"use client";
import React, { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import Link from 'next/link';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              The Floor Decor
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
            <div className="relative">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="text-gray-700 hover:text-purple-600 transition-colors flex items-center"
              >
                Category
                <svg className={`w-4 h-4 ml-1 transition-transform ${isCategoryOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isCategoryOpen && (
                <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <Link href="#glass" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Glass</Link>
                  <Link href="#furniture" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Furniture</Link>
                  <Link href="#aluminium" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Aluminium</Link>
                  <Link href="#iron" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Iron</Link>
                </div>
              )}
            </div>
            <Link href="#recentwork" className="text-gray-700 hover:text-purple-600 transition-colors">Recent Work</Link>
            <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            <Link href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
            <div className="relative">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="text-gray-700 hover:text-purple-600 transition-colors flex items-center"
              >
                Category
                <svg className={`w-4 h-4 ml-1 transition-transform ${isCategoryOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isCategoryOpen && (
                <div className="relative mt-2 w-48 bg-gray-50 rounded-md shadow-lg z-10">
                  <Link href="#glass" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Glass</Link>
                  <Link href="#furniture" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Furniture</Link>
                  <Link href="#aluminium" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Aluminium</Link>
                  <Link href="#iron" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Iron</Link>
                </div>
              )}
            </div>
            <Link href="#recentwork" className="text-gray-700 hover:text-purple-600 transition-colors">Recent Work</Link>
            <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
