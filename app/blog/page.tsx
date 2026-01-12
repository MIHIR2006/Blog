import { Metadata } from 'next'
import { getAllArticles, getAllTags } from '@/lib/mdx-server'
import BlogPageClient from './BlogPageClient'

export const metadata: Metadata = {
  title: 'Blog - All Articles',
  description: 'Browse all articles on web development, programming languages, security, and more.',
  openGraph: {
    title: 'Blog - All Articles | Mihir Goswami',
    description: 'Browse all articles on web development, programming languages, security, and more.',
    type: 'website',
  },
}

export default function BlogPage() {
  const mdxArticles = getAllArticles()
  const allTags = getAllTags()

  // Convert to format expected by client component
  const articles = mdxArticles.map(article => ({
    id: article.frontmatter.id,
    title: article.frontmatter.title,
    excerpt: article.frontmatter.excerpt,
    coverImage: article.frontmatter.coverImage,
    content: article.content,
    author: article.frontmatter.author,
    date: article.frontmatter.date,
    readTime: article.frontmatter.readTime,
    tags: article.frontmatter.tags,
  }))

  return <BlogPageClient articles={articles} allTags={allTags} />
}
