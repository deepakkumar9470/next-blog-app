"use client";
import React from 'react'
import styles from './pagination.module.css'
import { useRouter } from 'next/navigation';
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'

const Pagination = ({page,hasPrev,hasNext}) => {
  const router = useRouter()
  return (
    <div className={styles.container}>
       <button className={styles.button}
       disabled={!hasPrev}
       onClick={() => router.push(`?page=${page - 1}`)}>
        <IoIosArrowBack className={styles.icon}/>
        </button>

       <button className={styles.button}
       disabled={!hasNext}
       onClick={() => router.push(`?page=${page + 1}`)}>
        <IoIosArrowForward className={styles.icon}/>
        </button>
    </div>
  )
}

export default Pagination