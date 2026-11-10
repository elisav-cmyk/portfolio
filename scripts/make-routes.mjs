// Runs after "vite build". GitHub Pages only serves files that exist, so
// this writes a copy of dist/index.html for every page and case study
// (for example dist/work/ethical-ai/index.html). Each copy gets its own
// title and link-preview tags, so a shared link shows the right name.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const source = readFileSync("src/app/data/caseStudies.ts", "utf8");
const studies = [
  ...source.matchAll(/\{ id: "([^"]+)", title: "([^"]+)", company: "([^"]+)" \}/g),
].map(([, id, title, company]) => ({ id, title, company }));
if (studies.length === 0) throw new Error("No case studies found");

const base = readFileSync("dist/index.html", "utf8");
const site = "https://elisavargas.com";
const escape = (t) =>
  t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const routes = [
  { path: "work", title: "Work | Elisa Vargas" },
  { path: "leadership", title: "Leadership | Elisa Vargas" },
  { path: "impact", title: "Impact | Elisa Vargas" },
  { path: "about", title: "About | Elisa Vargas" },
  ...studies.map((s) => ({
    path: `work/${s.id}`,
    title: `${s.title} | Elisa Vargas`,
    description: `Case study: ${s.title} (${s.company}). Elisa Vargas, Director, Product Design.`,
  })),
];

for (const r of routes) {
  let html = base
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(r.title)}</title>`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${escape(r.title)}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${site}/${r.path}"`);
  if (r.description) {
    html = html
      .replace(/(<meta name="description" content=")[^"]*"/, `$1${escape(r.description)}"`)
      .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${escape(r.description)}"`);
  }
  mkdirSync(`dist/${r.path}`, { recursive: true });
  writeFileSync(`dist/${r.path}/index.html`, html);
}
console.log(`Wrote ${routes.length} route pages`);
