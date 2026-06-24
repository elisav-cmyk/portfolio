import React from "react";
import { Globe, GraduationCap, Download } from "lucide-react";
import { motion } from "motion/react";

interface AboutPageProps {
  pageVariants: any;
  pageTransition: any;
}

export const AboutPageContent: React.FC<AboutPageProps> = ({
  pageVariants,
  pageTransition,
}) => (
  <motion.div
    className="bg-background marketing-grid"
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    transition={pageTransition}
  >
    <div className="py-16">
      <div className="max-w-[1104px] mx-auto px-6">
        <div className="max-w-[75ch] mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="mb-4 font-['EB_Garamond'] text-[clamp(2rem,1.75rem+1.75vmin,2.5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground">
              ABOUT
            </h1>
            <p className="font-['Spline_Sans'] text-[1.375rem] leading-[1.75rem] text-foreground">
              20+ years building design organizations and products that serve millions
            </p>
          </div>

          {/* BACKGROUND & EXPERTISE Section */}
          <div className="mb-12">
            <h2 className="mb-8 pb-2 border-b-2 border-border font-['EB_Garamond'] text-[clamp(1.75rem,1.625rem+0.875vmin,2rem)] font-normal leading-[1.25] tracking-normal text-foreground">
              BACKGROUND & EXPERTISE
            </h2>

            {/* Main Bio */}
            <div className="bg-secondary-foreground rounded-[10px] p-8 mb-8 shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
              <div className="space-y-7 font-['Spline_Sans'] leading-[1.5rem] text-white">
                <p>Product Design Director who builds teams and solves hard problems at scale.</p>
                <p>
                  I lead design teams creating products that push boundaries: the Android RAZR foldable
                  (Red Dot &quot;Best of the Best&quot;), ethical AI research tools (3× engagement
                  increase), platform integrations serving 111M+ users. At Motorola, I directed 33
                  designers across 6 global studios within $9.78B operations. At JSTOR, I&apos;m shaping
                  how AI serves academic research with integrity.
                </p>
                <p>
                  What drives me: solving complex problems on products with real impact—academic research
                  tools, hardware/software integration, platform-scale experiences. I bridge customer
                  needs and engineering constraints through strategic clarity, empowering senior leads to
                  deliver exceptional work. At Motorola, I led the Brazil Design Studio to deliver
                  concepts that shaped the product portfolio. My partners say I &quot;know how to be firm
                  when it matters and give when it doesn&apos;t.&quot;
                </p>
                <p>
                  Looking for leadership roles at companies building meaningful products (e.g. platform
                  innovation, AI/ML, emerging technology) where design strategy drives both user
                  experience and business outcomes.
                </p>
              </div>
            </div>

            {/* Strategic Industry Influence */}
            <div className="bg-muted rounded-[10px] p-8 shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
              <h3 className="font-['Spline_Sans'] text-[1.375rem] leading-[2rem] text-neutral-950 mb-4">
                Strategic Industry Influence
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-secondary-foreground mb-1">
                    Android Ecosystem & Platform Standards
                  </div>
                  <div className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-muted-foreground">
                    As a strategic partner to the Google Android team, I directed the UX for the Android RAZR foldable, directly influencing Android framework standards for small-screen foldables. My team collaborated with Google to define gesture navigation patterns and GMS Calling app integrations, ensuring OEM customization aligned with core OS evolution.
                  </div>
                  <ul className="mt-2 ml-4 font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-muted-foreground">
                    <li>• Impact: Influenced the Android OS roadmap for foldables and shipped ~1 billion devices across the Android ecosystem.</li>
                  </ul>
                </div>
                <div>
                  <div className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-secondary-foreground mb-1">
                    Enterprise Design Systems & Developer Velocity
                  </div>
                  <div className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-muted-foreground">
                    I bridge the gap between design and engineering by championing &quot;Code Connect&quot; workflows. At JSTOR, I pioneered AI-enabled design-to-code pipelines using Figma and MCP servers to unify federated teams. Previously at Motorola, I drove the platform-level integration of the Lottie animation framework, negotiating security approvals to deliver 10x efficiency gains across global studios.
                  </div>
                </div>
                <div>
                  <div className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-secondary-foreground mb-1">
                    AI Strategy & Platform Governance
                  </div>
                  <div className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-muted-foreground">
                    Directed the design strategy for high-compliance AI tools, defining the user-centric constraints (e.g., RAG-only sourcing) required for institutional trust. Led the execution of multi-persona ecosystems, bridging low-code business interfaces and pro-code developer tools.
                  </div>
                </div>
              </div>
            </div>

            {/* Core Expertise & Industries Grid */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-muted rounded-[10px] p-6 shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
                <h3 className="font-['Spline_Sans'] text-[1.375rem] leading-[2rem] text-neutral-950 mb-4">
                  Core Expertise
                </h3>
                <ul className="space-y-2.5 font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-secondary-foreground">
                  <li>• Platform Design & Systems Thinking</li>
                  <li>• Design Operations & Team Building</li>
                  <li>• Cross-Functional Leadership</li>
                </ul>
              </div>

              <div className="bg-muted rounded-[10px] p-6 shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
                <h3 className="font-['Spline_Sans'] text-[1.375rem] leading-[2rem] text-neutral-950 mb-4">
                  Industries & Domains
                </h3>
                <ul className="space-y-2.5 font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-secondary-foreground">
                  <li>• EdTech & Academic Research (JSTOR)</li>
                  <li>• Consumer Hardware/Software (Motorola)</li>
                  <li>• Food Delivery & Marketplace (Grubhub)</li>
                  <li>• AI & Emerging Technologies</li>
                  <li>• Platform & Systems Design</li>
                  <li>• Mobile & Web Applications</li>
                </ul>
              </div>
            </div>

            {/* Career Highlights */}
            <div className="bg-muted rounded-[10px] p-8 mt-8 shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
              <h3 className="font-['Spline_Sans'] text-[1.375rem] leading-[2rem] text-neutral-950 mb-4">
                Career Highlights
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-secondary-foreground mb-1">
                    JSTOR / ITHAKA (2021-Present)
                  </div>
                  <div className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-muted-foreground">
                    Product Design Director leading ethical AI research tools, platform integration, and
                    accessibility excellence
                  </div>
                </div>
                <div>
                  <div className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-secondary-foreground mb-1">
                    Grubhub (2020-2021)
                  </div>
                  <div className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-muted-foreground">
                    Design Director leading Restaurant and Driver product teams. Hired 5 people in one
                    year (1 design manager, 3 senior designers, 1 content strategist) to rapidly build
                    design capability.
                  </div>
                </div>
                <div>
                  <div className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-secondary-foreground mb-1">
                    Motorola Mobility (2002-2020)
                  </div>
                  <div className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-muted-foreground">
                    Head of UX leading 33 designers across 6 global studios within $9.78B operations.
                    Directed product design for 24-device portfolio. Led iconic RAZR foldable launch and
                    influenced Android framework standards.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* International Experience Section */}
          <div className="relative left-1/2 -translate-x-1/2 w-screen bg-primary border-t-2 border-b-2 border-primary py-16 px-6 mb-16">
            <div className="max-w-[1104px] mx-auto">
              <div className="max-w-[75ch] mx-auto">
                <h2 className="mb-8 pb-2 border-b-2 border-border font-['EB_Garamond'] text-[clamp(1.75rem,1.625rem+0.875vmin,2rem)] font-normal leading-[1.25] tracking-normal text-white">
                  INTERNATIONAL EXPERIENCE
                </h2>

                {/* Global Leadership Intro */}
                <div className="bg-white rounded-[10px] p-8 mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="text-secondary-foreground" size={32} />
                    <h3 className="font-['Spline_Sans'] text-[1.375rem] leading-[2rem] text-neutral-950">
                      Global Design Leadership
                    </h3>
                  </div>
                  <p className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] tracking-[0.03125rem] text-foreground">
                    I&apos;ve built and led design teams across three continents, navigating cultural
                    differences, time zones, and regional market needs while maintaining design excellence
                    and organizational cohesion.
                  </p>
                </div>

                {/* Country Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="bg-white rounded-[10px] p-6 shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
                    <h4 className="font-['Spline_Sans'] text-[1.375rem] leading-[2rem] text-neutral-950 mb-4">
                      🇧🇷 Brazil
                    </h4>
                    <p className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-secondary-foreground mb-4">
                      Led Motorola&apos;s 13-person Brazil design studio. Rapidly scaled UX/UI team from 2
                      to 6 designers in one year through strategic hiring. Led localized product development
                      including DTV Mod (sold out) and regional customizations for Latin American markets.
                    </p>
                    <p className="font-['Spline_Sans'] text-[0.75rem] leading-[1rem] tracking-[0.025rem] text-muted-foreground">
                      São Paulo Studio, 2016-2017 | Studio Director leading 13-person multidisciplinary
                      team; tripled UX capacity through strategic hiring
                    </p>
                  </div>

                  <div className="bg-white rounded-[10px] p-6 shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
                    <h4 className="font-['Spline_Sans'] text-[1.375rem] leading-[2rem] text-neutral-950 mb-4">
                      🇨🇳 China
                    </h4>
                    <p className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-secondary-foreground mb-4">
                      Managed design teams in Beijing and collaborated on products for Chinese market.
                      Coordinated across 12-hour time zones and navigated cultural business practices.
                    </p>
                    <p className="font-['Spline_Sans'] text-[0.75rem] leading-[1rem] tracking-[0.025rem] text-muted-foreground">
                      Beijing Studio, 2014-2020
                    </p>
                  </div>

                  <div className="bg-white rounded-[10px] p-6 shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
                    <h4 className="font-['Spline_Sans'] text-[1.375rem] leading-[2rem] text-neutral-950 mb-4">
                      🇺🇸 United States
                    </h4>
                    <p className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-secondary-foreground mb-4">
                      Led design organizations in Chicago serving global markets. Managed distributed teams
                      across US locations including Chicago, San Francisco, and satellite offices.
                    </p>
                    <p className="font-['Spline_Sans'] text-[0.75rem] leading-[1rem] tracking-[0.025rem] text-muted-foreground">
                      Led design teams in Chicago serving global markets. Managed globally distributed team
                      of 30+ across 6 studios. Chicago HQ, 2017-2020
                    </p>
                  </div>
                </div>

                {/* Global Impact at JSTOR */}
                <div className="bg-white rounded-[10px] p-8 shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
                  <h4 className="font-['Spline_Sans'] text-[1.375rem] leading-[1.75rem] text-neutral-950 mb-3">
                    Global Impact at JSTOR
                  </h4>
                  <p className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-secondary-foreground">
                    Currently serving 111M+ users across 194 countries and 14,000 libraries worldwide,
                    designing for diverse academic institutions from major research universities to small
                    colleges across every continent.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Teaching & Mentorship Section */}
          <div className="max-w-[1104px] mx-auto mb-16">
            <h2 className="mb-8 pb-2 border-b-2 border-border font-['EB_Garamond'] text-[clamp(1.75rem,1.625rem+0.875vmin,2rem)] font-normal leading-[1.25] tracking-normal text-foreground">
              TEACHING & MENTORSHIP
            </h2>

            {/* Developing Future Leaders */}
            <div className="bg-muted rounded-[10px] p-8 mb-8 shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-secondary-foreground" size={32} />
                <h3 className="font-['Spline_Sans'] text-[1.375rem] leading-[1.75rem] text-neutral-950">
                  Developing Future Leaders
                </h3>
              </div>
              <p className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-muted-foreground">
                I&apos;m passionate about growing the next generation of design leaders. Beyond managing
                teams, I actively mentor designers, speak at industry events, and create learning
                opportunities that accelerate career growth.
              </p>
            </div>

            {/* Mentorship & Development Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-muted rounded-[10px] p-6 shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
                <h4 className="font-['Spline_Sans'] text-[1.375rem] leading-[1.75rem] text-neutral-950 mb-4">
                  Mentorship Outcomes
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="font-['Spline_Sans'] text-[14px] leading-[1rem] tracking-[0.025rem] text-[rgb(61,76,13)] mb-2">
                      Staff {'→'} Senior {'→'} Manager
                    </div>
                    <p className="font-['Spline_Sans'] text-[0.75rem] leading-[1rem] tracking-[0.025rem] text-muted-foreground">
                      Three-person RAZR team (all new to Motorola/mobile) led high-stakes 2019 foldable
                      relaunch. Two team members are now Design Managers: industrial designer in Brazil
                      driving innovation, UI designer leading design efforts. UX designer developed mobile
                      expertise informing subsequent portfolio launches.
                    </p>
                  </div>
                  <div>
                    <div className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-[rgb(61,76,13)] mb-2">
                      Multiple Promotions
                    </div>
                    <p className="font-['Spline_Sans'] text-[0.75rem] leading-[1rem] tracking-[0.025rem] text-muted-foreground">
                      Team members advanced to senior and principal roles across design disciplines
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-[10px] p-6 shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
                <h4 className="font-['Spline_Sans'] text-[1.375rem] leading-[1.75rem] text-neutral-950 mb-4">
                  Developer&apos;s Approach
                </h4>
                <ul className="space-y-2 font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-secondary-foreground">
                  <li className="flex gap-2">
                    <span className="flex-shrink-0">•</span>
                    <span>Created Design Career Framework defining growth paths from junior to principal</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="flex-shrink-0">•</span>
                    <span>Instituted monthly 1:1s focused on career development, not just task updates</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="flex-shrink-0">•</span>
                    <span>Provided stretch assignments: led designers take on new domains, present to executives</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="flex-shrink-0">•</span>
                    <span>Advocated for promotions with documented impact evidence</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Knowledge Sharing */}
            <div className="bg-muted rounded-[10px] p-6 shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
              <h4 className="font-['Spline_Sans'] text-[1.375rem] leading-[1.75rem] text-neutral-950 mb-4">
                Knowledge Sharing
              </h4>
              <div className="space-y-2 font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-secondary-foreground">
                <p>Adjunct Faculty</p>
                <p className="text-muted-foreground">
                  Northwestern University (Master of Product Design & Development Innovation, Graduate
                  Student Advisor)
                </p>
                <p>Speaker/Mentor</p>
                <p className="text-muted-foreground">Industry events and design community contributions</p>
              </div>
            </div>
          </div>

          {/* Resume Download Section */}
          <div className="max-w-[1104px] mx-auto">
            <h2 className="mb-8 pb-2 border-b-2 border-border font-['EB_Garamond'] text-[clamp(1.75rem,1.625rem+0.875vmin,2rem)] font-normal leading-[1.25] tracking-normal text-foreground">
              RESUME DOWNLOAD
            </h2>

            <div className="bg-secondary rounded-[10px] p-8 mb-8 shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-['Spline_Sans'] text-[1.125rem] leading-[1.5rem] text-foreground mb-2">
                    Download Resume (PDF)
                  </h3>
                  <p className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] text-muted-foreground">
                    Full career details, professional experience & accomplishments in downloadable format.
                  </p>
                </div>
                <a
                  href="https://drive.google.com/uc?export=download&id=1_bkvqB0_NBGWtkarGIDnU9lut0ACDQ-Q"
                  download
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-[10px] hover:bg-primary/90 transition-colors whitespace-nowrap shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]"
                >
                  <Download size={20} />
                  Download PDF
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-[10px] p-6 shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
                <div className="font-['EB_Garamond'] text-[2.5rem] leading-tight text-primary mb-2">
                  20+
                </div>
                <div className="text-[0.875rem] text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-white rounded-[10px] p-6 shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
                <div className="font-['EB_Garamond'] text-[2.5rem] leading-tight text-primary mb-2">
                  3
                </div>
                <div className="text-[0.875rem] text-muted-foreground">Continents</div>
              </div>
              <div className="bg-white rounded-[10px] p-6 shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
                <div className="font-['EB_Garamond'] text-[2.5rem] leading-tight text-primary mb-2">
                  110+
                </div>
                <div className="text-[0.875rem] text-muted-foreground">Million Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);