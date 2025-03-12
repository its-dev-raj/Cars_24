import React from "react";

import Car_overview from "./Sections/Car_overview";
import Carousel from "./Sections/Carousel";
import Great_things from "./Sections/Great_things";
import Car_inspection from "./Sections/Car_inspection";
import Book_free from "./Sections/Book_free";
import Navbar from "../../component_01/Navbar";

const Hondacity = () => {
  return (
    <>
      <div>
        <div className="w-full lg:py-20 py-12 bg-[#F5F5F5]  lg:px-0 px-4 h-auto flex lg:flex-row flex-col justify-center gap-10">
          <div className="flex flex-col gap-10  mt-12 ">
            <Carousel />
            <Great_things />
            <Car_overview />
            <Car_inspection />
          </div>
          <div className="relative mt-12">
            <Book_free />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hondacity;
