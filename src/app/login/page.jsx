"use client"
import React from 'react'

import styles from './login.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
const Login = () => {
  const {data,status} = useSession()
  const router = useRouter()

  console.log('from logon', data)

  if(status === "loading"){
    return <div className={styles.loading}>Loading....</div>
  }

  if(status === "authenticated"){
    router.push("/")
  }
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton}
            onClick={()=>signIn("google")}>
              <Image src="/google.png" width={40} height={40} alt="google"/>
              Sign in with Google
              </div>
            <div className={styles.socialButton}
            onClick={() => signIn("github")}>
            <Image src="/github-new.png" width={40} height={40} alt="github"/>
              Sign in with Github
              </div>
            <div className={styles.socialButton}>
            <Image src="/facebook.png" width={40} height={40} alt="facebook"/>
              Sign in with Facebook
              </div>
        </div>

    </div>
  )
}

export default Login