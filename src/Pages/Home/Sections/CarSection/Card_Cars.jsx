import React from "react";
import RightFront from "/public/Home_image/2-Right-Front-Diagonal (1).jpg";
import RightFront2 from "/public/Home_image/2-Right-Front-Diagonal (2).jpg"
import checklist from "/public/image/checklist.png";
import autonaut from "/public/Home_image/autonaut.8a723bda.jpg";
import { ChevronDown, MapPin } from "lucide-react";

const carsData = [
  {
    id: 1,
    img: RightFront,
    name: "2016 Maruti Swift Dzire",
    model: "VXI",
    kmDriven: "50.27k km",
    fuel: "Petrol",
    transmission: "Manual",
    owner: "2nd owner",
    emi: "₹9,345/m",
    price: "₹4.78 lakh",
    location: "Whitefield Main Road, Bhoruka Tech Park, Bengaluru",
  },
  {
    id: 2,
    img: RightFront2,
    name: "2020 Hyundai i20",
    model: "Asta",
    kmDriven: "35.5k km",
    fuel: "Diesel",
    transmission: "Automatic",
    owner: "1st owner",
    emi: "₹10,850/m",
    price: "₹7.25 lakh",
    location: "Koramangala, Bangalore",
  },
  {
    id: 3,
    img: RightFront,
    name: "2018 Honda City",
    model: "VX",
    kmDriven: "42.1k km",
    fuel: "Petrol",
    transmission: "Manual",
    owner: "1st owner",
    emi: "₹11,650/m",
    price: "₹8.90 lakh",
    location: "Indiranagar, Bangalore",
  },
  {
    id: 4,
    img: RightFront,
    name: "2018 Honda City",
    model: "VX",
    kmDriven: "42.1k km",
    fuel: "Petrol",
    transmission: "Manual",
    owner: "1st owner",
    emi: "₹11,650/m",
    price: "₹8.90 lakh",
    location: "Indiranagar, Bangalore",
  },
  {
    id: 5,
    img: RightFront,
    name: "2018 Honda City",
    model: "VX",
    kmDriven: "42.1k km",
    fuel: "Petrol",
    transmission: "Manual",
    owner: "1st owner",
    emi: "₹11,650/m",
    price: "₹8.90 lakh",
    location: "Indiranagar, Bangalore",
  },
  {
    id: 6,
    img: RightFront,
    name: "2018 Honda City",
    model: "VX",
    kmDriven: "42.1k km",
    fuel: "Petrol",
    transmission: "Manual",
    owner: "1st owner",
    emi: "₹11,650/m",
    price: "₹8.90 lakh",
    location: "Indiranagar, Bangalore",
  },
  {
    id: 7,
    img: RightFront,
    name: "2018 Honda City",
    model: "VX",
    kmDriven: "42.1k km",
    fuel: "Petrol",
    transmission: "Manual",
    owner: "1st owner",
    emi: "₹11,650/m",
    price: "₹8.90 lakh",
    location: "Indiranagar, Bangalore",
  },
  {
    id: 8,
    img: RightFront,
    name: "2018 Honda City",
    model: "VX",
    kmDriven: "42.1k km",
    fuel: "Petrol",
    transmission: "Manual",
    owner: "1st owner",
    emi: "₹11,650/m",
    price: "₹8.90 lakh",
    location: "Indiranagar, Bangalore",
  },
];

const Card_Cars = ({ car }) => {
  console.log(car);
  return (
    <div className=" w-[320px] lg:w-[300px] cursor-pointer h-[325px] shadow border overflow-hidden border-gray-300 rounded-xl">
      <div className="bg-linear-to-b from-[#D9E0E4] to-white rounded-t-xl lg:px-12">
        <img src={car.img} alt="" />
      </div>
      <div className="flex flex-col gap-1 px-3">
        <div className="flex items-center gap-1">
          <p className="text-lg font-semibold">{car.name} </p>
          <p className="text-gray-500">{car.model}</p>
        </div>
        <div className="flex gap-1 text-xs text-[#727373] font-semibold">
          <p className="bg-[#F5F5F5] px-2 py-1 rounded-sm">{car.kmDriven}</p>
          <p className="bg-[#F5F5F5] px-2 py-1 rounded-sm">{car.fuel}</p>
          <p className="bg-[#F5F5F5] px-2 py-1 rounded-sm">
            {car.transmission}
          </p>
          <p className="bg-[#F5F5F5] px-2 py-1 rounded-sm">{car.owner}</p>
        </div>
        <div className="flex justify-between pt-1">
          <div>
            <p className="font-semibold border-b border-dashed">{car.emi}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-end">{car.price}</p>
            <p className="text-[#787979] text-xs border-b border-dashed font-semibold">
              + other charges
            </p>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 mt-5 border-dashed"></div>
      <div className="flex px-2 justify-between py-2">
        <div className="flex gap-2 bg-[#F5F5F5] p-1 px-2 rounded-sm items-center">
          <img className="size-4" src={checklist} alt="" />
          <p className="text-[#7E7F7F] text-xs font-semibold">CARS24 Assured</p>
        </div>
        <div className="flex gap-1 bg-[#FEF4EC] p-1 px-1 rounded-xl items-center">
          <img className="size-4" src={autonaut} alt="" />
          <p className="text-[#EF6E0B] text-xs font-bold">Highlights </p>
          <ChevronDown className="size-4 text-[#7E7F7F]" />
        </div>
      </div>
      <div className="flex gap-1 items-center px-2 py-2 rounded-b-xl bg-[#F5F5F5]">
        <MapPin className="size-3 text-[#7E7F7F]" />
        <p className="text-sm text-center font-normal text-[#7E7F7F]">
          {car.location.slice(0, 40)}
        </p>
      </div>
    </div>
  );
};

const CarList = () => {
  return (
    <div className="flex items-center  lg:flex-row flex-col lg:flex-wrap gap-4 ">
      {carsData.map((car) => (
        <Card_Cars key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
