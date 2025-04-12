import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Menu, Search, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if current route is search page
  const isSearchPage = location.pathname === '/search';

  const handleOpenSearch = useCallback(() => {
    if (!isSearchPage) {
      setIsSearchOpen(true);
    }
  }, [isSearchPage]);

  // Focus the search input when the dialog opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      // Slight delay to ensure dialog is fully open
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isSearchOpen]);

  // Handle keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        // Only toggle search if not on search page
        if (!isSearchPage) {
          setIsSearchOpen(prev => !prev);
        }
      }

      // Close search dialog on Escape key
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isSearchOpen, isSearchPage]);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      // Reset search query after navigation
      setSearchQuery("");
    }
  }, [searchQuery, navigate]);

  const handleSearchInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  return (
    <header className="border-b border-border sticky top-0 z-40 bg-background/95 backdrop-blur">
      <div className="container-medium flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link to="/" className="flex items-center">
<span className="font-serif text-xl font-bold">Blogs</span>
          </Link>
        </div>

        <nav className={`${isMenuOpen ? 'absolute top-16 left-0 right-0 border-b border-border bg-background p-4 md:p-0 shadow-md md:shadow-none' : 'hidden'} md:block`}>
          <ul className={`flex ${isMenuOpen ? 'flex-col space-y-4' : 'flex-row space-x-6'}`}>
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
        </nav>

        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleOpenSearch}
            className={`relative transition-colors ${
              isSearchPage 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-muted/70'
            }`}
            aria-label="Search"
            disabled={isSearchPage}
            title={isSearchPage ? "Already on search page" : "Search articles"}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <ThemeToggle />
        </div>
      </div>

      {/* Search dialog with improved focus handling */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Search Articles</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <Input
              ref={searchInputRef}
              value={searchQuery}
              onChange={handleSearchInputChange}
              placeholder="Search articles..."
              className="flex-1"
            />
            <Button 
              type="submit"
              disabled={!searchQuery.trim()}
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
          <div className="pt-2 text-xs text-muted-foreground">
            Press <kbd className="px-1 py-0.5 rounded border bg-muted mx-1">ESC</kbd> to close or <kbd className="px-1 py-0.5 rounded border bg-muted mx-1">Enter</kbd> to search
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}
