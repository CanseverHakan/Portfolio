import React from 'react'
import Styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <div className={Styles.main}>
      <h1 className={Styles.title}>CONTACT</h1>
      <form className={Styles.form} action="">
        <div className={Styles.name}>
          <span className={Styles.spanTitle}>Name</span>
          <input className={Styles.inputForm} type="text" placeholder='Enter Your Name' />
        </div>
        <div className={Styles.email}>
          <span className={Styles.spanTitle}>Email</span>
          <input className={Styles.inputForm} type="text" placeholder='Enter Your Email' />
        </div>
        <div className={Styles.message}>
          <span className={Styles.spanTitle}>Message</span>
          <textarea name="message" id="" cols="60" rows="15"></textarea>
        </div>
        <div>
          <button className={Styles.btn}>Send email</button>
        </div>
      </form>
    </div>
  )
}
