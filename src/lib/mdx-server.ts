import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ArticleFrontmatter, MDXArticle } from './mdx-types';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

/**
 * Get all MDX article files from the content directory
 */
export function getArticleSlugs(): string[] {
    try {
        if (!fs.existsSync(CONTENT_DIR)) {
            return [];
        }
        const files = fs.readdirSync(CONTENT_DIR);
        return files
            .filter((file) => file.endsWith('.mdx'))
            .map((file) => file.replace(/\.mdx$/, ''));
    } catch (error) {
        console.error('Error reading article slugs:', error);
        return [];
    }
}

/**
 * Get a single article by its slug (filename without .mdx)
 */
export function getArticleBySlug(slug: string): MDXArticle | null {
    try {
        const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);

        if (!fs.existsSync(filePath)) {
            return null;
        }

        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        const frontmatter: ArticleFrontmatter = {
            id: data.id || slug,
            title: data.title || '',
            excerpt: data.excerpt || '',
            coverImage: data.coverImage || '',
            date: data.date || '',
            readTime: data.readTime || '',
            author: {
                name: data.author?.name || '',
                avatar: data.author?.avatar || '',
                initials: data.author?.initials || '',
                bio: data.author?.bio || '',
            },
            tags: data.tags || [],
        };

        return {
            frontmatter,
            slug,
            content,
        };
    } catch (error) {
        console.error(`Error reading article ${slug}:`, error);
        return null;
    }
}

/**
 * Get all articles with their frontmatter and content
 */
export function getAllArticles(): MDXArticle[] {
    const slugs = getArticleSlugs();
    const articles = slugs
        .map((slug) => getArticleBySlug(slug))
        .filter((article): article is MDXArticle => article !== null);

    // Sort by date (newest first)
    return articles.sort((a, b) => {
        const dateA = new Date(a.frontmatter.date);
        const dateB = new Date(b.frontmatter.date);
        return dateB.getTime() - dateA.getTime();
    });
}

/**
 * Get all unique tags from all articles
 */
export function getAllTags(): string[] {
    const articles = getAllArticles();
    const allTags = articles.flatMap((article) => article.frontmatter.tags);
    return Array.from(new Set(allTags));
}

/**
 * Get articles filtered by tag
 */
export function getArticlesByTag(tag: string): MDXArticle[] {
    const articles = getAllArticles();
    return articles.filter((article) => article.frontmatter.tags.includes(tag));
}
