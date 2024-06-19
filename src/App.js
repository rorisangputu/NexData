import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import WhyUs from "./components/WhyUs";





function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div id="Analytics">
        <Analytics />
      </div>
      <Newsletter />
      <div id="Sub">
        <Cards />
      </div>
      <div id="WhyUs">
        <WhyUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
