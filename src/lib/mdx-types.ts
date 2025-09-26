// Centralized types for MDX articles

export interface ArticleFrontmatter {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    initials: string;
    bio: string;
  };
  tags: string[];
}

export interface MDXArticle {
  frontmatter: ArticleFrontmatter;
  slug: string;
  content: string;
}


