/* eslint-disable @next/next/no-img-element */
import React from "react";
import AdminProfileCard from "./AdminProfileCard";
import ProductCard from "./ProductCard";


const page = () => {
  return (
    <div className="d-flex flex-wrap">
      <AdminProfileCard />
      <ProductCard />
    </div>
  );
};

export default page;
