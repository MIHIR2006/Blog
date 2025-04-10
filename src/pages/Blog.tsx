import { ArticleCard } from "@/components/ArticleCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProgressBar } from "@/components/ProgressBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { articles } from "@/data/articles";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Blog = () => {
  useScrollToTop();
  
  // Extract all unique tags from articles
  const allTags = Array.from(
    new Set(
      articles.flatMap((article) => article.tags)
    )
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ProgressBar />
      
      <main className="flex-grow">
        <section className="py-10 md:py-16">
          <div className="container-medium">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Featured Posts
            </h1>
            <p className="text-muted-foreground mb-8 max-w-prose">
              Discover our collection of thought-provoking articles on a variety of topics.
            </p>

            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="mb-4 flex flex-wrap h-auto space-x-1 space-y-1 sm:space-y-0 bg-transparent p-0">
                <TabsTrigger 
                  value="all"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  All
                </TabsTrigger>
                {allTags.map((tag) => (
                  <TabsTrigger 
                    key={tag} 
                    value={tag}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {tag}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <TabsContent value="all" className="animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {articles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      id={article.id}
                      title={article.title}
                      excerpt={article.excerpt}
                      coverImage={article.coverImage}
                      author={article.author}
                      date={article.date}
                      readTime={article.readTime}
                      tags={article.tags}
                    />
                  ))}
                </div>
              </TabsContent>
              
              {allTags.map((tag) => (
                <TabsContent key={tag} value={tag} className="animate-fade-in">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {articles
                      .filter((article) => article.tags.includes(tag))
                      .map((article) => (
                        <ArticleCard
                          key={article.id}
                          id={article.id}
                          title={article.title}
                          excerpt={article.excerpt}
                          coverImage={article.coverImage}
                          author={article.author}
                          date={article.date}
                          readTime={article.readTime}
                          tags={article.tags}
                        />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
