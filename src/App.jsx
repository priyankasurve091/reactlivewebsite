import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
//import Resturant from './component/Basics/Resturant'
//import UseState from './component/Hooks/useState'
//import Todo from './component/todoreact/todo'
//import Temp from './component/weather/temp'
import Home from "./Home";
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />


      </Routes>
      <Footer />
    </>
  )
}

export default App
