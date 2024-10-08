import React from 'react'
import styles from './Teamcard.module.css'
import Image from 'next/image'
import chandan from '@/public/Chandan.png'

const Teamcard = ({img,name,position,posts,followers,following}:any) => {
  return (
    <div className={styles.card}>
      
        <div className={styles.imgBx}>
          <Image src={img} alt='chandan pandey' className={styles.img}/>
        </div>
        <div className={styles.content}>
          <div className={styles.details}>
            <h2>{name} <br /> <span>{position}</span></h2>
            <div className={styles.data}>
              <h3>{posts} <br /> <span>Posts</span></h3>
              <h3>{followers} <br /> <span>Followers</span></h3>
              <h3>{following} <br /> <span>Following</span></h3>


            </div>
            <div className={styles.actionBtn}>
              <button className='solid-button'>Follow</button>
              <button className='stroke-button'>Message</button>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Teamcard