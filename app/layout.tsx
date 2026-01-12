import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://mihirgoswamiblogs.vercel.app'),
  title: {
    default: 'Mihir Goswami - Blog | Stories that inspire, inform, and entertain',
    template: '%s | Mihir Goswami Blog'
  },
  description: 'Discover thought-provoking articles from Mihir Goswami on technology, web development, programming languages, and beyond. From Go vs Rust comparisons to security best practices.',
  keywords: ['blog', 'web development', 'programming', 'technology', 'JavaScript', 'TypeScript', 'Go', 'Rust', 'React', 'Next.js'],
  authors: [{ name: 'Mihir Goswami', url: 'https://mihir-goswami-portfolio.vercel.app' }],
  creator: 'Mihir Goswami',
  publisher: 'Mihir Goswami',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mihirgoswamiblogs.vercel.app',
    siteName: 'Mihir Goswami Blog',
    title: 'Mihir Goswami - Blog | Stories that inspire, inform, and entertain',
    description: 'Discover thought-provoking articles on technology, web development, and programming.',
    images: [
      {
        url: '/images/Mihir.png',
        width: 1200,
        height: 630,
        alt: 'Mihir Goswami Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mihir Goswami - Blog',
    description: 'Discover thought-provoking articles on technology, web development, and programming.',
    creator: '@MIHIR___0007',
    images: ['/images/Mihir.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://mihirgoswamiblogs.vercel.app" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
