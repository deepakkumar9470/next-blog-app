import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import {Poppins } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'
import AuthProvider from '@/providers/AuthProvider'

const poppins = Poppins({ subsets: ['latin'], weight : ["300", "400", "500", "600", "700"] })

export const metadata = {
  title: 'Blog App',
  description: 'Blog app using nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>       
        <ThemeContextProvider>
          <ThemeProvider>         
        <div className="container">
          <div className="wrapper">
            <Navbar/>
           {children}
           <Footer/>
          </div>
        </div>
        </ThemeProvider>
        </ThemeContextProvider>
        </AuthProvider>
        </body>
    </html>
  )
}
