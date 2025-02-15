"use client";
import React from "react";
import MockLand from "../Card/mockLand";
import RoyalTiti from "../Card/royaltiti";
import DevMentor from "../Card/DevMentor";
import AA from "../Card/AAdesign";
import Kianaamirmazaheri from "../Card/Kianaamirmazaheri";
import SIMA from "../Card/Sdteb";

function Cards() {
  return (
    <div className="flex bg-white flex-col md:flex-row pt-20  ">
      <div className=" w-full  flex-1 gap-2 flex-col">
        <h2 className="text-3xl font-bold text-left text-gray-500 mb-10 mx-4 text-left w-full">
          My projects
        </h2>
        <div className=" w-full  flex-col flex gap-5 ">
          <Kianaamirmazaheri />
          <AA />
          <SIMA />
          <RoyalTiti />
          <MockLand />
          <DevMentor />
        </div>
      </div>
    </div>
  );
}

export default Cards;
