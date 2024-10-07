import React from "react";
import Card from "../Card/Sam";
import ANEA from "../Card/anea";

function Cards() {
  return (
    <div className="flex bg-white flex-col md:flex-row pt-20  ">
      <div className="  w-full  flex-1 gap-2 flex-col">
        <h2 className="text-3xl font-bold text-left text-gray-500 mb-10 mx-4 text-left w-full">
          EXPERIENCE
        </h2>
        <div className=" sm:w-full flex gap-5 flex-wrap    ">
          <ANEA />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Cards;
