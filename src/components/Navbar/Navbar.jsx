import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ToggleTheme from '../ToggleTheme/ToggleTheme'
import AuthLink from '../AuthLink/AuthLink'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/messenger.png" width={28} height={28} alt="facebook"/>
        <Image src="/twitter.png" width={28} height={28} alt="twitter"/>
        <Image src="/youtube.png" width={28} height={28} alt="youtube"/>
        <Image src="/github.png" width={28} height={28} alt="github"/>
      </div>
      <div className={styles.logo}>
        BlogWorld
      </div>
      <div className={styles.links}>
        <ToggleTheme/>
         <Link href="/"className={styles.link}>Home</Link>
         <Link href="/contact"className={styles.link}>Contact</Link>
         <Link href="/about"className={styles.link}>About</Link>
         <AuthLink/>
      </div>
    </div>
  )
}

export default Navbar