import { fallbackArticles } from "@/data/fallback-articles"; // Keep the original articles as fallback
import { MDXArticle } from "./mdx-types";

// Interface matching the format expected by our existing components
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    initials: string;
    bio: string;
  };
  date: string;
  readTime: string;
  tags: string[];
}

// Convert an MDX article to the expected format
function mdxToArticle(mdxArticle: MDXArticle): Article {
  return {
    id: mdxArticle.frontmatter.id,
    title: mdxArticle.frontmatter.title,
    excerpt: mdxArticle.frontmatter.excerpt,
    coverImage: mdxArticle.frontmatter.coverImage,
    content: mdxArticle.content,
    author: mdxArticle.frontmatter.author,
    date: mdxArticle.frontmatter.date,
    readTime: mdxArticle.frontmatter.readTime,
    tags: mdxArticle.frontmatter.tags,
  };
}

// Cache for articles
let articlesCache: Article[] | null = null;

// Get all articles in the format expected by our components
export async function getArticles(): Promise<Article[]> {
  // Return from cache if available
  if (articlesCache) {
    return articlesCache;
  }
  
  try {
    // Import the browser-compatible MDX functions dynamically
    const { getAllArticles } = await import('./mdx-browser');
    const mdxArticles = await getAllArticles();
    
    // Convert and cache the articles
    articlesCache = mdxArticles.map(mdxToArticle);
    return articlesCache;
  } catch (error) {
    console.error("Error loading MDX articles:", error);
    // Fallback to static articles if MDX loading fails
    return fallbackArticles;
  }
}

// Get a single article by ID
export async function getArticleById(id: string): Promise<Article | undefined> {
  try {
    // Import the browser-compatible MDX functions dynamically
    const { getArticleBySlug } = await import('./mdx-browser');
    const mdxArticle = await getArticleBySlug(id);
    
    if (!mdxArticle) {
      // Fallback to static articles if MDX article not found
      return fallbackArticles.find(article => article.id === id);
    }
    
    return mdxToArticle(mdxArticle);
  } catch (error) {
    console.error(`Error loading MDX article for "${id}":`, error);
    // Fallback to static articles if MDX loading fails
    return fallbackArticles.find(article => article.id === id);
  }
}

// Get all unique tags from all articles
export async function getAllTags(): Promise<string[]> {
  const articles = await getArticles();
  const allTags = articles.flatMap(article => article.tags);
  return Array.from(new Set(allTags));
}

// Get articles filtered by tag
export async function getArticlesByTag(tag: string): Promise<Article[]> {
  const articles = await getArticles();
  return articles.filter(article => article.tags.includes(tag));
} 