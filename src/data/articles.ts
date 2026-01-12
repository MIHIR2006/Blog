// This file exports article metadata for use in sitemap and other static contexts
// Full article data is loaded from MDX files in /content/blog/

export interface ArticleMetadata {
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

// Static article list for sitemap generation
// This is automatically synced with the MDX files
export const articles: ArticleMetadata[] = [
  {
    id: "go-vs-rust",
    title: "Go vs Rust: A Beginner-Friendly Comparison",
    excerpt: "A comprehensive guide to help beginners understand the key differences, strengths, and use cases of Go and Rust programming languages.",
    coverImage: "https://www.digitalogy.co/blog/wp-content/uploads/2025/01/rust-and-go.png",
    date: "Dec 05, 2024",
    readTime: "10 min read",
    author: {
      name: "Mihir Goswami",
      avatar: "/images/Mihir.png",
      initials: "MG",
      bio: "Systems programmer with experience in Go and Rust development.",
    },
    tags: ["Go", "Rust", "Programming", "Systems Programming", "Performance"],
  },
  {
    id: "javascript-typescript-comparison",
    title: "JavaScript vs TypeScript: A Comprehensive Comparison",
    excerpt: "Understanding the key differences, benefits, and use cases of JavaScript and TypeScript in modern web development.",
    coverImage: "/images/TSvsJS.jpg",
    date: "Mar 20, 2024",
    readTime: "8 min read",
    author: {
      name: "Mihir Goswami",
      avatar: "/images/Mihir.png",
      initials: "MG",
      bio: "Web developer passionate about JavaScript, TypeScript, and modern web technologies.",
    },
    tags: ["JavaScript", "TypeScript", "Web Development", "Programming"],
  },
  {
    id: "rest-vs-graphql",
    title: "REST API vs. GraphQL: Which One Should You Use?",
    excerpt: "A comprehensive comparison of REST and GraphQL architectures to help you make the right choice for your next project.",
    coverImage: "/images/GraphQL-vs-REST.webp",
    date: "Oct 12, 2024",
    readTime: "8 min read",
    author: {
      name: "Mihir Goswami",
      avatar: "/images/Mihir.png",
      initials: "MG",
      bio: "Senior Backend Developer with 8+ years of API design experience.",
    },
    tags: ["API", "REST", "GraphQL", "Backend", "Web Development"],
  },
  {
    id: "authentication-authorization-guide",
    title: "Getting Started with Authentication and Authorization",
    excerpt: "Learn the fundamentals of securing user access to your applications with proper authentication and authorization techniques.",
    coverImage: "/images/authetnication_vs_authorization.png",
    date: "Oct 15, 2024",
    readTime: "10 min read",
    author: {
      name: "Mihir Goswami",
      avatar: "/images/Mihir.png",
      initials: "MG",
      bio: "Security Engineer specializing in authentication systems and identity management.",
    },
    tags: ["Security", "Authentication", "Authorization", "Web Development", "Backend"],
  },
  {
    id: "web-app-security-guide",
    title: "How to Secure Your Web App: A Backend Developer's Guide",
    excerpt: "Learn essential security practices to protect your web applications from common vulnerabilities and attacks.",
    coverImage: "/images/Website-Security.jpg",
    date: "Oct 18, 2024",
    readTime: "12 min read",
    author: {
      name: "Mihir Goswami",
      avatar: "/images/Mihir.png",
      initials: "MG",
      bio: "Cybersecurity specialist with 10+ years of experience securing web applications and API infrastructures.",
    },
    tags: ["Security", "Web Development", "Backend", "Cybersecurity", "Best Practices"],
  },
  {
    id: "vibecommit-npm-package",
    title: "Introducing VibeCommit: Streamline Your Git Commit Messages",
    excerpt: "A lightweight npm package that makes clean, standardized commit messages simple and fast. Learn how VibeCommit can improve your Git workflow with minimal configuration.",
    coverImage: "/images/Commit.webp",
    date: "Dec 20, 2024",
    readTime: "6 min read",
    author: {
      name: "Mihir Goswami",
      avatar: "/images/Mihir.png",
      initials: "MG",
      bio: "Full-stack developer passionate about creating tools that improve developer experience and workflow efficiency.",
    },
    tags: ["Git", "Commit", "Conventional Commits", "CLI", "Developer Tools", "Workflow", "Automation", "VibeCommit"],
  },
  {
    id: "markdown-syntax-highlighting",
    title: "Markdown & Syntax Highlighting in Web Development",
    excerpt: "Learn how to effectively use Markdown with syntax highlighting to create beautiful documentation and code examples for your web projects.",
    coverImage: "https://serokell.io/files/pm/pmzzkh71.Markdown_markup_language_pic1.jpg",
    date: "Oct 21, 2024",
    readTime: "8 min read",
    author: {
      name: "Mihir Goswami",
      avatar: "/images/Mihir.png",
      initials: "MG",
      bio: "Technical writer and web developer with a passion for clear documentation.",
    },
    tags: ["Markdown", "Syntax Highlighting", "Documentation", "Web Development", "MDX"],
  },
];
