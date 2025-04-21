import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import MDXContent from "@/components/MDXContent";
import { ProgressBar } from "@/components/ProgressBar";
import { ShareButtons } from "@/components/ShareButtons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Article, getArticleById } from "@/lib/articles";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch article when component mounts or id changes
  useEffect(() => {
    async function loadArticle() {
      if (id) {
        try {
          const fetchedArticle = await getArticleById(id);
          setArticle(fetchedArticle || null);
        } catch (error) {
          console.error("Error fetching article:", error);
          setArticle(null);
        } finally {
          setLoading(false);
        }
      }
    }
    
    loadArticle();
  }, [id]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // If no article is found, redirect to blog page
  useEffect(() => {
    if (!loading && !article) {
      navigate("/blog");
    }
  }, [article, navigate, loading]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <ProgressBar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4">Loading article...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ProgressBar />

      <main className="flex-grow">
        <article className="py-10">
          <div className="container-medium">
            {/* Back button */}
            <Button
              variant="ghost"
              size="sm"
              className="mb-8"
              onClick={() => navigate("/blog")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>

            {/* Article header */}
            <header className="mb-10">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                {article.title}
              </h1>

              <div className="flex items-center gap-4 mb-8">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={article.author.avatar} alt={article.author.name} />
                  <AvatarFallback>{article.author.initials}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="text-base font-medium">{article.author.name}</div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <time dateTime={article.date}>{article.date}</time>
                    <span className="mx-1">·</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Cover image */}
              <div className="overflow-hidden rounded-lg mb-8 aspect-[16/9]">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Share buttons */}
              <ShareButtons
                title={article.title}
                url={window.location.href}
              />
            </header>

            {/* Article content */}
            <div ref={contentRef}>
              <MDXContent content={article.content} />
            </div>

            {/* Tags */}
            <div className="mt-10">
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Separator className="my-10" />

            {/* Author bio */}
            <div className="flex items-start gap-4 mb-10">
              <Avatar className="h-12 w-12">
                <AvatarImage src={article.author.avatar} alt={article.author.name} />
                <AvatarFallback>{article.author.initials}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-serif text-lg font-medium mb-2">{article.author.name}</div>
                <p className="text-muted-foreground text-sm mb-4">{article.author.bio}</p>
                <a href="https://x.com/MIHIR___0007">
                  <Button variant="outline" size="sm">Say Hi</Button>
                </a>
              </div>
            </div>

            {/* Share buttons (bottom) */}
            <ShareButtons
              title={article.title}
              url={window.location.href}
            />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
