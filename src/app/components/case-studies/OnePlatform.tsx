import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { CaseStudyFooter } from '../CaseStudyFooter';
import onePlatformImage from 'figma:asset/40bf45078ad84575a1178136d73d285002fdf9bc.png';

interface OnePlatformProps {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const OnePlatform: React.FC<OnePlatformProps> = ({ onBack, onNavigate }) => {
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
          src={onePlatformImage} 
          alt="JSTOR platform integration"
          className="w-full h-64 md:h-[500px] object-cover"
        />
      </div>

      {/* Title Section - Full Width Background */}
      <div className="w-full bg-secondary">
        <div className="blog-grid py-12 sm:py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary text-primary-foreground font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] px-3 py-1 rounded-full">
              Platform Integration
            </span>
            <span className="font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] text-[#1b1c15]">
              2023-2024
            </span>
          </div>
          <h1 className="font-['EB_Garamond'] text-[40px] leading-[44px] tracking-[-0.8px] text-[#1b1c15] mb-6">
            One Platform Integration
          </h1>
          <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15] mb-8">
            Migrating Artstor Users While Expanding JSTOR&apos;s Capabilities
          </h2>
          <div className="space-y-2">
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <strong>Role:</strong> Product Design Director, JSTOR
            </p>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <strong>Work Partners:</strong> Product Management, Research, Marketing, Visual Resource Association (VRA) Librarians
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full py-12">
        <div className="flex flex-col gap-12">
          {/* Context & Business Challenge */}
          <section className="blog-grid flex flex-col gap-6">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              Context
            </h2>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              When JSTOR merged with Artstor, faculty teaching workflows hung in the balance. Instructors relied heavily on Artstor&apos;s organizational tools to manage course materials, and a failed integration could drive high-value users to competitor platforms.
            </p>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              In 2023–24, JSTOR executed a major strategic initiative to complete the Artstor-JSTOR &quot;One Platform&quot; integration. This effort was required to strengthen JSTOR&apos;s position as a teaching resource, consolidate offerings for operational efficiency, and protect revenue by increasing the value of both platforms.
            </p>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              As Product Design Director at JSTOR (2022-present), I provided strategic oversight and executive counsel for this mission-critical effort. My senior design leads fully owned and executed the demanding technical and design integration, engaging me primarily when cross-functional roadblocks were encountered.
            </p>
          </section>

          {/* Design Leadership & Approach */}
          <section className="blog-grid flex flex-col gap-6">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              Solution
            </h2>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Integrating New Content Types
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                The team delivered bespoke UX to successfully integrate images, video, and audio into the core JSTOR experience. New audio/video support was live by December 2023.
              </p>
            </div>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Preserving Faculty Workflows
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                To mitigate retention risk, the team relaunched Artstor&apos;s image groups as Workspace folders. They also launched Personal Uploads in April 2024, enabling faculty to combine their own content with licensed JSTOR images.
              </p>
            </div>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Standardizing Metadata
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                The design team ensured consistency by collaborating with Visual Resource Association (VRA) library leads to approve and implement a consistent metadata pattern for all new content types across item pages.
              </p>
            </div>
          </section>

          {/* System Integration & Navigation */}
          <section className="blog-grid flex flex-col gap-6">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              Outcome
            </h2>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              This integration effort was successfully completed in June 2024, ahead of the legacy Artstor site&apos;s August 1 retirement deadline.
            </p>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Risk Mitigation
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                By facilitating the seamless migration of instructional materials, the design strategy significantly reduced the risk of faculty migrating to competitor platforms such as licensed museum databases.
              </p>
            </div>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Enhanced Discovery & Usage
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                The consolidation led to overall growth of image use on JSTOR. Image discovery was enhanced through the reimagined Browse → Images feature, which began showcasing Artstor Collections effectively in February 2024.
              </p>
            </div>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Operational Efficiency
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                The successful consolidation resulted in improved operational efficiency and a unified content experience for users.
              </p>
            </div>
          </section>

          {/* Project Overview Video */}
          <div className="w-full py-12 px-4 lg:px-8">
            <div className="max-w-[90ch] mx-auto">
              <div className="w-full border-2 border-[#dfc4ba] rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/6lnD4r-0R9M?si=fRZQdFCX1QUDu7vD" 
                  title="One Platform Integration" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CaseStudyFooter currentProjectId="one-platform" onNavigate={onNavigate} />
    </motion.div>
  );
};