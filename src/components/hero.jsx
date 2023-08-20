import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../Style";

const Hero = () => {
  return (
    <section className="relative  flex flex-col md:flex-row w-full p-24 mx-autocd">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]  max-w-7xl  mx-auto flex  items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center"></div>
      </div>
    </section>
  );
};

export default Hero;
git;
