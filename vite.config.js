import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	base: 'https://ohno17.github.io/GithubPagesReactTest/',
  server: {
    host: '0.0.0.0',
  }
})
