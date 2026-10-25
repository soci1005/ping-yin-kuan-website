import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve("dist");
const index = resolve(dist, "index.html");

if (!existsSync(index)) {
  throw new Error("dist/index.html was not found; run the Vite build first.");
}

// GitHub Pages serves static files and does not provide an SPA fallback.
// Create a real index.html for each public route so direct requests return 200.
// Each route also gets its own canonical URL so Search can index the pages distinctly.
const siteRoot = "https://soci1005.github.io/ping-yin-kuan-website";
const routes = {
  publications: "學術著作 | Publications",
  courses: "教授課程 | Courses",
  "academic-institutions": "學術連結 | Academic Affiliations",
};

for (const [route, title] of Object.entries(routes)) {
  const routeDir = resolve(dist, route);
  mkdirSync(routeDir, { recursive: true });
  const routeUrl = `${siteRoot}/${route}/`;
  const html = readFileSync(index, "utf-8")
    .replaceAll(`${siteRoot}/`, routeUrl)
    .replace(/<title>[^<]*<\/title>/, `<title>關秉寅教授個人網頁 - ${title}</title>`);
  writeFileSync(resolve(routeDir, "index.html"), html, "utf-8");
}

// Keep a fallback for unknown paths while preserving normal 404 behavior where supported.
copyFileSync(index, resolve(dist, "404.html"));

console.log("Created GitHub Pages route entry points.");
