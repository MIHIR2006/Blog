// MDX data utilities - deprecated, use mdx-server.ts instead
import { ArticleFrontmatter } from "./mdx-types";

export const ARTICLES_DATA: Record<string, { frontmatter: ArticleFrontmatter; content: string }> = {};

export function getAllArticleSlugs(): string[] {
  return Object.keys(ARTICLES_DATA);
}

export function getArticleRecord(slug: string): { frontmatter: ArticleFrontmatter; content: string } | undefined {
  return ARTICLES_DATA[slug];
}
