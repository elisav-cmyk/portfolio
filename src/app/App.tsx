import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Download,
  Mail,
  MapPin,
  Award,
  Users,
  TrendingUp,
  Globe,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { LinkedinFilled } from "./components/LinkedinFilled";
import { Footer } from "./components/Footer";
import { AboutPageContent } from "./components/AboutPageNew";
import { ImpactPageContent } from "./components/ImpactPageNew";
import { WorkPageContent } from "./components/WorkPageNew";
import { LeadershipPageContent } from "./components/LeadershipPageNew";
import { EthicalAI } from "./components/case-studies/EthicalAI";
import { RAZRFoldable } from "./components/case-studies/RAZRFoldable";
import { OnePlatform } from "./components/case-studies/OnePlatform";
import { AILibrary } from "./components/case-studies/AILibrary";
import { GrubhubDirect } from "./components/case-studies/GrubhubDirect";
import { EcosystemInfrastructure } from "./components/case-studies/EcosystemInfrastructure";
import heroImage from "figma:asset/6d077c109b68cf2442c73aa8e6bea3bec069e4df.png";
import onePlatformImage from "figma:asset/40bf45078ad84575a1178136d73d285002fdf9bc.png";
import razrHeroImage from "figma:asset/a9d3a2304cfdb51608b897fa52985cf480028150.png";
import aiLibraryImage from "figma:asset/8cf3e6ec6a19346c1adefa9bf4dfc6e4967bbb2c.png";

