import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/cars": {
        target: "https://carapi.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/cars/, "/api/models/v2"),
      },
      "/api/trims": {
        target: "https://carapi.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/trims/, "/api/trims/v2"),
      },
      "/api/trim": {
        target: "https://carapi.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/trim/, "/api/trims/v2/"),
      },
    },
  },
});
