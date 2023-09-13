import React from "react";
import Card from "../Card/Card";

function Cards() {
  return (
    <div className="flex bg-white flex-col md:flex-row pt-20  ">
      <div className="  w-full  flex-1 gap-2 flex-col">
        <h2 className="text-3xl font-bold text-left text-gray-900 mb-10 mx-72">
          My projects
        </h2>
        <div className=" sm:w-full flex gap-5 flex-wrap  flex-col justify-center align-middle ">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Cards;
