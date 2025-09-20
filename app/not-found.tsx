import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/">Go Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog">Browse Articles</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
