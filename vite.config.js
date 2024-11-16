import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import deadFile from "vite-plugin-deadfile";
import { visualizer } from "rollup-plugin-visualizer";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      emitFile: true,
      filename: "stats.html",
      open: true, // Automatically open the report in your default browser
    }),
    viteStaticCopy({
      targets: [
        {
          src: "robots.txt",
          dest: "",
        },
      ],
    }),
    deadFile({
      root: "./src", // Adjust the root directory as needed
    }),
  ],
  build: {
    minify: "terser",
    sourcemap: true,
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
});
