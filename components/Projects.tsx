import React from 'react'
import Image from 'next/image'
import image from '../assets/cover2.jpeg';
import { motion } from 'framer-motion';
type Props = {}
const projects=[1,2,3]
function Projects({}: Props) {
  return (
    <motion.div 
    initial={{ opacity:0, }}
    whileInView={{opacity:1}}
    transition={{ duration: 1.5, }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl translate-x-7
        sw:translate-x-3'>Projects 
        </h3>
        <br />
        <br />
        {/* <p className='absolute top-36 uppercase tracking-[3px]  text-gray-500 text-sm  translate-x-15'>Slide to View More Projects</p> */}
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>


          {projects.map((project,i)=>(
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen xl:w-[400px] xl:h-[400px] '>
              <motion.div
              initial={{
                y:-300,
                opacity:0
              }}
              transition={{duration:1.2}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}>
          <Image className="w-[400px] h-[400px] sw:h-[200px] sw:w-[200px]" src={image} alt="" />
          </motion.div
          
          >
              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl text-center font-semibold'>
                  <span className='underline decoration-[#F7AB0A]/50'>Project {i+1}</span>
                </h4>
                <p className='text-base text-center'>A ReactJS game App including four different games to play when you feel BORED </p>
              </div>
            </div>
          ))}
        </div>


        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>

        </div>
    </motion.div>
  )
}

export default Projects