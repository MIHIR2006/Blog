import { ArticleCard } from "@/components/ArticleCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Link } from "react-router-dom";

const Index = () => {
  useScrollToTop();

  // Get the featured article (first one)
  const featuredArticle = articles[0];

  // Get the rest of the articles
  const recentArticles = articles.slice(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero section */}
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
                <Link to="/blog">Read Articles</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured article section */}
        <section className="py-10 border-t border-border">
          <div className="container-medium">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-serif text-2xl font-bold">Featured Story</h2>
              <Link to="/blog" className="text-muted-foreground hover:text-foreground text-sm">
                View all
              </Link>
            </div>

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
          </div>
        </section>

        {/* Recent articles section */}
        <section className="py-10 border-t border-border">
          <div className="container-medium">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-serif text-2xl font-bold">Latest Stories</h2>
              <Link to="/blog" className="text-muted-foreground hover:text-foreground text-sm">
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
  );
};

export default Index;
