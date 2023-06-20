import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://template.josephxia.com",
    },
  },

  plugins: [tsconfigPaths(), react()],

  css: {
    modules: {
      hashPrefix: "prefix",
    },

    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
