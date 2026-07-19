import React from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { CaseStudyFooter } from "../CaseStudyFooter";
import aiLibraryHeroImage from "figma:asset/8cf3e6ec6a19346c1adefa9bf4dfc6e4967bbb2c.png";

interface AILibraryProps {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const AILibrary: React.FC<AILibraryProps> = ({
  onBack,
  onNavigate,
}) => {
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
          src={aiLibraryHeroImage}
          alt="Library archival stacks with organized collections showing the scale of physical materials requiring digital transformation"
          className="w-full h-64 md:h-[500px] object-cover"
        />
      </div>

      {/* Title Section - Full Width Background */}
      <div className="w-full bg-secondary">
        <div className="blog-grid py-12 sm:py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary text-primary-foreground font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] px-3 py-1 rounded-full">
              AI Strategy
            </span>
            <span className="font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] text-[#1b1c15]">
              2022-Present
            </span>
          </div>
          <h1 className="font-['EB_Garamond'] text-[40px] leading-[44px] tracking-[-0.8px] text-[#1b1c15] mb-6">
            AI-Assisted Library Transformation
          </h1>
          <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15] mb-8">
            Strategic AI Implementation at JSTOR
          </h2>
          <div className="space-y-2">
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <strong>Role:</strong> Product Design Director,
              JSTOR
            </p>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <strong>Work Partners:</strong> Product Management
              (PM), Engineering (ENG), Research, Outreach,
              Legal, Insights, Portico
            </p>
          </div>
        </div>
      </div>

      {/* Context & Business Challenge */}
      <div className="blog-grid pt-12 sm:pt-16">
        <div className="flex flex-col gap-6">
          <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
            Context/Challenge
          </h2>
          <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
            Libraries and academic institutions worldwide face
            an urgent and massive collections crisis: up to 95%
            of special collections remain unprocessed and/or
            undigitized. This backlog is overwhelming staff and
            budgets, preventing institutions from fulfilling
            their stewardship function. Furthermore, legacy
            collections management solutions are often
            expensive, hard-to-use, and disconnected from where
            research starts.
          </p>
          <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
            To maintain relevance and diversify ITHAKA&rsquo;s
            revenue beyond archive content licensing, the
            organization prioritized pivoting its existing
            infrastructure services into a cohesive
            Software-as-a-Service (SaaS) model. The strategic
            challenge was launching a transformed, sustainable
            offering that could compete in a crowded market by
            solving the core problems of massive collection
            backlogs and poor content discoverability. JSTOR
            Digital Stewardship Services needed to establish
            ITHAKA as a viable partner for digital collection
            stewardship and infrastructure, leveraging its
            unique assets (JSTOR, Portico, and responsible AI).
          </p>
        </div>
      </div>

      {/* Design Leadership & Approach */}
      <div className="blog-grid pt-12 sm:pt-16">
        <div className="flex flex-col gap-6">
          <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
            Strategy & Solutions
          </h2>
          <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
            The approach centered on combining JSTOR&rsquo;s
            trusted infrastructure with AI innovation, driven by a highly
            collaborative, cross-functional vision and design
            strategy:
          </p>

          {/* Subsection: Establishing the Strategic Vision */}
          <div className="flex flex-col gap-[var(--space-16)]">
            <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
              Establishing the Strategic Vision and Foundation
            </h3>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              I created the Infrastructure Services
              &ldquo;visiontype&rdquo; and &ldquo;Better
              Together&rdquo; story, partnering to create and
              iterate the experience vision and slides. This
              aspirational vision was instrumental in aligning
              product principles and operational decision-making
              (e.g., defining consistent business rules and
              internal dashboards) across the subsequent
              integrated service direction. My visuals as
              Horizon 1-3 design narratives were explicitly
              cited as instrumental in helping teams understand
              integration strategy and move quickly during an
              undefined phase. This initial vision work framed
              the integrated service direction that ultimately
              became JSTOR Digital Stewardship Services.
            </p>
          </div>

