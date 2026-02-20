import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hashan-chathuranga.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Hashan Chathuranga | Full-Stack Software Engineer & UI/UX',
    template: '%s | Hashan Chathuranga',
  },
  description: 'Portfolio of Hashan Chathuranga — Full-Stack Software Engineer, UI/UX Engineer, and AI/ML Enthusiast. Software engineering, design, and user experience.',
  keywords: ['Hashan Chathuranga', 'hashan chathuranga', 'Full-Stack Engineer', 'Software Engineer', 'UI/UX', 'portfolio'],
  authors: [{ name: 'Hashan Chathuranga', url: baseUrl }],
  creator: 'Hashan Chathuranga',
  openGraph: {
    type: 'website',
    url: baseUrl,
    siteName: 'Hashan Chathuranga',
    title: 'Hashan Chathuranga | Full-Stack Software Engineer & UI/UX',
    description: 'Portfolio of Hashan Chathuranga — Full-Stack Software Engineer, UI/UX Engineer, and AI/ML Enthusiast.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hashan Chathuranga | Full-Stack Software Engineer',
    description: 'Portfolio of Hashan Chathuranga — Full-Stack Software Engineer, UI/UX Engineer, AI/ML Enthusiast.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: baseUrl },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Hashan Chathuranga',
  url: baseUrl,
  jobTitle: 'Full-Stack Software Engineer',
  description: 'Full-Stack Software Engineer, UI/UX Engineer, and AI/ML Enthusiast. Passionate about software engineering, design, and user experience.',
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="sunset" className='scroll-smooth'>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
