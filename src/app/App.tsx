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
import { CaseStudyNav } from "./components/CaseStudyNav";
import {
  CASE_STUDIES,
  caseStudyPath,
  isPlainClick,
  parsePath,
  pathFor,
} from "./data/caseStudies";
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
import { TeachingServiceDesign } from "./components/case-studies/TeachingServiceDesign";
import { MobileParity } from "./components/case-studies/MobileParity";
import { CameraRedesign } from "./components/case-studies/CameraRedesign";
import heroImage from "figma:asset/6d077c109b68cf2442c73aa8e6bea3bec069e4df.png";
import onePlatformImage from "figma:asset/40bf45078ad84575a1178136d73d285002fdf9bc.png";
import razrHeroImage from "figma:asset/a9d3a2304cfdb51608b897fa52985cf480028150.png";
import aiLibraryImage from "figma:asset/8cf3e6ec6a19346c1adefa9bf4dfc6e4967bbb2c.png";

const PortfolioWireframes = () => {
  // The 404.html fallback sends unknown paths here as "/?/path".
  // Restore the real path before reading it.
  if (window.location.search.startsWith("?/")) {
    const restored =
      "/" +
      window.location.search
        .slice(2)
        .split("&")[0]
        .replace(/~and~/g, "&");
    window.history.replaceState(null, "", restored + window.location.hash);
  }
  const initialRoute = parsePath(window.location.pathname);
  const [activePage, setActivePage] = useState(initialRoute.page);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workFilter, setWorkFilter] = useState("company");
  const [activeCaseStudy, setActiveCaseStudy] = useState<
    string | null
  >(initialRoute.caseStudy);
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

  // Keep the address bar in step with the page, so every page and case
  // study has its own link and the browser Back button works.
  useEffect(() => {
    const path = pathFor(activePage, activeCaseStudy);
    if (path !== window.location.pathname) {
      window.history.pushState(null, "", path);
    }
    const study = CASE_STUDIES.find((c) => c.id === activeCaseStudy);
    const pageLabel =
      activePage === "home"
        ? null
        : activePage.charAt(0).toUpperCase() + activePage.slice(1);
    document.title = study
      ? `${study.title} | Elisa Vargas`
      : pageLabel
        ? `${pageLabel} | Elisa Vargas`
        : "Elisa Vargas | Product Design Leader";
  }, [activePage, activeCaseStudy]);

  useEffect(() => {
    const onPopState = () => {
      const route = parsePath(window.location.pathname);
      setActivePage(route.page);
      setActiveCaseStudy(route.caseStudy);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

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
    <div
      id="site-nav"
      className="border-b-2 border-border bg-white sticky top-0 z-50"
    >
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
              Director, Product Design | AI search, recommendations &amp; LLM experiences
            </p>
            <p className="text-foreground mb-6">
              Leading Product Design at JSTOR (ITHAKA)
              <br />
              111M+ annual users | 14,000 libraries | 194
              countries
            </p>
            <p className="text-foreground mb-8">
              Previously: Global UX Director, Motorola Mobility (2018–2020), 33 designers across 6 global studios
              <br />
              and Director, São Paulo Design Studio (2016–2017), in $9.78B operations
              <br />
              Director, Product Design, Grubhub Restaurant &amp; Driver (2020–2021)
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
                metric: "~11,400 institutions",
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
                title: "Android RAZR Foldable",
                subtitle: "Pushing small-screen UX forward",
                metric: "Hardware + software leadership",
                company: "Motorola",
                id: "razr-foldable",
                image: razrHeroImage,
              },
            ].map((project, i) => (
              <motion.a
                key={project.id}
                href={caseStudyPath(project.id)}
                onClick={(e: React.MouseEvent) => {
                  if (!isPlainClick(e)) return;
                  e.preventDefault();
                  handleCaseStudyClick(project.id);
                }}
                className="block bg-white rounded-[10px] overflow-hidden hover:shadow-lg transition-shadow cursor-pointer focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-primary"
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
                    alt=""
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
              </motion.a>
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
                Top 1% in the WebAIM Million, through a dedicated accessibility program
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
                empowerment, building high-performing design
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
            Director and Senior Director design leadership roles in AI, search and consumer platforms, where grounded AI, recommendations and assistive experiences help people find what matters and act on it, online and in the real world.
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
        "teaching-service-design": TeachingServiceDesign,
        "mobile-parity": MobileParity,
        "camera-redesign": CameraRedesign,
      };

      const CaseStudyComponent =
        caseStudyComponents[activeCaseStudy];
      if (CaseStudyComponent) {
        caseStudyComponent = (
          <>
            <CaseStudyNav
              currentProjectId={activeCaseStudy}
              onNavigate={handleCaseStudyClick}
            />
            <CaseStudyComponent
              key={activeCaseStudy}
              onBack={handleBackToWork}
              onNavigate={handleCaseStudyClick}
            />
          </>
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

  const AboutPage = () => (
    <AboutPageContent
      pageVariants={pageVariants}
      pageTransition={pageTransition}
    />
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