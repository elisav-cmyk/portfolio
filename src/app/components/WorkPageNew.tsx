import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import imgImageEthicalAiResearchTool from "../../assets/jstor-research-card.jpg";
import imgImageAndroidRazrFoldable from "figma:asset/a9d3a2304cfdb51608b897fa52985cf480028150.png";
import imgImageOnePlatformIntegration from "figma:asset/40bf45078ad84575a1178136d73d285002fdf9bc.png";
import imgImageAILibrary from "figma:asset/8cf3e6ec6a19346c1adefa9bf4dfc6e4967bbb2c.png";
import imgImageGrubhubDirect from "figma:asset/e1e956d921c735f672569fc508b766a5bbeb7877.png";
import imgImageEcosystemInfrastructure from "figma:asset/774fe7984e90b868f7bef781139dec0d74a4f332.png";
import imgCameraIntro from "figma:asset/camera-intro.png";
import imgMotoCard from "../../assets/moto-app.jpg";
import imgMobileParity from "../../assets/jstor-mobile.png";
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
    className="bg-card rounded-[10px] shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)] overflow-hidden flex flex-col cursor-pointer hover:shadow-lg transition-shadow focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-primary"
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
          <span className="font-['Spline_Sans'] font-medium text-[0.6875rem] leading-[1rem] tracking-[0.03125rem] text-secondary-foreground">
            {tag}
          </span>
        </div>
        <span className="font-['Spline_Sans'] text-[0.75rem] leading-[1rem] text-muted-foreground">
          {year}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-['Spline_Sans'] text-[1.375rem] leading-[2rem] text-foreground">
        {title}
      </h3>

      {/* Company */}
      <p className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-muted-foreground">
        {company}
      </p>

      {/* View Case Study Link */}
      <div className="flex items-center justify-between w-full group">
        <span className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-primary group-hover:underline">
          View Case Study
        </span>
        <ChevronRight className="text-primary" size={16} aria-hidden="true" />
      </div>
    </div>
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
      tag: "AI & Ethics",
      year: "2023-2026", title: "Ethical AI Research Tool",
      company: "JSTOR",
      caseStudyId: "ethical-ai",
    },
    {
      image: imgImageAILibrary,
      tag: "AI & Ethics",
      year: "2023-2025",
      title: "AI-Assisted Library Transformation",
      company: "Transforming unprocessed archival backlogs",
      caseStudyId: "ai-library",
    },
    {
      image: imgImageAndroidRazrFoldable,
      tag: "Hardware/Software",
      year: "2016-2020",
      title: "Android RAZR Foldable",
      company: "Motorola",
      caseStudyId: "razr-foldable",
    },
    {
      image: imgMobileParity,
      tag: "Platform Strategy",
      year: "2021-2025",
      title: "Designing for Mobile Parity",
      company: "JSTOR",
      caseStudyId: "mobile-parity",
    },
    {
      image: imgImageEcosystemInfrastructure,
      tag: "Platform Strategy",
      year: "2023-2024",
      title: "Ecosystem & Design Infrastructure",
      company: "Pharos, One Admin & Accessibility",
      caseStudyId: "ecosystem-infrastructure",
    },
    {
      image: imgImageOnePlatformIntegration,
      tag: "Platform Strategy",
      year: "2023-2024",
      title: "One Platform Integration",
      company: "JSTOR",
      caseStudyId: "one-platform",
    },
    {
      image: imgCameraIntro,
      tag: "Hardware/Software",
      year: "2020",
      title: "Camera Redesign",
      company: "Motorola",
      caseStudyId: "camera-redesign",
    },
    {
      image: imgMotoCard,
      tag: "Brand & Craft",
      year: "2016-2020", title: "Moto App",
      company: "Motorola",
      caseStudyId: "moto-app",
    },
    {
      image: imgImageGrubhubDirect,
      tag: "Platform Strategy",
      year: "2021",
      title: "Grubhub Direct",
      company: "Scaling A Low-code Platform",
      caseStudyId: "grubhub-direct",
      imagePosition: "object-top",
    },
  ];

  // Order comes from CASE_STUDIES, strongest first. The first row is featured.
  const orderedProjects = CASE_STUDIES.map(
    (c) => projectDetails.find((p) => p.caseStudyId === c.id)!,
  ).filter(Boolean);
  const featuredProjects = orderedProjects.slice(0, 3);
  const additionalProjects = orderedProjects.slice(3);

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
          <h1 className="mb-2 font-['EB_Garamond'] text-[2rem] leading-[2.5rem] text-foreground">
            WORK
          </h1>
          <p className="font-['Spline_Sans'] text-[1.25rem] leading-[1.75rem] text-muted-foreground">
            Selected case studies showcasing leadership in product design, team building, and strategic innovation
          </p>
        </div>

        <div onKeyDown={handleGridKeys}>
        {/* Featured Projects */}
        <div className="mb-16">
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
        </div>
      </div>
    </motion.div>
  );
};
