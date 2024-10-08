'use client'
import classes from './light.module.css'
import {motion} from 'framer-motion'

const light = () => {
  return (
    <div>
        <motion.div className={classes.light1} initial={{opacity:0}} animate={{opacity:[0.2,0.5,0.8,1]}} transition={{duration:1,delay:2}}></motion.div>
        <motion.div className={classes.light2} initial={{opacity:0}} animate={{opacity:[0.2,0.5,0.8,1]}} transition={{duration:1,delay:2}}></motion.div>
    </div>
  )
}

export default light