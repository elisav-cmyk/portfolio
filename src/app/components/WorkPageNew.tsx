import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import imgImageEthicalAiResearchTool from "../../assets/jstor-research-card.jpg";
import imgImageAndroidRazrFoldable from "figma:asset/a9d3a2304cfdb51608b897fa52985cf480028150.png";
import imgImageOnePlatformIntegration from "figma:asset/40bf45078ad84575a1178136d73d285002fdf9bc.webp";
import imgImageAILibrary from "figma:asset/8cf3e6ec6a19346c1adefa9bf4dfc6e4967bbb2c.png";
import imgImageGrubhubDirect from "figma:asset/e1e956d921c735f672569fc508b766a5bbeb7877.webp";
import imgImageEcosystemInfrastructure from "figma:asset/774fe7984e90b868f7bef781139dec0d74a4f332.webp";
import imgCameraIntro from "figma:asset/camera-intro.webp";
import imgMotoCard from "../../assets/moto-app.jpg";
import imgMobileParity from "../../assets/jstor-mobile.webp";
import { CASE_STUDIES, caseStudyPath, isPlainClick } from "../data/caseStudies";

interface WorkPageProps {
  pageVariants: any;
  pageTransition: any;
  activeCaseStudy: string | null;
  onCaseStudyClick: (id: string) => void;
  caseStudyComponent?: React.ReactNode;
}

interface ProjectCardProps {
  image: string;
  tag: string;
  year: string;
  title: string;
  company: string;
  caseStudyId: string;
  imagePosition?: string;
  onCaseStudyClick: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  tag,
  year,
  title,
  company,
  caseStudyId,
  imagePosition,
  onCaseStudyClick,
}) => (
  <a
    href={caseStudyPath(caseStudyId)}
    data-case-card
    onClick={(e) => {
      if (!isPlainClick(e)) return;
      e.preventDefault();
      onCaseStudyClick(caseStudyId);
    }}
    className="group bg-card rounded-[2px] border border-border overflow-hidden flex flex-col cursor-pointer hover:border-primary transition-colors duration-150 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-primary"
  >
    {/* Image */}
    <div className="h-[192px] overflow-hidden">
      <img
        src={image}
        alt=""
        className={`w-full h-full object-cover ${imagePosition || "object-center"}`}
      />
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col gap-3">
      {/* Tag and Year */}
      <div className="flex items-center justify-between">
        <div className="bg-secondary px-3 py-1 rounded-full">
          <span className="font-body font-medium text-secondary-foreground text-label">
            {tag}
          </span>
        </div>
        <span className="font-body text-muted-foreground text-label">
          {year}
        </span>
      </div>

      {/* Title */}
      <h2 className="font-body font-medium text-foreground text-title">
        {title}
      </h2>

      {/* Company */}
      <p className="font-body text-muted-foreground text-small">
        {company}
      </p>

      {/* View Case Study Link */}
      <div className="flex items-center justify-between w-full">
        <span className="font-body text-primary group-hover:underline text-small">
          View Case Study
        </span>
        <ChevronRight className="text-primary transition-transform duration-150 group-hover:translate-x-0.5" size={16} aria-hidden="true" />
      </div>
    </div>
  </a>
);

// The last projects are a compact list: same links, less visual weight,
// so the stronger stories above lead.
const ProjectRow: React.FC<ProjectCardProps> = ({
  title,
  tag,
  year,
  company,
  caseStudyId,
  onCaseStudyClick,
}) => (
  <a
    href={caseStudyPath(caseStudyId)}
    data-case-card
    onClick={(e) => {
      if (!isPlainClick(e)) return;
      e.preventDefault();
      onCaseStudyClick(caseStudyId);
    }}
    className="group flex flex-wrap items-center gap-x-6 gap-y-1 py-4 border-t border-border last:border-b hover:bg-secondary/40 transition-colors duration-150 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-primary"
  >
    <h2 className="font-body font-medium text-foreground text-title flex-1 min-w-[16rem]">{title}</h2>
    <span className="font-body text-muted-foreground text-small">
      {tag} · {company} · {year}
    </span>
    <ChevronRight className="text-primary transition-transform duration-150 group-hover:translate-x-0.5" size={16} aria-hidden="true" />
  </a>
);

// Arrow keys move focus between cards in reading order. Up and Down jump a
// full row. Home and End go to the first and last card. Tab still works too.
const handleGridKeys = (e: React.KeyboardEvent<HTMLDivElement>) => {
  const keys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"];
  if (!keys.includes(e.key)) return;
  const cards = Array.from(
    e.currentTarget.querySelectorAll<HTMLAnchorElement>("[data-case-card]"),
  );
  const index = cards.indexOf(document.activeElement as HTMLAnchorElement);
  if (index === -1) return;
  const firstRowTop = cards[0].offsetTop;
  const columns = Math.max(1, cards.filter((c) => c.offsetTop === firstRowTop).length);
  const moves: Record<string, number> = {
    ArrowLeft: index - 1,
    ArrowRight: index + 1,
    ArrowUp: index - columns,
    ArrowDown: index + columns,
    Home: 0,
    End: cards.length - 1,
  };
  const target = moves[e.key];
  if (target < 0 || target >= cards.length) return;
  e.preventDefault();
  cards[target].focus();
};

