import React from "react";
import Hondacity from "./component_02/Hondacity";
import Home from "./component_01/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Hondacity />}/>
      </Routes>
    </>
  );
};

export default App;
