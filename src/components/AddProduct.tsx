import React from 'react'

const AddProduct = () => {
  return (
    <div className="container my-5 p-5">
        <h1 className="text-center">Admin Panel</h1>
      <form className="mt-5">
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Product Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="productName"
              id="inputEmail3"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Product Detail
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="productDetail"
              id="inputPassword3"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Product Image Link
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="productImage"
              id="inputPassword3"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="select" className="col-sm-2 col-form-label">
            Select Category
          </label>
          <div className="col-sm-10">
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  )
}

export default AddProduct