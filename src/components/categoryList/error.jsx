import React from 'react'
import styles from './category.module.css'
const error = () => {
  return (
    <div>
        <p className={styles.error_para}>No Categories data found... </p>
    </div>
  )
}

export default error