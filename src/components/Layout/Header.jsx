import React from "react";

const Header = () => {
  return (
    <header className="bg-primary p-4 w-full">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-white font-bold text-xl">Logo</div>
        </div>
        <div className="space-x-4">
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
