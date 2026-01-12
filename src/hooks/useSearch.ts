import { articles as articlesMetadata } from "@/data/articles";
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

  const articlesData = useMemo(() => articlesMetadata, []);

  useEffect(() => {
    if (!query || !query.trim()) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    const timeoutId = setTimeout(() => {
      try {
        const searchTerm = query.toLowerCase().trim();
        const searchRegex = new RegExp(searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');

        const filteredResults = articlesData
          .filter(article => {
            if (!article) return false;

            const titleMatch = searchRegex.test(article.title || "");
            const excerptMatch = searchRegex.test(article.excerpt || "");

            const tagsMatch = article.tags?.some(tag =>
              searchRegex.test(tag || "")
            ) || false;

            const authorMatch = article.author?.name
              ? searchRegex.test(article.author.name)
              : false;

            return titleMatch || tagsMatch || excerptMatch || authorMatch;
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
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [query, articlesData]);

  return {
    results,
    isLoading
  };
}