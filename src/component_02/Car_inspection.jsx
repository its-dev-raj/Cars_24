import { CarFront, CircleGauge } from "lucide-react";
import React from "react";
import car from "/public/image/car.png";
import badge from "/public/image/badge.png";
import speedometer from "/public/image/speedometer.png";
import report from "/public/image/07984c8a-8f99-400a-9d61-3b6a13c9feedBlurred report12.jpg";
import shield from "/public/image/insurance.png";

const Car_inspection = () => {
  return (
    <div className="flex gap-4 px-6 bg-[#FFFFFF] py-6  flex-col w-[650px] shadow-xl   rounded-2xl h-[400px]">
      <div>
        <p className="text-xl font-semibold">Car inspection report</p>
      </div>
      <div className="flex justify-between items-center pt-2  gap-4">
        <div className="flex flex-col gap-3 items-center">
          <img className="size-8" src={car} alt="" />
          <p className="text-xs font-semibold">No accident history</p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="flex flex-col gap-2 items-center">
            <img className="size-9" src={speedometer} alt="" />
            <p className="text-xs font-semibold">No odometer tampering</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <CarFront className="size-8" />
          <p className="text-xs font-semibold">No water damages</p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img className="size-9" src={badge} alt="" />
          <p className="text-xs font-semibold">140-quality checks</p>
        </div>
      </div>
      <div>
        <img src={report} alt="" />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <img className="size-6  " src={shield} alt="" />
          <p className="text-sm font-bold">CARS24 </p>
          <p className="text-[#717276] ">inspected with 140-quality checks.</p>
        </div>
        <div className="bg-[#EF6E0B] p-2 px-8 rounded-lg">
          <p className="text-white font-semibold text-lg">
            View inspection report
          </p>
        </div>
      </div>
    </div>
  );
};

export default Car_inspection;
