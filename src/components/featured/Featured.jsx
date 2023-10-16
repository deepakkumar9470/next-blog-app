import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
          <b>Hey,Deepak here! </b>
          Discover stories & Creatives ides on this blog site.
        </h1>

        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image 
               className={styles.image} 
               src="/elephant.jpeg" 
               fill alt="postimg"
            />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>A blog, short for weblog, is a frequently updated web page used for personal commentary or business content. Blogs are often interactive and include sections at the bottom of individual blog posts where readers can leave comments.</h1>
            <p className={styles.postDesc}>
            Share views and connect with an audience.
            Build a business and sell products.
            Raise awareness.
            </p>
            <button className={styles.button}>Read More</button>
          </div>
        </div>
    </div>
  )
}

export default Featured