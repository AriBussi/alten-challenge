import { defineConfig } from "cypress";
import dotenvPlugin from "cypress-dotenv";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173/",
    setupNodeEvents(on, config) {
      config = dotenvPlugin(config, { path: ".env.local" });

      if (!config.env.VITE_API_KEY) {
        config.env.VITE_API_KEY = process.env.VITE_API_KEY;
      }

      return config;
    },
  },
});
