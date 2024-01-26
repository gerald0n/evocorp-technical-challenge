import Navbar from '@/components/Feed/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex } from 'next/font/google'

const roboto = Roboto_Flex({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'Next Movie App',
   description: 'Movie Listing application'
}

export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body className={roboto.className}>
            <main className="bg-black min-h-screen flex flex-col flex-wrap items-center overflow-hidden">
               <Navbar />
               {children}
            </main>
         </body>
      </html>
   )
}
