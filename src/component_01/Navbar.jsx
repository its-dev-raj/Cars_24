import { ChevronDown, CircleUser, Heart } from "lucide-react";
import React from "react";

const Navbar = () => {
  const financeData = [
    "Buy used car",
    "Sell car",
    "Car finance",
    "New cars",
    "Car services",
  ];

  return (
    <div className="flex lg:px-34 px-6 border border-b fixed z-50 bg-white border-gray-100 border-r-0 w-full lg:h-20 h-16 ">
      <div className="flex gap-2 items-center w-full  justify-between ">
        <div className="cursor-pointer">
          <img
            className="w-22 h-10 "
            src="https://media.cars24.com/cars24/seo/static/1_20230830_1693395013.png"
            alt=""
          />
        </div>
        <div className={`lg:flex lg:gap-4 gap-2 hidden cursor-pointer`}>
          {financeData.map((item, idx) => (
            <div className="flex items-center gap-2 justify-center">
              <p className="lg:text-lg text-xs text-[#0F0F26f]">{item}</p>
              <ChevronDown className={`size-5 lg:flex hidden`} />
            </div>
          ))}
        </div>
        <div className={`flex  gap-4 items-center justify-center`}>
          <div className="flex lg:gap-4 gap-3">
            <Heart className="size-6" />
            <CircleUser className="text-black size-6" />
          </div>
          <div className="flex flex-col ">
            <div>
              <p className=""> Sign in</p>
            </div>
            <div className="flex  items-center gap-1">
              <p className="lg:text-lg lg:font-semibold ">Account </p>
              <ChevronDown className="size-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
