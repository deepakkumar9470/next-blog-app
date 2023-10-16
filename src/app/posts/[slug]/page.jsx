import React from 'react'
import styles from './singlepage.module.css'
import Menu from '@/components/Menu/Menu'
import Image from 'next/image'
import Comments from '@/components/Comments/Comments'


export const metadata = {
  title: 'Contact',
  description: 'contact section',
}

const getData = async (slug) =>{
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache : "no-store",
  })

  return res.json();
}

const SinglePage = async ({params}) => {
  const {slug} = params;
  const data = await getData(slug)

  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
             <h1 className={styles.title}>{data?.title}</h1>
             <div className={styles.user}>
                {data?.user.imgage && <div className={styles.userImgContainer}>
                <Image src={data.user.imgage} fill alt="avatar" className={styles.avatar}/>
                </div>}
                <div className={styles.userTextContainer}>
                   <span className={styles.username}>{data?.user.name}</span>  
                   <span className={styles.date}>{data?.createdAt.substring(0,10)}</span>  
                </div>

             </div>
            </div>
            {data?.img && <div className={styles.imgContainer}>
                <Image src={data.img} fill alt="singlepic" className={styles.image}/>
            </div>   } 
        </div>

        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}
                dangerouslySetInnerHTML={{__html: data?.desc}}>
                
                </div>
                <div className={styles.comments}>
                    <Comments postSlug={slug}/>
                </div>
            </div>
            <Menu/>
        </div>
    </div>
  )
}

export default SinglePage