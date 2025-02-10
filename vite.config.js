import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePreprocessor from "cypress-vite";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://prueba-tecnica-api-tienda-moviles.onrender.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  e2e: {
    setupNodeEvents(on) {
      on(
        "file:preprocessor",
        vitePreprocessor({
          configFile: path.resolve(__dirname, "./vite.config.ts"),
          mode: "development",
        })
      );
    },
  },
});
