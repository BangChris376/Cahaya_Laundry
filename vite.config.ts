import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // LOGIKA PINTAR:
  // Kalau lagi build (production), pakai nama repo.
  // Kalau lagi dev (localhost), pakai root biasa.
  base: mode === "production" ? "/Cahaya_Laundry/" : "/",
  
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));