import React from "react";
import Ads from "../CarSection/Ads";
import { Link } from "react-router-dom";
import Card_Cars from "../CarSection/Card_Cars";
import Accordion from "../CarSection/Accordion";
const CarContainer = () => {
  return (
    <div>
      <Ads />
      <Link to="/detail">
        <Card_Cars />
      </Link>
      <Accordion />
    </div>
  );
};

export default CarContainer;
