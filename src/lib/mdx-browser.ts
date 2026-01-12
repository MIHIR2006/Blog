// This file is deprecated - MDX content is now loaded from files in /content/blog/
// See mdx-server.ts for the new file-based implementation

import { ArticleFrontmatter, MDXArticle } from "./mdx-types";

export function getArticleRecord(): Record<string, { frontmatter: ArticleFrontmatter, content: string }> {
  console.warn('mdx-browser.ts is deprecated. Use mdx-server.ts instead.');
  return {};
}

export function getAllArticleSlugs(): string[] {
  console.warn('mdx-browser.ts is deprecated. Use mdx-server.ts instead.');
  return [];
}

export async function getAllArticles(): Promise<MDXArticle[]> {
  console.warn('mdx-browser.ts is deprecated. Use mdx-server.ts instead.');
  return [];
}

export async function getArticleBySlug(slug: string): Promise<MDXArticle | null> {
  console.warn('mdx-browser.ts is deprecated. Use mdx-server.ts instead.');
  return null;
}