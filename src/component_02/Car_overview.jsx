import { BadgeInfo, ChevronDown, ChevronUp, Key } from "lucide-react";
import React, { useState } from "react";

import regyear from "/public/image/reg-year.jpg";
import fuel from "/public/image/fuel.jpg";
import odometer from "/public/image/odometer.jpg";
import odometer1 from "/public/image/odometer (1).jpg";
import engine from "/public/image/engine-capacity.jpg";
import ownership from "/public/image/ownership.jpg";
import make from "/public/image/make-year.jpg";
import key from "/public/image/key.jpg";
import rto from "/public/image/rto.jpg";
import insurance1 from "/public/image/insurance.jpg";
import insurance from "/public/image/insurance_type.jpg";

const Car_overview = () => {
  const [updown, setUpDown] = useState(true);

  return (
    <div className="flex   gap-4 px-6  py-6  flex-col w-[650px] shadow-xl  rounded-2xl h-auto">
      <div className="flex justify-between">
        <p className="text-xl font-semibold"> Car overview</p>
        <ChevronDown
          className={`bg-gray-200 rounded-full p-1 transition-transform duration-300 ${
            updown ? "rotate-180" : ""
          }`}
          onClick={() => setUpDown((prev) => !prev)}
        />
        {/* <ChevronUp /> */}
      </div>
      {updown ? (
        <div className="flex justify-between w-[650px] gap-12  overflow-hidden">
          <div className="flex flex-col w-[600px]">
            <div className="flex justify-between h-18 border-b  border-gray-300  w-[600px] overflow-hidden ">
              <div className="flex items-center gap-4">
                <div>
                  <img className="size-6" src={regyear} alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#B0B0B0] text-xs">Reg. year</p>
                  <p className="text-lg font-semibold">Feb 2015</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <img className="size-6" src={fuel} alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#B0B0B0] text-xs">Fule</p>
                  <p className="text-lg font-semibold">Petrol</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <img className="size-6" src={odometer} alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#B0B0B0] text-xs">KM driven</p>
                  <p className="text-lg font-semibold">98,092 km</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between h-18  border-b  border-gray-300  w-[600px] overflow-hidden ">
              <div className="flex items-center  gap-4">
                <div>
                  <img className="size-6" src={odometer1} alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#B0B0B0] text-xs">Transmission</p>
                  <p className="text-lg font-semibold">Manual</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <img className="size-6" src={engine} alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#B0B0B0] text-xs">Engine capacity</p>
                  <p className="text-lg font-semibold">1497cc</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <img className="size-6" src={ownership} alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#B0B0B0] text-xs">Ownership</p>
                  <p className="text-lg font-semibold">2nd</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between h-18  border-b border-gray-300 w-[600px] overflow-hidden ">
              <div className="flex items-center  gap-4">
                <div>
                  <img className="size-6" src={make} alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#B0B0B0] text-xs">Make year</p>
                  <p className="text-lg font-semibold">Jan 2015</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <img className="size-6" src={key} alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#B0B0B0] text-xs">Spare key</p>
                  <p className="text-lg font-semibold">No</p>
                </div>
              </div>
              <div className="flex items-center  gap-4">
                <div>
                  <img className="size-6" src={rto} alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#B0B0B0] text-xs">Reg number</p>
                  <p className="text-lg font-semibold">KA04**6437</p>
                </div>
              </div>
            </div>

            <div className="flex gap-22 h-18  w-[600px] overflow-hidden ">
              <div className="flex items-center  gap-4">
                <div>
                  <img className="size-6" src={insurance1} alt="" />
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <p className="text-[#B0B0B0] text-xs">Insurance</p>
                    <BadgeInfo className="size-4 bg-gray-500 text-white rounded-full " />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Need renewal</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center  gap-4">
                <div>
                  <img className="size-6" src={insurance} alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#B0B0B0] text-xs">insurance</p>
                  <p className="text-lg font-medium">Plans from</p>
                  <p className="text-lg font-medium">₹3,796/y</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-[#B0B0B0]">
          View car details like registration number, ownership, model year,
          insurance, fuel type, and more.
        </div>
      )}
    </div>
  );
};

export default Car_overview;
