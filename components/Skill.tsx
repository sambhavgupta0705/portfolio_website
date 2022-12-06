import { MotionConfig } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
        //   x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.5,
        }}

        src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" 
        // className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        className="rounded-full border sw:w-24 md:w-28 md:h-28 sw:h-24 h-32 w-32 border-gray-500 filter group-hover:grayscale transition duration-300 ease-in-out"
      ></motion.img>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white sw:h-24 sw:w-24 md:w-28 md:h-28 h-32 w-32 rounded-full z-0">
        <div className=" flex items-center justify-center h-full ">
            <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
