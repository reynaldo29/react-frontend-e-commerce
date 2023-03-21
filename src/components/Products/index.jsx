import React from 'react'
import "./products.css"
import Product from '../Product'
import { popularProducts } from '../../data'
const Products = () => {
  return (
    <div className='container6'>
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id}/>
        ))}
        
    </div>
  )
}

export default Products