
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function loadPlugins() {
  const plugins = [react()];
  try {
    const mod = await import("@replit/vite-plugin-runtime-error-modal");
    const pluginFactory = mod.default ?? mod.runtimeErrorOverlay ?? null;
    if (pluginFactory) plugins.push(pluginFactory());
  } catch (_) {}

  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    try {
      const m = await import("@replit/vite-plugin-cartographer");
      if (m.cartographer) plugins.push(m.cartographer());
    } catch (_) {}
    try {
      const m2 = await import("@replit/vite-plugin-dev-banner");
      if (m2.devBanner) plugins.push(m2.devBanner());
    } catch (_) {}
  }
  return plugins;
}

export default async () =>
  defineConfig({
    plugins: await loadPlugins(),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },
    root: path.resolve(__dirname, "client"),
    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'react-vendor';
              }
              if (id.match(/@radix-ui|framer-motion|lucide-react|wouter|recharts/)) {
                return 'ui-vendor';
              }
              return 'vendor';
            }
          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  });
