import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hashan Chathuranga',
  description: 'Hashan Chathuranga portfolio',
  keywords:'hashan, chathuranga, Hashan, Chathuranga, HASHAN, CHATHURANGA, HASHAN CHATHURANGA, Hashan Chathuranga, hashan chathuranga'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="sunset" className='scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
