import React from "react";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import "./product.css";

const Product = ({ item }) => {
  return (
    <div className="Container7">
      <div className="Circle" />
      <img className="Image5" src={item.img} />
      <div className="Info3">
        
        <div className="Icon5">
          <ShoppingCartOutlined />
        </div>
        <div className="Icon5">
          <SearchOutlined />
        </div>
        <div className="Icon5">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
