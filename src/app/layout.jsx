import dynamic from 'next/dynamic'
// import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import {Raleway } from 'next/font/google'
// import Footer from '@/components/Footer/Footer'
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'
import AuthProvider from '@/providers/AuthProvider'
const DynamicNavbar = dynamic(() => import('@/components/Navbar/Navbar'), {
  loading: () => <p>Loading...</p>,
})
const DynamicFooter = dynamic(() => import('@/components/Footer/Footer'), {
  loading: () => <p>Loading...</p>,
})
const raleway = Raleway({ subsets: ['latin'], weight : ["300", "400", "500", "600", "700"] })

export const metadata = {
  title: 'Blog App',
  description: 'Blog app using nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <AuthProvider>       
        <ThemeContextProvider>
          <ThemeProvider>         
        <div className="container">
          <div className="wrapper">
            <DynamicNavbar/>
           {children}
           <DynamicFooter/>
          </div>
        </div>
        </ThemeProvider>
        </ThemeContextProvider>
        </AuthProvider>
        </body>
    </html>
  )
}
