import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is served from the root of chesstacticsapp.com (see public/CNAME),
// and `gh-pages -d build` publishes the build directory.
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'build', emptyOutDir: true },
  test: { environment: 'jsdom' },
})
