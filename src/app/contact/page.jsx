import React from 'react'

import styles from './contact.module.css'
import ContactForm from '@/components/ContactForm/ContactForm'
import ContactCard from '@/components/ContactCard/ContactCard'
export const metadata = {
  title: 'Contact',
  description: 'contact section',
}

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard/>
        <section className={styles.contact_section}>
          <h2>We love to hear <span>from you again</span></h2>
          <ContactForm/>
        </section>

      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29210.617761202928!2d86.33215040903995!3d23.771359409034762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6a3cc78ab24c1%3A0x99b0c8a38d3dfbc4!2sLoyabad%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1687864491442!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>
    </>
    
  )
}

export default Contact