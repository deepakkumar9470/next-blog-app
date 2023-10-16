import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import Link from 'next/link'
export const metadata = {
    title: 'About',
    description: 'about section',
  }
const About = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
          <b>Blog About Section </b>
            
        </h1>

        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image
               className={styles.image} 
               src="/valley-road.jpeg" 
               fill alt="postimg"
            />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>This blog web app has been built uisng NextJS 13+, Prisma,Mongodb(database), with following feature
              a. Login with social media like google, github b. Add Blog post c. Comment on blog post d. Pagination etc
             </h1>
            <p className={styles.postDesc}>
            Share views and connect with an audience.
            Build a business and sell products.
            Raise awareness.
            </p>
            <Link href="/">
             <button className={styles.button}>Go Back</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default About