import React from "react";
import Hero from "../components/Hero";
import StarsBg from "../components/atoms/StarsBg";
import Navbar from "../components/layout/Navbar";
import Network from "../components/it/Network";
import Footer from "../components/layout/Footer"
import Carousel from "../components/Carousel";
import AboutST from "../components/AboutST"
const Home = () => {
  return (
    <>
      <Navbar />

      <div className="relative bg-terminal min-h-screen">
        <StarsBg />
        <Hero />
        <AboutST />
        <Network />
        <Carousel/>
      </div>
      <Footer />
    </>
  );
};

export default Home;