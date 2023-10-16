import Link from 'next/link'
import React from 'react'
import styles from './menucategories.module.css'
const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
         <Link href="/" 
           className={`${styles.categoryItem} ${styles.style}`}>  
           Style           
         </Link>
         <Link href="/" 
           className={`${styles.categoryItem} ${styles.fashion}`}>  
           Fashion           
         </Link>
         <Link href="/" 
           className={`${styles.categoryItem} ${styles.food}`}>  
           Food           
         </Link>
         <Link href="/" 
           className={`${styles.categoryItem} ${styles.travel}`}>  
           Travel           
         </Link> 
         <Link href="/" 
           className={`${styles.categoryItem} ${styles.coding}`}>  
           Coding           
         </Link> 
         <Link href="/" 
           className={`${styles.categoryItem} ${styles.culture}`}>  
           Culture           
         </Link>   
      </div>
  )
}

export default MenuCategories