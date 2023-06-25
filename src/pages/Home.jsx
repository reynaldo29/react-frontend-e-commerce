import Announcement from "../components/Announcement";
import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsleeter from "../components/Newsletter";
import Footer from "../components/Footer";
import Information from "../components/Information";
import ProductFeatured from "../components/ProductsFeatured";
import LatestProducts from "../components/LatestProducts";
import ContactAd from "../components/ContactAd";
import SpecialOccasions from "../components/SpecialOccasions";
import CustomerSatisfied from "../components/CustomerSatisfied";
const Home = () => {
    return (
        <>
            {/* <Announcement /> */}

            <Slider />
            <Categories />
            <Products />
            <Information />
            <ProductFeatured />
            <LatestProducts />
            <ContactAd />
            {/* <Newsleeter /> */}
            <SpecialOccasions />
            <CustomerSatisfied />
        </>
    );
};

export default Home;
