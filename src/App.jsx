import React from "react";
import Navbar from "./components/Header";
import "./App.css";
import Tip from "./components/home/CallToAction";
import Card from "./components/home/Card";
import Footer from "./components/Footer";
import HeroSection from "./components/home/HeroSection";
import Slider from "./components/selfDefence/Slider";
import Second from "./components/selfDefence/Second";

function App() {
  return (
    <div className="bg-color">
      <Navbar />
      {/* <HeroSection /> */}
      {/* <Card /> */}
      <Tip />
      {/* <Second/> */}
      <Footer />


    </div>
  );
}

export default App;
