import Styles from '../styles/Contact.module.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef()
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ivjsrvi', 'template_qzo23wc', form.current, 'BVsfHPJLnvdknu_23')
      .then((result) => {
        console.log(result.text);
        setIsEmailSent(true);
      }, (error) => {
        console.log(error.text);
        setIsEmailSent(false);
      });
  }


  return (
    <div className={Styles.main}>
      <h1 className={Styles.title}>CONTACT</h1>
      <div className={Styles.container}>
        <form className={Styles.form} ref={form} onSubmit={sendEmail}>
          <div className={Styles.name}>
            <span className={Styles.spanTitle}>Name</span>
            <input className={Styles.inputForm} type="text" placeholder='Enter Your Name' name="name" />
          </div>
          <div className={Styles.email}>
            <span className={Styles.spanTitle}>Email</span>
            <input className={Styles.inputForm} type="text" placeholder='Enter Your Email' name="email" />
          </div>
          <div className={Styles.message}>
            <span className={Styles.spanTitle}>Message</span>
            <textarea className={Styles.inputForm} name="message" id="" cols="60" rows="15"></textarea>
          </div>
          <div>
            <button className={Styles.btn}>Send email</button>
          </div>
          {isEmailSent && <p className={Styles.success}>Email envoyé</p>}
        </form>
        <div className={Styles.cv}>
          
        </div>
      </div>
    </div>
  )
}
