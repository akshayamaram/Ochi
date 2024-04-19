/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Playground from "./components/Playground";
import Projects from "./components/Projects";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About/>
      <Playground/>
      <Projects/>
      <Cards/>
      <Footer/>
    </div>
  );
};

export default App;
