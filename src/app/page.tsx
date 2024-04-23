"use client";

import Nav from "@/components/Nav";
// import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

import Headertop from "@/components/Headertop";
import Discount from "@/components/Discount";
import LogoClouds from "@/components/LogoClouds";
import LatestWork from "@/components/LatestWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";

// import Video from "@/components/Video";


export default function Home() {
  
  return (
    <div className="yard">
      <Nav />
      <Headertop />
      <Slider />
      <LogoClouds />
      <Discount />
      <LatestWork />
      <Contact />
      <Footer />
    </div>
  );
}
