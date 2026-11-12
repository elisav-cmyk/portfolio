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
import { ImpactPageContent } from "./components/ImpactPageNew";
import { WorkPageContent } from "./components/WorkPageNew";
import {
  LeadershipPageContent,
  LEADERSHIP_SECTIONS,
} from "./components/LeadershipPageNew";
import { EthicalAI } from "./components/case-studies/EthicalAI";
import { RAZRFoldable } from "./components/case-studies/RAZRFoldable";
import { OnePlatform } from "./components/case-studies/OnePlatform";
import { AILibrary } from "./components/case-studies/AILibrary";
import { GrubhubDirect } from "./components/case-studies/GrubhubDirect";
import { EcosystemInfrastructure } from "./components/case-studies/EcosystemInfrastructure";
import { MotoApp } from "./components/case-studies/MotoApp";
import { MobileParity } from "./components/case-studies/MobileParity";
import { CameraRedesign } from "./components/case-studies/CameraRedesign";
import heroImage from "figma:asset/6d077c109b68cf2442c73aa8e6bea3bec069e4df.webp";
import researchCardImage from "../assets/jstor-research-card.jpg";
import onePlatformImage from "figma:asset/40bf45078ad84575a1178136d73d285002fdf9bc.webp";
import razrHeroImage from "figma:asset/a9d3a2304cfdb51608b897fa52985cf480028150.png";
import grubhubImage from "figma:asset/e1e956d921c735f672569fc508b766a5bbeb7877.webp";

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
  // A link like /leadership#partners-say scrolls to that section once
  // the page has loaded.
  const [scrollTarget, setScrollTarget] = useState<string | null>(
    initialRoute.page === "leadership" && window.location.hash.length > 1
      ? decodeURIComponent(window.location.hash.slice(1))
      : null,
  );
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

    // The page fades in after the old one fades out, so the target may
    // not exist yet. Keep checking for up to 2 seconds.
    let tries = 0;
    let timer: ReturnType<typeof setTimeout>;
    const attempt = () => {
      const ready =
        activePage === "leadership"
          ? document.getElementById(scrollTarget)
          : true;
      if (ready) {
        scrollToSection();
      } else if (tries++ < 20) {
        timer = setTimeout(attempt, 100);
      }
    };
    timer = setTimeout(attempt, 100);
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

  const navigateToLeadershipSection = (id: string) => {
    setActiveCaseStudy(null);
    setActivePage("leadership");
    setScrollTarget(id);
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
  // Page changes cross-fade quickly, to show that the view changed.
  // Nothing else fades in: content is there when the page is.
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const pageTransition = {
    type: "tween",
    ease: "easeOut",
    duration: 0.15,
  };



  // Page links are real links: plain clicks stay in the app, while
  // middle-click or Cmd-click opens the page in a new tab.
  const goToPage = (e: React.MouseEvent, page: string) => {
    if (!isPlainClick(e)) return;
    e.preventDefault();
    if (page === "work") setActiveCaseStudy(null);
    setActivePage(page);
    setMobileMenuOpen(false);
  };

  const pages = [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "leadership", label: "Leadership" },
    { id: "impact", label: "Impact" },
  ];

  const Navigation = () => (
    <header
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
              <div className="font-heading font-normal text-foreground text-h3 uppercase tracking-caps">
                Elisa Vargas
              </div>
              <div className="font-body font-medium text-muted-foreground text-small">
                Director, Product Design
              </div>
            </motion.div>
          </div>

          {/* Desktop Nav */}
          <nav aria-label="Main" className="hidden md:flex items-center gap-8">
            {pages.map((page) => (
              <a
                key={page.id}
                href={pathFor(page.id, null)}
                aria-current={activePage === page.id ? "page" : undefined}
                onClick={(e) => goToPage(e, page.id)}
                className={`relative font-body text-body font-medium transition-colors duration-150 ${
                  activePage === page.id
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {page.label}
                {/* The underline slides to the page you just opened. */}
                {activePage === page.id && (
                  <motion.span
                    layoutId="nav-underline"
                    aria-hidden="true"
                    className="absolute left-0 right-0 -bottom-1.5 h-0.5 bg-primary"
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center ml-auto">
            <a
              href="https://linkedin.com/in/elisavargas/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 font-body font-medium border-2 border-border rounded-[2px] hover:bg-muted transition-colors text-small"
            >
              <LinkedinFilled size={16} />
              LinkedIn
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2.5 -mr-2.5"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
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
          <nav id="mobile-menu" aria-label="Main" className="md:hidden mt-4 pb-4 space-y-3">
            {pages.map((page) => (
              <a
                key={page.id}
                href={pathFor(page.id, null)}
                aria-current={activePage === page.id ? "page" : undefined}
                onClick={(e) => goToPage(e, page.id)}
                className={`block w-full text-left px-3 py-2 rounded-[2px] ${
                  activePage === page.id
                    ? "bg-secondary text-primary"
                    : "text-foreground"
                }`}
              >
                {page.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a
                href="https://linkedin.com/in/elisavargas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm border-2 border-border rounded-[2px]"
              >
                <LinkedinFilled size={16} />
                LinkedIn
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
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
            <h1 className="mb-4 font-heading font-normal text-foreground text-display uppercase tracking-caps">
              Elisa Vargas
            </h1>
            <p className="font-body text-foreground mb-4 text-lead">
              Design leader for AI search and products people use in the real world.
            </p>
            <p className="font-body text-foreground mb-4 max-w-[60ch] mx-auto text-body">
              I <a
                href={caseStudyPath("ethical-ai")}
                className="underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                onClick={(e: React.MouseEvent) => {
                  if (!isPlainClick(e)) return;
                  e.preventDefault();
                  handleCaseStudyClick("ethical-ai");
                }}
              >
                set direction from research
              </a>, <a
                href={caseStudyPath("razr-foldable")}
                className="underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                onClick={(e: React.MouseEvent) => {
                  if (!isPlainClick(e)) return;
                  e.preventDefault();
                  handleCaseStudyClick("razr-foldable");
                }}
              >
                connect the people who need to agree
              </a>, and <a
                href={caseStudyPath("ai-library")}
                className="underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                onClick={(e: React.MouseEvent) => {
                  if (!isPlainClick(e)) return;
                  e.preventDefault();
                  handleCaseStudyClick("ai-library");
                }}
              >
                get stalled work moving
              </a>.
            </p>
            <p className="font-body font-medium text-muted-foreground mb-8 text-body">
              Director, Product Design, JSTOR (ITHAKA)
              <br />
              Previously: Grubhub · Global UX Director, Motorola
            </p>
          </div>

          {/* Stats Bar - Responsive */}
          <motion.div
            className="bg-secondary border-2 border-secondary rounded-[2px] p-4 sm:p-6 lg:p-7 max-w-4xl mx-auto mb-8"
          >
            {/* Four scope numbers, each with a plain line saying what it means */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 sm:gap-6 text-center"
            >
              {[
                { value: "20+", label: "Years in design", detail: "Leading teams since 2006" },
                { value: "33", label: "Designers led", detail: "6 studios in the US, Brazil and China" },
                { value: "111M+", label: "People a year", detail: "Use the JSTOR products my team designs" },
                { value: "~1B", label: "Devices my work touched", detail: "Motorola, 2002–2020, from research to design leadership" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col gap-1"
                >
                  <div className="font-heading text-stat text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-primary tracking-wide">
                    {stat.label}
                  </div>
                  <div className="text-xs text-foreground">
                    {stat.detail}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Grid with equal columns keeps both buttons as wide as the wider one,
              side by side or stacked. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-fit mx-auto">
            <motion.a
              href={pathFor("work", null)}
              onClick={(e: React.MouseEvent) => goToPage(e, "work")}
              className="inline-block text-center w-full px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-[2px] hover:bg-primary/90 transition duration-150 active:translate-y-px"
            >
              View Case Studies
            </motion.a>
            <motion.a
              href={pathFor("leadership", null)}
              onClick={(e: React.MouseEvent) => goToPage(e, "leadership")}
              className="inline-block text-center w-full px-6 sm:px-8 py-3 bg-white border border-border rounded-[2px] hover:bg-muted transition duration-150 active:translate-y-px"
            >
              Leadership Approach
            </motion.a>
          </div>
        </div>
      </div>

      {/* Featured Work */}
      <div className="bg-surface-variant">
        <div className="marketing-grid py-16">
          <motion.h2
            className="text-center mb-12 font-heading font-normal text-foreground text-h2 uppercase tracking-caps"
          >
            Work I’m Proudest Of
          </motion.h2>
          {/* The lead project gets a wide card of its own; the next two sit below it.
              Different sizes tell the reader where to start. */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "AI That Shows Its Sources",
                subtitle: "The JSTOR Research Tool: ask, discover and validate every answer",
                metric: "~11,400 institutions",
                company: "JSTOR",
                id: "ethical-ai",
                image: researchCardImage,
              },
              {
                title: "Restaurants Own Their Orders",
                subtitle: "Grubhub Direct: commission-free ordering for local restaurants",
                metric: "Nearly 20x orders with Google Business Profile",
                company: "Grubhub",
                id: "grubhub-direct",
                image: grubhubImage,
                // Show the top of the dashboard; crop from the bottom.
                position: "object-top",
              },
              {
                title: "Bringing Back the RAZR",
                subtitle: "The Android RAZR: reimagining an icon for the smartphone age",
                metric: "Shaped Google's foldable cover-screen patterns",
                company: "Motorola",
                id: "razr-foldable",
                image: razrHeroImage,
              },
            ].map((project, i) => {
              const lead = i === 0;
              return (
              <motion.a
                key={project.id}
                href={caseStudyPath(project.id)}
                onClick={(e: React.MouseEvent) => {
                  if (!isPlainClick(e)) return;
                  e.preventDefault();
                  handleCaseStudyClick(project.id);
                }}
                className={`group bg-white border border-border rounded-[2px] overflow-hidden hover:border-primary transition-colors duration-150 cursor-pointer focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-primary ${lead ? "md:col-span-2 md:grid md:grid-cols-[3fr_2fr]" : "block"}`}
              >
                <div className={`overflow-hidden ${lead ? "h-56 md:h-full md:min-h-[18rem]" : "h-48"}`}>
                  <img
                    src={project.image || heroImage}
                    alt=""
                    className={`w-full h-full object-cover ${"position" in project ? project.position : "object-center"}`}
                  />
                </div>
                <div className={lead ? "p-6 md:p-8 flex flex-col justify-center" : "p-6"}>
                  <div className="text-xs text-primary mb-2">
                    {project.company}
                  </div>
                  <div className={lead ? "font-heading text-h2 mb-3" : "text-xl mb-2"}>
                    {project.title}
                  </div>
                  <div className={`text-foreground mb-4 ${lead ? "text-body" : "text-sm"}`}>
                    {project.subtitle}
                  </div>
                  <div className={`text-primary flex items-center gap-1 ${lead ? "text-body font-medium" : "text-sm"}`}>
                    {project.metric}
                    <span aria-hidden="true" className="inline-block transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                  </div>
                </div>
              </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Impact Highlight */}
      <div className="on-dark bg-primary border-t-2 border-ring border-b-2 border-ring">
        <div className="marketing-grid py-16 text-center">
          <h2 className="mb-12 text-white font-heading font-normal text-h2 uppercase tracking-caps">
            Results
          </h2>
          {/* Outcomes my teams drove, each explained in a case study or on Leadership */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                value: "52% vs 39%",
                label: "AI-assisted search",
                detail: "JSTOR Dynamic Search queries that led people to content, versus keyword search",
              },
              {
                value: "+80%",
                label: "Primary source use",
                detail: "Year over year, after my team moved JSTOR recommendations inline and above the fold",
              },
              {
                value: "Top 1%",
                label: "Accessibility",
                detail: "JSTOR in the WebAIM Million, with a 98% drop in accessibility errors",
              },
            ].map((r) => (
              <div key={r.label} className="flex flex-col gap-2 items-center">
                <p className="font-heading font-normal text-white mb-2 text-stat">
                  {r.value}
                </p>
                <p className="font-body font-normal text-primary-foreground text-body">
                  {r.label}
                </p>
                <p className="font-body font-normal text-white mt-2 text-small">
                  {r.detail}
                </p>
              </div>
            ))}
          </div>
          <motion.a
            href={pathFor("impact", null)}
              onClick={(e: React.MouseEvent) => goToPage(e, "impact")}
            className="inline-block text-center mt-12 px-8 py-3 bg-white rounded-[2px] font-body font-medium text-primary hover:bg-white/90 text-small transition duration-150 active:translate-y-px"
          >
            View All Results
          </motion.a>
        </div>
      </div>

      {/* Leadership Teaser */}
      <div className="bg-surface-variant">
        <div className="marketing-grid py-16">
          <h2 className="text-center mb-8 font-heading font-normal text-foreground text-h2 uppercase tracking-caps">
            How I Lead
          </h2>
          <div
            className="bg-white border border-border rounded-[2px] p-8 mb-8 max-w-[75ch] mx-auto"
          >
            <div className="mb-6">
              <span className="font-body text-foreground text-body">
                How I hire, grow and run design teams, and what
                partners say about working with me.
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {LEADERSHIP_SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`/leadership#${section.id}`}
                  className="font-body text-primary hover:underline cursor-pointer text-body"
                  onClick={(e) => {
                    if (!isPlainClick(e)) return;
                    e.preventDefault();
                    navigateToLeadershipSection(section.id);
                  }}
                >
                  {"→"} {section.label}
                </a>
              ))}
            </div>
          </div>
          <div className="text-center">
            <motion.a
              href={pathFor("leadership", null)}
              onClick={(e: React.MouseEvent) => goToPage(e, "leadership")}
              className="inline-block text-center px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-[2px] hover:bg-primary/90 transition duration-150 active:translate-y-px"
            >
              Read Full Leadership Philosophy
            </motion.a>
          </div>
        </div>
      </div>

      {/* What I'm Looking For */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-center mb-8 font-heading font-normal text-foreground text-h2 uppercase tracking-caps">
          What I&rsquo;m Looking For
        </h2>
        <div className="bg-secondary border-2 border-border rounded-[2px] p-8 text-center">
          <div className="text-foreground leading-relaxed max-w-3xl mx-auto">
            Director and Senior Director design leadership roles in AI, search and consumer platforms, where grounded AI, recommendations and assistive experiences help people find what matters and act on it, online and in the real world.
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-secondary border-t-2 border-secondary">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-center mb-12 font-heading font-normal text-foreground text-h2 uppercase tracking-caps">
            What Partners Say
          </h2>
          {/* One Strategic and one Catalyst quote; Leadership shows all five. */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div
              className="bg-white border border-border rounded-[2px] px-8 py-6 flex flex-col gap-3"
            >
              <div className="flex items-start">
                <div className="bg-secondary px-3 py-1 rounded-full">
                  <p className="font-body font-medium text-secondary-foreground text-label">
                    Strategic
                  </p>
                </div>
              </div>
              <div>
                <p className="font-heading font-normal italic text-muted-foreground text-quote">
                  &ldquo;Her knowledge and ability to balance business and customer needs are impressive. Her rational and decision-making process is clear, there is no guesswork with her.&rdquo;
                </p>
              </div>
              <div>
                <p className="font-body font-normal text-muted-foreground text-small">
                  — Product/Engineering Partner, Linkage Institute, Advancing Women Leaders 360 Assessment, 2019
                </p>
              </div>
            </div>
            <div
              className="bg-white border border-border rounded-[2px] px-8 py-6 flex flex-col gap-3"
            >
              <div className="flex items-start">
                <div className="bg-secondary px-3 py-1 rounded-full">
                  <p className="font-body font-medium text-secondary-foreground text-label">
                    Catalyst
                  </p>
                </div>
              </div>
              <div>
                <p className="font-heading font-normal italic text-muted-foreground text-quote">
                  &ldquo;Elisa&rsquo;s super power is her ability to move ideas forward and help teams hone in on the best solution when we get stuck. She does this working iteratively and collaboratively.&rdquo;
                </p>
              </div>
              <div>
                <p className="font-body font-normal text-muted-foreground text-small">
                  — Peer/Partner, Leadership Circle Profile assessment, 2024
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <motion.a
              href="/leadership#partners-say"
              onClick={(e: React.MouseEvent) => {
                if (!isPlainClick(e)) return;
                e.preventDefault();
                navigateToLeadershipSection("partners-say");
              }}
              className="inline-block bg-white px-7 py-3 rounded-[2px] font-body font-medium text-foreground hover:bg-gray-50 cursor-pointer text-small transition duration-150 active:translate-y-px"
            >
              Read All Testimonials
            </motion.a>
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
        "moto-app": MotoApp,
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

  return (
    <div
      className="min-h-screen bg-background"
      style={{ scrollBehavior: "smooth" }}
    >
      <a
        href="#main"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        Skip to content
      </a>
      {/* Called as functions, not <Components />, so a re-render (for
          example on scroll) keeps the same DOM and keyboard focus. */}
      {Navigation()}

      <main id="main" tabIndex={-1} ref={contentRef} className="w-full outline-none">
        <AnimatePresence mode="wait">
          {activePage === "home" && React.cloneElement(HomePage(), { key: "home" })}
          {activePage === "work" && React.cloneElement(WorkPage(), { key: "work" })}
          {activePage === "leadership" && (
            React.cloneElement(LeadershipPage(), { key: "leadership" })
          )}
          {activePage === "impact" && (
            React.cloneElement(ImpactPage(), { key: "impact" })
          )}
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleFooterNavigation} />
    </div>
  );
};

export default PortfolioWireframes;