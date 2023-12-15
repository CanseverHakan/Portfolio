import React from 'react'
import Styles from '../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className={Styles.navbar}>
        <div className={Styles.logoContainer}>
            <img className={Styles.logo} src='logo.png'></img>
        </div>
        <div className={Styles.linkContainer}>
          <Link href='/projects' className={Styles.link}>About</Link>
          <Link href='/projects' className={Styles.link}>Projects</Link>
          <Link href='/projects' className={Styles.link}>Contact</Link>
        </div>
    </div>
  )
}
