import { Search } from "lucide-react";
import React, { useState } from "react";
import Hyundai from "/public/Home_image/b62fd2e2-d183-49f0-a09a-c22dfe30f724HYUNDAInew.jpg";
import SPRESSO from "/public/Home_image/12330d28-b357-4010-8d0c-6141a3f82e48MARUTISUZUKI17.jpg";
import honda from "/public/Home_image/b391b164-ebad-421a-9c8d-164c2adfb58dHONDAnew.jpg";
import tata from "/public/Home_image/fdafe75f-62ea-4cb9-8fca-3d57863a1e75TATAnew.jpg";
import renault from "/public/Home_image/10bca004-b88b-465f-9f77-0eb7da2d7baaRENAULTnew.jpg";
import nissan from "/public/Home_image/c3bdf66b-e0b8-4d33-80dc-4f931e15b23eNISSANnew.jpg";
import skoda from "/public/Home_image/33a3d56e-767c-4f86-90bb-0bc1b592b49eSKODAnew.jpg";
const Makemodel = () => {
  const [make, setMake] = useState(true);
  const companyName = [
    {
      img: SPRESSO,
      name: "Maruti",
      checked: false,
    },
    {
      img: SPRESSO,
      name: "Hyundai",
      checked: false,
    },
    {
      img: honda,
      name: "Honda",
      checked: false,
    },
    {
      img: tata,
      name: "Tata",
      checked: false,
    },
    {
      img: renault,
      name: "Renault",
      checked: false,
    },
    {
      img: nissan,
      name: "Nissan",
      checked: false,
    },
    {
      img: skoda,
      name: "Skoda",
      checked: false,
    },
    {
      img: SPRESSO,
      name: "Maruti",
      checked: false,
    },
    {
      img: SPRESSO,
      name: "Maruti",
      checked: false,
    },
    {
      img: SPRESSO,
      name: "Maruti",
      checked: false,
    },
  ];
  return (
    <div className="flex flex-col h-auto border-b  border-gray-300">
      <div
        className="cursor-pointer py-4"
        onClick={() => setMake((prev) => !prev)}
      >
        <p className="text-lg font-semibold">Make & Model</p>
      </div>

      {make ? (
        <div>
          <div className="relative flex   items-center ">
            <input
              className="py-2  text-sm font-medium rounded-lg px-8 border  border-gray-300"
              type="text"
              placeholder="Search a brand or model"
            />
            <Search className="text-gray-400  size-5 absolute  left-2" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-gray-400 font-semibold py-4">
              All Brands
            </p>
            <div className="flex flex-wrap gap-2 pb-4">
              <div className="flex gap-1 border rounded-md border-gray-300 w-fit px-2 py-1 items-center ">
                <img className="w-8  object-fill" src={Hyundai} alt="" />
                <p className="text-sm font-semibold">Grand i 10</p>
              </div>{" "}
              <div className="flex gap-1  border rounded-md border-gray-300 w-fit px-2 py-1 items-center ">
                <img className="w-8  object-fill" src={SPRESSO} alt="" />
                <p className="text-sm font-semibold">S PRESSO</p>
              </div>{" "}
              <div className="flex gap-1  border rounded-md border-gray-300 w-fit px-2 py-1 items-center ">
                <img className="w-8  object-fill" src={SPRESSO} alt="" />
                <p className="text-sm font-semibold">Celerio</p>
              </div>{" "}
              <div className="flex gap-1 border rounded-md border-gray-300 w-fit px-2 py-1 items-center ">
                <img className="w-8  object-fill" src={honda} alt="" />
                <p className="text-sm font-semibold">Jazz</p>
              </div>{" "}
              <div className="flex gap-1 border rounded-md border-gray-300 w-fit px-2 py-1 items-center ">
                <img className="w-8  object-fill" src={tata} alt="" />
                <p className="text-sm font-semibold">Tiago</p>
              </div>{" "}
              <div className="flex gap-1 border rounded-md border-gray-300 w-fit px-2 py-1 items-center ">
                <img className="w-8  object-fill" src={Hyundai} alt="" />
                <p className="text-sm font-semibold">NEW SANTRO</p>
              </div>
            </div>
            <div className="overflow-y-scroll">
              {companyName.map((item, idx) => (
                <div className="flex">
                  <input type={item.checked} />
                  <img className="size-5" src={item.img} alt="" />
                  <p>{item.name}</p>
                </div>
              ))}
              <input className="size-4" type="checkbox" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Makemodel;
