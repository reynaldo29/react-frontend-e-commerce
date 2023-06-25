import React, { useState } from "react";
import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import "./Product3.css";
import Newsletter from "../../components/Newsletter/index";
import Footer from "../../components/Footer/index";
import { useParams } from "react-router-dom";
import { products } from "../../data";
import ProductFeatured from "../../components/ProductsFeatured";
import Products from "../../components/Products";
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
    const { id } = useParams();
    const producto = products.find((item) => item.id === Number(id));

    /* return (
        <div>
            <div className="Wrapper6">
                <div className="ImgContainer3">
                    <img className="Image3" src={producto.img} />
                </div>

                <div className="InfoContainer3">
                    <h1 className="Title3">Denim Jumpsuit</h1>
                    <p className="Desc3">
                        lorem ipsun dolor sit amet, consectur adispcon elit /
                        eljvk Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Expedita commodi quasi accusantium
                        esse placeat voluptate omnis aliquid eligendi fuga aut
                        quisquam qui corrupti, tempore sint quas enim nobis,
                        natus labore!
                    </p>
                    <span className="Price3">s/. {producto.price}</span>
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
        </div>
    ); */

    return (
        <>
            <section className="flex h-auto w-full flex-col place-content-center place-items-center bg-[rgb(252,249,247)]">
                <div className="mb-12 flex w-3/4 flex-row">
                    <div className="flex w-1/2 place-content-center place-items-center">
                        <div className="h-4/5 w-4/5 overflow-hidden">
                            <img
                                src={producto.img}
                                alt="image.jpg"
                                className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-125"
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-col place-content-center place-items-center">
                        <div className="flex w-4/5 flex-col place-content-center place-items-center gap-6 font-['Poppins']">
                            <div className="flex w-full flex-col gap-6">
                                <div>
                                    <h1 className="text-4xl font-bold">
                                        {producto.name}
                                    </h1>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-semibold text-[#C28566]">
                                        S/. {producto.price.toFixed(2)}
                                    </h3>
                                    <p className="text-2xl text-[#C28566]">
                                        Disponible: Sí
                                    </p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold">
                                        Descripcion:{" "}
                                    </p>
                                    <p className="text-justify text-lg">
                                        {producto.description}
                                    </p>
                                </div>
                            </div>
                            {/*BOTONES */}
                            <div className="flex w-full flex-row gap-2">
                                <div className="flex h-[48px] w-1/3 flex-row place-content-between">
                                    <div className="flex h-full w-1/3 cursor-pointer items-center justify-center bg-gray-300">
                                        <Remove />
                                    </div>
                                    <div className="flex h-full w-1/3 items-center justify-center bg-white">
                                        {1}
                                    </div>
                                    <div className="flex h-full w-1/3 cursor-pointer items-center justify-center bg-gray-300">
                                        <Add />
                                    </div>
                                </div>
                                <button className="w-2/3 bg-[#e9ac8e]">
                                    Añadir al carrito
                                </button>
                            </div>
                            <button className="h-[48px] w-full bg-[#C28566]">
                                Comprar ahora
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Products />
        </>
    );
};

export default Product;
