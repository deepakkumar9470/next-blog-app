import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineEye} from 'react-icons/ai'
const Card = ({item}) => {
  return (
    <div className={styles.container}>
      
      <div className={styles.imgContainer}>
        {item.img && <Image src={`${item.img ? item.img  : "/p1.jpeg"}`} fill alt="catimg"
        className={styles.image}/>}
      </div>
      <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.date}>{item.createdAt.substring(0,10)}</span>
            <span className={styles.category}>{item.catSlug}</span>
            <span className={styles.views}><AiOutlineEye/> {item.views}</span>
 
          </div>
          
          <Link href={`/posts/${item.slug}`}>
              <h1>{item.title}</h1>
          </Link>
          <p className={styles.desc} dangerouslySetInnerHTML={{__html : item.desc.substring(0,50)}}></p>
          <Link className={styles.link} href={`/posts/${item.slug}`}>Read More</Link>
      </div>
    
    </div>
  )
}

export default Card