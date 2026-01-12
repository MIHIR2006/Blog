import { MDXArticle, ArticleFrontmatter } from "./mdx-types";

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

// Get all articles in the format expected by our components
export async function getArticles(): Promise<Article[]> {
  try {
    // Dynamic import for server-side MDX functions
    const { getAllArticles } = await import('./mdx-server');
    const mdxArticles = getAllArticles();
    return mdxArticles.map(mdxToArticle);
  } catch (error) {
    console.error("Error loading MDX articles:", error);
    return [];
  }
}

// Get a single article by ID
export async function getArticleById(id: string): Promise<Article | undefined> {
  try {
    const { getArticleBySlug } = await import('./mdx-server');
    const mdxArticle = getArticleBySlug(id);

    if (!mdxArticle) {
      return undefined;
    }

    return mdxToArticle(mdxArticle);
  } catch (error) {
    console.error(`Error loading MDX article for "${id}":`, error);
    return undefined;
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