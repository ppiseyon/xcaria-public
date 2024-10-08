'use client'
import classes from "./landing.module.css";
import aiRobot from "@/public/airobo.png";
import servicesLogos from "@/public/serviceLogoss.png";
import Image from "next/image";
import Hologram from '@/public/hologram.png'
import Foot from "@/src/components/Footer/foot";
import {animate, delay, motion} from 'framer-motion'
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Landing = () => {
  const fadeInUpAnimation = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay:0.8,
        staggerChildren: 0.2,
        duration: .8,
      },
    },
  };
  return (
    <>
      <main className={classes.bg}>
        {/* <motion.div className={classes.light1} initial={{opacity:0}} animate={{opacity:[0.2,0.5,0.8,1]}} transition={{duration:1,delay:2}}></motion.div>
        <motion.div className={classes.light2} initial={{opacity:0}} animate={{opacity:[0.2,0.5,0.8,1]}} transition={{duration:1,delay:2}}></motion.div> */}
        <div className={classes.hero}>
          <motion.div
           className={classes.heading}
           initial='hidden'
        animate='show'
        variants={fadeInUpAnimation}
           >
            <motion.h3>Empowering Innovation with </motion.h3>
            <motion.h1 className="glowing-text">Intelligent Solutions using AI</motion.h1>
            <motion.p className="text-white">Firefly models and services power generative Al features in Adobe creative apps. Learn about the latest
            features in Photoshop, Illustrator, Lightroom, and the Firefly web app.</motion.p>
            <motion.div
             className={classes.btn}
             
             initial='hidden'
          animate='show'
          variants={fadeInUpAnimation}
             >
                <Link href='/showcase'><motion.button className={classes.solidBtn}>Learn more</motion.button></Link>
                {/* <Link href='/login'><motion.button className={classes.strokeBtn}>Sign in</motion.button></Link> */}

                


            </motion.div>
          </motion.div>
          <motion.div className={classes.img}
           initial={{y:100,opacity:0}}
           animate={{y:0,opacity:1}}
           transition={{duration:1.5,delay:0.8}}>
           
            <Image
              src={aiRobot}
              alt="ai robot"
              // layout="fill"
              
              className={classes.robot}

            />
          
         
            <Image
              src={Hologram}
              alt="hologram"
              height={500}
              width={550}
              className={classes.hologram}
             
            />

           
          </motion.div>
        </div>
        <motion.div className={classes.serviceLogos}
         initial={{y:100,opacity:0}}
         animate={{y:0,opacity:1}}
         transition={{duration:0.8,delay:1.5}}
        >
      
        <Image
            src={servicesLogos}
            alt="services logos"
            className={classes.logos}
           
          />
        
           
      
        </motion.div>
      {/* <Foot/> */}
     
     
      </main>
    </>
  );
};

export default Landing;
