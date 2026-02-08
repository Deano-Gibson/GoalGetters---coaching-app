import { defineConfig } from 'vite'

export default defineConfig({
    // Set base to './' for relative paths, which works for most GitHub Pages setups
    // OR set it to '/repo-name/' if deploying to a subpath
    base: './',
    build: {
        outDir: 'dist',
    },
})
