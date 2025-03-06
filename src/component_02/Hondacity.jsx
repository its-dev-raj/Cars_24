import React from "react";

import Car_overview from "./Car_overview";
import Carousel from "./Carousel";
import Great_things from "./Great_things";
import Car_inspection from "./Car_inspection";
import Book_free from "./Book_free";

const Hondacity = () => {
  return (
    <div className="w-full py-20 bg-[#F5F5F5] h-full flex justify-center gap-10">
      <div className="flex flex-col gap-10  ">
        <Carousel />
        <Great_things />
        <Car_overview />
        <Car_inspection />
      </div>
      <div className="">
        <Book_free />
      </div>
    </div>
  );
};

export default Hondacity;