export const WorkPageContent: React.FC<WorkPageProps> = ({
  pageVariants,
  pageTransition,
  activeCaseStudy,
  onCaseStudyClick,
  caseStudyComponent,
}) => {
  if (activeCaseStudy && caseStudyComponent) {
    return <>{caseStudyComponent}</>;
  }

  const projectDetails = [
    {
      image: imgImageEthicalAiResearchTool,
      tag: "AI Search",
      year: "2023-2026", title: "AI That Shows Its Sources",
      company: "The JSTOR Research Tool: ask, discover and validate every answer",
      caseStudyId: "ethical-ai",
    },
    {
      image: imgImageAILibrary,
      tag: "AI Tools",
      year: "2022-Present",
      title: "Archives in Hours, Not Weeks",
      company: "JSTOR Seeklight: describing archives in hours, not weeks",
      caseStudyId: "ai-library",
    },
    {
      image: imgImageAndroidRazrFoldable,
      tag: "Devices",
      year: "2016-2020",
      title: "Bringing Back the RAZR",
      company: "The Android RAZR: reimagining an icon for the smartphone age",
      caseStudyId: "razr-foldable",
    },
    {
      image: imgMobileParity,
      tag: "Mobile",
      year: "2021-2025",
      title: "Taking JSTOR Mobile",
      company: "JSTOR on phones, as someone's main screen or a second one",
      caseStudyId: "mobile-parity",
    },
    {
      image: imgImageEcosystemInfrastructure,
      tag: "Design Systems",
      year: "2022-2025",
      title: "Reactivating Pharos",
      company: "Pharos, One Admin and accessibility across JSTOR",
      caseStudyId: "ecosystem-infrastructure",
      imagePosition: "object-top",
    },
    {
      image: imgImageOnePlatformIntegration,
      tag: "Platform",
      year: "2023-2024",
      title: "When the Gallery Met the Library",
      company: "Moving faculty's teaching workflows without losing them",
      caseStudyId: "one-platform",
    },
    {
      image: imgCameraIntro,
      tag: "Camera",
      year: "2019-2020",
      title: "Starting the Camera Over",
      company: "Motorola's Camera app, rebuilt so it could grow",
      caseStudyId: "camera-redesign",
    },
    {
      image: imgMotoCard,
      tag: "Devices",
      year: "2016-2020", title: "Turning Hidden Features into Daily Habits",
      company: "The Moto app: from a list of settings to a reason to explore",
      caseStudyId: "moto-app",
    },
    {
      image: imgImageGrubhubDirect,
      tag: "Local Commerce",
      year: "2020-2021",
      title: "Restaurants Own Their Orders",
      company: "Grubhub Direct: commission-free ordering for local restaurants",
      caseStudyId: "grubhub-direct",
      imagePosition: "object-top",
    },
  ];

  // Order comes from CASE_STUDIES, strongest first. The first row is featured.
  const orderedProjects = CASE_STUDIES.map(
    (c) => projectDetails.find((p) => p.caseStudyId === c.id)!,
  ).filter(Boolean);
  const featuredProjects = orderedProjects.slice(0, 3);
  const additionalProjects = orderedProjects.slice(3, 6);
  const listedProjects = orderedProjects.slice(6);

  return (
    <motion.div
      className="bg-background marketing-grid"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="py-16">
        {/* Header */}
        <div className="mb-12 max-w-[75ch]">
          <h1 className="mb-2 font-heading text-foreground text-display uppercase tracking-caps">
            Work
          </h1>
          <p className="font-body text-muted-foreground text-lead">
            Nine projects across JSTOR, Grubhub and Motorola. Each opens with one line on what my team did and what changed.
          </p>
        </div>

        <div onKeyDown={handleGridKeys}>
        {/* Featured Projects */}
        <div className="mb-8">
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.caseStudyId}
                {...project}
                onCaseStudyClick={onCaseStudyClick}
              />
            ))}
          </div>
        </div>

        {/* Additional Projects */}
        <div>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalProjects.map((project, index) => (
              <ProjectCard
                key={project.caseStudyId}
                {...project}
                onCaseStudyClick={onCaseStudyClick}
              />
            ))}
          </div>
        </div>

        {/* More projects, as a compact list */}
        <div className="mt-16">
          <p className="mb-2 font-body font-medium text-muted-foreground text-label uppercase tracking-caps">
            More projects
          </p>
          <div>
            {listedProjects.map((project) => (
              <ProjectRow
                key={project.caseStudyId}
                {...project}
                onCaseStudyClick={onCaseStudyClick}
              />
            ))}
          </div>
        </div>
        </div>
      </div>
    </motion.div>
  );
};
