
import Spline from '@splinetool/react-spline';
// import Spline from '@splinetool/react-spline/next';
import {motion} from 'framer-motion'
import classes from './AirobotLandingPage.module.css'
import Link from 'next/link';

export default function AirobotLandingPage() {

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
    <main>
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
      <Spline
        scene="https://prod.spline.design/CBqi48nqDbM3KucW/scene.splinecode" 
      />
    </main>
  );
}

