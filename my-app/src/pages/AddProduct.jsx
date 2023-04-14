import React, { useState } from 'react'
import Axios from 'axios'
import axios from 'axios'
function AddProduct() {

  const [title,setTitle]=useState('')
  const [price,setPrice]=useState(0)
  const [description,setDescription]=useState('')
  const formSubmit = (e) => {
    e.preventDefault();
    // console.log(title)
axios.post('http://localhost:3000/products',{
  title,
  price,
  description,
}).then((data)=>console.log(data))

  }
  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">Title</label>
          <input type="text" className="form-control" id="productTitle" aria-describedby="productTitle"
          onChange={(e)=>setTitle(e.target.value)} placeholder='productTitle' />

        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">price</label>
          <input type="number" className="form-control" id="productPrice" aria-describedby="productPrice" 
          placeholder='productPrice'  onChange={(e)=>setPrice(e.target.value)}/>

        </div>


        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">productDescription</label>
          <input type="text" className="form-control" id="productDescription" aria-describedby="productDescription"
          onChange={(e)=>setDescription(e.target.value)} placeholder='productDescription' />

        </div>
        <button type="submit" className="btn btn-primary">AddProduct</button>
      </form>
    </div>
  )
}

export default AddProduct
