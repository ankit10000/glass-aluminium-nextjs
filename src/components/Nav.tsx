import React, { useState } from "react";
import "../css/bootstrap.css";
import "../css/icomoon.css";
import "../css/superfish.css";
import "../css/style.css";
import "../css/animate.css";
import "../css/flexslider.css";
import { IoMenu } from "react-icons/io5";
import Link from "next/link"

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header id="fh5co-header-section" className="sticky-banner ">
      <div className="container">
        <div className="nav-header">
         
          <h1 id="fh5co-logo" className="modern-logo">
            <Link href="/">
              <span className="logo-text">The Floor Decor</span>
            </Link>
          </h1>
          <IoMenu
            color="#1a1a1a"
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
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#category" className="fh5co-sub-ddown">
                  Category
                </Link>
                <ul className="fh5co-sub-menu dropdown_list">
                  <li>
                    <Link href="#glass">Glass</Link>
                  </li>
                  <li>
                    <Link href="#furniture">Furniture</Link>
                  </li>
                  <li>
                    <Link href="#aluminium">Aluminium</Link>
                  </li>
                  <li>
                    <Link href="#iron">Iron</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#recentwork">Recent Work</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
