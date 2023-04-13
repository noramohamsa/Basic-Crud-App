import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
      <ul  className='list-unstyled'>
        <li>
            <Link to="/products"> Get All Products</Link>
        </li>
        <li>
            <Link href="#"> Get All Cateogries</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
