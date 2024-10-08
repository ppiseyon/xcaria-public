"use client";
// import React from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = () =>{
  // const words = text.split(" ");
  let text = "An AI tool to make your work smoother"
  const letters1 = Array.from(text);
  // const letters2 = Array.from(text2);
  const fadeInUpAnimation = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            y: { type: "spring", stiffness: 60 },
            staggerChildren: 0.07,
            opacity: { duration: 3 },
            ease: "easeTn",
            duration: 0.1,
        },
    },
};


  return(
    <motion.div 
    initial="hidden"
    animate="show"
    variants={fadeInUpAnimation}
    className="text-center"

    >
       {letters1.map((letter, index) => (
        <motion.span variants={fadeInUpAnimation} key={index}
        className='uppercase text-center w-[100%] text-6xl sm:text-4xl md:text-5xl text-white bg-clip-text bg-gradient-to-r from-slate-400 font-bold leading-tight tracking-tight '>
          {letter === " " ? " " : letter}
        </motion.span>
      ))}
      {/* <motion.div variants={fadeInUpAnimation}
        className='text-white max-w-fit my-5 mx-auto text-sm  text-center'>
         <h3 > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus placeat quos eum 
          laudantium doloremque, nam praesentium aspernatur ipsum</h3>
        </motion.div> */}
      
    </motion.div>
    
)
};

export default AnimatedTextWord;
