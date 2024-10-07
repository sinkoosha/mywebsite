import React from "react";

const ANEA = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="w-full" src="/img/aneaLogo.jpeg" alt="ANEA Logo" />
      <div className="flex flex-col justify-between p-6 leading-normal">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-left">
          ANEA
        </h5>
        <span className="text-left">Front-End Developer, ANEA</span>
        <p className="mb-3 text-left font-normal text-gray-700 dark:text-gray-400 list-item">
          Developed responsive web applications using Next.js and React.
        </p>
        <p className="mb-3 text-left font-normal text-gray-700 dark:text-gray-400 list-item">
          Created custom SVG charts for seamless data visualization.
        </p>
        <p className="mb-3 text-left font-normal text-gray-700 dark:text-gray-400 list-item">
          Implemented Progressive Web Apps (PWA) to enhance user engagement.
        </p>
        <p className="mb-3 text-left font-normal text-gray-700 dark:text-gray-400 list-item">
          Integrated BLE Navigator for real-time device communication.
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
