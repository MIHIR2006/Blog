import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodeXml, Coffee, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-16">
      <div className="container-medium">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Blogs</h3>
            <p className="text-muted-foreground text-sm">
              Discover thought-provoking articles from writers on any topic. From technology and culture to personal growth and beyond.
            </p>
          </div>
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Connect</h3>
            <div className="lg:grid lg:grid-cols-3">
              <a href="https://x.com/MIHIR___0007" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </a>
              <a href="https://www.instagram.com/mihir_goswami_007/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </a>
              <a href="https://github.com/MIHIR2006" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">Github</span>
                </Button>
              </a>

              <a href="https://www.linkedin.com/in/mihir-goswami/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>

              <a href="https://buymeacoffee.com/mihir_goswami" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary">
                  <Coffee className="h-5 w-5" />
                  <span className="sr-only">Coffee</span>
                </Button>
              </a>

              <a href="https://mihir-goswami-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary">
                  <CodeXml className="h-5 w-5" />
                  <span className="sr-only">CodeXml </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mihir Goswami  — Thanks for reading. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


