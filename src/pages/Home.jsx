import React from "react";
import Hero from "../components/Hero";
import StarsBg from "../components/atoms/StarsBg";
import About from "../components/About";
import Navbar from "../components/layout/Navbar";
import ITSupport from "../components/it/ITSupport";
import Footer from "../components/layout/Footer"
const Home = () => {
  return (
    <>
      <Navbar />

      <div className="relative bg-terminal min-h-screen">
        <StarsBg />
        <Hero />
        <About />
        <ITSupport />
       
      </div>
    </>
  );
};

export default Home;