import React from "react";
import Sidebar from "./Home/Sections/Sidebar/Sidebar";
import CarContainer from "./Home/Sections/CarContainer/CarContainer";

const Home = () => {
  return (
    <div>
      <div className="w-full h-full flex lg:flex-row flex-col lg:justify-center gap-4 py-30">
        <div className="lg:w-[290px]   bg-white  max-h-screen overflow-y-scroll shadow-lg rounded-lg px-2  cursor-pointer">
          <Sidebar />
        </div>

        <div className="lg:w-[950px] max-h-screen overflow-y-scroll scrollbar-hide">
          <CarContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
