'use client'

import { ArticleCard } from "@/components/ArticleCard"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { ProgressBar } from "@/components/ProgressBar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSearch } from "@/hooks/useSearch"
import { Loader2, SearchIcon } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { Suspense, useCallback, useEffect, useMemo, useState } from "react"

function SearchResultsContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""
  const [query, setQuery] = useState(initialQuery)
  const [inputValue, setInputValue] = useState(initialQuery)
  const [debouncedInputValue, setDebouncedInputValue] = useState(inputValue)
  const { results, isLoading } = useSearch(query)

  // Debounce input value changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInputValue(inputValue)
    }, 300)

    return () => clearTimeout(timer)
  }, [inputValue])

  // Update search when URL param changes
  useEffect(() => {
    const newQuery = searchParams.get("q") || ""
    setQuery(newQuery)
    setInputValue(newQuery)
    setDebouncedInputValue(newQuery)
  }, [searchParams])

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    if (debouncedInputValue.trim() !== query.trim()) {
      const params = new URLSearchParams()
      if (debouncedInputValue.trim()) {
        params.set('q', debouncedInputValue.trim())
      }
      router.push(`/search?${params.toString()}`)
      setQuery(debouncedInputValue.trim())
    }
  }, [debouncedInputValue, query, router])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }, [])

  // Memoize the results count message
  const resultsCountMessage = useMemo(() => {
    if (isLoading) {
      return (
        <span className="flex items-center">
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
          Searching...
        </span>
      )
    }
    return `Found ${results.length} result${results.length === 1 ? "" : "s"} for "${query}"`
  }, [isLoading, results.length, query])

  // Memoize the article grid
  const articleGrid = useMemo(() => {
    if (!isLoading && results.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-xl font-semibold mb-2">No results found</p>
          <p className="text-muted-foreground">
            Try searching with different keywords or browse all articles
          </p>
        </div>
      )
    }

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {results.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            excerpt={article.excerpt}
            tags={article.tags}
            coverImage={article.coverImage}
            date={article.date}
            readTime={article.readTime}
            author={article.author}
          />
        ))}
      </div>
    )
  }, [isLoading, results])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ProgressBar />
      <main className="flex-grow">
        <section className="py-10 md:py-16">
          <div className="container-medium">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Search Results
            </h1>
            
            <form onSubmit={handleSearch} className="flex gap-2 mb-8 max-w-3xl">
              <Input
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search articles..."
                className="w-full"
              />
              <Button 
                type="submit" 
                className="shrink-0"
                disabled={debouncedInputValue.trim() === query.trim() || debouncedInputValue.trim() === ""}
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <SearchIcon className="h-4 w-4 mr-2" />}
                Search
              </Button>
            </form>

            {query ? (
              <>
                <div className="mb-6">
                  <p className="text-muted-foreground">
                    {resultsCountMessage}
                  </p>
                </div>

                {articleGrid}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl font-semibold mb-2">Enter search term</p>
                <p className="text-muted-foreground">
                  Type in the search box above to find articles
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function SearchResultsPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen">
        <Header />
        <ProgressBar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4">Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  )
}
