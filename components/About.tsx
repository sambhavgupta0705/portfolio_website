import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image'
import image from '../assets/cover2.jpeg';
<link rel="stylesheet" href="about.css" />
// import BackgroundCircles2 from "./BackgroundCircles2";
import BackgroundCircles2 from "./BackgroundCircle2";
type Props = {};

function About({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0,

    }}
    whileInView={{opacity:1}}
    transition={{
        duration: 1.5,
    }}
    
    className="top-10 flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl content-center sw:-translate-y-16 
     px-15 justify-evenly mx-auto items-center">
      <h3 className="absolute top-12 sw:top-24 uppercase text-gray-500 pb-20 px tracking-[15px] sw: translate-x-3 md items-center translate-x-100 text-2xl ">
        About
      </h3>
      {/* <motion.img
      src="../assets/co    absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl
      ver2.jpeg" />
    </div> */}
    <motion.div 
    initial={{
        x:-200,

    }}
    transition={{
        duration: 1.2,
    }}
    whileInView={{opacity:1,x:0}}
    viewport={{
        once:true,
    }}
    >
     
    <Image className="-mb-20 md:mb-0 flex-shrink-0 w-[300px] h-[400px]object-cover top-10 md:rounded-lg items-center sw:translate-y-5 
    translate-y-5 sw:items-center sw:h-32 sw:w-32 md:w-64 sw: translate-x-1 md:h-96 sw:invisible
    xl:w-[800px] xl:h-[400px] " src={image} alt="" />
   
    

    </motion.div>
 
    <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold sw:text-blue">Here is a <span className="underline decoration-[#F7AB0A]/50 left-20">little</span> background</h4>
        <p className="text-base text-center">Hi,I am a Full Stack Web Developer,currently pursuing B.tech Electronics Degree from IIIT Jabalpur.I am also an UI/UX designer and am Open Source Enthusiast,contributing to various Organisations.I also love the logic and structure of coding and always strive to write efficient code. 
        <br/>
        {/* <BackgroundCircles2/> */}
        <br />
        I also love the logic and structure of coding and always strive
        to write elegant and efficient code.
        <br/>
        When I am not coding, you'll find me making coffee or listening to some new pop songs.

        <br/>
        <br/>
        {/* Never call me if my headphones are on. */}
      </p>
    </div>
    </motion.div>
  );
}

export default About;
