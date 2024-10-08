import logo1 from '@/public/logo1.png'
import logo2 from '@/public/logo2.png'
import logo3 from '@/public/logo3.png'
import logo4 from '@/public/logo4.png'
import logo5 from '@/public/logo5.png'
import logo6 from '@/public/logo6.png'
import logo7 from '@/public/logo7.png'
import Image from 'next/image'
import styles from './Logo.module.css'

const LogoTicker = () => {
  return (
   
  <div className={styles.logosHeader}>
      <div className={styles.logoContainer}>
     <div className={styles.logos}>
      
            <Image src={logo1} alt='image loading...' className={styles.LogoTicker}/>
            <Image src={logo2} alt='image loading...' className={styles.LogoTicker}/>
            <Image src={logo3} alt='image loading...' className={styles.LogoTicker}/>
            <Image src={logo4} alt='image loading...' className={styles.LogoTicker}/>
            <Image src={logo5} alt='image loading...' className={styles.LogoTicker}/>
            <Image src={logo6} alt='image loading...' className={styles.LogoTicker}/>
            <Image src={logo7} alt='image loading...' className={styles.LogoTicker}/>

       
    </div>
   </div>
  </div>
 
  )
}

export default LogoTicker