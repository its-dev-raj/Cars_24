import React from "react";

import Cruise from "/public/image/Cruise_Control.jpg";
import OME from "/public/image/OEM_Accessories.jpg";
import Boot from "/public/image/Boot_Space.jpg";
import Standerd from "/public/image/Standard_safety_features.jpg";

const Great_things = () => {
  const Gratthings = [
    {
      img1: Cruise,
      title: "Cruise control",
      subheading: "Intelligent, smart driving system.",
    },
    {
      img1: OME,
      title: "Essential features",
      subheading: "AC, power windows, music system.",
    },
    {
      img1: Boot,
      title: "Boot space more than 500 litres",
      subheading: "Room for all your luggage and more.",
    },
  ];
  return (
    <div className="flex  bg-linear-to-t from-white to-[#F8F4E9] gap-4 px-6  py-6 relative flex-col overflow-hidden w-[650px] border rounded-2xl h-[400px]">
      <div className="">
        <p className="text-black text-xl font-semibold">
          Great things about this car
        </p>
      </div>
      <div className="flex">
        {Gratthings.map((item, idx) => (
          <div className="flex flex-col gap-3">
            <div>
              <img
                className="size-12 bg-white rounded-full
                      "
                src={item.img1}
                alt=""
              />
            </div>
            <div>
              <p className="font-medium text-lg ">{item.title}</p>
              <p className="text-[#878886] font-semibold text-sm">
                {item.subheading}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <img className="size-12  bg-white rounded-full" src={Standerd} alt="" />
        <p className="font-medium text-lg ">2 airbags and ABS</p>
        <p className="text-[#878886] font-semibold text-sm">
          Superior safety and
        </p>
        <p className="text-[#878886] font-semibold text-sm"> protection.</p>
      </div>
    </div>
  );
};

export default Great_things;
