// Single source of truth for case study order, titles and URLs.
// The Work page, the sticky case study nav, the case study footer and
// the build step that creates /work/<id>/index.html all read this list.
// Order: strongest to weakest for the Director, UX, Real World Journeys role.
export interface CaseStudyMeta {
  id: string;
  title: string;
  company: string;
}

export const CASE_STUDIES: CaseStudyMeta[] = [
  { id: "ethical-ai", title: "AI That Shows Its Sources", company: "JSTOR" },
  { id: "grubhub-direct", title: "Giving Restaurants Their Customers Back", company: "Grubhub" },
  { id: "razr-foldable", title: "Bringing Back the RAZR", company: "Motorola" },
  { id: "mobile-parity", title: "Research on the Go", company: "JSTOR" },
  { id: "ai-library", title: "Unlocking Hidden Archives", company: "JSTOR" },
  { id: "camera-redesign", title: "Starting the Camera Over", company: "Motorola" },
  { id: "one-platform", title: "Integrating Artstor into JSTOR", company: "JSTOR" },
  { id: "ecosystem-infrastructure", title: "Quality That Outlasts Any Project", company: "JSTOR" },
  { id: "moto-app", title: "Teaching People What Their Phone Can Do", company: "Motorola" },
];

export const PAGES = ["home", "work", "leadership", "impact"] as const;

export const caseStudyPath = (id: string) => `/work/${id}`;

export const pathFor = (page: string, caseStudy: string | null) => {
  if (page === "work" && caseStudy) return caseStudyPath(caseStudy);
  return page === "home" ? "/" : `/${page}`;
};

// Reads "/work/ethical-ai" style paths. Unknown paths fall back to home.
export const parsePath = (
  pathname: string,
): { page: string; caseStudy: string | null } => {
  const parts = pathname.split("/").filter(Boolean);
  // About was merged into Leadership. Old /about links land there.
  const page = parts[0] === "about" ? "leadership" : parts[0] || "home";
  if (!(PAGES as readonly string[]).includes(page)) {
    return { page: "home", caseStudy: null };
  }
  if (page === "work" && parts[1]) {
    const found = CASE_STUDIES.find((c) => c.id === parts[1]);
    return { page: "work", caseStudy: found ? found.id : null };
  }
  return { page, caseStudy: null };
};

export const neighbors = (id: string) => {
  const i = CASE_STUDIES.findIndex((c) => c.id === id);
  const n = CASE_STUDIES.length;
  return {
    previous: CASE_STUDIES[(i - 1 + n) % n],
    next: CASE_STUDIES[(i + 1) % n],
  };
};

// Lets a normal click stay in the app while Cmd/Ctrl/Shift/middle click
// still opens the link in a new tab or window.
export const isPlainClick = (e: React.MouseEvent) =>
  e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
