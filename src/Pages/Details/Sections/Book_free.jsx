import { BadgeCheck, Heart, PhoneCall } from "lucide-react";
import React from "react";
import direct from "/public/image/direct.png";
import checklist from "/public/image/checklist.png";
const Book_free = () => {
  return (
    <div className="flex gap-4 bg-white rounded-2xl shadow flex-col    lg:w-[500px] lg:h-[620px]">
      <div className="flex flex-col gap-2 px-3 lg:px-6 py-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <p className="lg:text-2xl text-xl font-semibold">2015 Honda City</p>
            <p className="lg:text-3xl text-xl">1.5L I-VTEC V</p>
          </div>
          <Heart />
        </div>
        <p className="text-2xl font-semibold">MT</p>
        <div className="flex items-center text-[#717272] gap-2 w-full ">
          <p className="py-1 rounded-sm px-1 lg:px-2 bg-[#F5F5F5] font-semibold text-xs lg:text-sm">
            98,092 km
          </p>
          <p className="py-1 rounded-sm px-1 lg:px-2 bg-[#F5F5F5]  font-semibold text-xs lg:text-sm">
            2nd owner
          </p>
          <p className="py-1 rounded-sm px-1 lg:px-2 bg-[#F5F5F5]  font-semibold text-xs lg:text-sm">
            Manual
          </p>
          <p className="py-1 rounded-sm px-1 lg:px-2 bg-[#F5F5F5]  font-semibold text-xs lg:text-sm">
            Petrol
          </p>
          <p className="py-1 rounded-sm px-1 lg:px-2 bg-[#F5F5F5]  font-semibold text-xs lg:text-sm">
            KA-04
          </p>
        </div>
        <div className="flex justify-between pt-2">
          <div className="flex items-center gap-2">
            <img className="size-4 text-[#D46231]" src={direct} alt="" />
            <p className="text-[#717272] border-b border-dashed font-semibold text-lg">
              Gandhi Nagar
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#D46231]">
            <PhoneCall className="size-4 " />
            <p className="text-[#D46231] font-semibold">Call Hub</p>
          </div>
        </div>
        <div className="flex justify-between rounded-l-lg bg-linear-to-r  from-gray-100 to-white px-2  p-1 ">
          <div className="flex gap-2 items-center">
            <img className="size-4" src={checklist} alt="" />
            <p>CARS24 Assured</p>
          </div>
          <p className="border-b border-dashed text-xs font-semibold">
            Know benefits
          </p>
        </div>
        <div className="flex flex-col rounded-xl border-gray-200 pt-2 mt-3 border-t border  gap-2">
          <div className="flex  justify-between px-3 items-center">
            <div className="flex flex-col">
              <p>EMI starts at</p>
              <p className="text-xl font-semibold">₹11,011/mo</p>
            </div>
            <p className="text-lg font-semibold">Check eligibility →</p>
          </div>
          <div className="flex bg-[#F5F5F5]  justify-between px-3 items-center py-3 ">
            <div className="flex flex-col gap-2">
              <p className="text-lg ">₹4.95 lakh</p>
              <p className="text-xs text-gray-500 font-medium">
                +7,796 other charges
              </p>
            </div>
            <p className="text-lg font-semibold">Price breakup →</p>
          </div>
        </div>

        <div className="p-3 text-center bg-[#EF6E0B] rounded-xl mt-34  text-white font-semibold text-lg">
          Book free test drive
        </div>
      </div>
    </div>
  );
};

export default Book_free;
