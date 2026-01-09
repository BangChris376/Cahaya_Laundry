import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // PERUBAHAN ADA DI SINI:
  // Jika mode development (localhost), pakai "/".
  // Jika mode production (deploy), pakai "/Cahaya_Laundry/".
  base: mode === "development" ? "/" : "/Cahaya_Laundry/", 
  
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