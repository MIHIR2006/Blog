'use client'

import { Toaster as Sonner } from "@/components/ui/sonner"
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from "react"

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  // Set dark mode by default
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
          <Analytics />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
