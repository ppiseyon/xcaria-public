"use client";
import React from 'react'


import styles from "./accordian.module.css";

import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import {Collapse} from 'react-collapse'
import {motion} from 'framer-motion'
const Accordian = ({open,toggle,img,title,subTitle,descp}:any) => {
  
  


  return (
    <motion.div 
    className="mt-10 px-10"
   
    >
      <motion.div className={styles.cardContainer}>
        <div className={styles.cards}>
          <div className={styles.card} onClick={toggle}>
            <div className={styles.imgSection}>
              <Image src={img} alt="image loading..." className={styles.img} />
            </div>
            <div className="">
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.paragraph}>{subTitle}</p>
            </div>
            {open? <FaCaretUp size={54} color='white' />:<FaCaretDown size={54} color='white' />}
           
          </div>
        </div>
        <Collapse isOpened={open} className={''}>
        <div>
          <p className={styles.desp}>
            {descp}
          </p>
        </div>
      </Collapse>
      </motion.div>

   
    </motion.div>
  );
};

export default Accordian;
