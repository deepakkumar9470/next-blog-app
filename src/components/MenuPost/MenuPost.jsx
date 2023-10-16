import React from 'react'
import Link from 'next/link'
import  Image from 'next/image'

import styles from './menupost.module.css'

const MenuPost = ({withImage,data}) => {
  return (
    <div className={styles.items}>
    <Link href="/" className={styles.item}>
     {withImage && <div className={styles.imgContainer}>
       <Image className={styles.image} src="/travel.jpeg" fill alt="p2img"/>
     </div>}
     <div className={styles.textContainer}>
       <span className={`${styles.category} ${styles.travel}`}>Travel</span>
       <h3 className={styles.postTitle}>Lorem ipsum dolor.</h3>
       <div className={styles.detail}>
         <span className={styles.username}>Deepak Kumar</span>
         <span className={styles.date}> - 6.09.2023</span>
       </div>
     </div>
         
    </Link>
    <Link href="/" className={styles.item}>
    {withImage && <div className={styles.imgContainer}>
       <Image className={styles.image} src="/style.jpeg" fill alt="p2img"/>
     </div>}
     <div className={styles.textContainer}>
       <span className={`${styles.category} ${styles.style}`}>Style</span>
       <h3 className={styles.postTitle}>Lorem ipsum dolor.</h3>
       <div className={styles.detail}>
         <span className={styles.username}>Deepak Kumar</span>
         <span className={styles.date}> - 6.09.2023</span>
       </div>
     </div>
         
    </Link>
    <Link href="/" className={styles.item}>
     {withImage && <div className={styles.imgContainer}>
       <Image className={styles.image} src="/culture.jpeg" fill alt="p2img"/>
     </div>}
     <div className={styles.textContainer}>
       <span className={`${styles.category} ${styles.culture}`}>Culture</span>
       <h3 className={styles.postTitle}>Lorem ipsum dolor.</h3>
       <div className={styles.detail}>
         <span className={styles.username}>Deepak Kumar</span>
         <span className={styles.date}> - 6.09.2023</span>
       </div>
     </div>
         
    </Link>
    <Link href="/" className={styles.item}>
     {withImage && <div className={styles.imgContainer}>
       <Image className={styles.image} src="/fashion.jpeg" fill alt="p2img"/>
     </div>}
     <div className={styles.textContainer}>
       <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
       <h3 className={styles.postTitle}>Lorem ipsum dolor.</h3>
       <div className={styles.detail}>
         <span className={styles.username}>Deepak Kumar</span>
         <span className={styles.date}> - 6.09.2023</span>
       </div>
     </div>
         
    </Link>
    <Link href="/" className={styles.item}>
     {withImage && <div className={styles.imgContainer}>
       <Image className={styles.image} src="/coding.jpeg" fill alt="p2img"/>
     </div>}
     <div className={styles.textContainer}>
       <span className={`${styles.category} ${styles.coding}`}>Coding</span>
       <h3 className={styles.postTitle}>Lorem ipsum dolor.</h3>
       <div className={styles.detail}>
         <span className={styles.username}>Deepak Kumar</span>
         <span className={styles.date}> - 6.09.2023</span>
       </div>
     </div>
         
    </Link>
    <Link href="/" className={styles.item}>
     {withImage && <div className={styles.imgContainer}>
       <Image className={styles.image} src="/food.jpeg" fill alt="p2img"/>
     </div>}
     <div className={styles.textContainer}>
       <span className={`${styles.category} ${styles.food}`}>Food</span>
       <h3 className={styles.postTitle}>Lorem ipsum dolor.</h3>
       <div className={styles.detail}>
         <span className={styles.username}>Deepak Kumar</span>
         <span className={styles.date}> - 6.09.2023</span>
       </div>
     </div>
         
    </Link>
 </div>
  )
}

export default MenuPost