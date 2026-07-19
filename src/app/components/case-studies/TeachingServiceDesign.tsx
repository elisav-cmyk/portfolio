import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { CaseStudyFooter } from '../CaseStudyFooter';

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

      {/* Hero Placeholder - Full Width Band */}
      {/* IMAGE NEEDED: photo from the DSGN 401-3 course, a critique session, or the NeighbourFood/Feeding America concept boards */}
      <div className="w-full h-64 md:h-[500px] bg-secondary flex items-center justify-center">
        <p className="font-['Spline_Sans'] text-[14px] tracking-[0.5px] text-[#1b1c15]/50 uppercase">
          Image needed: course critique or NeighbourFood concept work
        </p>
      </div>

      {/* Title Section - Full Width Background */}
      <div className="w-full bg-secondary">
        <div className="blog-grid py-12 sm:py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary text-primary-foreground font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] px-3 py-1 rounded-full">
              Education
            </span>
            <span className="font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] text-[#1b1c15]">
              2018
            </span>
          </div>
          <h1 className="font-['EB_Garamond'] text-[40px] leading-[44px] tracking-[-0.8px] text-[#1b1c15] mb-6">
            Educating the Next Generation
          </h1>
          <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15] mb-8">
            Northwestern University, Segal Design Center
          </h2>
          <div className="space-y-2">
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <strong>Role:</strong> Adjunct Faculty Lecturer &amp; Graduate Student Advisor, Segal Design Center
            </p>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <strong>Work Partners:</strong> Engineering Design Innovation (EDI) Program, Master of Product Design &amp; Development Management (mpd&sup2;) Program, Feeding America, Greater Chicago Food Depository
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full py-12">
        <div className="flex flex-col gap-12">
          <section className="blog-grid flex flex-col gap-6">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              Context &amp; Business Challenge
            </h2>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              Two statistics framed the course: more than 41 million Americans, many facing mobility and transportation barriers, lack access to affordable, nutritious food, while 133 billion pounds of food go to waste in the US each year. This gap became the design brief for DSGN 401-3, Service Design, a 10-week graduate course in Northwestern&rsquo;s Engineering Design Innovation program. The challenge: help Feeding America, the nation&rsquo;s third-largest nonprofit, better distribute rescued food from major retailers to food-insecure communities.
            </p>
          </section>

          <section className="blog-grid flex flex-col gap-6">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              Approach
            </h2>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              My relationship with Northwestern&rsquo;s Segal Design Center has spanned multiple strategic roles since 2018, across two programs and three distinct types of engagement.
            </p>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Teaching
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                My engagement began in 2018 when I co-lectured and ran the weekly design critiques for DSGN 401-3: Service Design, part of the Engineering Design Innovation (EDI) program, guiding four graduate teams through a rigorous service design process including interviews, pantry observation, and direct collaboration with Feeding America&rsquo;s partner, the Greater Chicago Food Depository. In 2024 and 2025, I extended that teaching relationship into the Segal Center&rsquo;s other graduate program, co-teaching MPD 416: Customer-Driven Opportunities within the Master of Product Design and Development Management (mpd&sup2;) program.
              </p>
            </div>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Advising
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                Alongside teaching, I have served as a Graduate Student Advisor for EDI capstone and Master&rsquo;s thesis projects on an ongoing basis since 2018, a formal role distinct from classroom instruction, guiding individual student research and thesis direction to completion.
              </p>
            </div>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Mentorship
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                Beyond formal teaching and advising, I&rsquo;ve sustained individual, informal career mentorship with former students, including two from that original 2018 cohort, continuing to this day. I&rsquo;ve also informally advised students at the IIT Institute of Design, a separate institution, applying the same critique and talent-development discipline I use to scale professional design teams.
              </p>
            </div>
          </section>

          <section className="blog-grid flex flex-col gap-6">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              Outcomes
            </h2>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              The 2018 DSGN 401-3 cohort produced four concepts: NeighbourFood, a volunteer delivery network for people with limited mobility; a grocery-employee donation incentive program; Bridge, a platform connecting suppliers, volunteers, patrons, and agencies; and enRoute, a mobile locker food truck. NeighbourFood received Honorable Mention in the Design Management Institute&rsquo;s Design Value Awards, one of 12 groups recognized globally that year. Seven years later, the relationship is still active: I continue to advise EDI capstone and mpd&sup2; students, and still mentor two students from that original 2018 cohort on career direction.
            </p>
          </section>
        </div>
      </div>

      <CaseStudyFooter currentProjectId="educating-next-generation" onNavigate={onNavigate} />
    </motion.div>
  );
};
