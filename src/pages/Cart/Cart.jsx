import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import React, { useState } from "react";
import "./Cart.css";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";
import { useDispatch } from 'react-redux';
import Footer from "../../components/Footer/index";
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import { removeProduct } from "../../redux/cartRedux";
import { decreaseQuantity } from "../../redux/cartRedux";
import { increaseQuantity } from "../../redux/cartRedux";
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
  const cart = useSelector(state=>state.cart)
  const dispatch = useDispatch();

  const handleRemoveProduct = (productId)=>{
    dispatch(removeProduct(productId))
  }

  const handleDecreaseQuantity = (productId)=>{
    dispatch(decreaseQuantity(productId))
  }

  const handleIncreaseQuantity = (productId)=>{
    dispatch(increaseQuantity(productId))
  }
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

            {cart.products.map(product=>(
            <div className="Product20">
              <div className="ProductDetail20">
                <img
                  className="Image20"
                  src={product.img}
                ></img>
               
                <div className="Details20">
                  <span className="ProductName20">
                    <b>Product:</b>{product.name}
                  </span>
                  <span className="ProductId20">
                    <b>ID:</b>{product.id}
                  </span>
                  <ProductColor color="black" />
                  <span className="ProductSize20">
                    <b>Size:</b>37.5
                  </span>
                </div>
              </div>

              <div className="PriceDetail20">
                <div className="ProductAmountContainer">
                  <Add  className="cursor-pointer" onClick={()=>handleIncreaseQuantity(product.id)} />
                  
                  <div className="ProductAmount">{product.quantity}</div>
                  <Remove className="cursor-pointer" onClick={()=>handleDecreaseQuantity(product.id)}/>
                </div>

                <div className="ProductPrice20">{product.price*product.quantity}</div>
                <div>
              <Button onClick={()=>handleRemoveProduct(product.id)}variant="contained" color="error">Remove</Button>
              </div>
              </div>
             
             
            </div>
            ))}
            <hr className="HR20" />
          </div>
          

          <div className="Summary20">
            <h1 className="SummaryTittle20">ORDER SUMMARY</h1>
            <SumaryItem20>
              <span className="SumaryItemText20">SubTotal</span>
              <span className="SumaryItemPrice20">{cart.total}</span>
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
              <span className="SumaryItemPrice20">{cart.total}</span>
              
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
