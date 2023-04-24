import React from "react";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Products from "../../components/Products";
import Newsletter from "../../components/Newsletter/index";
import Footer from "../../components/Footer/index";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="Container8">
      <Navbar />
      <Announcement />
      <h1 className="Title4">Dresses</h1>
      <div className="FilterContainer">
        <div className="Filter">
          <span className="FilterText">Filter Products:</span>
          <select className="Select2">
            <option className="Option2" disabled selected>
              Color
            </option>
            <option className="Option2">White</option>
            <option className="Option2">Black</option>
            <option className="Option2">Red</option>
            <option className="Option2">Blue</option>
            <option className="Option2">Yellow</option>
            <option className="Option2">Green</option>
          </select>

          <select className="Select2">
            <option className="Option2" disabled selected>
              Size
            </option>
            <option className="Option2">XS</option>
            <option className="Option2">S</option>
            <option className="Option2">M</option>
            <option className="Option2">L</option>
            <option className="Option2">XL</option>
          </select>
        </div>
        <div className="Filter">
          <span className="FilterText">Sort Products:</span>
          <select className="Select2">
            <option className="Option2" selected>
             Newest
            </option>
            <option className="Option2">Price (asc)</option>
            <option className="Option2">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
