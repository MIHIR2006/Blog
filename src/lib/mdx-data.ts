import { ArticleFrontmatter } from "./mdx-types";

// Centralized in-memory preprocessed data for MDX articles
export const ARTICLES_DATA: Record<string, { frontmatter: ArticleFrontmatter; content: string }> = {
  // moved from mdx-browser.ts to keep that file lean
};

export function getAllArticleSlugs(): string[] {
  return Object.keys(ARTICLES_DATA);
}

export function getArticleRecord(slug: string): { frontmatter: ArticleFrontmatter; content: string } | undefined {
  return ARTICLES_DATA[slug];
}


