"use client";

import Nav from "@/components/Nav";
// import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

import Headertop from "@/components/Headertop";
import Category from "@/components/Category";
import Experience from "@/components/Experience";
import LatestWork from "@/components/LatestWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import Furniture from "@/components/Furniture";
import Glass from "@/components/Glass";
import Aluminium from "@/components/Aluminium";
import Iron from "@/components/Iron";

// import Video from "@/components/Video";


export default function Home() {
  
  return (
    <div className="yard">
      <Nav />
      <Headertop />
      <Slider />
      <Experience />
      <Category />
      <Glass />
      <Furniture />
      <Aluminium />
      <Iron />
      <LatestWork />
      <Contact />
      <Footer />
    </div>
  );
}
