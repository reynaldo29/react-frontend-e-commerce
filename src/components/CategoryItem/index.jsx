import React from "react";
import "./categoryItem.css";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className="container5">
      <Link to={`/products/${item.cat}`}>
        <img src={item.img} alt="" className="Image" />
        <div className="info">
          <h1 className="Title">{item.title}</h1>
          <button className="Buttom">SHOP NOW</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
