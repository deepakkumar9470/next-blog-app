import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image className={styles.image} src="/logo.png" width={60} height={60} alt="logo"/>
          <h1 className={styles.logoText}>dBlog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Iste, quas.
        </p>
        <div className={styles.icons}>
        <Image src="/messenger.png" width={24} height={24} alt="facebook"/>
        <Image src="/twitter.png" width={24} height={24} alt="twitter"/>
        <Image src="/youtube.png" width={24} height={24} alt="youtube"/>
        <Image src="/instagram.png" width={24} height={24} alt="instagram"/>
        </div>
        
      </div>

      <div className={styles.links}>
        <div className={styles.list}>
           <span className={styles.listTitle}>Links</span>
           <Link href="/">Homepage</Link>
           <Link href="/">About</Link>
           <Link href="/">Blog</Link>
           <Link href="/">Contact</Link>

        </div>
        <div className={styles.list}>
           <span className={styles.listTitle}>Tags</span>
           <Link href="/">Style</Link>
           <Link href="/">Fashion</Link>
           <Link href="/">Coding</Link>
           <Link href="/">Travel</Link>

        </div>
        <div className={styles.list}>
           <span className={styles.listTitle}>Social</span>
           <Link href="/">Facebook</Link>
           <Link href="/">Instagram</Link>
           <Link href="/">Twitter</Link>
           <Link href="/">Youtube</Link>

        </div>

      </div>
        
    </div>
  )
}

export default Footer