import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { CaseStudyFooter } from '../CaseStudyFooter';
import ecosystemHeroImage from 'figma:asset/774fe7984e90b868f7bef781139dec0d74a4f332.png';

interface EcosystemInfrastructureProps {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const EcosystemInfrastructure: React.FC<EcosystemInfrastructureProps> = ({ onBack, onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white"
    >
      {/* Back Button */}
      <div className="blog-grid pt-8 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Work
        </button>
      </div>

      {/* Hero Image - Full Width Band */}
      <div className="w-full">
        <img 
          src={ecosystemHeroImage} 
          alt="Design system and infrastructure"
          className="w-full h-64 md:h-[500px] object-cover object-top"
        />
      </div>

      {/* Title Section - Full Width Background */}
      <div className="w-full bg-secondary">
        <div className="blog-grid py-12 sm:py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary text-primary-foreground font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] px-3 py-1 rounded-full">
              Design Systems
            </span>
            <span className="font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] text-[#1b1c15]">
              2022-2025
            </span>
          </div>
          <h1 className="font-['EB_Garamond'] text-[40px] leading-[44px] tracking-[-0.8px] text-[#1b1c15] mb-6">
            Design Systems and Governance at Scale
          </h1>
          <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15] mb-8">
            Building Pharos as JSTOR&rsquo;s Design Infrastructure
          </h2>
          <div className="space-y-2">
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <strong>Role:</strong> Product Design Director, JSTOR
            </p>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <strong>Work Partners:</strong> Product Design Team, Engineering, Product Management, Accessibility
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full py-12">
        <div className="flex flex-col gap-12">
          {/* Introduction */}
          <section className="blog-grid flex flex-col gap-6">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              Context
            </h2>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              To unify JSTOR&rsquo;s product ecosystem and scale design quality across a fast-growing platform, the organization needed a modern, developer-integrated design system, one built to enforce consistency, absorb accessibility requirements by default, and support teams without dedicated design staff of their own. Fragmentation across tools and teams was slowing delivery and creating accessibility risk across a platform serving institutions in 194 countries.
            </p>
          </section>

          {/* Design Leadership & Approach */}
          <section className="blog-grid flex flex-col gap-6">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              Design Leadership & Approach
            </h2>
            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Design System Advocacy and Governance (Pharos)
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                My focus on Pharos centered on institutionalizing its governance model and securing the necessary investment and adoption across federated product teams.
              </p>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                <strong>Technical Stack & Innovation:</strong> Pioneering the integration of <strong>Figma Code Connect</strong> and <strong>MCP (Model Context Protocol)</strong> servers to automate the translation of design tokens into production-ready code. This infrastructure supports a federated model using <strong>Storybook</strong> and <strong>npm package distribution</strong>, bridging the gap between design and engineering velocity.
              </p>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                <strong>Executive Champion:</strong> I joined the existing federated governance model (&ldquo;Pharos Wickies&rdquo; cross-functional guild) after the core team was dissolved and became its executive champion. I actively promoted the design system&rsquo;s adoption and contribution pathways, reinforcing expectations for consistency across experiences.
              </p>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                <strong>Developer Tooling Advocacy:</strong> I successfully advocated for investment in modern developer tooling, ensuring first-class tools for designers and engineers. This infrastructure includes a component library with Storybook documentation, npm package distribution, visual regression testing (Chromatic), and leveraging the TypeScript/Lit/Playwright stack.
              </p>
            </div>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Extending the System Beyond Fully-Staffed Teams
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                One Admin, JSTOR&rsquo;s enterprise administration portal serving Institutions, Consortia, Contributors, and Publishers, was built by a single designer without dedicated Product Design headcount. Pharos gave that designer production-ready, role-based components to consolidate fragmented reporting, user management, and access functions into one coherent experience without designing a system from scratch, a clear example of what a mature design system should do: extend consistent, accessible quality to teams design can&rsquo;t staff directly.
              </p>
            </div>
          </section>

          {/* Systems Health Dashboard - Full Width*/}
          <div className="w-full bg-secondary">
            <div className="blog-grid py-12 sm:py-16">
              <h3 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15] mb-8 text-center">
                Systems Health Dashboard
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Metric 1: Accessibility */}
                <div className="flex flex-col gap-2 p-6 bg-white border border-[#c6c8b8] rounded">
                  <div className="font-['Spline_Sans'] text-[14px] leading-[20px] tracking-[0.5px] text-[#1b1c15] uppercase mb-2">
                    Risk & Quality
                  </div>
                  <div className="font-['EB_Garamond'] text-[48px] leading-[56px] text-primary">
                    98%
                  </div>
                  <div className="font-['Spline_Sans'] text-[16px] leading-[20px] text-[#1b1c15] mb-1">
                    Accessibility Improvement
                  </div>
                  <div className="font-['Spline_Sans'] text-[13px] leading-[18px] text-[#1b1c15]/70 italic">
                    (Top 1% WAVE Ranking)
                  </div>
                </div>

                {/* Metric 2: Animation Workflow */}
                <div className="flex flex-col gap-2 p-6 bg-white border border-[#c6c8b8] rounded">
                  <div className="font-['Spline_Sans'] text-[14px] leading-[20px] tracking-[0.5px] text-[#1b1c15] uppercase mb-2">
                    Adoption
                  </div>
                  <div className="font-['EB_Garamond'] text-[48px] leading-[56px] text-primary">
                    60–70%
                  </div>
                  <div className="font-['Spline_Sans'] text-[16px] leading-[20px] text-[#1b1c15] mb-1">
                    Pharos adoption
                  </div>
                  <div className="font-['Spline_Sans'] text-[13px] leading-[18px] text-[#1b1c15]/70 italic">
                    Snowflakes yet to be integrated
                  </div>
                </div>

                {/* Metric 3: Upstream Integration */}
                <div className="flex flex-col gap-2 p-6 bg-white border border-[#c6c8b8] rounded">
                  <div className="font-['Spline_Sans'] text-[14px] leading-[20px] tracking-[0.5px] text-[#1b1c15] uppercase mb-2">
                    Strategic Velocity
                  </div>
                  <div className="font-['EB_Garamond'] text-[48px] leading-[56px] text-primary">
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                      <path d="M24 8L24 40M24 8L16 16M24 8L32 16" stroke="#546524" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="font-['Spline_Sans'] text-[16px] leading-[20px] text-[#1b1c15] mb-1">
                    Upstream Integration
                  </div>
                  <div className="font-['Spline_Sans'] text-[13px] leading-[18px] text-[#1b1c15]/70 italic">
                    (Design as Strategic Partner)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Outcomes & Impact */}
          <div className="blog-grid flex flex-col gap-6">
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              Building standards into the system itself, rather than relying on late-stage fixes, elevated design&rsquo;s strategic position across the organization.
            </p>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Accessibility Transformation and Risk Reduction
              </h3>
              <ul className="list-disc list-inside">
                <li className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                  Achieved a monumental 98% improvement in accessibility, earning JSTOR a Top 1% WAVE ranking across the platform.
                </li>
                <li className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                  This transformation was driven by the strategic hiring of a specialized accessibility lead and implementing a "shift-left" approach that integrated standards directly into the design system.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Strategic Influence and Operational Efficiency
              </h3>
              <ul className="list-disc list-inside">
                <li className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                  Design successfully evolved into a trusted strategic partner to Product Management and Engineering leadership.
                </li>
                <li className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                  The formalized processes and governance established helped lead to faster, more consistent product launches.
                </li>
                <li className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                  Evidence shows increased upstream engagement in roadmap planning and strategy forums, with executive communications noting design as a strategic partner worth expanding.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <CaseStudyFooter currentProjectId="ecosystem-infrastructure" onNavigate={onNavigate} />
    </motion.div>
  );
};