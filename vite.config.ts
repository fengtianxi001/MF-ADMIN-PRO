import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    open: true,
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "border-radius-medium": "0px",
          "border-radius-small": "0px",
        },
        javascriptEnabled: true,
      },
    },
  },
});
