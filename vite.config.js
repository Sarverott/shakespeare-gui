import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
// `vite build` builds the standalone webapp into dist/app,
// `vite build --mode lib` builds the GUI plugin (src/main.js) into dist/lib for other releases (mobile, desktop).
export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  // controllers are provided/injected by class name (BaseController), minification must not rename them
  esbuild: {
    keepNames: true,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build:
    mode === "lib"
      ? {
          outDir: "dist/lib",
          copyPublicDir: false,
          lib: {
            entry: fileURLToPath(new URL("./src/main.js", import.meta.url)),
            formats: ["es"],
            fileName: "shakespeare-gui",
          },
          rollupOptions: {
            // the host app provides its own Vue instance
            external: ["vue"],
          },
        }
      : {
          outDir: "dist/app",
        },
}));
