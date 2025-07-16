import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

const root = path.resolve(__dirname, "src");

// https://vite.dev/config/
// https://medium.com/@tusharupadhyay691/stop-struggling-with-path-aliases-in-vite-typescript-react-heres-the-ultimate-fix-1ce319eb77d0
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": root, // Map @ to ./src
    },
  },
});
