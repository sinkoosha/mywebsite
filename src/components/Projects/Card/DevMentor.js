import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

const DevMentor = () => {
  return (
    <div className="flex flex-col items-center  bg-white border border-gray-200 rounded-lg shadow  md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className=" w-full r" src="/img/sinaKoosha.jpeg" alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal w-full">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-left">
          DevMentor
        </h5>
        <div className="mb-3 text-left font-normal text-gray-700 dark:text-gray-400">
          <span className="flex gap-2  mb-4">
            <a href="https://github.com/PersiaJS/devmentor-frontend">
              <FaGithub />
            </a>
          
          </span>
          <p>
            DevMentor is an impactful open-source initiative centered around
            fostering mentorship within the development community
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevMentor;
