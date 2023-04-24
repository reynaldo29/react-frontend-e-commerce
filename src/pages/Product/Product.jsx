import React from "react";
import { Add, Remove } from "@mui/icons-material";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import "./Product3.css";
import Newsletter from "../../components/Newsletter/index";
import Footer from "../../components/Footer/index";
const FilterColor = styled.div`
  border: solid;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const Product = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="Wrapper6">
        <div className="ImgContainer3">
          <img className="Image3" src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </div>
        <div className="InfoContainer3">
          <h1 className="Title3">Denim Jumpsuit</h1>
          <p className="Desc3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            commodi quasi accusantium esse placeat voluptate omnis aliquid
            eligendi fuga aut quisquam qui corrupti, tempore sint quas enim
            nobis, natus labore!
          </p>
          <span className="Price3">$ 20</span>
          <div className="FilterContainer3">
            <div className="Filter3">
              <span className="FilterTitle3">Color</span>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </div>

            <div className="Filter3">
              <span className="FilterTitle3">Size</span>
              <select className="FilterSize3">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className="AddContainer3">
            <div className="AmountContainer3">
              <Remove />
              <span className="Amount3">1</span>
              <Add />
            </div>
            <button className="Buttom9">ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
