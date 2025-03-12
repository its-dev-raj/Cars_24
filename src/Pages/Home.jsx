import React from "react";
import Navbar from "../component_01/Navbar";
import { Link } from "react-router-dom";
import Card_Cars from "./Home/Sections/CarSection/Card_Cars";
import Sidebar from "./Home/Sections/Sidebar/Sidebar";
import Accordion from "./Home/Sections/CarSection/Accordion";
import Ads from "./Home/Sections/CarSection/Ads";

const Home = () => {
  return (
    <div>
      <div className="w-full h-full flex lg:flex-row flex-col lg:justify-center gap-4 py-30">
        <div className="lg:w-[280px]   bg-white  max-h-screen overflow-y-scroll shadow-xl rounded-lg px-2  cursor-pointer">
          <Sidebar />
        </div>

        <div className="lg:w-[950px] max-h-screen overflow-y-scroll">
          <Ads />
          <Link to="/detail">
            <Card_Cars />
          </Link>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Home;
