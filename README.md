# Next.js Blog Application

A modern blog application built with Next.js 15, TypeScript, and Tailwind CSS. This application features a clean, responsive design with dark mode support and includes functionality for browsing articles, searching content, and reading blog posts.

## Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **App Router**: Uses Next.js App Router for optimal performance and SEO
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark Mode**: Built-in dark mode support with theme persistence
- **Search Functionality**: Full-text search across articles
- **MDX Support**: Rich content rendering with syntax highlighting
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance**: Optimized images and code splitting

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nextjs-blog-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog listing and individual posts
│   ├── about/             # About page
│   ├── search/            # Search results page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── not-found.tsx      # 404 page
├── src/
│   ├── components/        # Reusable UI components
│   ├── data/             # Static data and articles
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utility functions
├── public/               # Static assets
└── styles/               # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **next-themes** - Theme management
- **React Query** - Data fetching and caching
- **MDX** - Markdown with JSX support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.