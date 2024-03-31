"use client";
import React, { useState } from "react";
import "../css/bootstrap.css";
import "../css/icomoon.css";
import "../css/superfish.css";
import "../css/style.css";
import "../css/animate.css";
import "../css/flexslider.css";
import { IoMenu } from "react-icons/io5";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header id="fh5co-header-section" className="sticky-banner ">
      <div className="container">
        <div className="nav-header">
         
          <h1 id="fh5co-logo">
            <a href="index.html">
              <i className="icon-home"></i>
              <span>The Floor Decor</span>
            </a>
          </h1>
          <IoMenu
            color="#00d866"
            id="navbarToggler"
            size={30}
            className="navbar-toggler-nav"
            onClick={toggleNav}
          />
          <nav
            id="fh5co-menu-wrap"
            className={isNavOpen ? "show" : ""}
            role="navigation"
          >
            <ul
              className={isNavOpen ? "sf-menu" : "sf-menu collapsed"}
              id="fh5co-primary-menu"
            >
              <li className="active">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#category" className="fh5co-sub-ddown">
                  Category
                </a>
                <ul className="fh5co-sub-menu dropdown_list">
                  <li>
                    <a href="#">Glass</a>
                  </li>
                  <li>
                    <a href="#">Furniture</a>
                  </li>
                  <li>
                    <a href="#">Aluminium</a>
                  </li>
                  <li>
                    <a href="#">Iron</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#recentwork">Recent Work</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
