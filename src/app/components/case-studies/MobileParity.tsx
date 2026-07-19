import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { CaseStudyFooter } from '../CaseStudyFooter';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface MobileParityProps {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const MobileParity: React.FC<MobileParityProps> = ({ onBack, onNavigate }) => {
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
        <ImageWithFallback
          src=""
          alt="Designing for Mobile Parity at JSTOR"
          className="w-full h-64 md:h-[500px] object-cover"
        />
      </div>

      {/* Title Section - Full Width Background */}
      <div className="w-full bg-secondary">
        <div className="blog-grid py-12 sm:py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary text-primary-foreground font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] px-3 py-1 rounded-full">
              Platform Strategy
            </span>
            <span className="font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] text-[#1b1c15]">
              2021-2025
            </span>
          </div>
          <h1 className="font-['EB_Garamond'] text-[40px] leading-[44px] tracking-[-0.8px] text-[#1b1c15] mb-6">
            Designing for Mobile Parity
          </h1>
          <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15] mb-8">
            JSTOR
          </h2>
          <div className="space-y-2">
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <strong>Role:</strong> Product Design Director, JSTOR
            </p>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <strong>Work Partners:</strong> Product Management, Engineering, User Insights Research,
              Accessibility, Visual Resource Association (VRA) library leads
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
              Context & Business Challenge
            </h2>
            <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <p>
                By 2021, mobile had become too large a share of JSTOR&apos;s traffic to treat it as
                secondary: 38% of users, 26% of sessions, 19% of pageviews, and climbing toward 40% by
                mid-2023. Internal research raised a direct concern: JSTOR was losing usage to poor mobile
                optimization, especially in navigation, turnaway flows, and content evaluation. The
                clearest example was the IIIF viewer used for reading journal text: only 63% of users were
                satisfied with it, and only 57% found it easy to move between pages. Frustrations were
                driven by an inability to search within documents, mouse-wheel zoom instead of scroll, and
                frequent page-manipulation errors that eroded trust. This wasn&apos;t only a UX problem:
                JSTOR serves 194 countries, and in some Tier 1&ndash;3 markets, mobile is the only viable
                path to the platform meaning mobile investment directly contributes to ITHAKA&apos;s access
                mission.
              </p>
            </div>
          </section>

          {/* Design Leadership & Approach */}
          <section className="blog-grid flex flex-col gap-6">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              Design Leadership & Approach
            </h2>
            <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15] mb-6">
              <p>
                I led design strategy across four initiatives, connected by a shared point of view rather
                than one formal standard: prioritize essential tasks, assume short mobile sessions, treat
                mobile as an access problem, not a responsive-CSS problem.
              </p>
            </div>

            <div className="flex flex-col gap-[var(--space-16)] mb-6">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Homepage (2021-2022)
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                A 205-response intercept survey (&quot;busy and cluttered,&quot; &quot;I just want
                search&quot;) drove a mobile-specific round of fixes including rebuilt navigation, a global
                hamburger menu, as well as a simplified header and hero carousel.
              </p>
            </div>

            <div className="flex flex-col gap-[var(--space-16)] mb-6">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                PDF Reader (2023)
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                Replaced the IIIF page-image viewer with a PDF.js-based reader including continuous
                vertical scroll, in-document keyword search with highlighting, pinch-zoom, and
                distraction-reduced reading mode. Usability testing showed reading ease for modern articles
                improved from 3.8 to 4.4, and skimming ease for older articles nearly doubled, from 2.1 to
                3.9.
              </p>
            </div>

            <div className="flex flex-col gap-[var(--space-16)] mb-6">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Audio & Video (2023)
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                As part of the Artstor&ndash;JSTOR integration, the product design team designed the
                item-page pattern for new media types mobile-first from inception including a
                bottom-anchored audio player, and captioned video with timestamp-linked transcripts later
                validated directly with Visual Resource Association library leads.
              </p>
            </div>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Research Tool Mobile (2025)
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                This was a year of hardening: fixing a launch button users couldn&apos;t find, shrinking an
                oversized chat sheet, correcting keyboard behavior that blocked typing, fixing broken
                scroll position on iOS citation modals, and resolving layout conflicts with the PDF action
                bar.
              </p>
            </div>
          </section>

          {/* Outcomes */}
          <section className="blog-grid flex flex-col gap-6">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              Outcomes
            </h2>
            <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <p>
                The PDF reader had the clearest measurable impact: an A/B experiment across 225,000+ users
                showed a 27.9% increase in users engaging with text directly on JSTOR and a doubling of
                pages viewed on-platform, with 83% more page-change events and 11% more users paging
                through content. The research tool&apos;s mobile launch-button experiment moved open rates
                from a 1.6% control baseline to as high as 6% with a sticky-button treatment. Mobile share
                of JSTOR traffic grew from roughly 38% of users in 2021 to about 40% by 2023, holding
                steady as the research tool scaled. Related to, but distinct from, the 98% WAVE
                accessibility improvement in the Ecosystem Infrastructure case study, the mobile
                program built in captioning and legibility, but that ranking reflects separate, dedicated
                accessibility work.
              </p>
            </div>
          </section>
        </div>
      </div>

      <CaseStudyFooter currentProjectId="mobile-parity" onNavigate={onNavigate} />
    </motion.div>
  );
};
