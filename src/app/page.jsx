import dynamic from 'next/dynamic'
import styles from './homepage.module.css'
// import Featured from '@/components/featured/Featured'
// import CategoryList from '@/components/categoryList/CategoryList'
// import CardList from '@/components/cardList/CardList'
import Menu from '@/components/Menu/Menu'
import { Toaster } from 'react-hot-toast'
const DynamicFeatured = dynamic(() => import('@/components/featured/Featured'), {
  loading: () => <p>Loading...</p>,
})
const DynamicCategoryList = dynamic(() => import('@/components/categoryList/CategoryList'), {
  loading: () => <p>Loading...</p>,
})
const DynamicCardList = dynamic(() => import('@/components/cardList/CardList'), {
  loading: () => <p>Loading...</p>,
})
const DynamicMenu = dynamic(() => import('@/components/Menu/Menu'), {
  loading: () => <p>Loading...</p>,
})
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
      <DynamicFeatured/>
      <DynamicCategoryList/>

      <div className={styles.content}>
        <DynamicCardList page={page}/>
        <DynamicMenu/>
      </div>
       
    </div>
      
    </>
  )
}