const PortfolioWireframes = () => {
  const [activePage, setActivePage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workFilter, setWorkFilter] = useState("company");
  const [activeCaseStudy, setActiveCaseStudy] = useState<
    string | null
  >(null);
  const [scrollTarget, setScrollTarget] = useState<
    string | null
  >(null);
  const [showHeaderTitle, setShowHeaderTitle] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);
  const jstorSectionRef = useRef<HTMLDivElement>(null);
  const motorolaSectionRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const featuredProjectsRef = useRef<HTMLDivElement>(null);
  const globalOpsRef = useRef<HTMLDivElement>(null);
  const strategicDecisionRef = useRef<HTMLDivElement>(null);
  const crossFunctionalRef = useRef<HTMLDivElement>(null);
  const translatingLevelsRef = useRef<HTMLDivElement>(null);
  const developingLeadersRef = useRef<HTMLDivElement>(null);
  const operationalExcellenceRef = useRef<HTMLDivElement>(null);
  const empoweringAutonomyRef = useRef<HTMLDivElement>(null);
  const buildingTeamsRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);

  // Scroll detection for header title visibility on home page
  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll detection on home page
      if (activePage !== "home" || !heroSectionRef.current) {
        setShowHeaderTitle(true);
        return;
      }

      // Get the hero section's bounding box
      const heroRect =
        heroSectionRef.current.getBoundingClientRect();
      // Check if the hero title area (top portion) has scrolled out of view
      // We consider it out of view when the top 150px of hero section is past the viewport
      const heroTitleScrolledOut = heroRect.top < -150;

      setShowHeaderTitle(heroTitleScrolledOut);
    };

    handleScroll(); // Check initial state
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [activePage]);

  // Smooth scroll to top when page changes
  useEffect(() => {
    if (activePage === "leadership" && leadershipRef.current) {
      // For leadership page, scroll to show space above the header
      const navHeight = 140; // Navigation height + padding to prevent title cutoff
      const element = leadershipRef.current;
      const elementPosition =
        element.getBoundingClientRect().top +
        window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else if (contentRef.current) {
      // For all other pages (work, impact, about), add offset to show H1 below sticky header
      const navHeight = 140; // Navigation height + padding to prevent title cutoff
      const element = contentRef.current;
      const elementPosition =
        element.getBoundingClientRect().top +
        window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [activePage, activeCaseStudy]);

  // Handle scrolling to specific sections
  useEffect(() => {
    if (!scrollTarget) return;

    const scrollToSection = () => {
      let targetElement: HTMLElement | null = null;
      let targetRef: React.RefObject<HTMLDivElement> | null =
        null;

      // Check if it's a section on the leadership page (using IDs)
      if (activePage === "leadership") {
        targetElement = document.getElementById(scrollTarget);
      } else {
        // For other pages, use refs
        switch (scrollTarget) {
          case "jstor":
            targetRef = jstorSectionRef;
            break;
          case "motorola":
            targetRef = motorolaSectionRef;
            break;
          case "testimonials":
            targetRef = testimonialsRef;
            break;
          case "featured-projects":
            targetRef = featuredProjectsRef;
            break;
          case "empowering-autonomy":
            targetElement = document.getElementById(
              "developing-leaders",
            );
            break;
          case "strategic-decision":
            targetElement = document.getElementById(
              "strategic-decision",
            );
            break;
          case "building-teams":
            targetElement = document.getElementById(
              "global-operations",
            );
            break;
          case "cross-functional":
            targetElement = document.getElementById(
              "cross-functional",
            );
            break;
          case "translating-levels":
            targetElement =
              document.getElementById("translating");
            break;
          case "operational-excellence":
            targetElement = document.getElementById(
              "operational-excellence",
            );
            break;
          case "partners-say":
            targetElement =
              document.getElementById("partners-say");
            break;
        }
      }

      // Scroll to the element (either from ref or from getElementById)
      if (targetElement) {
        const navHeight = 100; // Navigation height + some padding
        const elementPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        setScrollTarget(null);
      } else if (targetRef?.current) {
        const navHeight = 100; // Navigation height + some padding
        const element = targetRef.current;
        const elementPosition =
          element.getBoundingClientRect().top +
          window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        setScrollTarget(null);
      }
    };

    // Delay to ensure the page has rendered
    const timer = setTimeout(scrollToSection, 100);
    return () => clearTimeout(timer);
  }, [scrollTarget, activePage]);

  // Navigation handlers for footer links
  const navigateToJSTOR = () => {
    setActiveCaseStudy(null);
    setWorkFilter("company");
    setActivePage("work");
    setScrollTarget("jstor");
  };

  const navigateToMotorola = () => {
    setActiveCaseStudy(null);
    setWorkFilter("company");
    setActivePage("work");
    setScrollTarget("motorola");
  };

  const navigateToTestimonials = () => {
    setActivePage("leadership");
    setScrollTarget("partners-say");
  };

  const navigateToFeaturedProjects = () => {
    setActiveCaseStudy(null);
    setActivePage("work");
    setScrollTarget("featured-projects");
  };

  const navigateToEmpoweringAutonomy = () => {
    setActivePage("leadership");
    setScrollTarget("developing-leaders");
  };

  const navigateToStrategicDecision = () => {
    setActivePage("leadership");
    setScrollTarget("strategic-decision");
  };

  const navigateToBuildingTeams = () => {
    setActivePage("leadership");
    setScrollTarget("global-operations");
  };

  const navigateToCrossFunctional = () => {
    setActivePage("leadership");
    setScrollTarget("cross-functional");
  };

  const navigateToTranslatingLevels = () => {
    setActivePage("leadership");
    setScrollTarget("translating");
  };

  const navigateToOperationalExcellence = () => {
    setActivePage("leadership");
    setScrollTarget("operational-excellence");
  };

  const navigateToPartnersSay = () => {
    setActivePage("leadership");
    setScrollTarget("partners-say");
  };

  // Function to scroll to a section on the current page
  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
  ) => {
    if (ref?.current) {
      const navHeight = 140; // Navigation height + padding
      const element = ref.current;
      const elementPosition =
        element.getBoundingClientRect().top +
        window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Function to navigate to case study
  const handleCaseStudyClick = (caseStudyId: string) => {
    setActiveCaseStudy(caseStudyId);
    setActivePage("work");
  };

  // Function to go back from case study to work page
  const handleBackToWork = () => {
    setActiveCaseStudy(null);
  };

  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.3,
  };

  // Stagger children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.4,
      },
    },
  };

  const pages = [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "leadership", label: "Leadership" },
    { id: "impact", label: "Impact" },
    { id: "about", label: "About" },
  ];

  const Navigation = () => (
    <div className="border-b-2 border-border bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="min-w-[200px]">
            <motion.div
              initial={false}
              animate={{
                opacity: showHeaderTitle ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              style={{
                pointerEvents: showHeaderTitle
                  ? "auto"
                  : "none",
              }}
            >
              <div className="font-['EB_Garamond'] text-[clamp(1.5rem,1.5rem,1.5rem)] font-normal leading-[32px] tracking-normal text-foreground">
                ELISA VARGAS
              </div>
              <div className="font-['Spline_Sans'] text-[0.875rem] font-medium leading-[20px] tracking-[0.1px] text-muted-foreground">
                Product Design Director
              </div>
            </motion.div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => {
                  if (page.id === "work") {
                    setActiveCaseStudy(null);
                  }
                  setActivePage(page.id);
                }}
                className={`font-['Spline_Sans'] text-[1rem] font-medium leading-[24px] tracking-[0.15px] transition-colors ${
                  activePage === page.id
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {page.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center ml-auto">
            <a
              href="https://linkedin.com/in/elisavargas/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 font-['Spline_Sans'] text-[0.875rem] font-medium leading-[20px] tracking-[0.1px] border-2 border-border rounded-[10px] hover:bg-muted transition-colors"
            >
              <LinkedinFilled size={16} />
              LinkedIn
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => {
                  if (page.id === "work") {
                    setActiveCaseStudy(null);
                  }
                  setActivePage(page.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-[10px] ${
                  activePage === page.id
                    ? "bg-secondary text-primary"
                    : "text-foreground"
                }`}
              >
                {page.label}
              </button>
            ))}
            <div className="flex gap-2 pt-2">
              <a
                href="https://linkedin.com/in/elisavargas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm border-2 border-border rounded-[10px]"
              >
                <LinkedinFilled size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const handleFooterNavigation = (page: string) => {
    setActivePage(page);
    setActiveCaseStudy(null);
  };

  const HomePage = () => (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Hero Section */}
      <div
        ref={heroSectionRef}
        className="bg-white border-b-2 border-border"
      >
        <div className="marketing-grid py-12 sm:py-16 lg:py-20 text-center">
          <div className="max-w-[75ch] mx-auto">
            <h2 className="mb-4 font-['EB_Garamond'] text-[clamp(2rem,1.75rem+1.75vmin,2.5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground">
              ELISA VARGAS
            </h2>
            <p className="font-['Spline_Sans'] text-[1rem] font-medium leading-[1.5] tracking-normal text-muted-foreground mb-6">
              Product Design Director | Strategic Design Leader
            </p>
            <p className="text-foreground mb-6">
              Leading Product Design at JSTOR (ITHAKA)
              <br />
              111M+ annual users | 14,000 libraries | 194
              countries
            </p>
            <p className="text-foreground mb-8">
              Previously: Head of UX, Motorola Mobility
              (2017-2020) 33 designers across 6 global studios
              <br />
              and Brazil Studio Director (2016-2017) in $9.78B
              operations
              <br />
              Product Design Director, Grubhub Restaurant &amp;
              Driver Teams
            </p>
          </div>

          {/* Stats Bar - Responsive */}
          <motion.div
            className="bg-secondary border-2 border-secondary rounded-[10px] p-4 sm:p-6 lg:p-7 max-w-4xl mx-auto mb-8"
            style={{
              boxShadow:
                "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-2"
              >
                <div className="font-['EB_Garamond'] text-3xl sm:text-4xl lg:text-[45px] leading-tight text-primary">
                  20+
                </div>
                <div className="text-xs font-medium text-primary tracking-wide">
                  Years of Experience
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-2"
              >
                <div className="font-['EB_Garamond'] text-3xl sm:text-4xl lg:text-[45px] leading-tight text-primary">
                  111M+
                </div>
                <div className="text-xs font-medium text-primary tracking-wide">
                  Annual Users
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-2"
              >
                <div className="font-['EB_Garamond'] text-3xl sm:text-4xl lg:text-[45px] leading-tight text-primary">
                  6
                </div>
                <div className="text-xs font-medium text-primary tracking-wide">
                  Global Studios
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-2"
              >
                <div className="font-['EB_Garamond'] text-3xl sm:text-4xl lg:text-[45px] leading-tight text-primary">
                  ~1B
                </div>
                <div className="text-xs font-medium text-primary tracking-wide">
                  Devices Shipped
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-2 col-span-2 sm:col-span-1"
              >
                <div className="font-['EB_Garamond'] text-3xl sm:text-4xl lg:text-[45px] leading-tight text-primary">
                  Top 1%
                </div>
                <div className="text-xs font-medium text-primary tracking-wide">
                  Accessibility
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="flex gap-4 justify-center flex-wrap">
            <motion.button
              onClick={() => setActivePage("work")}
              className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-[10px] hover:bg-primary/90 transition-colors"
              style={{
                boxShadow:
                  "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
            >
              View Case Studies
            </motion.button>
            <motion.button
              onClick={() => setActivePage("leadership")}
              className="px-6 sm:px-8 py-3 bg-white rounded-[10px] hover:bg-muted transition-colors"
              style={{
                boxShadow:
                  "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
            >
              Leadership Approach
            </motion.button>
          </div>
        </div>
      </div>

      {/* Featured Work */}
      <div className="bg-surface-variant">
        <div className="marketing-grid py-16">
          <motion.h3
            className="text-center mb-12 font-['EB_Garamond'] text-[clamp(1.75rem,1.625rem+0.875vmin,2rem)] font-normal leading-[1.25] tracking-normal text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            SIGNATURE WORK
          </motion.h3>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: "Ethical AI Research Tool",
                subtitle: "Building Trust in AI",
                metric: "3× user engagement",
                company: "JSTOR",
                id: "ethical-ai",
              },
              {
                title: "AI-Assisted Library Transformation",
                subtitle: "Transforming archival workflows",
                metric: "Strategic AI implementation",
                company: "JSTOR",
                id: "ai-library",
                image: aiLibraryImage,
              },
              {
                title: "One Platform Integration",
                subtitle: "Migrating users at scale",
                metric: "Risk mitigation success",
                company: "JSTOR",
                id: "one-platform",
                image: onePlatformImage,
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                onClick={() => handleCaseStudyClick(project.id)}
                className="bg-white rounded-[10px] overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                style={{
                  boxShadow:
                    "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
                }}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image || heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-primary mb-2">
                    {project.company}
                  </div>
                  <div className="text-xl mb-2">
                    {project.title}
                  </div>
                  <div className="text-foreground text-sm mb-4">
                    {project.subtitle}
                  </div>
                  <div className="text-primary text-sm">
                    {project.metric}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Impact Highlight */}
      <div className="bg-primary border-t-2 border-ring border-b-2 border-ring">
        <div className="marketing-grid py-16 text-center">
          <h3 className="mb-12 text-white font-['EB_Garamond'] text-[clamp(1.75rem,1.625rem+0.875vmin,2rem)] font-normal leading-[1.25] tracking-normal">
            IMPACT AT SCALE
          </h3>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-2 items-center">
              <p className="font-['EB_Garamond'] text-[clamp(2.5rem,2rem+3.5vmin,4rem)] font-normal leading-[1.1] tracking-[-0.02em] text-white mb-2">
                98%
              </p>
              <p className="font-['Spline_Sans'] text-[1rem] font-normal leading-[1.5] tracking-normal text-primary-foreground">
                Accessibility improvement
              </p>
              <p className="font-['Spline_Sans'] text-[0.875rem] font-normal leading-[1.4] tracking-[0.01em] text-white mt-2">
                Led accessibility transformation through
                strategic hiring and team empowerment
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="font-['EB_Garamond'] text-[clamp(2.5rem,2rem+3.5vmin,4rem)] font-normal leading-[1.1] tracking-[-0.02em] text-white mb-2">
                33
              </p>
              <p className="font-['Spline_Sans'] text-[1rem] font-normal leading-[1.5] tracking-normal text-primary-foreground">
                Global designers led
              </p>
              <p className="font-['Spline_Sans'] text-[0.875rem] font-normal leading-[1.4] tracking-[0.01em] text-white mt-2">
                6 studios across US, China, Brazil
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="font-['EB_Garamond'] text-[clamp(2.5rem,2rem+3.5vmin,4rem)] font-normal leading-[1.1] tracking-[-0.02em] text-white mb-2">
                $9.78B
              </p>
              <p className="font-['Spline_Sans'] text-[1rem] font-normal leading-[1.5] tracking-normal text-primary-foreground">
                Revenue scale
              </p>
              <p className="font-['Spline_Sans'] text-[0.875rem] font-normal leading-[1.4] tracking-[0.01em] text-white mt-2">
                Motorola operations
              </p>
            </div>
          </div>
          <motion.button
            onClick={() => setActivePage("impact")}
            className="mt-12 px-8 py-3 bg-white rounded-[10px] font-['Spline_Sans'] text-[0.875rem] font-medium leading-[1.4] tracking-[0.01em] text-primary hover:bg-white/90"
            style={{
              boxShadow:
                "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            View All Impact Metrics
          </motion.button>
        </div>
      </div>

      {/* Leadership Teaser */}
      <div className="bg-surface-variant">
        <div className="marketing-grid py-16">
          <h3 className="text-center mb-8 font-['EB_Garamond'] text-[clamp(1.75rem,1.625rem+0.875vmin,2rem)] font-normal leading-[1.25] tracking-normal text-foreground">
            HOW I LEAD
          </h3>
          <div
            className="bg-white rounded-[10px] p-8 mb-8 max-w-[75ch] mx-auto"
            style={{
              boxShadow:
                "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
            }}
          >
            <div className="mb-6">
              <span className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground">
                I lead through strategic clarity,
                cross-functional influence, and team
                empowerment—building high-performing design
                organizations that deliver measurable business
                outcomes at scale.
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <div className="flex flex-col gap-1">
                <a
                  href="#strategic-decision"
                  className="font-['Spline_Sans'] text-[16px] leading-[24px] text-primary hover:underline cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToStrategicDecision();
                  }}
                >
                  {"→"} Strategic Decision-Making
                </a>
                <a
                  href="#global-operations"
                  className="font-['Spline_Sans'] text-[16px] leading-[24px] text-primary hover:underline cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToBuildingTeams();
                  }}
                >
                  {"→"} Building & Scaling Teams
                </a>
                <a
                  href="#developing-leaders"
                  className="font-['Spline_Sans'] text-[16px] leading-[24px] text-primary hover:underline cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToEmpoweringAutonomy();
                  }}
                >
                  {"→"} Empowering Through Autonomy
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <a
                  href="#cross-functional"
                  className="font-['Spline_Sans'] text-[16px] leading-[24px] text-primary hover:underline cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToCrossFunctional();
                  }}
                >
                  {"→"} Cross-Functional Influence
                </a>
                <a
                  href="#translating"
                  className="font-['Spline_Sans'] text-[16px] leading-[24px] text-primary hover:underline cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToTranslatingLevels();
                  }}
                >
                  {"→"} Translating Between Levels
                </a>
                <a
                  href="#operational-excellence"
                  className="font-['Spline_Sans'] text-[16px] leading-[24px] text-primary hover:underline cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToOperationalExcellence();
                  }}
                >
                  {"→"} Operational Excellence
                </a>
              </div>
            </div>
          </div>
          <div className="text-center">
            <motion.button
              onClick={() => setActivePage("leadership")}
              className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-[10px] hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
            >
              Read Full Leadership Philosophy
            </motion.button>
          </div>
        </div>
      </div>

      {/* What I'm Looking For */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h3 className="text-center mb-8 font-['EB_Garamond'] text-[clamp(1.75rem,1.625rem+0.875vmin,2rem)] font-normal leading-[1.25] tracking-normal text-foreground">
          WHAT I&apos;M LOOKING FOR
        </h3>
        <div className="bg-secondary border-2 border-border rounded-[10px] p-8 text-center">
          <div className="text-foreground leading-relaxed max-w-3xl mx-auto">
            Design leadership opportunities at platform
            companies tackling meaningful problems— AI/ML
            innovation, complex product ecosystems, emerging
            technology, hardware/software integration—where
            strategic design directly influences both user
            experience and business outcomes.
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-secondary border-t-2 border-secondary">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h3 className="text-center mb-12 font-['EB_Garamond'] text-[clamp(1.75rem,1.625rem+0.875vmin,2rem)] font-normal leading-[1.25] tracking-normal text-foreground">
            WHAT PARTNERS SAY
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div
              className="bg-white rounded-[10px] px-8 pt-5 pb-5 flex flex-col gap-3"
              style={{
                boxShadow:
                  "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
              }}
            >
              <div className="flex items-start">
                <div className="bg-secondary px-3 py-1 rounded-full">
                  <p className="font-['Spline_Sans'] text-[11px] font-medium leading-[16px] tracking-[0.5px] text-secondary-foreground">
                    Cross-Functional Leadership
                  </p>
                </div>
              </div>
              <div>
                <p className="font-['EB_Garamond'] text-[1rem] font-normal italic leading-[26px] text-muted-foreground">
                  "Elisa is so good at collaborating with
                  customers and with the engineering team she is
                  working with to achieve the best design that
                  fulfills goals and is able to be implemented
                  within the technical capabilities and the time
                  constraints. She knows how to be firm when it
                  matters and to give when it doesn&apos;t
                  matter."
                </p>
              </div>
              <div>
                <p className="font-['Spline_Sans'] text-[0.875rem] font-normal leading-[20px] tracking-[0.25px] text-muted-foreground">
                  — Product/Engineering Partner, Linkage
                  Institute, Advancing Women Leaders 360
                  Assessment, 2019
                </p>
              </div>
            </div>
            <div
              className="bg-white rounded-[10px] px-8 py-6 flex flex-col gap-3"
              style={{
                boxShadow:
                  "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
              }}
            >
              <div className="flex items-start">
                <div className="bg-secondary px-3 py-1 rounded-full">
                  <p className="font-['Spline_Sans'] text-[11px] font-medium leading-[16px] tracking-[0.5px] text-secondary-foreground">
                    Executive Translation
                  </p>
                </div>
              </div>
              <div>
                <p className="font-['EB_Garamond'] text-[1rem] font-normal italic leading-[26px] text-muted-foreground">
                  "Elisa&apos;s greatest leadership asset is her
                  collaboration skills. She has the ability to
                  work across various levels and departments.
                  She is able to understand needs from the
                  C-suite and translate them into actionable
                  goals."
                </p>
              </div>
              <div>
                <p className="font-['Spline_Sans'] text-[0.875rem] font-normal leading-[20px] tracking-[0.25px] text-muted-foreground">
                  — Senior Partner/Executive, Leadership Circle
                  Profile assessment, 2024
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <motion.button
              onClick={() => {
                setActivePage("leadership");
                setTimeout(() => {
                  const element =
                    document.getElementById("partners-say");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }, 100);
              }}
              className="bg-white px-7 py-3 rounded-[10px] font-['Spline_Sans'] text-[0.875rem] font-medium leading-[20px] tracking-[0.1px] text-foreground hover:bg-gray-50 cursor-pointer"
              style={{
                boxShadow:
                  "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
            >
              Read All Testimonials
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const WorkPage = () => {
    // Render case study if one is selected
    let caseStudyComponent = null;

    if (activeCaseStudy) {
      const caseStudyComponents: {
        [key: string]: React.ComponentType<{
          onBack: () => void;
          onNavigate?: (caseStudyId: string) => void;
        }>;
      } = {
        "ethical-ai": EthicalAI,
        "razr-foldable": RAZRFoldable,
        "one-platform": OnePlatform,
        "ai-library": AILibrary,
        "grubhub-direct": GrubhubDirect,
        "ecosystem-infrastructure": EcosystemInfrastructure,
      };

      const CaseStudyComponent =
        caseStudyComponents[activeCaseStudy];
      if (CaseStudyComponent) {
        caseStudyComponent = (
          <CaseStudyComponent
            key={activeCaseStudy}
            onBack={handleBackToWork}
            onNavigate={handleCaseStudyClick}
          />
        );
      }
    }

    return (
      <WorkPageContent
        pageVariants={pageVariants}
        pageTransition={pageTransition}
        activeCaseStudy={activeCaseStudy}
        onCaseStudyClick={handleCaseStudyClick}
        caseStudyComponent={caseStudyComponent}
      />
    );
  };

  const WorkPageOld = () => {
    // Render case study if one is selected
    if (activeCaseStudy) {
      const caseStudyComponents: {
        [key: string]: React.ComponentType<{
          onBack: () => void;
          onNavigate?: (caseStudyId: string) => void;
        }>;
      } = {
        "ethical-ai": EthicalAI,
        "razr-foldable": RAZRFoldable,
        "one-platform": OnePlatform,
        "ai-library": AILibrary,
        "grubhub-direct": GrubhubDirect,
        "ecosystem-infrastructure": EcosystemInfrastructure,
      };

      const CaseStudyComponent =
        caseStudyComponents[activeCaseStudy];
      if (CaseStudyComponent) {
        return (
          <CaseStudyComponent
            key={activeCaseStudy}
            onBack={handleBackToWork}
            onNavigate={handleCaseStudyClick}
          />
        );
      }
    }

    // Default work page view
    return (
      <motion.div
        className="max-w-7xl mx-auto px-6 py-16"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        <h1 className="mb-4 font-['EB_Garamond'] text-[clamp(2rem,1.75rem+1.75vmin,2.5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground">
          WORK
        </h1>
        <div className="text-xl text-gray-600 mb-12">
          Selected case studies showcasing leadership in product
          design, team building, and strategic innovation
        </div>

        {/* Featured Projects */}
        <div ref={featuredProjectsRef} className="mb-16">
          <h2 className="mb-8 pb-3 border-b-2 border-gray-800">
            FEATURED PROJECTS
          </h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: "Ethical AI Research Tool",
                company: "JSTOR",
                year: "2023-2025",
                tag: "AI & Ethics",
                id: "ethical-ai",
                image: heroImage,
              },
              {
                title: "AI-Assisted Library Transformation",
                company: "JSTOR",
                year: "2023-2025",
                tag: "AI & Ethics",
                id: "ai-library",
                image: aiLibraryImage,
              },
              {
                title: "One Platform Integration",
                company: "JSTOR",
                year: "2023-2024",
                tag: "Platform Strategy",
                id: "one-platform",
                image: onePlatformImage,
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                onClick={() => handleCaseStudyClick(project.id)}
                className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                style={{
                  boxShadow:
                    "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
                }}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                {project.image ? (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                    <div className="text-7xl">📱</div>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs bg-red-100 text-red-800 px-3 py-1 rounded-full">
                      {project.tag}
                    </div>
                    <div className="text-xs text-gray-500">
                      {project.year}
                    </div>
                  </div>
                  <div className="text-xl mb-2">
                    {project.title}
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    {project.company}
                  </div>
                  <div className="flex items-center text-red-700 text-sm">
                    View Case Study{" "}
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Filter/Organize Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2 className="pb-3 border-b-2 border-gray-800">
              ALL PROJECTS
            </h2>
            <div className="flex gap-3">
              <motion.button
                onClick={() => setWorkFilter("company")}
                className={`px-4 py-2 rounded text-sm ${
                  workFilter === "company"
                    ? "bg-red-700 text-white"
                    : "border border-gray-300 hover:bg-gray-50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                By Company
              </motion.button>
              <motion.button
                onClick={() => setWorkFilter("theme")}
                className={`px-4 py-2 rounded text-sm ${
                  workFilter === "theme"
                    ? "bg-red-700 text-white"
                    : "border border-gray-300 hover:bg-gray-50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                By Theme
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {workFilter === "company" ? (
            <motion.div
              key="company-view"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* JSTOR Projects */}
              <div ref={jstorSectionRef} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-xl">JSTOR / ITHAKA</div>
                  <div className="text-sm text-gray-500">
                    (2022-Present)
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Ethical AI Research Tool",
                      metric: "3× engagement increase",
                      id: "ethical-ai",
                      image:
                        "https://images.unsplash.com/photo-1738003946582-aabeabf5e009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjByZXNlYXJjaHxlbnwxfHx8fDE3NjE3OTg3MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
                    },
                    {
                      title: "One Platform Integration",
                      metric: "Mission-critical migration",
                      id: "one-platform",
                      image:
                        "https://images.unsplash.com/photo-1758626042818-b05e9c91b84a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF0Zm9ybSUyMGludGVncmF0aW9ufGVufDF8fHx8MTc2MTc5ODczNHww&ixlib=rb-4.1.0&q=80&w=1080",
                    },
                    {
                      title: "Building Design Excellence",
                      metric:
                        "Strategic hiring & team empowerment",
                      id: "design-excellence",
                      image:
                        "https://images.unsplash.com/photo-1525899131585-4a68ce638f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwZGVzaWdufGVufDF8fHx8MTc2MTc2MDQxMXww&ixlib=rb-4.1.0&q=80&w=1080",
                    },
                  ].map((project, i) => (
                    <div
                      key={i}
                      onClick={() =>
                        handleCaseStudyClick(project.id)
                      }
                      className="rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer flex gap-4 items-start"
                      style={{
                        boxShadow:
                          "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
                      }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-20 h-20 object-cover rounded flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-lg pr-2">
                            {project.title}
                          </div>
                          <ChevronRight
                            size={20}
                            className="text-gray-400 flex-shrink-0"
                          />
                        </div>
                        <div className="text-sm text-red-700">
                          {project.metric}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Motorola Projects */}
              <div ref={motorolaSectionRef}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-xl">
                    MOTOROLA MOBILITY
                  </div>
                  <div className="text-sm text-gray-500">
                    (2014-2020)
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Android RAZR Foldable",
                      metric: "Red Dot 'Best of the Best'",
                      id: "razr-foldable",
                      image: razrHeroImage,
                    },
                    {
                      title: "Leading the Brazil Studio",
                      metric:
                        "Led 15-person studio, tripled UX team",
                      id: "brazil-studio",
                      image:
                        "https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjE3OTg3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
                    },
                    {
                      title: "Camera Redesign",
                      metric: "Portfolio-wide innovation",
                      id: "camera-redesign",
                      image:
                        "https://images.unsplash.com/photo-1630165311885-f732bd2826fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBsZW5zJTIwbW9iaWxlfGVufDF8fHx8MTc2MTc5ODczNXww&ixlib=rb-4.1.0&q=80&w=1080",
                    },
                  ].map((project, i) => (
                    <div
                      key={i}
                      onClick={() =>
                        handleCaseStudyClick(project.id)
                      }
                      className="rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer flex gap-4 items-start"
                      style={{
                        boxShadow:
                          "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
                      }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-20 h-20 object-cover rounded flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-lg pr-2">
                            {project.title}
                          </div>
                          <ChevronRight
                            size={20}
                            className="text-gray-400 flex-shrink-0"
                          />
                        </div>
                        <div className="text-sm text-red-700">
                          {project.metric}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="theme-view"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* AI & Emerging Tech */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-xl">
                    AI & EMERGING TECH
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Ethical AI Research Tool",
                      company: "JSTOR",
                      metric: "3× engagement increase",
                      id: "ethical-ai",
                      image: heroImage,
                    },
                    {
                      title: "AI-Assisted Library Transformation",
                      company: "JSTOR",
                      metric: "Strategic AI implementation",
                      id: "ai-library",
                      image: aiLibraryImage,
                    },
                  ].map((project, i) => (
                    <div
                      key={i}
                      onClick={() =>
                        handleCaseStudyClick(project.id)
                      }
                      className="rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer flex gap-4 items-start"
                      style={{
                        boxShadow:
                          "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
                      }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-20 h-20 object-cover rounded flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="text-lg pr-2">
                              {project.title}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {project.company}
                            </div>
                          </div>
                          <ChevronRight
                            size={20}
                            className="text-gray-400 flex-shrink-0"
                          />
                        </div>
                        <div className="text-sm text-red-700">
                          {project.metric}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Building */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-xl">TEAM BUILDING</div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Leading the Brazil Studio",
                      company: "Motorola",
                      metric:
                        "Led 15-person studio, tripled UX team",
                      id: "brazil-studio",
                      image:
                        "https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjE3OTg3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
                    },
                    {
                      title: "Building Design Excellence",
                      company: "JSTOR",
                      metric:
                        "Hired 3 designers + accessibility lead",
                      id: "design-excellence",
                      image:
                        "https://images.unsplash.com/photo-1525899131585-4a68ce638f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwZGVzaWdufGVufDF8fHx8MTc2MTc2MDQxMXww&ixlib=rb-4.1.0&q=80&w=1080",
                    },
                  ].map((project, i) => (
                    <div
                      key={i}
                      onClick={() =>
                        handleCaseStudyClick(project.id)
                      }
                      className="rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer flex gap-4 items-start"
                      style={{
                        boxShadow:
                          "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
                      }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-20 h-20 object-cover rounded flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="text-lg pr-2">
                              {project.title}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {project.company}
                            </div>
                          </div>
                          <ChevronRight
                            size={20}
                            className="text-gray-400 flex-shrink-0"
                          />
                        </div>
                        <div className="text-sm text-red-700">
                          {project.metric}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Platform & Systems */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-xl">
                    PLATFORM & SYSTEMS
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "One Platform Integration",
                      company: "JSTOR",
                      metric: "Mission-critical migration",
                      id: "one-platform",
                      image:
                        "https://images.unsplash.com/photo-1758626042818-b05e9c91b84a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF0Zm9ybSUyMGludGVncmF0aW9ufGVufDF8fHx8MTc2MTc5ODczNHww&ixlib=rb-4.1.0&q=80&w=1080",
                    },
                  ].map((project, i) => (
                    <div
                      key={i}
                      onClick={() =>
                        handleCaseStudyClick(project.id)
                      }
                      className="rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer flex gap-4 items-start"
                      style={{
                        boxShadow:
                          "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
                      }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-20 h-20 object-cover rounded flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="text-lg pr-2">
                              {project.title}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {project.company}
                            </div>
                          </div>
                          <ChevronRight
                            size={20}
                            className="text-gray-400 flex-shrink-0"
                          />
                        </div>
                        <div className="text-sm text-red-700">
                          {project.metric}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accessibility */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-xl">ACCESSIBILITY</div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Building Design Excellence",
                      company: "JSTOR",
                      metric:
                        "Strategic hiring & team empowerment",
                      id: "design-excellence",
                      image:
                        "https://images.unsplash.com/photo-1525899131585-4a68ce638f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwZGVzaWdufGVufDF8fHx8MTc2MTc2MDQxMXww&ixlib=rb-4.1.0&q=80&w=1080",
                    },
                  ].map((project, i) => (
                    <div
                      key={i}
                      onClick={() =>
                        handleCaseStudyClick(project.id)
                      }
                      className="rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer flex gap-4 items-start"
                      style={{
                        boxShadow:
                          "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
                      }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-20 h-20 object-cover rounded flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="text-lg pr-2">
                              {project.title}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {project.company}
                            </div>
                          </div>
                          <ChevronRight
                            size={20}
                            className="text-gray-400 flex-shrink-0"
                          />
                        </div>
                        <div className="text-sm text-red-700">
                          {project.metric}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  const LeadershipPage = () => (
    <motion.div
      ref={leadershipRef}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      <LeadershipPageContent />
    </motion.div>
  );

  const ImpactPage = () => (
    <ImpactPageContent
      pageVariants={pageVariants}
      pageTransition={pageTransition}
    />
  );

  const ImpactPageOld = () => (
    <motion.div
      className="bg-white"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="mb-4 font-['EB_Garamond'] text-[clamp(2rem,1.75rem+1.75vmin,2.5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground">
          IMPACT
        </h1>
        <div className="text-xl text-gray-600 mb-12">
          Measurable outcomes demonstrating leadership
          effectiveness and design excellence at scale
        </div>
      </div>

      {/* Content Sections with Background */}
      <div className="bg-surface-variant">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* By the Numbers */}
          <div className="mb-16">
            <h2 className="mb-8 pb-3 border-b-2 border-gray-800">
              BY THE NUMBERS
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-red-50 border-2 border-gray-800 rounded-lg p-8 text-center">
                <div className="text-red-700 mb-2">111M+</div>
                <div className="text-gray-700 mb-2">
                  Annual Users Impacted
                </div>
                <div className="text-sm text-gray-600">
                  Across JSTOR's global platform
                </div>
              </div>
              <div className="bg-red-50 border-2 border-gray-800 rounded-lg p-8 text-center">
                <div className="text-red-700 mb-2">33</div>
                <div className="text-gray-700 mb-2">
                  Global Designers Led
                </div>
                <div className="text-sm text-gray-600">
                  6 studios: US, China, Brazil
                </div>
              </div>
              <div className="bg-red-50 border-2 border-gray-800 rounded-lg p-8 text-center">
                <div className="text-red-700 mb-2">20</div>
                <div className="text-gray-700 mb-2">
                  Years Experience
                </div>
                <div className="text-sm text-gray-600">
                  Leading design at scale
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div
                className="bg-white border-2 border-border rounded-lg p-8"
                style={{
                  boxShadow:
                    "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-red-700" size={24} />
                  <div className="text-xl">Team Building</div>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <div className="mb-2">
                      Brazil Studio Team Leadership
                    </div>
                    <div className="text-gray-600 text-xs mb-2">
                      Led 13-person multidisciplinary studio;
                      tripled UX/UI team from 2 to 6 designers
                      in one year (7 hires)
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>Total designers hired</span>
                    <span className="text-red-700">20+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Direct reports managed</span>
                    <span className="text-red-700">
                      15 peak
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="bg-white border-2 border-border rounded-lg p-8"
                style={{
                  boxShadow:
                    "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp
                    className="text-red-700"
                    size={24}
                  />
                  <div className="text-xl">Product Impact</div>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>AI Tool engagement increase</span>
                    <span className="text-red-700">3×</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Accessibility improvement</span>
                    <span className="text-red-700">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Moto App active users</span>
                    <span className="text-red-700">23M+</span>
                  </div>
                </div>
              </div>

              <div
                className="rounded-lg p-8"
                style={{
                  boxShadow:
                    "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="text-red-700" size={24} />
                  <div className="text-xl">Global Reach</div>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Countries served (JSTOR)</span>
                    <span className="text-red-700">194</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Libraries supported</span>
                    <span className="text-red-700">14,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Motorola revenue scale</span>
                    <span className="text-red-700">$9.78B</span>
                  </div>
                </div>
              </div>

              <div
                className="rounded-lg p-8"
                style={{
                  boxShadow:
                    "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-red-700" size={24} />
                  <div className="text-xl">
                    Quality & Recognition
                  </div>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>WAVE accessibility ranking</span>
                    <span className="text-red-700">Top 1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Red Dot awards</span>
                    <span className="text-red-700">
                      Best of Best
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Recognition */}
          <div className="mb-16">
            <h2 className="mb-8 pb-3 border-b-2 border-gray-800">
              INDUSTRY RECOGNITION
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-gray-800 rounded-lg p-8">
                <div className="mb-4">Red Dot Design Award</div>
                <div className="text-sm text-gray-700 mb-4">
                  "Best of the Best" for Android RAZR
                  Foldable—the most prestigious Red Dot
                  distinction
                </div>
                <div className="text-xs text-gray-500">
                  Motorola Mobility, 2020
                </div>
              </div>

              <div className="bg-white border-2 border-gray-800 rounded-lg p-8">
                <div className="mb-4">
                  WAVE Accessibility Excellence
                </div>
                <div className="text-sm text-gray-700 mb-4">
                  Top 1% ranking for web accessibility—98%
                  improvement in accessibility errors
                </div>
                <div className="text-xs text-gray-500">
                  JSTOR, 2024
                </div>
              </div>

              <div className="bg-white border-2 border-gray-800 rounded-lg p-8">
                <div className="mb-4">DTV Mod Success</div>
                <div className="text-sm text-gray-700 mb-4">
                  Brazil-exclusive localized product sold
                  out—demonstrating market-specific design
                  excellence
                </div>
                <div className="text-xs text-gray-500">
                  Motorola Mobility, 2018
                </div>
              </div>

              <div className="bg-white border-2 border-gray-800 rounded-lg p-8">
                <div className="mb-4">
                  Platform Migration Excellence
                </div>
                <div className="text-sm text-gray-700 mb-4">
                  Mission-critical integration with zero
                  business disruption across 111M+ users
                </div>
                <div className="text-xs text-gray-500">
                  JSTOR, 2024
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Through Empowerment */}
          <div className="mb-16">
            <h2 className="mb-8 pb-3 border-b-2 border-gray-800">
              LEADERSHIP THROUGH EMPOWERMENT
            </h2>

            <div className="bg-red-50 border-2 border-gray-800 rounded-lg p-8 mb-8">
              <div className="text-xl mb-6">
                Strategic Hiring Driving Outcomes
              </div>
              <div className="text-gray-700 leading-relaxed">
                My impact comes from identifying strategic
                needs, hiring the right expertise, and
                empowering teams to execute with autonomy.
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white border-2 border-gray-800 rounded-lg p-8">
                <div className="text-lg mb-4">
                  Accessibility Transformation (JSTOR)
                </div>
                <div className="text-sm text-gray-700 leading-relaxed">
                  Recognized accessibility as strategic priority
                  and business risk. Hired JSTOR's first
                  dedicated accessibility lead with FE
                  engineering background. Empowered him to work
                  directly with designers from concept phase,
                  drive design system improvements, and
                  implement automated testing. Result: 98%
                  improvement, top 1% WAVE ranking across 111M+
                  users.
                </div>
              </div>

              <div className="bg-white border-2 border-gray-800 rounded-lg p-8">
                <div className="text-lg mb-4">
                  RAZR Innovation Team (Motorola)
                </div>
                <div className="text-sm text-gray-700 leading-relaxed">
                  Three designers new to Motorola/mobile led
                  high-stakes 2019 foldable relaunch. I directly
                  managed industrial designer through difficult
                  negotiations with US product teams on software
                  constraints. Led UX/UI designers on flip use
                  cases, teaching foldable principles I
                  co-developed during original RAZR (2004-2005).
                  Result: Red Dot "Best of the Best"; two
                  designers now Design Managers.
                </div>
              </div>

              <div className="bg-white border-2 border-gray-800 rounded-lg p-8">
                <div className="text-lg mb-4">
                  Brazil Studio Growth (Motorola)
                </div>
                <div className="text-sm text-gray-700 leading-relaxed">
                  Led 13-person multidisciplinary studio.
                  Tripled UX/UI team from 2 to 6 designers in
                  one year through strategic hiring (7 hires,
                  managing attrition). Established studio
                  culture and cross-functional partnerships.
                  Result: Studio concepts shaped Motorola's
                  product portfolio; team continued growing to
                  20+ after my departure.
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities for Scale */}
          <div className="mb-16">
            <h2 className="mb-8 pb-3 border-b-2 border-gray-800">
              CAPABILITIES FOR SCALE
            </h2>

            <div className="bg-red-50 border-2 border-gray-800 rounded-lg p-8 mb-8">
              <div className="text-gray-700 leading-relaxed mb-6">
                My impact stems from building organizational
                capabilities that scale beyond individual
                projects— creating systems, processes, and
                cultures that enable sustained excellence.
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div
                className="rounded-lg p-6"
                style={{
                  boxShadow:
                    "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
                }}
              >
                <div className="text-lg mb-4">
                  Team Infrastructure
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>�� Hiring frameworks</li>
                  <li>• Onboarding programs</li>
                  <li>• Career development paths</li>
                  <li>• Performance management</li>
                  <li>• Culture building</li>
                </ul>
              </div>

              <div
                className="rounded-lg p-6"
                style={{
                  boxShadow:
                    "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
                }}
              >
                <div className="text-lg mb-4">
                  Design Operations
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Design systems</li>
                  <li>• Review processes</li>
                  <li>• Quality standards</li>
                  <li>• Tool selection</li>
                  <li>• Workflow optimization</li>
                </ul>
              </div>

              <div
                className="rounded-lg p-6"
                style={{
                  boxShadow:
                    "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
                }}
              >
                <div className="text-lg mb-4">
                  Strategic Alignment
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Roadmap planning</li>
                  <li>• Stakeholder management</li>
                  <li>• Cross-functional processes</li>
                  <li>• Executive communication</li>
                  <li>• OKR development</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-white border-2 border-gray-800 rounded-lg p-8">
              <div className="mb-4">
                Long-term Impact Example
              </div>
              <div className="text-sm text-gray-700 leading-relaxed">
                The Brazil design studio I led grew from 3{"→"}
                13 designers and continued expanding after my
                departure, with team members I hired and
                mentored taking on leadership roles and growing
                the organization to 20+ designers. This
                demonstrates the sustainability of the systems
                and culture I established.
              </div>
            </div>
          </div>

          {/* Thought Leadership & Industry Influence */}
          <div className="mb-16">
            <h2 className="mb-8 pb-3 border-b-2 border-gray-800">
              THOUGHT LEADERSHIP & INDUSTRY INFLUENCE
            </h2>

            <div className="bg-white border-2 border-gray-800 rounded-lg p-8 mb-8">
              <div className="mb-4">Teaching & Mentorship</div>
              <div className="text-sm text-gray-700 leading-relaxed">
                Adjunct Faculty at Northwestern University
                (Master of Product Design & Management,
                Engineering Design Innovation). Currently
                Graduate Student Advisor in EDI program.
              </div>
            </div>

            <div className="bg-white border-2 border-gray-800 rounded-lg p-8 mb-8">
              <div className="mb-4">Platform Contributions</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  • Influenced Android foldable framework
                  standards through RAZR development
                </li>
                <li>
                  • Collaborated with Google Android team on
                  gesture navigation patterns
                </li>
                <li>
                  • Partnered with Visual Resource Association
                  on JSTOR metadata standards
                </li>
                <li>
                  • Integrated Lottie animation framework into
                  Motorola's core platform
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-800 rounded-lg p-8">
              <div className="mb-4">Specialized Expertise</div>
              <div className="text-sm text-gray-700 leading-relaxed">
                Physical/Digital Integration (20 years mobile,
                foldable pioneer) • International Product
                Leadership (multilingual, cross-cultural) • AI
                Ethics & Academic Integrity
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const AboutPage = () => (
    <AboutPageContent
      pageVariants={pageVariants}
      pageTransition={pageTransition}
    />
  );

  const AboutPageOld = () => (
    <motion.div
      className="max-w-5xl mx-auto px-6 py-16"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1 className="mb-4 font-['EB_Garamond'] text-[clamp(2rem,1.75rem+1.75vmin,2.5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground">
        ABOUT
      </h1>
      <div className="text-xl text-gray-600 mb-12">
        20 years building design organizations and products that
        serve millions
      </div>

      {/* Background & Expertise */}
      <div className="mb-16">
        <h2 className="mb-8 pb-3 border-b-2 border-border">
          BACKGROUND & EXPERTISE
        </h2>

        <div className="bg-secondary border-2 border-border rounded-[10px] p-8 mb-8">
          <div className="text-gray-700 leading-relaxed space-y-4">
            <div>
              Product Design Director who builds teams and
              solves hard problems at scale.
            </div>

            <div>
              I lead design teams creating products that push
              boundaries: the Android RAZR foldable (Red Dot
              "Best of the Best"), ethical AI research tools (3×
              engagement increase), platform integrations
              serving 111M+ users. At Motorola, I directed 33
              designers across 6 global studios within $9.78B
              operations. At JSTOR, I'm shaping how AI serves
              academic research with integrity.
            </div>

            <div>
              What drives me: solving complex problems on
              products with real impact—academic research tools,
              hardware/software integration, platform-scale
              experiences. I bridge customer needs and
              engineering constraints through strategic clarity,
              empowering senior leads to deliver exceptional
              work. At Motorola, I led the Brazil Design Studio
              to deliver concepts that shaped the product
              portfolio. My partners say I "know how to be firm
              when it matters and give when it doesn't."
            </div>

            <div>
              Looking for leadership roles at companies building
              meaningful products (e.g. platform innovation,
              AI/ML, emerging technology) where design strategy
              drives both user experience and business outcomes.
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div
            className="bg-white rounded-[10px] p-6"
            style={{
              boxShadow:
                "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
            }}
          >
            <div className="text-lg mb-4">Core Expertise</div>
            <ul className="space-y-2 text-sm text-foreground">
              <li>• Strategic design leadership</li>
              <li>
                • Team building & scaling (20+ designers hired)
              </li>
              <li>• Cross-functional influence</li>
              <li>• Product strategy & roadmapping</li>
              <li>• Design systems & operations</li>
              <li>• Department budget ownership</li>
              <li>• Tool selection responsibility</li>
              <li>• Multi-studio coordination</li>
              <li>• Accessibility excellence</li>
            </ul>
          </div>

          <div
            className="bg-white rounded-[10px] p-6"
            style={{
              boxShadow:
                "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
            }}
          >
            <div className="text-lg mb-4">
              Industries & Domains
            </div>
            <ul className="space-y-2 text-sm text-foreground">
              <li>• EdTech & Academic Research (JSTOR)</li>
              <li>• Consumer Hardware/Software (Motorola)</li>
              <li>• Food Delivery & Marketplace (Grubhub)</li>
              <li>• AI & Emerging Technologies</li>
              <li>• Platform & Systems Design</li>
              <li>• Mobile & Web Applications</li>
            </ul>
          </div>
        </div>

        <div
          className="bg-white rounded-[10px] p-8"
          style={{
            boxShadow:
              "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
          }}
        >
          <div className="text-lg mb-4">Career Highlights</div>
          <div className="space-y-4 text-sm text-foreground">
            <div>
              <div className="text-primary mb-1">
                JSTOR / ITHAKA (2021-Present)
              </div>
              <div>
                Product Design Director leading ethical AI
                research tools, platform integration, and
                accessibility excellence
              </div>
            </div>
            <div>
              <div className="text-primary mb-1">
                Grubhub (2020-2021)
              </div>
              <div>
                Design Director leading Restaurant and Driver
                product teams. Hired 5 people in one year (1
                design manager, 3 senior designers, 1 content
                strategist) to rapidly build design capability.
              </div>
            </div>
            <div>
              <div className="text-primary mb-1">
                Motorola Mobility (2002-2020)
              </div>
              <div>
                Head of UX leading 33 designers across 6 global
                studios within $9.78B operations. Directed
                product design for 24-device portfolio. Led
                iconic RAZR foldable launch and influenced
                Android framework standards.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* International Experience */}
      <div className="mb-16">
        <h2 className="mb-8 pb-3 border-b-2 border-border">
          INTERNATIONAL EXPERIENCE
        </h2>

        <div className="bg-secondary border-2 border-border rounded-[10px] p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="text-primary" size={32} />
            <div className="text-xl">
              Global Design Leadership
            </div>
          </div>
          <div className="text-gray-700 leading-relaxed mb-6">
            I've built and led design teams across three
            continents, navigating cultural differences, time
            zones, and regional market needs while maintaining
            design excellence and organizational cohesion.
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="bg-white rounded-[10px] p-6"
            style={{
              boxShadow:
                "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
            }}
          >
            <div className="text-lg mb-4">🇧🇷 Brazil</div>
            <div className="text-sm text-foreground mb-4">
              Led Motorola's 13-person Brazil design studio.
              Rapidly scaled UX/UI team from 2 to 6 designers in
              one year through strategic hiring. Led localized
              product development including DTV Mod (sold out)
              and regional customizations for Latin American
              markets.
            </div>
            <div className="text-xs text-muted-foreground">
              São Paulo Studio, 2016-2017 | Studio Director
              leading 13-person multidisciplinary team; tripled
              UX capacity through strategic hiring
            </div>
          </div>

          <div
            className="bg-white rounded-[10px] p-6"
            style={{
              boxShadow:
                "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
            }}
          >
            <div className="text-lg mb-4">🇨🇳 China</div>
            <div className="text-sm text-foreground mb-4">
              Managed design teams in Beijing and collaborated
              on products for Chinese market. Coordinated across
              12-hour time zones and navigated cultural business
              practices.
            </div>
            <div className="text-xs text-muted-foreground">
              Beijing Studio, 2014-2020
            </div>
          </div>

          <div
            className="bg-white rounded-[10px] p-6"
            style={{
              boxShadow:
                "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
            }}
          >
            <div className="text-lg mb-4">🇺🇸 United States</div>
            <div className="text-sm text-foreground mb-4">
              Led design organizations in Chicago serving global
              markets. Managed distributed teams across US
              locations including Chicago, San Francisco, and
              satellite offices.
            </div>
            <div className="text-xs text-muted-foreground">
              Led design teams in Chicago serving global
              markets. Managed globally distributed team of 30+
              across 6 studios. Chicago HQ, 2017-2020
            </div>
          </div>
        </div>

        <div className="mt-8 bg-secondary border-2 border-border rounded-[10px] p-8">
          <div className="mb-3">Global Impact at JSTOR</div>
          <div className="text-sm text-foreground leading-relaxed">
            Currently serving 111M+ users across 194 countries
            and 14,000 libraries worldwide, designing for
            diverse academic institutions from major research
            universities to small colleges across every
            continent.
          </div>
        </div>
      </div>

      {/* Teaching & Mentorship */}
      <div className="mb-16">
        <h2 className="mb-8 pb-3 border-b-2 border-border">
          TEACHING & MENTORSHIP
        </h2>

        <div className="bg-secondary border-2 border-border rounded-[10px] p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="text-primary" size={32} />
            <div className="text-xl">
              Developing Future Leaders
            </div>
          </div>
          <div className="text-gray-700 leading-relaxed">
            I'm passionate about growing the next generation of
            design leaders. Beyond managing teams, I actively
            mentor designers, speak at industry events, and
            create learning opportunities that accelerate career
            growth.
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-secondary border-2 border-border rounded-[10px] p-6">
            <div className="text-lg mb-4">
              Mentorship Outcomes
            </div>
            <ul className="space-y-3 text-sm text-foreground">
              <li>
                <div className="mb-1">
                  Staff {"→"} Senior {"→"} Manager
                </div>
                <div className="text-xs text-gray-600">
                  Three-person RAZR team (all new to
                  Motorola/mobile) led high-stakes 2019 foldable
                  relaunch. Two team members are now Design
                  Managers: industrial designer in Brazil
                  driving innovation, UI designer leading design
                  efforts. UX designer developed mobile
                  expertise informing subsequent portfolio
                  launches.
                </div>
              </li>
              <li>
                <div className="mb-1">Multiple Promotions</div>
                <div className="text-xs text-gray-600">
                  Team members advanced to senior and principal
                  roles across design disciplines
                </div>
              </li>
              <li>
                <div className="mb-1">
                  Leadership Transitions
                </div>
                <div className="text-xs text-gray-600">
                  Direct reports moved to management positions
                  at Motorola and other organizations
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-secondary border-2 border-border rounded-[10px] p-6">
            <div className="text-lg mb-4">
              Development Approach
            </div>
            <ul className="space-y-3 text-sm text-foreground">
              <li>
                <div className="mb-1">
                  Strategic Hiring + Empowerment
                </div>
                <div className="text-xs text-gray-600">
                  I identify capability gaps, hire for specific
                  expertise, then empower teams to execute with
                  autonomy. Example: Hired JSTOR's first
                  accessibility lead and empowered him to
                  transform our process—achieving 98%
                  improvement and top 1% ranking.
                </div>
              </li>
              <li>
                <div className="mb-1">Stretch Assignments</div>
                <div className="text-xs text-gray-600">
                  High-visibility projects beyond current level.
                  Example: Selected staff-level industrial
                  designer as principal for high-stakes RAZR
                  relaunch, coaching her through negotiations
                  with US teams.
                </div>
              </li>
              <li>
                <div className="mb-1">
                  Historical Knowledge Transfer
                </div>
                <div className="text-xs text-gray-600">
                  Teaching frameworks and principles I've
                  developed over 20 years. Example: Introduced
                  new mobile designers to foldable principles I
                  co-developed during original RAZR (2004-2005).
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-secondary border-2 border-border rounded-[10px] p-8">
          <div className="mb-4">Knowledge Sharing</div>
          <div className="space-y-4 text-sm text-foreground">
            <div className="flex items-start gap-3">
              <BookOpen
                className="text-primary mt-1"
                size={20}
              />
              <div>
                <div className="mb-1">Internal Workshops</div>
                <div className="text-xs text-gray-600">
                  Regular training sessions on design strategy,
                  stakeholder management, and leadership skills
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="text-primary mt-1" size={20} />
              <div>
                <div className="mb-1">Design Critiques</div>
                <div className="text-xs text-gray-600">
                  Facilitated learning-focused critiques that
                  develop critical thinking and presentation
                  skills
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="text-primary mt-1" size={20} />
              <div>
                <div className="mb-1">Career Development</div>
                <div className="text-xs text-gray-600">
                  Created frameworks for portfolio development,
                  interview prep, and career progression
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Download */}
      <div className="mb-16">
        <h2 className="mb-8 pb-3 border-b-2 border-border">
          RESUME DOWNLOAD
        </h2>

        <div className="bg-secondary border-2 border-border rounded-[10px] p-8">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <div className="text-lg mb-2">
                Download Complete Resume
              </div>
              <div className="text-sm text-gray-700">
                Full career history, detailed project
                descriptions, and comprehensive skill breakdown
              </div>
            </div>
            <a
              href="https://drive.google.com/uc?export=download&id=1_bkvqB0_NBGWtkarGIDnU9lut0ACDQ-Q"
              download
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-[10px] hover:bg-primary/90 transition-colors"
            >
              <Download size={20} />
              Download PDF
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div
            className="bg-white text-center p-6 rounded-[10px]"
            style={{
              boxShadow:
                "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
            }}
          >
            <div className="text-primary mb-2">20</div>
            <div className="text-sm text-foreground">
              Years Experience
            </div>
          </div>
          <div
            className="bg-white text-center p-6 rounded-[10px]"
            style={{
              boxShadow:
                "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
            }}
          >
            <div className="text-primary mb-2">3</div>
            <div className="text-sm text-foreground">
              Major Companies
            </div>
          </div>
          <div
            className="bg-white text-center p-6 rounded-[10px]"
            style={{
              boxShadow:
                "0px 1px 2px 0px rgba(18, 18, 18, 0.3), 0px 1px 3px 1px rgba(18, 18, 18, 0.15)",
            }}
          >
            <div className="text-primary mb-2">10+</div>
            <div className="text-sm text-foreground">
              Case Studies
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div
      className="min-h-screen bg-background"
      style={{ scrollBehavior: "smooth" }}
    >
      <Navigation />

      <div ref={contentRef} className="w-full">
        <AnimatePresence mode="wait">
          {activePage === "home" && <HomePage key="home" />}
          {activePage === "work" && <WorkPage key="work" />}
          {activePage === "leadership" && (
            <LeadershipPage key="leadership" />
          )}
          {activePage === "impact" && (
            <ImpactPage key="impact" />
          )}
          {activePage === "about" && <AboutPage key="about" />}
        </AnimatePresence>
      </div>

      <Footer onNavigate={handleFooterNavigation} />
    </div>
  );
};

export default PortfolioWireframes;