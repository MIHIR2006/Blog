import { articles } from "@/data/articles";
import { useEffect, useMemo, useState } from "react";

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

  // Memoize articles data to avoid recreating on each render
  const articlesData = useMemo(() => articles, []);

  useEffect(() => {
    if (!query || !query.trim()) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    // Use a faster timeout to improve perceived performance
    const timeoutId = setTimeout(() => {
      try {
        const searchTerm = query.toLowerCase().trim();
        
        // Create a single regex for more efficient searching
        const searchRegex = new RegExp(searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
        
        const filteredResults = articlesData
          .filter(article => {
            if (!article) return false;
            
            // Use regex test which is faster than includes for repeated searches
            const titleMatch = searchRegex.test(article.title || "");
            const contentMatch = searchRegex.test(article.content || "");
            const excerptMatch = searchRegex.test(article.excerpt || "");
            
            // Check tags in a more optimized way
            const tagsMatch = article.tags?.some(tag => 
              searchRegex.test(tag || "")
            ) || false;
            
            // Check author name
            const authorMatch = article.author?.name 
              ? searchRegex.test(article.author.name) 
              : false;
            
            return titleMatch || contentMatch || tagsMatch || excerptMatch || authorMatch;
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

        setResults(filteredResults);
      } catch (error) {
        console.error("Error during search:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 100); // Reduced from 150ms to 100ms for better performance

    return () => clearTimeout(timeoutId);
  }, [query, articlesData]);

  return {
    results,
    isLoading
  };
} 