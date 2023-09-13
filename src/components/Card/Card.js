import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white border border-gray-200 rounded-lg shadow  md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className=" w-full r" src="/img/sinaKoosha.jpeg" alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-left">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 text-left font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
};

export default Card;
