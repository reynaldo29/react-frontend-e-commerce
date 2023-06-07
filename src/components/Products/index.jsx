import React, { useEffect, useState } from "react";
import "./products.css";
import Product from "../Product";
import { popularProducts } from "../../data";
import axios from 'axios';

const Products = ({ cat, filters, sort }) => {

  const[products,setProducts] = useState([])
  const[filteredProducts,setFilteredProducts]=useState([])

  useEffect(()=>{

    const getProducts = async ()=>{
      try{
        const res = await axios.get("http://localhost:6005/api/product");
        setProducts(res.data.data)
       console.log(res.data.data)
  
      }catch(error){
        console.log(error)
      }
  
    }
    getProducts();
   
  },[cat])
 
  return (
    <div className="container6">
      {popularProducts.map((item => (
        <Product item={item} key={item.id} />
      )))}
    </div>
  );
};

export default Products;
