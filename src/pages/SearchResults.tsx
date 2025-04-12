import { ArticleCard } from "@/components/ArticleCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearch } from "@/hooks/useSearch";
import { Loader2, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [inputValue, setInputValue] = useState(initialQuery);
  const { results, isLoading } = useSearch(query);

  console.log("SearchResults page:", { 
    query, 
    resultsLength: results.length, 
    isLoading,
    results: results.slice(0, 3) // Log first 3 results for debugging
  });

  // Update search when URL param changes
  useEffect(() => {
    const newQuery = searchParams.get("q") || "";
    console.log("URL params changed:", newQuery);
    setQuery(newQuery);
    setInputValue(newQuery);
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search submitted:", inputValue);
    setSearchParams({ q: inputValue });
    setQuery(inputValue);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-10 md:py-16">
          <div className="container-medium">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Search Results
            </h1>
            
            <form onSubmit={handleSearch} className="flex gap-2 mb-8 max-w-3xl">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search articles..."
                className="w-full"
              />
              <Button type="submit" className="shrink-0">
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <SearchIcon className="h-4 w-4 mr-2" />}
                Search
              </Button>
            </form>

            {query ? (
              <>
                <div className="mb-6">
                  <p className="text-muted-foreground">
                    {isLoading ? (
                      <span className="flex items-center">
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        Searching...
                      </span>
                    ) : (
                      `Found ${results.length} result${results.length === 1 ? "" : "s"} for "${query}"`
                    )}
                  </p>
                </div>

                {!isLoading && results.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-xl font-semibold mb-2">No results found</p>
                    <p className="text-muted-foreground">
                      Try searching with different keywords or browse all articles
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {results.map((article) => (
                      <ArticleCard
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        excerpt={article.excerpt}
                        tags={article.tags}
                        coverImage={article.coverImage}
                        date={article.date}
                        readTime={article.readTime}
                        author={article.author}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl font-semibold mb-2">Enter search term</p>
                <p className="text-muted-foreground">
                  Type in the search box above to find articles
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 