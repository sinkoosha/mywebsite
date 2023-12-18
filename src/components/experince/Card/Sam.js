import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white border border-gray-200 rounded-lg shadow  md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className=" w-full r" src="/img/sinaKoosha.jpeg" alt="" />
      <div className="flex flex-col justify-between p-6 leading-normal ">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-left">
          SAM DESIGNERS HOUSE
        </h5>
        <span className="text-left">
          Software Engineer, Sam Designers House (4 years)
        </span>
        <p className="mb-3 text-left font-normal text-gray-700 dark:text-gray-400 list-item">
          Implemented various software and web applications for the company
        </p>
        <p className="mb-3 text-left font-normal text-gray-700 dark:text-gray-400 list-item">
          Worked on projects related to website design and PHP programming
        </p>
        <p className="mb-3 text-left font-normal text-gray-700 dark:text-gray-400 list-item">
          Worked on projects related to website design and PHP programming
        </p>
        <p className="mb-3 text-left font-normal text-gray-700 dark:text-gray-400 list-item">
          implemented a customer relationship management system( laravel
          ,React,redux)
        </p>
      </div>
    </div>
  );
};

export default Card;
