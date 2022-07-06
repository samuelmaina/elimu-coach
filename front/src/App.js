import React from "react";
import "./App.css";
import About from "./components/about/About";
import Developer from "./components/developer/Developer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";
import Convert from "./components/converter/Convert";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Developer />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
