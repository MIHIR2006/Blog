'use client'

import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import MDXContent from "@/components/MDXContent"
import { ProgressBar } from "@/components/ProgressBar"
import { ShareButtons } from "@/components/ShareButtons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

interface Article {
    id: string
    title: string
    excerpt: string
    coverImage: string
    content: string
    author: {
        name: string
        avatar: string
        initials: string
        bio: string
    }
    date: string
    readTime: string
    tags: string[]
}

interface BlogPostClientProps {
    article: Article
}

export default function BlogPostClient({ article }: BlogPostClientProps) {
    const router = useRouter()
    const contentRef = useRef<HTMLDivElement>(null)
    const [currentUrl, setCurrentUrl] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0)
        setCurrentUrl(window.location.href)
    }, [])

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <ProgressBar />

            <main className="flex-grow">
                <article className="py-10">
                    <div className="container-medium">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="mb-8"
                            onClick={() => router.push("/blog")}
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back
                        </Button>

                        <header className="mb-10">
                            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                                {article.title}
                            </h1>

                            <div className="flex items-center gap-4 mb-8">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src={article.author.avatar} alt={article.author.name} />
                                    <AvatarFallback>{article.author.initials}</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <div className="text-base font-medium">{article.author.name}</div>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <time dateTime={article.date}>{article.date}</time>
                                        <span className="mx-1">·</span>
                                        <span>{article.readTime}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-lg mb-8 aspect-[16/9]">
                                <Image
                                    src={article.coverImage}
                                    alt={article.title}
                                    width={1200}
                                    height={675}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>

                            <ShareButtons
                                title={article.title}
                                url={currentUrl}
                            />
                        </header>

                        <div ref={contentRef}>
                            <MDXContent content={article.content} />
                        </div>

                        <div className="mt-10">
                            <div className="flex flex-wrap gap-2">
                                {article.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <Separator className="my-10" />

                        <div className="flex items-start gap-4 mb-10">
                            <Avatar className="h-12 w-12">
                                <AvatarImage src={article.author.avatar} alt={article.author.name} />
                                <AvatarFallback>{article.author.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="font-serif text-lg font-medium mb-2">{article.author.name}</div>
                                <p className="text-muted-foreground text-sm mb-4">{article.author.bio}</p>
                                <a href="https://x.com/MIHIR___0007">
                                    <Button variant="outline" size="sm">Say Hi</Button>
                                </a>
                            </div>
                        </div>

                        <ShareButtons
                            title={article.title}
                            url={currentUrl}
                        />
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    )
}
