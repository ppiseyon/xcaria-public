'use client'

import Link from 'next/link'
import classes from './footer.module.css'
import {delay, motion} from 'framer-motion'
export default function foot(){
  
const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: .8,
     delay:2
    },
  },
 

};
  return (
    <>
    <motion.footer 
    className={classes.footer}
    initial={{ opacity: 0,
      y: -30,}}
    animate={{ opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: .8,
       delay:2
      },}}
    
    whileInView={ {y: 0, opacity: 1} }
    viewport={{ once: true }}
    >
    <div >
      <Link href='/'  className={classes.link}><h1 className={classes.footerLogo}>xCaria</h1></Link>
      <ul className='text-[0.8rem]'>
        {/* <li >
          New York l New Jersey | Minnesota l California l Florida l
          Bangalore
        </li> */}
        <li className='mt-2'>Email: info@iseyon.com</li>
        <li className='mt-2'> Phone: (651) 503-9126</li>

      </ul> 
    
  
    </div>
   
    <div   className={classes.footer1}>
    <Link href='/' className={classes.link}><h1>Home</h1></Link>
     
      {/* <motion.ul    initial='hidden'
        animate='show'
        variants={fadeInUpAnimation}>
        <Link href='/home' className={classes.link}><li>Home</li></Link>
        <Link href='/aboutus' className={classes.link}><li>About Us</li></Link>
  
      </motion.ul> */}
    </div>
    <div   className={classes.footer1}>
        <Link href='/aboutus' className={classes.link}>  <h1>About Us</h1></Link>
     
      {/* <motion.ul    initial='hidden'
        animate='show'
        variants={fadeInUpAnimation}>
        <Link href='/home' className={classes.link}><li>Home</li></Link>
        <Link href='/aboutus' className={classes.link}><li>About Us</li></Link>
  
      </motion.ul> */}
    </div>
    
    <div className={classes.footer2}>
   <Link href='/contact' className={classes.link}><h1>Contact Us</h1></Link>

      
      {/* <motion.ul    initial='hidden'
        animate='show'
        variants={fadeInUpAnimation}>
       <Link href='#' className={classes.link}> <li>Email</li></Link>
       <Link href='#' className={classes.link}> <li>Linkdin</li></Link>
       <Link href='#' className={classes.link}> <li>Instagram</li></Link>
       <Link href='#' className={classes.link}> <li>Twitter</li></Link>

      </motion.ul> */}
    </div>
    <div  className='footer-title'>
      <Link href='/terms' className={classes.link}><h1>Terms & Conditions</h1></Link>
      {/* <motion.ul    initial='hidden'
        animate='show'
        variants={fadeInUpAnimation} >
      <Link href='/terms' className={classes.link}><li>Terms & Conditions</li></Link>
        <Link href='/terms' className={classes.link}><li>Privacy Policy</li></Link>
      </motion.ul> */}
    </div>
    
  
   
  </motion.footer>
  <div className='mt-4 w-screen h-[70px]'></div>
  </>
  )
}

