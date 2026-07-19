import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { CaseStudyFooter } from '../CaseStudyFooter';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import cameraIntroImage from 'figma:asset/camera-intro.png';

interface CameraRedesignProps {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const CameraRedesign: React.FC<CameraRedesignProps> = ({ onBack, onNavigate }) => {
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
          src={cameraIntroImage}
          alt="Camera app redesign at Motorola"
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
              2020
            </span>
          </div>
          <h1 className="font-['EB_Garamond'] text-[40px] leading-[44px] tracking-[-0.8px] text-[#1b1c15] mb-6">
            Camera Redesign
          </h1>
          <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15] mb-8">
            Adapting to Target Devices
          </h2>
          <div className="space-y-2">
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <strong>Role:</strong> Design Director, Motorola Mobility
            </p>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <strong>Work Partners:</strong> Product Management, Engineering, User Insights Research
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
                Motorola&apos;s preloaded Camera app had been significantly redesigned in 2017 to support a
                flexible framework across many devices and capabilities. By late 2019, the interface had
                grown visually dated, and increasingly varied aspect ratios and lens configurations &mdash;
                from wide-angle and macro to quattro-lens setups &mdash; were compromising the app&apos;s
                usability and visual hierarchy, even as it continued to functionally deliver.
              </p>
            </div>
          </section>

          {/* Design Leadership & Approach */}
          <section className="blog-grid flex flex-col gap-6">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              Design Leadership & Approach
            </h2>
            <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <p>
                I encouraged the camera design team to reevaluate the app from scratch rather than iterate
                on the existing structure, aiming for a foundation flexible enough to support new features
                and diverse device configurations without a redesign every cycle. The team ran a feature
                inventory and user/business needs assessment to shape guiding design principles and success
                criteria, then pursued four parallel design directions in early exploration, narrowing and
                expanding based on three rounds of user research &mdash; a process that continued through
                the early COVID-19 lockdowns using ProtoPie prototypes tested remotely with friends and
                family of Motorola employees. Because several designers on the team had never led a
                redesign at this scale, I paired a UX lead to mentor the group, deliberately cultivating
                leadership in the visual designer with the deepest camera app experience rather than
                directing the redesign myself.
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
                The team shipped a new viewfinder anatomy that revamped the app&apos;s visual hierarchy,
                non-blocking tutorials and tips, improved mode switching, a user-customizable mode
                carousel, a new zoom model built to accommodate the portfolio&apos;s varied lens
                configurations, and a swipeable control panel for high-priority controls. The interaction
                patterns the team created &mdash; particularly the non-interrupting tutorial and tip style
                &mdash; were adopted by designers on other Motorola apps. The redesign also became a
                proving ground for first-time design leads on the team.
              </p>
            </div>
          </section>
        </div>
      </div>

      <CaseStudyFooter currentProjectId="camera-redesign" onNavigate={onNavigate} />
    </motion.div>
  );
};
