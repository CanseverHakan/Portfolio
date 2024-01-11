import React from 'react'
import Styles from '../styles/About.module.css'

export default function About() {



  return (
    <div className={Styles.main}>
      <div className={Styles.mainContainer}>
        <div className={Styles.container}>
          <div className={Styles.text}>
            <div className={Styles.hi}>Hi, my name is</div>
            <div className={Styles.name}>Hakan Cansever</div>
            <div className={Styles.dev}>I'm a Junior Web Developer</div>
            <div className={Styles.description}>Full Stack Developer</div>
          </div>
          <div>
            <img className={Styles.photo} src="HakanC.jpg" alt="photo" />
          </div>
        </div>
        <div className={Styles.skillsContainer}>
          <div className={Styles.skills}>
            <img className={Styles.language} src="/language/Redux.png" alt="" />
            <img className={Styles.language} src="/language/JS.png" alt="" />
            <img className={Styles.language} src="/language/PHP.png" alt="" />
            <img className={Styles.language} src="/language/R.png" alt="" />
            <img className={Styles.language} src="/language/SQL.png" alt="" />
            <img className={Styles.language} src="/language/TS.png" alt="" />
            <img className={Styles.language} src="/language/SF.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
