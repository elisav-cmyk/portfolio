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
              model (Tier 1/2/3), ensuring the tiered structure
              and story were established across internal systems
              and public surfaces. The design team defined the
              end-of-Q1 &ldquo;target experience&rdquo; for
              Stewardship, mapping critical workflows (e.g.,
              create projects, generate/preview AI metadata,
              publish to JSTOR, export) and ensuring consistent
              nomenclature and brand execution.
            </p>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              Tier definitions and rules (including
              pricing/allowance scaffolding like storage and AV
              hours) were supported by design to provide a
              stable frame for engineering, operations, and
              participant-facing teams.
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
              service, as the cornerstone capability. Seeklight
              was engineered to leverage AI as an accelerant for
              speed and scale, using multiple LLMs (like GPT-4.1
              and Gemini 2.5) to generate quality metadata,
              including item descriptions and downloadable
              transcripts.
            </p>
          </div>

          {/* Subsection: Community-Driven Productization */}
          <div className="flex flex-col gap-[var(--space-16)]">
            <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
              Community-Driven Productization
            </h3>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              A Tier 3 Charter Program was launched to engage
              participants in a two-year shared learning
              experience. This involved working groups tackling
              complex problems, such as Rights, Privacy, and
              Redundancy (including PII flagging) and Schema
              Flexibility. The community engagement and
              transparent approach were cited as unique value
              propositions.
            </p>
          </div>

          {/* Subsection: Operational Readiness */}
          <div className="flex flex-col gap-[var(--space-16)]">
            <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
              Operational Readiness
            </h3>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              The design team ensured integration guardrails and
              collaborated with Product Management and Outreach
              to formalize launch leadership, coordinating
              go-to-market efforts (messaging and campaigns)
              that reinforced the integrated value proposition.
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

          {/* Subsection: Accelerated Development and Recognition */}
          <div className="flex flex-col gap-[var(--space-16)]">
            <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
              Accelerated Development and Recognition
            </h3>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              Stewardship, particularly the Project
              Odyssey/Seeklight work, contributed to the broader
              innovation ecosystem that earned the 2025 C.F.W.
              Coker Award for JSTOR Seeklight. The fluid team
              structure and vision alignment enabled quick
              development, leading to the public launch
              readiness (Tiers 2 and 3 available) by April 2,
              2025.
            </p>
          </div>

          {/* Subsection: Team Capacity and Alignment */}
          <div className="flex flex-col gap-[var(--space-16)]">
            <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
              Team Capacity and Alignment
            </h3>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              The prioritization and strategic hiring actions
              (including defining roles and tying them to Q1
              launch goals) ensured sustainable delivery
              capacity for the launch.
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