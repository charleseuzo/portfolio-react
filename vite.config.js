import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // Dev: base = "/" so localhost:5173/ works
  // Build: base = "/portfolio-react/" for GitHub Pages
  base: command === "serve" ? "/" : "/portfolio-react/",
}));
