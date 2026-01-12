import { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = {
  title: 'About - Mihir Goswami',
  description: 'Learn more about Mihir Goswami - a full-stack developer passionate about web development, system design, and creating efficient applications.',
  openGraph: {
    title: 'About - Mihir Goswami',
    description: 'Learn more about Mihir Goswami - a full-stack developer passionate about web development, system design, and creating efficient applications.',
    type: 'profile',
    images: [
      {
        url: '/images/MihirProfile.jpg',
        width: 800,
        height: 800,
        alt: 'Mihir Goswami',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'About - Mihir Goswami',
    description: 'Full-stack developer passionate about web development and system design.',
    creator: '@MIHIR___0007',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
