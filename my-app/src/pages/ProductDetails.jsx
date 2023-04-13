import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './productDetails.css'

function ProductDetails() {
    let {productId} = useParams()
    const [productid,setProductid]=useState({})
    useEffect(()=>{
        fetch( `http://localhost:3000/products/${productId}`).then((response)=>response.json()).then((product)=>{
  console.log(product)
  setProductid(product)
        })
    },[])
  return (
    <div>
  
      <h1> Details of product {productId} :</h1>
      <div className='productStyle'>ProductTitle :{productid.title}</div>
      <div className='productStyle'>ProductDescription :{productid.description}</div>
      <div className='productStyle'> ProductCategory :{productid.category}</div>
      <img className='img' src={productid.image}  alt="there is no image"/>
      <div className='productStyle'> ProductPrice :{productid.price}$</div>
    </div>
  )
}

export default ProductDetails
