import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Products from "../../components/Products";
import Newsletter from "../../components/Newsletter/index";
import Footer from "../../components/Footer/index";
import "./ProductList.css";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
    console.log("cnsol1", filters);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
    console.log("cnsl2", sort);
  };

  return (
    <div className="Container8">
      <Navbar />
      <Announcement />
      <h1 className="Title4">Dresses</h1>
      <div className="FilterContainer">
        <div className="Filter">
          <span className="FilterText">Filter Products:</span>
          <select
            name="color"
            onChange={handleFilter}
            className="Select2"
            defaultValue="default"
          >
            <option className="Option2">Color</option>
            <option className="Option2">White</option>
            <option className="Option2">Black</option>
            <option className="Option2">Red</option>
            <option className="Option2">Blue</option>
            <option className="Option2">Yellow</option>
            <option className="Option2">Green</option>
          </select>

          <select
            name="size"
            onChange={handleFilter}
            className="Select2"
            defaultValue="default"
          >
            <option className="Option2">Size</option>
            <option className="Option2">XS</option>
            <option className="Option2">S</option>
            <option className="Option2">M</option>
            <option className="Option2">L</option>
            <option className="Option2">XL</option>
          </select>
        </div>
        <div className="Filter">
          <span className="FilterText">Sort Products:</span>
          <select
            onChange={handleSort}
            className="Select2"
            defaultValue="default"
          >
            <option value="newest" className="Option2">
              Newest
            </option>
            <option value="asc" className="Option2">
              Price (asc)
            </option>
            <option value="desc" className="Option2">
              Price (desc)
            </option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
