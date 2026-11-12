// Runs after "vite build". GitHub Pages only serves files that exist, so
// this writes a copy of dist/index.html for every page and case study
// (for example dist/work/ethical-ai/index.html). Each copy gets its own
// title and link-preview tags, so a shared link shows the right name.
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";

const source = readFileSync("src/app/data/caseStudies.ts", "utf8");
const studies = [
  ...source.matchAll(/\{ id: "([^"]+)", title: "([^"]+)", company: "([^"]+)" \}/g),
].map(([, id, title, company]) => ({ id, title, company }));
if (studies.length === 0) throw new Error("No case studies found");

const base = readFileSync("dist/index.html", "utf8");
const site = "https://elisavargas.com";

// Structured data (schema.org JSON-LD) so search engines and AI tools can
// read who Elisa is and what each case study covers. Each case study's
// years and "At a glance" line are read from its component file.
const caseDir = "src/app/components/case-studies";
const readField = (text, name) => {
  const m = text.match(new RegExp(`${name}:\\s*(["'])((?:\\\\.|(?!\\1).)*)\\1`));
  return m ? m[2].replace(/\\(["'])/g, "$1") : null;
};
const details = {};
for (const file of readdirSync(caseDir)) {
  const text = readFileSync(`${caseDir}/${file}`, "utf8");
  const title = readField(text, "title");
  if (title) details[title] = { years: readField(text, "years"), glance: readField(text, "glance") };
}
const orgs = {
  JSTOR: { "@type": "Organization", name: "JSTOR", url: "https://www.jstor.org", parentOrganization: { "@type": "Organization", name: "ITHAKA", url: "https://www.ithaka.org" } },
  Grubhub: { "@type": "Organization", name: "Grubhub", url: "https://www.grubhub.com" },
  Motorola: { "@type": "Organization", name: "Motorola Mobility", url: "https://www.motorola.com" },
};
const personId = `${site}/#elisa`;
const person = {
  "@type": "Person",
  "@id": personId,
  name: "Elisa Vargas",
  url: `${site}/`,
  jobTitle: "Director, Product Design",
  worksFor: orgs.JSTOR,
  email: "mailto:elisa.vargas@gmail.com",
  sameAs: ["https://linkedin.com/in/elisavargas/"],
  knowsAbout: ["Product design leadership", "AI search", "LLM experiences", "Accessibility", "Design systems", "Mobile and foldable devices"],
};
const website = { "@type": "WebSite", "@id": `${site}/#site`, url: `${site}/`, name: "Elisa Vargas", author: { "@id": personId } };
const caseWork = (s) => {
  const d = details[s.title] || {};
  const [from, to] = (d.years || "").split("-");
  return {
    "@type": "CreativeWork",
    "@id": `${site}/work/${s.id}#case-study`,
    genre: "Case study",
    name: s.title,
    url: `${site}/work/${s.id}`,
    ...(d.glance && { description: d.glance }),
    ...(from && { temporalCoverage: `${from}/${/^\d{4}$/.test(to) ? to : ".."}` }),
    creator: { "@id": personId },
    ...(orgs[s.company] && { sourceOrganization: orgs[s.company] }),
    isPartOf: { "@id": `${site}/#site` },
  };
};
const graphFor = (path) => {
  const url = `${site}/${path}`;
  if (path === "") return [person, website, { "@type": "WebPage", url, name: "Elisa Vargas | Product Design Leader", about: { "@id": personId }, isPartOf: { "@id": `${site}/#site` } }];
  if (path === "leadership") return [person, website, { "@type": "ProfilePage", url, name: "Leadership", mainEntity: { "@id": personId }, isPartOf: { "@id": `${site}/#site` } }];
  if (path === "work") return [person, website, { "@type": "CollectionPage", url, name: "Work", about: { "@id": personId }, hasPart: studies.map(caseWork), isPartOf: { "@id": `${site}/#site` } }];
  if (path === "impact") return [person, website, { "@type": "WebPage", url, name: "Impact", about: { "@id": personId }, isPartOf: { "@id": `${site}/#site` } }];
  const s = studies.find((x) => `work/${x.id}` === path);
  return [person, website, caseWork(s)];
};
const withLd = (html, path) =>
  html.replace(
    "</head>",
    `  <script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graphFor(path) }).replace(/</g, "\\u003c")}</script>\n  </head>`,
  );
writeFileSync("dist/index.html", withLd(base, ""));
const escape = (t) =>
  t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const routes = [
  { path: "work", title: "Work | Elisa Vargas" },
  { path: "leadership", title: "Leadership | Elisa Vargas" },
  { path: "impact", title: "Impact | Elisa Vargas" },
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
  writeFileSync(`dist/${r.path}/index.html`, withLd(html, r.path));
}
console.log(`Wrote ${routes.length} route pages`);
