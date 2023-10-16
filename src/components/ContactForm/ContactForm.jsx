"use client"
import React,{useState} from 'react'
import styles from '@/app/contact/contact.module.css'
import { Mulish } from 'next/font/google'

const mulish = Mulish({ 
    subsets: ['latin'],
    display : 'swap',
    weight : ['300','400','500','600','700','800','900'] 
})

const ContactForm = () => {

  const [inputs,setInputs] = useState({
       username: "",
       email: "",
       phone: "",
       message: "",
  })
  const [status,setStatus] = useState('')

  const handleChange= (e)=>{
       setInputs((prev)=>({...prev, [e.target.name] : e.target.value}))
  }

  const handleFormSubmit = async (e) =>{
    e.preventDefault()
    try {
      const res = await fetch('/api/contact',{
        method : 'POST',
        headers: {'Content_Type' : 'application/json'},
        body : JSON.stringify({
          username : inputs.username,
          email : inputs.email,
          phone : inputs.phone,
          message : inputs.message,
        })
      })

      if(res.status === 200){
        setInputs({
          username : '',
          email : '',
          phone : '',
          message : '',
        })
      }
      setStatus('success')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <form className={styles.contact_form} onSubmit={handleFormSubmit}>
        
         <div className={styles.input_field}>
            <label htmlFor="username" className={styles.label}>
              Enter Username
                <input 
                  type="text" 
                  name='username' 
                  id='username' 
                  placeholder='Enter username'
                  value={inputs.username}
                  onChange={handleChange}
                  className={mulish.className}
                  required 
                  autoComplete="off "/>
            </label>
        </div>
        <div className={styles.input_field}>
            <label htmlFor="email" className={styles.label}>
              Email
                <input 
                  type="text" 
                  name='email' 
                  id='email' 
                  placeholder='Enter email'
                  value={inputs.email}
                  onChange={handleChange}
                  className={mulish.className}
                   required 
                   autoComplete="off "/>
            </label>
        </div>
        <div className={styles.input_field}>
            <label htmlFor="phone" className={styles.label}>
              Enter phone
                <input 
                  type="text" 
                  name='phone' 
                  id='phone' 
                  placeholder='Enter phone'
                  value={inputs.phone}
                  onChange={handleChange}
                  className={mulish.className}
                   required 
                   autoComplete="off "/>
            </label>
        </div>

        <div className={styles.input_field}>
            <label htmlFor="message" className={styles.label}>
              Message
                <textarea 
                  type="text" 
                  role={5}
                  name='message' 
                  id='message' 
                  placeholder='Enter message'
                  value={inputs.message}
                  onChange={handleChange}
                  className={mulish.className}
                   required 
                   autoComplete="off "/>
            </label>
        </div>

        <div>
          {status === 'success' && <p className={styles.success_msg}>Thank You for your message!</p>}
          {status === 'error' && <p className={styles.error_msg}>Oops, error when submiting form!</p>}
          <button type='submit' className={styles.sendBtn}>Send Message</button>
        </div>

    </form>
  )
}

export default ContactForm