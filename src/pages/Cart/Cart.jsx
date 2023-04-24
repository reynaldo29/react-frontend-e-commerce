import React from "react";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";

import "./Cart.css";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer/index";

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const SumaryItem20 = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const Cart = () => {
  return (
    <div className="Container20">
      <Navbar />
      <p></p>
      <Announcement />
      <div className="Wrapper20">
        <h1 className="Title20">YOUR BAG</h1>
        <div className="Top20">
          <TopButton>CONTINUE SHOPPING</TopButton>
          <div className="TopTexts20">
            <span className="TopText20">Shopping Bar(2)</span>
            <span className="TopText20">Your Wishlist(0)</span>
          </div>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </div>

        <div className="Bottom20">
          <div className="Info20">
            <div className="Product20">
              <div className="ProductDetail20">
                <img
                  className="Image20"
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                ></img>
                <div className="Details20">
                  <span className="ProductName20">
                    <b>Product:</b>JESSIE THUNDER SHOES
                  </span>
                  <span className="ProductId20">
                    <b>ID:</b>93813718293
                  </span>
                  <ProductColor color="black" />
                  <span className="ProductSize20">
                    <b>Size:</b>37.5
                  </span>
                </div>
              </div>

              <div className="PriceDetail20">
                <div className="ProductAmountContainer">
                  <Add />
                  <div className="ProductAmount">2</div>
                  <Remove />
                </div>

                <div className="ProductPrice20">$ 30</div>
              </div>
            </div>
            <hr className="HR20" />

            <div className="Product20">
              <div className="ProductDetail20">
                <img
                  className="Image20"
                  src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                ></img>
                <div className="Details20">
                  <span className="ProductName20">
                    <b>Product:</b> HAKURA T-SHIRT
                  </span>
                  <span className="ProductId20">
                    <b>ID:</b> 93813718293
                  </span>
                  <ProductColor color="gray" />
                  <span className="ProductSize20">
                    <b>Size:</b> M
                  </span>
                </div>
              </div>

              <div className="PriceDetail20">
                <div className="ProductAmountContainer">
                  <Add />
                  <div className="ProductAmount">2</div>
                  <Remove />
                </div>

                <div className="ProductPrice20">$ 20</div>
              </div>
            </div>
          </div>

          <div className="Summary20">
            <h1 className="SummaryTittle20">ORDER SUMMARY</h1>
            <SumaryItem20>
              <span className="SumaryItemText20">SubTotal</span>
              <span className="SumaryItemPrice20">$ 80</span>
            </SumaryItem20>

            <SumaryItem20>
              <span className="SumaryItemText20">Estimated Shipping</span>
              <span className="SumaryItemPrice20">$ 5.90</span>
            </SumaryItem20>

            <SumaryItem20>
              <span className="SumaryItemText20">Shipping Discount</span>
              <span className="SumaryItemPrice20">$ 5.90</span>
            </SumaryItem20>

            <SumaryItem20 type="total">
              <span className="SumaryItemText20">Total</span>
              <span className="SumaryItemPrice20">$ 80</span>
              
            </SumaryItem20>
            <button className="Button21">CHECKOUT NOW</button>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
