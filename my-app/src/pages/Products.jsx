import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './products.css'


function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/products').then((response) => response.json())
            .then((data) => {
                console.log(data)
                setProducts(data)
            })
    }, [])
    return (
        <div>
            <h1>Products Page</h1>
            <Link to={'/products/add'} className='btn btn-success mt-3'>Add New Product</Link>
            <table className="table table-striped mt-5 products-table">
                <thead>
                    <tr>
                        <th >ID</th>
                        <th >Title</th>
                        <th>Description</th>
                        <th >Price</th>
                        <th >Operations</th>

                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <th >{product.id}</th>
                                <td>{product.title}</td>
                                <td>{product.description.slice(0,30)}....</td>
                                <td>{product.price}</td>
                                <td>
                                    <button className='btn btn-danger btn-sm'>Delete</button>
                                    <Link to={`/products/${product.id}`} className='btn btn-info btn-sm'>View</Link>
                                    <button className='btn btn-primary btn-sm'>Edit</button>
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
        </div>
    )
}

export default Products
