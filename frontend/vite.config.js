import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://mern-book-collection-project.vercel.app/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Optional: rewrite paths
      },
    },
  },
});
