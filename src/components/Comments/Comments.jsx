"use client"
import React, { useState } from 'react'
import styles from './comments.module.css'
import Image from 'next/image'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'

const fetcher = async (url) =>{
    const res = await fetch(url);
    const data = await res.json()
    return data;
}


const Comments = ({postSlug}) => {
    const { data, isLoading,mutate } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher)
    const {status} = useSession()
    const [desc,setDesc] = useState("")
    
    if (!data) return <div>Loading...</div>

     const handleSubmit = async () =>{

        const res = await fetch(`/api/comments`, {
            method : "POST",
            body : JSON.stringify({
                desc,postSlug
            }),
        });
        mutate()
     }
  return (
    <div className={styles.container}>
          <h1 className={styles.title}>
            Comments
          </h1> 

          {
            status === "authenticated" ?
            (
              <div className={styles.write}>
                <textarea 
                    value={desc}
                    onChange={(e)=>setDesc(e.target.value)} 
                    placeholder="Write a comment.." 
                    className={styles.input}/>
                <button
                  onClick={handleSubmit} 
                  className={styles.button}>Send</button>
              </div>
            )
            :
            (
                <Link href="/login">Login to write</Link>
            )}

            <div className={styles.comments}>
                {
                    isLoading ? "Loading please wait" 
                    : 
                    data?.map((item)=>(
                        <div className={styles.comment} key={item._id}>
                        <div className={styles.user}>

                            {item?.user?.image && 
                            <Image 
                             src={item.user.image}
                             width={50}
                             height={50}
                             alt="user"
                             className={styles.image}
                             />}
                        
                        <div className={styles.userInfo}>
                            <span className={styles.username}>{item.user.name}</span>
                            <span className={styles.date}>{item.createdAt}</span>
    
                        </div>
                        </div>
                        <p className={styles.desc}>
                            {item.desc}
                        </p>
    
                    </div>
                    ))
                }
               
               
            </div>
    </div>
  )
}

export default Comments