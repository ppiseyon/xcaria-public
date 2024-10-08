import SubmitForm from "../submit-form"
import { twMerge } from "tailwind-merge"
import styles from './Contactform.module.css'

const ContactForm = () => {
  return (<div className={styles.cardContainer}>
    <div className={styles.light}></div>
   
    <div className={twMerge(" flex items-center justify-center max-h-min max-w-max px-28 mx-auto mt-8 text-white ",`${styles.contactForm}`)}>
        <form action="" className="space-y-5">
          <div className={twMerge(" form-control",`${styles.card}`)}>
            <label htmlFor="name" className="block">
             Name :
            </label>
            <input type="text" id="name" placeholder="Enter your name"/>
          </div>
          <div className={twMerge(" form-control",`${styles.card}`)}>
            <label htmlFor="mail">Email :</label>
            <input type="email" id="mail" placeholder="Enter your email" />
          </div>
          <div className={twMerge(" form-control",`${styles.card}`)}>
            <label htmlFor="phone">Phone No :</label>
            <input type="text" id="phone" placeholder="Enter your phone number"/>
          </div>
          <div className={twMerge(" form-control",`${styles.card}`)}>
            <label htmlFor="content">Message :</label>
            <textarea id="content" name="content" rows={6} placeholder="Enter your message"/>
          </div>
          <div className={twMerge(" form-control",`${styles.card}`)}>
            <label htmlFor="image">Attach File :</label>
            <input
              type="file"
              accept="image/png, image/jpeg"
              id="image"
              name="image"
            />
          </div>
          <div className={twMerge("solid-button",`${styles.btn}`)}>
            {/* <button>Submit</button> */}
            <SubmitForm />
          </div>
        </form>
      </div>
      </div>
  )
}

export default ContactForm