import React from "react";
import coverImage from "../../../public/image/cover.jpg";
import Image from "next/image";
import { FaBlog } from "react-icons/fa";
function SideBar() {
  return (
    <div className=" md:w-1/5 w-full   bg-gray-600  mr-4 bg-gray-700 ">
      <div className=" pb-6 w-full justify-center items-center  md:max-w-sm  shadow-sm mx-auto">
        <div className="relative h-40">
          <img
            className="absolute object-cover"
            src={"/image/cover.jpg"}
            alt="Cover"
          />
        </div>
        <div className="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
          <img
            className="object-cover w-full h-full"
            src="/image/sina.jpg"
            alt="Profile"
          />
        </div>
        <div className="mt-16">
          <h1 className="text-lg text-center font-semibold z-30 relative sm:text-white">
            sinaKoosha
          </h1>
        </div>
        <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t">
          <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-gray-100 border-gray-800 hover:bg-gray-600 hover:text-white-100 cursor-default cursor-pointer">
            javaScript
          </div>
          <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-gray-100 border-gray-800 hover:bg-gray-600 hover:text-white-100 cursor-default cursor-pointer">
            react
          </div>
          <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-gray-100 border-gray-800 hover:bg-gray-600 hover:text-white-100 cursor-default cursor-pointer">
            nextJs
          </div>
        </div>
        
  
      </div>
      <aside class="   " aria-label="Sidebar">
        <div class="h-full px-3 py-4 h-screen">
          <a
            href="/doc/sinakoosha.pdf"
            className=" px-5 py-2 border-gray-200 border-spacing-2 border  text-gray-200 hover:text-gray-300 hover:border-gray-300"
          >
            Download CV
          </a>
    
        </div>
      </aside>
    </div>
  );
}

export default SideBar;
