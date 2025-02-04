import "./App.css";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/About/AboutUs";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Locations from "./components/Locations/Locations";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <div style={{ marginBottom: "0px" }}>
          {" "}
          <Navbar />
        </div>
        <div style={{ marginTop: "0px" }}>
          {" "}
          <Routes>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/locations" element={<Locations />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </div>
        <div>
          {" "}
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
