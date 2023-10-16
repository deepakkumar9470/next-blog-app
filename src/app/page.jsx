import Image from 'next/image'
import styles from './homepage.module.css'
import Link from 'next/link'
import Featured from '@/components/featured/Featured'
import CategoryList from '@/components/categoryList/CategoryList'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/Menu/Menu'
import { Toaster } from 'react-hot-toast'

export default function Home({searchParams}) {

  const page = parseInt(searchParams.page) || 1;
  return (
    <>
          <div>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          </div>
     <div className={styles.container}>
      <Featured/>
      <CategoryList/>

      <div className={styles.content}>
        <CardList page={page}/>
        <Menu/>
      </div>
       
    </div>
      
    </>
  )
}
