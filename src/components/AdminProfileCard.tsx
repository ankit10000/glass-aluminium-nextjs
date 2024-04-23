/* eslint-disable @next/next/no-img-element */
import React from 'react'
import AddProduct from "../images/downloaded/admin.jpg";
import Link from 'next/link'
const AdminCard = () => {
  return (
    <div>
      <div className="card w-56 text-center">
          <h5 className="card-title mt-4">Admin Profile</h5>
        <img src={AddProduct.src} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link href="#" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdminCard