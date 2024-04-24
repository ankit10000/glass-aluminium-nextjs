/* eslint-disable @next/next/no-img-element */
import React from "react";
import slide1 from "../images/downloaded/4v.webp";
import slide2 from "../images/downloaded/2v.webp";
import slide3 from "../images/downloaded/16-v.webp";
function Iron() {
  return (
    <div className="bg-white">
        <div id="iron"></div>
      <div className="container m-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className=" m-auto py-16  lg:max-w-none lg:pb-32 ">
            <h1 className="text-center text-6xl mt-3">Iron</h1>
            <div className="outerbox">
            <div className="box box1">
                <img src={slide1.src} alt="loading" />
            </div>
            <div className="box box2">
                <img src={slide2.src} alt="loading" />
            </div>
            <div className="box box3">
                <img src={slide3.src} alt="loading" />
            </div>
            <div className="box box4">
                <img src={slide3.src} alt="loading" />
            </div>
            </div>
        </div>
      </div>
      <div id="recentwork"></div>
    </div>
  );
}

export default Iron;
