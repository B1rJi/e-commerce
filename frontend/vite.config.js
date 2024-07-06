import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://backend-e-commerce-psog.onrender.com",
      "/uploads/": "https://backend-e-commerce-psog.onrender.com",
    },
  },
});
