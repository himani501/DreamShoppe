import React from "react";
import AdvertisementBar from "../components/AdvertisementBar";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export const Home = () => {
  return (
      <div>
          <AdvertisementBar/>
          <Navbar/>
          <Slider/>
          <Categories/>
          <Products/>
          <Newsletter/>
          <Footer/>
      </div>
  )
}