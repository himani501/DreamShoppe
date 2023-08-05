import React from "react";
import AdvertisementBar from "../components/AdvertisementBar";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

export const Home = () => {
  return (
      <div>
        <AdvertisementBar/>
        <Navbar/>
        <Slider/>
      </div>
  )
}