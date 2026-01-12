import { ArticleCard } from "@/components/ArticleCard"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { ProgressBar } from "@/components/ProgressBar"
import { Button } from "@/components/ui/button"
import { getAllArticles } from "@/lib/mdx-server"
import Link from "next/link"

export default function HomePage() {
  const mdxArticles = getAllArticles()

  // Convert to format expected by ArticleCard
  const articles = mdxArticles.map(article => ({
    id: article.frontmatter.id,
    title: article.frontmatter.title,
    excerpt: article.frontmatter.excerpt,
    coverImage: article.frontmatter.coverImage,
    author: article.frontmatter.author,
    date: article.frontmatter.date,
    readTime: article.frontmatter.readTime,
    tags: article.frontmatter.tags,
  }))

  const featuredArticle = articles[0]
  const recentArticles = articles.slice(1)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ProgressBar />

      <main className="flex-grow">
        <section className="py-12 md:py-20">
          <div className="container-medium">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              Stories that inspire, inform, and entertain
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-prose">
              Discover thought-provoking articles from writers on any topic. From technology and culture to personal growth and beyond.
            </p>
            <div className="flex space-x-4">
              <Button asChild size="lg">
                <Link href="/blog">Read Articles</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-10 border-t border-border">
          <div className="container-medium">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-serif text-2xl font-bold">Featured Story</h2>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground text-sm">
                View all
              </Link>
            </div>

            {featuredArticle && (
              <ArticleCard
                id={featuredArticle.id}
                title={featuredArticle.title}
                excerpt={featuredArticle.excerpt}
                coverImage={featuredArticle.coverImage}
                author={featuredArticle.author}
                date={featuredArticle.date}
                readTime={featuredArticle.readTime}
                featured={true}
              />
            )}
          </div>
        </section>

        <section className="py-10 border-t border-border">
          <div className="container-medium">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-serif text-2xl font-bold">Latest Stories</h2>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground text-sm">
                View all
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  excerpt={article.excerpt}
                  coverImage={article.coverImage}
                  author={article.author}
                  date={article.date}
                  readTime={article.readTime}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
