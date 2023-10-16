
import React from 'react'
import styles from './category.module.css'
import Link from 'next/link'
import Image from 'next/image'

const getData = async () =>{
  const res = await fetch(`http://localhost:3000/api/categories`, {
    cache : "no-store",
  })

  return res.json();
 
}

const CategoryList = async () => {
  const data = await getData()
 

  return (
    <div className={styles.container}>
         <h2 className={styles.title}>Popular Categories</h2>

         <div className={styles.categories}>
         {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt="catpic"
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))} 
             
         </div>
    </div>
  )
}

export default CategoryList