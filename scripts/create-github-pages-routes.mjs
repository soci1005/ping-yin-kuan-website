import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve("dist");
const index = resolve(dist, "index.html");

if (!existsSync(index)) {
  throw new Error("dist/index.html was not found; run the Vite build first.");
}

// GitHub Pages serves static files and does not provide an SPA fallback.
// Create a real index.html for each public route so direct requests return 200.
for (const route of ["publications", "courses", "academic-institutions"]) {
  const routeDir = resolve(dist, route);
  mkdirSync(routeDir, { recursive: true });
  copyFileSync(index, resolve(routeDir, "index.html"));
}

// Keep a fallback for unknown paths while preserving normal 404 behavior where supported.
copyFileSync(index, resolve(dist, "404.html"));

console.log("Created GitHub Pages route entry points.");
