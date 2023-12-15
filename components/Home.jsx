import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={Styles.main}>
      <Navbar></Navbar>
      <About></About>
    </div>
  )
}
