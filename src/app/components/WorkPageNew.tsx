import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import imgImageEthicalAiResearchTool from "figma:asset/6d077c109b68cf2442c73aa8e6bea3bec069e4df.png";
import imgImageAndroidRazrFoldable from "figma:asset/a9d3a2304cfdb51608b897fa52985cf480028150.png";
import imgImageOnePlatformIntegration from "figma:asset/40bf45078ad84575a1178136d73d285002fdf9bc.png";
import imgImageAILibrary from "figma:asset/8cf3e6ec6a19346c1adefa9bf4dfc6e4967bbb2c.png";
import imgImageGrubhubDirect from "figma:asset/e1e956d921c735f672569fc508b766a5bbeb7877.png";
import imgImageEcosystemInfrastructure from "figma:asset/774fe7984e90b868f7bef781139dec0d74a4f332.png";

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
  onCaseStudyClick: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  tag,
  year,
  title,
  company,
  caseStudyId,
  onCaseStudyClick,
}) => (
  <div
    onClick={() => onCaseStudyClick(caseStudyId)}
    className="bg-card rounded-[10px] shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)] overflow-hidden flex flex-col cursor-pointer hover:shadow-lg transition-shadow"
  >
    {/* Image */}
    <div className="h-[192px] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-top"
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
        <ChevronRight className="text-primary" size={16} />
      </div>
    </div>
  </div>
);

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

  const featuredProjects = [
    {
      image: imgImageEthicalAiResearchTool,
      tag: "AI & Ethics",
      year: "2023-2025",
      title: "Ethical AI Research Tool",
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
      image: imgImageOnePlatformIntegration,
      tag: "Platform Strategy",
      year: "2023-2024",
      title: "One Platform Integration",
      company: "JSTOR",
      caseStudyId: "one-platform",
    },
  ];

  const additionalProjects = [
    {
      image: imgImageEcosystemInfrastructure,
      tag: "Platform Strategy",
      year: "2023-2024",
      title: "Ecosystem & Design Infrastructure",
      company: "Pharos, One Admin, & Digital Stewardship",
      caseStudyId: "ecosystem-infrastructure",
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
      image: imgImageGrubhubDirect,
      tag: "Platform Strategy",
      year: "2021",
      title: "Grubhub Direct",
      company: "Scaling A Low-code Platform",
      caseStudyId: "grubhub-direct",
    },
  ];

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

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
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
                key={index}
                {...project}
                onCaseStudyClick={onCaseStudyClick}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
