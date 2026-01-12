import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getArticleBySlug, getAllArticles } from '@/lib/mdx-server'
import BlogPostClient from './BlogPostClient'

interface BlogPostPageProps {
  params: Promise<{ id: string }>
}

// Generate static params for all articles
export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    id: article.frontmatter.id,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params
  const article = getArticleBySlug(id)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  const { frontmatter } = article

  return {
    title: frontmatter.title,
    description: frontmatter.excerpt,
    authors: [{ name: frontmatter.author.name }],
    keywords: frontmatter.tags,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      type: 'article',
      publishedTime: frontmatter.date,
      authors: [frontmatter.author.name],
      images: [
        {
          url: frontmatter.coverImage,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
      tags: frontmatter.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.excerpt,
      images: [frontmatter.coverImage],
      creator: '@MIHIR___0007',
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params
  const article = getArticleBySlug(id)

  if (!article) {
    notFound()
  }

  // Convert to the format expected by the client component
  const articleData = {
    id: article.frontmatter.id,
    title: article.frontmatter.title,
    excerpt: article.frontmatter.excerpt,
    coverImage: article.frontmatter.coverImage,
    content: article.content,
    author: article.frontmatter.author,
    date: article.frontmatter.date,
    readTime: article.frontmatter.readTime,
    tags: article.frontmatter.tags,
  }

  // Generate JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.frontmatter.title,
    description: article.frontmatter.excerpt,
    image: article.frontmatter.coverImage,
    datePublished: article.frontmatter.date,
    author: {
      '@type': 'Person',
      name: article.frontmatter.author.name,
      url: 'https://mihir-goswami-portfolio.vercel.app',
    },
    publisher: {
      '@type': 'Person',
      name: 'Mihir Goswami',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mihirgoswamiblogs.vercel.app/images/Mihir.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://mihirgoswamiblogs.vercel.app/blog/${id}`,
    },
    keywords: article.frontmatter.tags.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostClient article={articleData} />
    </>
  )
}
