import React from "react";
import Card_Cars from "./Card_Cars";
import Makemodel from "./Makemodel";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-full flex  justify-center  gap-4 py-12">
      <div className="w-[270px] py-12 h-full shadow rounded-lg scroll-auto px-2">
        <Makemodel />
      </div>
      <div className="w-[1000px] h-full">
        <Link to="/detail">
        <Card_Cars />
        </Link>
      </div>
    </div>
  );
};

export default Home;
