import React from 'react'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Styles from '../styles/Contact.module.css'

export default function contact() {
  return (
    <div className={Styles.body}>
      <Navbar></Navbar>
      <Contact></Contact>
    </div>
  )
}
