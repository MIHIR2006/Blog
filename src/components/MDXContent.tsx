import { useTheme } from '@/hooks/useTheme';
import 'highlight.js/styles/github-dark.css'; // Import a highlight.js theme
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useEffect, useState } from 'react';
import rehypeHighlight from 'rehype-highlight';

// Custom CSS to ensure code blocks work in both light and dark modes
const codeBlockStyles = `
  /* Base styling for all code blocks */
  .prose pre {
    background-color: #1e1e1e !important;
    color: #d4d4d4 !important;
    padding: 1.25rem;
    border-radius: 0.375rem;
    overflow-x: auto;
  }

  /* Text color consistency for light and dark modes */
  .prose pre code, 
  :root:not(.dark) .prose pre code,
  .dark .prose pre code {
    color: #d4d4d4 !important;
  }

  /* Consistent syntax highlighting colors in both modes */
  .prose pre .hljs-keyword, 
  :root:not(.dark) .prose pre .hljs-keyword { color: #569cd6 !important; }
  
  .prose pre .hljs-built_in,
  :root:not(.dark) .prose pre .hljs-built_in { color: #4ec9b0 !important; }
  
  .prose pre .hljs-type,
  :root:not(.dark) .prose pre .hljs-type { color: #4ec9b0 !important; }
  
  .prose pre .hljs-literal,
  :root:not(.dark) .prose pre .hljs-literal { color: #569cd6 !important; }
  
  .prose pre .hljs-number,
  :root:not(.dark) .prose pre .hljs-number { color: #b5cea8 !important; }
  
  .prose pre .hljs-regexp,
  :root:not(.dark) .prose pre .hljs-regexp { color: #d16969 !important; }
  
  .prose pre .hljs-string,
  :root:not(.dark) .prose pre .hljs-string { color: #ce9178 !important; }
  
  .prose pre .hljs-subst,
  :root:not(.dark) .prose pre .hljs-subst { color: #d4d4d4 !important; }
  
  .prose pre .hljs-symbol,
  :root:not(.dark) .prose pre .hljs-symbol { color: #d7ba7d !important; }
  
  .prose pre .hljs-class,
  :root:not(.dark) .prose pre .hljs-class { color: #4ec9b0 !important; }
  
  .prose pre .hljs-function,
  :root:not(.dark) .prose pre .hljs-function { color: #dcdcaa !important; }
  
  .prose pre .hljs-title,
  :root:not(.dark) .prose pre .hljs-title { color: #dcdcaa !important; }
  
  .prose pre .hljs-params,
  :root:not(.dark) .prose pre .hljs-params { color: #9cdcfe !important; }
  
  .prose pre .hljs-comment,
  :root:not(.dark) .prose pre .hljs-comment { color: #6a9955 !important; }
  
  .prose pre .hljs-doctag,
  :root:not(.dark) .prose pre .hljs-doctag { color: #608b4e !important; }
  
  .prose pre .hljs-meta,
  :root:not(.dark) .prose pre .hljs-meta { color: #9cdcfe !important; }

  .prose pre .hljs-section,
  :root:not(.dark) .prose pre .hljs-section { color: #569cd6 !important; }

  .prose pre .hljs-tag,
  :root:not(.dark) .prose pre .hljs-tag { color: #569cd6 !important; }

  .prose pre .hljs-name,
  :root:not(.dark) .prose pre .hljs-name { color: #569cd6 !important; }

  .prose pre .hljs-attr,
  :root:not(.dark) .prose pre .hljs-attr { color: #9cdcfe !important; }

  .prose pre .hljs-attribute,
  :root:not(.dark) .prose pre .hljs-attribute { color: #9cdcfe !important; }

  .prose pre .hljs-variable,
  :root:not(.dark) .prose pre .hljs-variable { color: #9cdcfe !important; }

  /* Inline code */
  .prose :not(pre) > code {
    background-color: rgba(144, 144, 144, 0.2);
    padding: 0.2em 0.4em;
    border-radius: 0.25rem;
    font-size: 0.85em;
    white-space: break-spaces;
  }
`;

// Custom components that can be used in MDX
const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold mt-5 mb-2" {...props} />,
  p: (props: any) => <p className="my-4" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 my-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 my-4" {...props} />,
  li: (props: any) => <li className="mb-1" {...props} />,
  a: (props: any) => (
    <a className="text-blue-500 hover:text-blue-700 underline" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
  ),
  // We don't need to define code and pre components here as rehype-highlight will handle them
  // They are causing conflicts with the syntax highlighting
};

interface MDXContentProps {
  content: string;
}

export const MDXContent = ({ content }: MDXContentProps) => {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  // CSS themes are now imported globally

  useEffect(() => {
    const processMdx = async () => {
      try {
        // Process the content with rehype-highlight for syntax highlighting
        const mdxSource = await serialize(content, {
          mdxOptions: {
            rehypePlugins: [
              [rehypeHighlight, { detect: true, ignoreMissing: true }]
            ],
          },
        });
        setMdxSource(mdxSource);
      } catch (error) {
        console.error('Error processing MDX content:', error);
      } finally {
        setLoading(false);
      }
    };

    processMdx();
  }, [content]);

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <style dangerouslySetInnerHTML={{ __html: codeBlockStyles }} />
      {!mdxSource ? (
        loading ? <div>Loading content...</div> : <div>Failed to load content.</div>
      ) : (
        <MDXRemote {...mdxSource} components={components} />
      )}
    </div>
  );
};

export default MDXContent; 