import React from "react";
import About from "./about/About";
import Developer from "./developer/Developer";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import Subscribe from "./subscribe/Subscribe";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Developer />
      <Subscribe />
      <Footer />
    </>
  );
}

export default HomePage;
