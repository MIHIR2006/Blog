import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    open: true,
    fs: {
      allow: ['.'],
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.mdx'],
  },
  optimizeDeps: {
    include: ['react-router-dom', 'gray-matter', 'next-mdx-remote/serialize'],
  },
  define: {
    'process.env': process.env,
    'process.cwd': () => JSON.stringify(process.cwd()),
  },
  build: {
    rollupOptions: {
      external: ['fs', 'path'],
    },
  },
}));
