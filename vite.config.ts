import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@Constants": path.resolve(__dirname, "src/constants"),
      "@Hooks": path.resolve(__dirname, "src/hooks"),
      "@Pages": path.resolve(__dirname, "src/pages"),
    },
  },
});