          {/* Subsection: Integrated Tiered Service Model */}
          <div className="flex flex-col gap-[var(--space-16)]">
            <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
              Integrated Tiered Service Model Relaunch
            </h3>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              Product Design led the relaunch scaffolding from
              Infrastructure Services to the tiered Stewardship
              model (Tier 1/2/3), mapping critical workflows,
              including project creation, AI metadata generation
              and preview, publishing, and export, and defining
              the pricing and allowance structure engineering and
              operations needed to build against. I hired two
              staff-level designers to build and ship the
              platform, giving them ownership of day-to-day
              execution while I focused on strategic direction
              and cross-functional alignment.
            </p>
          </div>

          {/* Subsection: Ethical AI Development */}
          <div className="flex flex-col gap-[var(--space-16)]">
            <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
              Ethical AI Development (Seeklight)
            </h3>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              The core product strategy positioned JSTOR
              Seeklight, an AI-assisted metadata generation
              service, as the cornerstone capability, using
              multiple LLMs (GPT-4.1 and Gemini 2.5) to generate
              item descriptions and downloadable transcripts as
              an accelerant for speed and scale.
            </p>
          </div>

          {/* Subsection: Community Trust and Launch Readiness */}
          <div className="flex flex-col gap-[var(--space-16)]">
            <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
              Community Trust and Launch Readiness
            </h3>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              To build trust around Seeklight, we launched a Tier
              3 Charter Program, a two-year shared-learning
              engagement where working groups tackled real
              problems like rights, privacy and PII flagging, and
              schema flexibility, transparency that became a
              genuine differentiator in a crowded market. My team
              also handled the less visible work of getting to
              launch: setting integration guardrails and
              partnering with Product Management and Outreach on
              go-to-market messaging that reinforced the same
              value proposition throughout.
            </p>
          </div>
        </div>
      </div>

      {/* Outcomes & Impact */}
      <div className="blog-grid pt-12 sm:pt-16">
        <div className="flex flex-col gap-6">
          <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
            Outcomes
          </h2>
          <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
            Stewardship successfully launched in Q1 2025,
            positioning ITHAKA to diversify revenue and lead the
            digital stewardship market with a mission-aligned
            SaaS solution.
          </p>

          {/* Subsection: Significant Efficiency Gains */}
          <div className="flex flex-col gap-[var(--space-16)]">
            <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
              Significant Efficiency Gains
            </h3>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              Seeklight drastically reduces the time required
              for collections processing. An item-level
              description project that would typically take 9–10
              weeks by hand can now reach an initial level of
              processing in less than 2 hours using the tool.
              Early beta use resulted in the generation of ~1800
              items and ~20,000 metadata terms using AI. One
              institution demonstrated processing over 1,000
              items within 15 days.
            </p>
          </div>

          {/* Subsection: Strong Market Reception */}
          <div className="flex flex-col gap-[var(--space-16)]">
            <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
              Strong Market Reception
            </h3>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              The functional proof of concept and early
              engagement received resounding encouragement from
              the Board and community. Feedback included
              statements like, &ldquo;This is exactly the kind
              of tool we want to see!&rdquo; (National
              Parliament, Ireland) and, &ldquo;How soon can I
              get a subscription to this?&rdquo; (University of
              Rochester).
            </p>
          </div>

          {/* Subsection: Revenue Generation and Sustainability */}
          <div className="flex flex-col gap-[var(--space-16)]">
            <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
              Revenue Generation and Sustainability
            </h3>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              Stewardship targets a Total Addressable Market of
              $97 million globally (with $48 million initially
              targeted in English-speaking higher education).
              Financial forecast project Stewardship revenue
              will outweigh expenses in 2026 and will reach
              $27.8 million in Annual Recurring Revenue (ARR) by
              2029, exceeding fully loaded costs.
            </p>
          </div>

          {/* Subsection: Recognition */}
          <div className="flex flex-col gap-[var(--space-16)]">
            <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
              Recognition
            </h3>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              Stewardship, particularly the Seeklight work,
              contributed to JSTOR winning the 2025 C.F.W. Coker
              Award, with public launch readiness (Tiers 2 and 3
              available) reached by April 2, 2025.
            </p>
          </div>
        </div>
      </div>

      <CaseStudyFooter
        currentProjectId="ai-library"
        onNavigate={onNavigate}
      />
    </motion.div>
  );
};