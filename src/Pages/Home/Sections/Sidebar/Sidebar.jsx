import React from "react";
import Makemodel from "../SidebarSec/Makemodel";
import ModelYear from "../SidebarSec/ModelYear";
import Fule from "../SidebarSec/Fule";
import BodyType from "../SidebarSec/BodyType";
import Color from "../SidebarSec/Color";
import Transmission from "../SidebarSec/Transmission";
import Features from "../SidebarSec/Features";
import Owners from "../SidebarSec/Owners";
import Seats from "../SidebarSec/Seats";
import Safety from "../SidebarSec/Safety";

const Sidebar = () => {
  return (
    <div className="">
      <Makemodel />
      <ModelYear />
      <Fule />
      <BodyType />
      <Color />
      <Transmission />
      <Features />
      <Owners />
      <Seats />
      <Safety />
    </div>
  );
};

export default Sidebar;
