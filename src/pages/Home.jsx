import Announcement from "../components/Announcement";
import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsleeter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      
      <Navbar />
      <p></p>
      <Slider/>
      
      <Products/>
      <Categories/>
      <Newsleeter/>
      <Footer/>
      
    </div>
  );
};

export default Home;
