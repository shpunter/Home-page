import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import deno from "@deno/vite-plugin";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

import "react";
import "react-dom";

export default defineConfig({
  root: "client",
  server: {
    port: 3000,
  },
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    react(),
    deno(),
  ],
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  }
});
