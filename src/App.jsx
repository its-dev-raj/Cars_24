import React from "react";
import Hondacity from "./Pages/Details/Hondacity";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./component_01/Footer";
import Navbar from "./component_01/Navbar";

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Hondacity />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
