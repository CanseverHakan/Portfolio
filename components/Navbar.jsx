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
          <Link href='/' className={`${Styles.link} ${Styles.about}`}>About</Link>
          <Link href='/projects' className={`${Styles.link} ${Styles.project}`}>Projects</Link>
          <Link href='/contact' className={`${Styles.link} ${Styles.contact}`}>Contact</Link>
        </div>
    </div>
  )
}
