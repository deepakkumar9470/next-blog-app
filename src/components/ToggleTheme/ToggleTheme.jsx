"use client"
import React, { useContext } from 'react'
import styles from './toggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

const ToggleTheme = () => {
  const {theme,toggle} = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggle}
    style={theme === "dark" ?  { backgroundColor  : "white"} : {backgroundColor : "#0f172a"} }>
      <Image src="/moon.png" width={14} height={14} alt="moon"/>
       <div className={styles.ball}
       style={theme === "dark" ?  {left  :1, backgroundColor  : "#0f172a"} : {right : 1, backgroundColor : "white"} }>

       </div>
      <Image src="/sun.png" width={14} height={14} alt="sun"/>
    </div>
  )
}

export default ToggleTheme