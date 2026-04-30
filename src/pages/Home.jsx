import React from "react";
import Hero from "../components/Hero";
import StarsBg from "../components/atoms/StarsBg";
import About from "../components/About";
import Navbar from "../components/layout/Navbar";
import Network from "../components/it/Network";
import Footer from "../components/layout/Footer"
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="relative bg-terminal min-h-screen">
        <StarsBg />
        <Hero />
        <About />
        <Network />
        <Carousel/>
      </div>
      <Footer />
    </>
  );
};

export default Home;