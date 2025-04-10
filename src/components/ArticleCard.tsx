
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Author {
  name: string;
  avatar: string;
  initials: string;
}

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: Author;
  date: string;
  readTime: string;
  className?: string;
  featured?: boolean;
  tags?: string[];
}

export function ArticleCard({
  id,
  title,
  excerpt,
  coverImage,
  author,
  date,
  readTime,
  className,
  featured = false,
  tags = [],
}: ArticleCardProps) {
  return (
    <article className={cn("group animate-fade-in rounded-lg overflow-hidden bg-card border border-border", className)}>
      <Link to={`/blog/${id}`} className="block">
        <div className={cn("overflow-hidden", featured ? "aspect-[16/9]" : "aspect-[16/10]")}>
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-6 space-y-4">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        <Link to={`/blog/${id}`}>
          <h2 className={cn("font-serif font-bold tracking-tight hover:text-primary/90 transition-colors", 
            featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
          )}>
            {title}
          </h2>
        </Link>
        
        <p className={cn("text-muted-foreground", 
          featured ? "text-base md:text-lg line-clamp-3" : "text-sm md:text-base line-clamp-2"
        )}>
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.initials}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col space-y-1">
              <div className="text-sm font-medium">{author.name}</div>
            </div>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <time dateTime={date}>{date}</time>
            <span className="mx-1">·</span>
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
