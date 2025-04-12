import { articles } from "@/data/articles";
import { useEffect, useState } from "react";

interface Author {
  name: string;
  avatar: string;
  initials: string;
}

export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: Author;
}

export function useSearch(query: string) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log("useSearch hook called with query:", query);

  useEffect(() => {
    if (!query || !query.trim()) {
      console.log("Empty query, clearing results");
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    console.log("Search started for:", query);

    // Simulate a small delay to give a more realistic search experience
    const timeoutId = setTimeout(() => {
      try {
        const searchTerm = query.toLowerCase().trim();
        console.log("Articles available for search:", articles.length);
        
        // Using the same filtering approach as in the Blog component
        const filteredResults = articles
          .filter(article => {
            if (!article) return false;
            
            // Perform the search on all relevant fields
            const titleMatch = (article.title || "").toLowerCase().includes(searchTerm);
            const contentMatch = (article.content || "").toLowerCase().includes(searchTerm);
            const excerptMatch = (article.excerpt || "").toLowerCase().includes(searchTerm);
            
            // Use the same tag matching logic as the Blog component
            const tagsMatch = article.tags?.some(tag => 
              (tag || "").toLowerCase().includes(searchTerm)
            ) || false;
            
            // Look in author name too
            const authorMatch = article.author?.name 
              ? article.author.name.toLowerCase().includes(searchTerm) 
              : false;
            
            const isMatch = titleMatch || contentMatch || tagsMatch || excerptMatch || authorMatch;
            if (isMatch) {
              console.log(`Match found in article: ${article.id} - ${article.title}`);
            }
            return isMatch;
          })
          .map(article => ({
            id: article.id,
            title: article.title,
            excerpt: article.excerpt,
            coverImage: article.coverImage,
            date: article.date,
            readTime: article.readTime,
            category: article.tags?.[0] || "Article",
            tags: article.tags || [],
            author: article.author
          }));

        console.log(`Search results for "${query}":`, filteredResults.length, 'results found');
        if (filteredResults.length > 0) {
          console.log("First result:", filteredResults[0].title);
        }
        setResults(filteredResults);
      } catch (error) {
        console.error("Error during search:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
        console.log("Search completed");
      }
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return {
    results,
    isLoading
  };
} 