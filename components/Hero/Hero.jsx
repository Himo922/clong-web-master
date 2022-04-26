import React from "react";
import { motion } from "framer-motion";
import { Icons } from "./Icons";
import { Section } from "../Section";
import { Container } from "../Container";
import { Hero_image } from "/assets/Images/";

import clsx from "clsx";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const Hero = ({ className, styles }) => {
  return (
    <div
      className=" bg-gradient-to-br from-blue-700 to-blue-500 drop-shadow-lg z-0 h-screen"
      style={styles}
    >
      <div
        className={clsx(
          "container flex flex-wrap flex-col z-10 pt-20 justify-center items-center mx-auto",
          "md:flex-row  md:justify-between  ",
          className
        )}
      >
        <div className="mt-20 mb-1 md:mb-2 md:mt-28 flex-1 z-10">
          <p className="mb-2 md:mb-4 text-md md:text-lg lg:text-xl dark:text-black-700  text-black-700">
            Hi, I am
          </p>
          <h2 className="mb-0 md:mb-7 text-4xl md:text-5xl lg:text-8xl font-bold dark:text-orange-700 text-orange-700">
            CLong Lam
          </h2>
          <h3 className="mb-0 md:mb-4 text-xl md:text-2xl lg:text-5xl font-bold dark:text-black-900 text-black-900">
            Developer &#38; Designer
          </h3>

          <p
            className="text-base max-w-[80%] mt-3 md:mt-8 
        text-sm md:text-sm 
        dark:text-black-700 text-black-700 italic"
          >
            “World grow &#38; evolve every day, learn never stop.”
          </p>

          <div className="max-w-[80%]">
            <div className="">
              <motion.div
                initial="hidden"
                animate="show"
                variants={container}
                className=""
              ></motion.div>
              <Icons className="max-w-full p-2 mt-2 dark:text-black-700 text-black-700" />
              {/* <p>First honor graduate from Media Arts degree.</p>
            <p>4-Year Work Experience from front-end to full-stack. </p>
            <p>Currently bassed in Vancourver</p> */}
            </div>
          </div>
        </div>

        <div className="container mx-auto flex-1  text-lg py-2 items-center justify-center z-10 text-center">
          <Hero_image
            className="text-center text-2xl"
            alt="Picture of the author"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};