import React from "react";
import Hondacity from "./Pages/Details/Hondacity";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./component_01/Footer";
import Navbar from "./component_01/Navbar";
import Postcar from "./Pages/Home/Sections/POST/Postcar";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Hondacity />} />
      </Routes>
      <Postcar />
      <Footer />
    </>
  );
};

export default App;
