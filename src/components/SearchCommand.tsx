import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator
} from "@/components/ui/command";
import { useSearch } from "@/hooks/useSearch";
import { ArrowRightIcon, Loader2, SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function SearchCommand({
  open,
  setOpen
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const { results, isLoading } = useSearch(query);

  console.log("SearchCommand render:", { open, resultsCount: results.length, isLoading });

  // Handle keyboard shortcut to open search dialog
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  // Reset search when dialog closes
  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  const handleQueryChange = (value: string) => {
    console.log("Search query changed:", value);
    setQuery(value);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput 
        placeholder="Search articles..." 
        value={query}
        onValueChange={handleQueryChange}
        autoFocus={true}
      />
      <CommandList>
        <CommandEmpty>
          {isLoading ? (
            <div className="flex items-center justify-center py-6">
              <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
              <span className="ml-2 text-sm text-muted-foreground">Searching...</span>
            </div>
          ) : (
            "No results found."
          )}
        </CommandEmpty>
        
        {results.length > 0 && (
          <>
            <CommandGroup heading="Articles">
              {results.slice(0, 5).map(result => (
                <CommandItem
                  key={result.id}
                  onSelect={() => {
                    router.push(`/blog/${result.id}`);
                    setOpen(false);
                  }}
                  className="flex flex-col items-start"
                >
                  <div className="font-medium">{result.title}</div>
                  <div className="text-xs text-muted-foreground line-clamp-1 mt-1">
                    {result.excerpt}
                  </div>
                </CommandItem>
              ))}
              
              {results.length > 5 && (
                <CommandItem
                  onSelect={() => {
                    router.push(`/search?q=${encodeURIComponent(query)}`);
                    setOpen(false);
                  }}
                  className="justify-center text-sm text-muted-foreground hover:text-foreground"
                >
                  <span>View all {results.length} results</span>
                  <ArrowRightIcon className="ml-1 h-3 w-3" />
                </CommandItem>
              )}
            </CommandGroup>
            
            <CommandSeparator />
            
            <CommandGroup heading="Tags">
              {Array.from(new Set(results.flatMap(r => r.tags))).slice(0, 5).map(tag => (
                <CommandItem
                  key={tag}
                  onSelect={() => {
                    router.push(`/blog?tag=${encodeURIComponent(tag)}`);
                    setOpen(false);
                  }}
                >
                  #{tag}
                </CommandItem>
              ))}
            </CommandGroup>
            
            <CommandSeparator />
            
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  router.push(`/search?q=${encodeURIComponent(query)}`);
                  setOpen(false);
                }}
                className="justify-between"
              >
                <div className="flex items-center">
                  <SearchIcon className="mr-2 h-4 w-4" />
                  <span>Advanced Search</span>
                </div>
                <span className="text-xs text-muted-foreground">Enter</span>
              </CommandItem>
            </CommandGroup>
          </>
        )}
      </CommandList>
    </CommandDialog>
  );
} 