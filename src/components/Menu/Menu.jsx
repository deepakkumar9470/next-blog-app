import React from 'react'
import styles from './menu.module.css'
import MenuPost from '../MenuPost/MenuPost'
import MenuCategories from '../MenuCategories/MenuCategories'


const Menu = async () => {
 
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost withImage={false}/>

      <h2 className={styles.subtitle}>Discove by topic</h2>
      <h1 className={styles.title}>Categories</h1> 

      <MenuCategories/>

      <h2 className={styles.subtitle}>Choosen by the editor</h2>
      <h1 className={styles.title}>Editor's Pick</h1>
      <MenuPost withImage={true}/>
    </div>
  )
}

export default Menu