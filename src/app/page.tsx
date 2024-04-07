"use client";

import Nav from "@/components/Nav";
// import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

import Headertop from "@/components/Headertop";
import Discount from "@/components/Discount";
import LogoClouds from "@/components/LogoClouds";
import Carousel from "@/components/Carousel";
import LatestWork from "@/components/LatestWork";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="yard">
      <Nav />
      <Headertop />
      <Carousel />
      <LogoClouds />
      <Discount />
      <LatestWork />
      <Contact />
    </div>
  );
}
