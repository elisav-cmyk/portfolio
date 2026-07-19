import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { CaseStudyFooter } from '../CaseStudyFooter';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import feedingAmericaHeroImage from 'figma:asset/feeding-america-hero.jpg';

interface TeachingServiceDesignProps {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const TeachingServiceDesign: React.FC<TeachingServiceDesignProps> = ({ onBack, onNavigate }) => {
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
          src={feedingAmericaHeroImage}
          alt="Teaching Service Design at Northwestern University"
          className="w-full h-64 md:h-[500px] object-cover"
        />
      </div>

      {/* Title Section - Full Width Background */}
      <div className="w-full bg-secondary">
        <div className="blog-grid py-12 sm:py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary text-primary-foreground font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] px-3 py-1 rounded-full">
              Teaching & Mentorship
            </span>
            <span className="font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] text-[#1b1c15]">
              2018-Present
            </span>
          </div>
          <h1 className="font-['EB_Garamond'] text-[40px] leading-[44px] tracking-[-0.8px] text-[#1b1c15] mb-6">
            Teaching Service Design
          </h1>
          <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15] mb-8">
            Northwestern University, Engineering Design Innovation
          </h2>
          <div className="space-y-2">
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <strong>Role:</strong> Adjunct Faculty Lecturer &amp; Advisor, Engineering Design Innovation (EDI)
            </p>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <strong>Work Partners:</strong> Feeding America, Greater Chicago Food Depository, EDI graduate capstone teams, Master of Product Design and Development Management (mpd²) program
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
            <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <p>
                More than 41 million Americans face food insecurity, often compounded by mobility and
                transportation barriers, while 133 billion pounds of food go to waste in the US each year.
                That gap framed the brief for DSGN 401-3, Service Design, a 10-week graduate course: help
                Feeding America, the nation&apos;s third-largest nonprofit, better distribute rescued food
                from major retailers to food-insecure communities.
              </p>
            </div>
          </section>

          {/* Design Leadership & Approach */}
          <section className="blog-grid flex flex-col gap-6">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              Approach
            </h2>
            <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <p>
                My relationship with Northwestern&apos;s Engineering Design Innovation (EDI) program has
                spanned three roles since 2018. Since 2018, I&apos;ve served as a mentor to EDI graduate
                capstone project teams. In 2024&ndash;2025, I co-taught Customer-Driven Opportunities within
                Northwestern&apos;s Master of Product Design and Development Management (mpd²) program.
                My most sustained engagement began in 2018, when I co-taught and ran the weekly design
                critiques for DSGN 401-3, Service Design &mdash; guiding four teams of five graduate
                students through a full service design process: interviews, pantry observation,
                grocery-manager conversations, and direct collaboration with Feeding America&apos;s partner,
                the Greater Chicago Food Depository. My role across all three was consistent: push each
                team&apos;s research rigor, challenge assumptions in critique, and help them translate field
                research into viable concepts &mdash; the same critique discipline I use with professional
                design teams.
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
                The 2018 DSGN 401-3 cohort produced four concepts: NeighbourFood, a volunteer delivery
                network for people with limited mobility; a grocery-employee donation incentive program;
                Bridge, a platform connecting suppliers, volunteers, patrons, and agencies; and enRoute, a
                mobile locker food truck. NeighbourFood received Honorable Mention in the Design Management
                Institute&apos;s Design Value Awards &mdash; one of 12 groups recognized globally that year.
                The course also started a mentorship relationship I&apos;ve continued for years: I still
                advise two students from that cohort on career direction, alongside the ongoing capstone
                and mpd² mentorship that has continued through today.
              </p>
            </div>
          </section>
        </div>
      </div>

      <CaseStudyFooter currentProjectId="teaching-service-design" onNavigate={onNavigate} />
    </motion.div>
  );
};
