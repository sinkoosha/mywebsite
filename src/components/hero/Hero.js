import React from "react";
import sina from "./img/sinakoosha.jpg";
import Image from "next/image";
import PCards from "../Projects/Cards/Cards";
import ECards from "../experince/Cards/Cards";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-col    w-4/5  mb-10 ml-3  ">
      <div className="bg-white w-full flex-1 gap-2">
        <div className=" sm:w-full">
          <h1 className="text-4xl font-bold mt-16 text-left">SinaKoosha</h1>
          <p className="text-left mt-2">
            Front-End Developer with expertise in React, Redux, Next.js, and
            JavaScript. Seeking a challenging role to leverage my skills and
            experience in building modern web applications and delivering
            exceptional user experiences.
          </p>
          <div className="flex mt-3 font-light text-gray-500">
            <div className="pr-4">
              <h3 className="text-3xl font-bold mt-2 mb-1 text-left">SKILLS</h3>
              <p className="text-left">
                WordPress development (theme customization, plugin development,
                etc.)
              </p>
              <p className="text-left">
                Front-End Development: React, Redux, Next.js, JavaScript ES6+
              </p>
              <p className="text-left">
                HTML5, CSS3, SASS/SCSS, and responsive web design
              </p>
              <p className="text-left">RESTful API integration</p>
              <p className="text-left">
                State management with Redux and React Context API
              </p>
              <p className="text-left">
                Server-side rendering (SSR) with Next.js
              </p>
              <p className="text-left">Git and version control</p>
              <p className="text-left">
                Debugging and performance optimization
              </p>
              <p className="text-left">Agile/Scrum methodologies</p>
              <p className="text-left">
                Strong problem-solving and critical-thinking abilities
              </p>
              <p className="text-left">
                Excellent communication and collaboration skills
              </p>
            </div>
          </div>
        </div>
      </div>
      <PCards />
      <ECards />
    </div>
  );
};

export default Hero;
