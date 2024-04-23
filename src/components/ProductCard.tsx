/* eslint-disable @next/next/no-img-element */
import React from 'react'
import AddProduct from "../images/downloaded/productAdd.jpg";
import Link from 'next/link'
const ProductCard = () => {
  return (
    <div>
        <div className="card w-56 text-center mx-4">
          <h5 className="card-title mt-4">Add Product</h5>
        <img src={AddProduct.src} className="card-img-top mb-2 w-92" alt="..." />
        <div className="card-body">
          
          <Link href="#" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard