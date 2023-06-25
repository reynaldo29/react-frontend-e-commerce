import React from "react";
import "./categoryItem.css";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
    /* return (
        <div className="container5">
            <Link to={`/products/${item.cat}`}>
                <img src={item.img} alt="" className="Image" />
                <div className="info">
                    <h1 className="Title">{item.title}</h1>
                    <button className="Buttom">SHOP NOW</button>
                </div>
            </Link>
        </div>
    ); */
    return (
        <article className="relative h-[550px] w-[450px]">
            <Link to={`/products/${item.cat}`}>
                <div className="h-full w-full overflow-hidden rounded-t-full">
                    <img
                        src={item.img}
                        alt="category"
                        className="h-full w-full transform object-cover duration-300 hover:scale-125"
                    />
                </div>
                <div className="absolute right-0 top-0 flex h-32 w-32 place-content-center place-items-center rounded-full bg-[#F7F0EB]">
                    <h3 className="text-black">{item.title}</h3>
                </div>
            </Link>
        </article>
    );
};

export default CategoryItem;
