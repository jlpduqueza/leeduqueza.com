/* eslint-disable no-undef */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Vercel serves files in /api as serverless functions in production, but the
// Vite dev server doesn't. This plugin runs them locally during `npm run dev`.
function vercelApiDev() {
  return {
    name: "vercel-api-dev",
    apply: "serve",
    configureServer(server) {
      Object.assign(process.env, loadEnv(server.config.mode, process.cwd(), ""));

      server.middlewares.use("/api", async (req, res, next) => {
        const route = req.url.split("?")[0].replace(/^\/+|\/+$/g, "");

        if (!/^[\w-]+$/.test(route)) {
          return next();
        }

        let handler;

        try {
          handler = (await server.ssrLoadModule(`/api/${route}.js`)).default;
        } catch {
          return next();
        }

        const chunks = [];
        for await (const chunk of req) {
          chunks.push(chunk);
        }

        const request = new Request(`http://${req.headers.host}${req.originalUrl}`, {
          method: req.method,
          headers: req.headers,
          body: chunks.length ? Buffer.concat(chunks) : undefined,
        });

        const response = await handler.fetch(request);

        res.statusCode = response.status;
        response.headers.forEach((value, key) => res.setHeader(key, value));
        res.end(Buffer.from(await response.arrayBuffer()));
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), vercelApiDev()],
  base: process.env.VITE_BASE_PATH,
});
