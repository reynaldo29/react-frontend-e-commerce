import React, { useEffect, useState } from "react";
import "./products.css";
import Product from "../Product";
import { popularProducts } from "../../data";
import axios from "axios";

const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:6005/api/product"
                );
                setProducts(res.data.data);
                console.log(res.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, [cat]);

    /* return (
    <div className="container6">
      {popularProducts.map((item => (
        <Product item={item} key={item.id} />
      )))}
    </div>
  ); */

    return (
        <section className="flex h-auto w-full flex-col place-content-center place-items-center bg-[#FCF9F7]">
            <div className="relative mb-12 mt-0 flex h-24 w-3/4 place-content-center place-items-center">
                <div className="absolute top-0 flex w-2/3 place-content-center place-items-baseline text-center">
                    <h2 className="font-['Tangerine',normal] text-6xl italic text-[#394149] opacity-20">
                        Productos Populares
                    </h2>
                </div>

                <h3 className="absolute top-7 block text-center font-['Poppins',normal] text-5xl font-semibold">
                    Productos populares
                </h3>
            </div>
            <div className="mb-12 flex w-3/4 flex-wrap place-content-around gap-8">
                {popularProducts.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </div>
        </section>
    );
};

export default Products;
