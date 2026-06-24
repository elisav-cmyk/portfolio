import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { CaseStudyFooter } from '../CaseStudyFooter';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import razrHeroImage from 'figma:asset/a9d3a2304cfdb51608b897fa52985cf480028150.png';
import redDotImage from 'figma:asset/d7aeea6eaf3a1140e04f16b7913fb2ec289f2aea.png';

interface RAZRFoldableProps {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const RAZRFoldable: React.FC<RAZRFoldableProps> = ({ onBack, onNavigate }) => {
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
          src={razrHeroImage}
          alt="Android RAZR Foldable"
          className="w-full h-64 md:h-[500px] object-cover"
        />
      </div>

      {/* Title Section - Full Width Background */}
      <div className="w-full bg-secondary">
        <div className="blog-grid py-12 sm:py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary text-primary-foreground font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] px-3 py-1 rounded-full">
              Hardware/Software
            </span>
            <span className="font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] text-[#1b1c15]">
              2016-2020
            </span>
          </div>
          <h1 className="font-['EB_Garamond'] text-[40px] leading-[44px] tracking-[-0.8px] text-[#1b1c15] mb-6">
            Android RAZR Foldable
          </h1>
          <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15] mb-8">
            Influencing the Android OS Roadmap & Ecosystem Standards
          </h2>
          <div className="space-y-2">
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <strong>Role:</strong> Studio/Design Director, Motorola Mobility (Brazil Design Studio)
            </p>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <strong>Work Partners:</strong> Industrial Design, Research, Engineering (HW/SW), Product Management (HW/SW), Marketing
            </p>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <strong>Award:</strong> Red Dot: &quot;Best of the Best&quot; Award 2020
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
            <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15] space-y-4">
              <p>
                During my tenure as Studio Director, I led a multidisciplinary team within a division that supported Motorola Mobility&apos;s $9.78 billion revenue base. I initially formed a team of 3 designers during the concept phase of the 2019 razr; later the project included the global design team when I became Head of Design, Motorola Mobility (UX, visual & copywriting, ~30 designers).
              </p>
              <p>
                Motorola has maintained a strong foothold in the mid-tier smartphone market, however it struggled to develop a high-tier device after it ended the exclusive &quot;Droid&quot; partnership with Verizon. In order to re-enter the high-tier market, Motorola determined that it would build upon Lenovo&apos;s foldable prototypes and re-introduce its iconic phone: the razr.
              </p>
            </div>
          </section>

          {/* Design Leadership & Approach */}
          <section className="blog-grid flex flex-col gap-6">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              Design Leadership & Approach
            </h2>
            
            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Novice Team on a High-Stakes Project
              </h3>
              <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                <p>
                  While I was Director of the Brazil Design Studio, I formed a team of 3 designers during the initial concept phase of the physical and digital design of the 2019 razr. All 3 designers were relatively new to Motorola; I coached the industrial designer through her negotiations with the product and engineering teams located in Chicago and introduced the UX and visual designers (who largely had web experience) to the foldable principles Motorola established during the development of the original RAZR v3 and subsequent flip-phones pre-Android.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Importance of Iterative Research
              </h3>
              <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                <p>
                  My team and I worked hand-in-hand with design research throughout the process including developing paper mockups of potential use cases that could be supported on the Quick View display, evaluating low-fidelity prototypes that investigated where the volume buttons and fingerprint sensors should be, and conducting use over time studies with users to understand how to refine the implemented designs.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Software and Hardware Were Out of Sync
              </h3>
              <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                <p>
                  I initiated feasibility discussions with software engineering while the physical design was at the concept stage and quickly coordinated cross-functional hardware/software discussions to understand the scope of changes required to the Android framework. The vision was to create a custom solution while working with Google on necessary changes to the Android framework for future foldables.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Developing Frameworks
              </h3>
              <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                <p>
                  After presenting our design principles of the external display design to the Android UX team, I coordinated the implementation phase defining and driving customizations to Moto Display, Camera, Calling, and other experiences critical to the external &quot;Quick View&quot; display with my broader team. In late 2019, I met with the Android Comms team to review Phone app customizations in order for Google to integrate similar functions to the core GMS Calling app in support of future foldables.
                </p>
              </div>
            </div>
          </section>

          {/* Team Development & Outcomes */}
          <section className="blog-grid flex flex-col gap-6">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              Team Development & Outcomes
            </h2>
            <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <p>
                In April 2020, the new razr received the coveted Red Dot: &quot;Best of the Best&quot; award, the highest distinction in the Red Dot Award Product Design category reserved for innovations with the most ground-breaking design. That year, designers and companies from 60 countries entered more than 6,500 products in the competition.
              </p>
            </div>
            
            {/* Red Dot Award Image */}
            <div className="mt-8">
              <ImageWithFallback
                src={redDotImage}
                alt="Red Dot Award - Best of the Best 2020"
                className="h-auto"
              />
            </div>
          </section>

          {/* Impact & Recognition */}
          <section className="blog-grid flex flex-col gap-6">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              Impact & Recognition
            </h2>
            
            <div className="space-y-8">
              <div>
                <p className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15] mb-4">
                  &quot;The biggest advantage Motorola&apos;s razr has over the Samsung competition, besides nostalgia, is this large external display. With the update I&apos;m about to show you, it just got a whole lot more useful…&quot;
                </p>
                <p className="font-['Spline_Sans'] text-[14px] leading-[20px] tracking-[0.5px] text-[#3d4c0d]">
                  — MrMobile [Michael Fisher], May 2020
                </p>
              </div>

              <div>
                <p className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15] mb-4">
                  &quot;After spending some time with both form factors, there are a few things about the razr&apos;s classic clamshell design that stand out to me as being much more practical… A lot of it comes down to Motorola&apos;s execution. The razr is, as you&apos;d expect given the brand&apos;s legacy, shockingly thin, even when folded shut… Another thing I love about the razr when it&apos;s shut? The cover display makes much better use of its small size than the Galaxy Fold.&quot;
                </p>
                <p className="font-['Spline_Sans'] text-[14px] leading-[20px] tracking-[0.5px] text-[#3d4c0d]">
                  — Android Central, Dec 2019
                </p>
              </div>

              <div>
                <p className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15] mb-4">
                  &quot;It truly is a 2019 take on the iconic RAZR flip phone and is undoubtedly one of the most novel phones in recent memory.&quot;
                </p>
                <p className="font-['Spline_Sans'] text-[14px] leading-[20px] tracking-[0.5px] text-[#3d4c0d]">
                  — CNET, Nov 2019
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <CaseStudyFooter currentProjectId="razr-foldable" onNavigate={onNavigate} />
    </motion.div>
  );
};