import image_a72184f5b2b8091a17608300f53e559bab83a11c from "figma:asset/a72184f5b2b8091a17608300f53e559bab83a11c.png";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { CaseStudyFooter } from "../CaseStudyFooter";
import heroImage from "figma:asset/6d077c109b68cf2442c73aa8e6bea3bec069e4df.png";
import governanceImage from "figma:asset/ee4f6d81e765d0d76792c9d33403e75d60ebed72.png";
import traceableConversationsImage from "figma:asset/e8dceb4868af3e80fc0e19e2ecaee11d354c0a94.png";

interface EthicalAIProps {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const EthicalAI: React.FC<EthicalAIProps> = ({
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
          src={heroImage}
          alt="Research and academic work"
          className="w-full h-64 md:h-[500px] object-cover"
        />
      </div>

      {/* Title Section - Full Width Background */}
      <div className="w-full bg-secondary">
        <div className="blog-grid py-12 sm:py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary text-primary-foreground font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] px-3 py-1 rounded-full">
              AI Ethics
            </span>
            <span className="font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] text-[#1b1c15]">
              2023-2025
            </span>
          </div>
          <h1 className="font-['EB_Garamond'] text-[40px] leading-[44px] tracking-[-0.8px] text-[#1b1c15] mb-6">
            JSTOR Research Tool
          </h1>
          <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15] mb-8">
            Ethical AI for Academic Integrity
          </h2>
          <div className="space-y-2">
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <strong>Role:</strong> Product Design Director,
              JSTOR
            </p>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <strong>Work Partners:</strong> Product
              Management, Engineering, User Insights Research,
              Usability Studies, Institutional Feedback
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
                The rapid emergence of generative AI in 2023
                presented a critical strategic threat. Consumer
                AI tools lacked the{" "}
                <strong>transparency and rigor</strong>{" "}
                necessary for scholarly work, directly
                threatening academic integrity and JSTOR&apos;s
                relevance. To remain relevant and{" "}
                <strong>avoid disintermediation</strong>, JSTOR
                needed to rapidly introduce an AI product
                aligned with academic values. The research tool
                was also costly to operate, demanding an
                equitable and financially sustainable model to{" "}
                <strong>
                  monetize the platform beyond content access
                  alone.
                </strong>
              </p>
            </div>
          </section>

          {/* Design Leadership & Approach */}
          <section className="blog-grid flex flex-col gap-6">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              Design Leadership & Approach
            </h2>
            {/* Ethical AI Framework */}
            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Ethical AI Framework and Governance
              </h3>
              <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <strong>
                      Core Principle: Human-in-the-Loop.
                    </strong>{" "}
                    Designed workflows that ensure the
                    researcher retains ethical oversight,
                    treating the AI as a reasoning engine rather
                    than a replacement.
                  </li>
                  <li>
                    <strong>
                      Traceable Conversations (The Evaluation
                      Model):
                    </strong>{" "}
                    I established the non-negotiable requirement
                    for the core interaction model: Traceable
                    Conversations. This links every AI-generated
                    answer directly to its exact location in the
                    verified source text, effectively{" "}
                    <strong>
                      grounding the AI in verified truth
                    </strong>{" "}
                    to prevent hallucinations.
                    <div className="my-4 w-2/3">
                      <img
                        src={
                          image_a72184f5b2b8091a17608300f53e559bab83a11c
                        }
                        alt="Traceable Conversations interface"
                        className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
                      />
                      <p className="text-[14px] leading-[20px] text-[#1b1c15] mt-2">
                        Traceable conversations ground responses
                      </p>
                    </div>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>
                        <strong>RAG-First Architecture:</strong>{" "}
                        Defined the product constraints to
                        strictly limit the model to
                        Retrieval-Augmented Generation (RAG) on
                        the specific item in view, explicitly
                        blocking access to the open web to
                        prevent hallucinations.
                      </li>
                      <li>
                        <strong>Pedagogical Tuning:</strong>{" "}
                        Tuned the model behavior to refuse
                        &quot;content production&quot; requests
                        (e.g., &quot;Write my essay&quot;) while
                        prioritizing &quot;comprehension&quot;
                        tasks, reinforcing the tool as a
                        learning aid rather than a replacement.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Governance Image - Wider than body */}
          <div className="marketing-grid">
            <img
              src={governanceImage}
              alt="Multi-Stakeholder Governance: Tri-Partite Control Framework"
              className="w-4/5 h-auto rounded-lg mx-auto"
            />
          </div>

          {/* Design Leadership & Approach - Continued */}
          <section className="blog-grid flex flex-col gap-6">
            <div className="flex flex-col gap-[var(--space-16)]">
              <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <strong>Citation-Ready Outputs:</strong>{" "}
                    Designed metadata-linked answers supporting
                    citation of responses (including the
                    original prompt and stable link), preserving
                    scholarly rigor and differentiating JSTOR
                    from consumer AI tools.
                  </li>
                </ul>
              </div>
            </div>

            {/* Strategic Scope Management & Team Development */}
            <div className="flex flex-col gap-[var(--space-24)]">
              <div className="flex flex-col gap-[var(--space-16)]">
                <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                  Strategic Scope Management & Iteration
                </h3>
                <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>
                        Pre-Launch Boundary Setting:
                      </strong>{" "}
                      Despite organizational pressure to infuse
                      AI everywhere immediately, I partnered
                      with PMs to define the pre-launch boundary
                      as a focused chat-box experience with
                      targeted additions (Save, Download, Cite).
                      This constraint demonstrated strategic
                      discipline in managing innovation risk
                      while enabling rapid iteration and
                      controlled beta launch.
                    </li>
                    <li>
                      <strong>Evidence-Driven Design:</strong>{" "}
                      Established and ran a steady cadence of
                      Design Reviews and collaborative sessions,
                      ensuring research synthesis fed decisions
                      and actually drove iteration priorities
                      (not just informing them). This included
                      using human evaluation readouts and mobile
                      experiment results to guide design
                      improvements.
                    </li>
                    <li>
                      <strong>Operationalizing Quality:</strong>{" "}
                      Directed the critical transition from
                      "experimental beta" to "enterprise scale"
                      by enforcing strict design system (Pharos)
                      compliance and prioritizing design debt
                      elimination. This established the
                      reliability standards necessary to retire
                      the beta label and secure institutional
                      adoption.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-[var(--space-16)]">
                <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                  Team Development & Scaling Impact
                </h3>
                <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>System-Level Leadership:</strong>{" "}
                      I coached the lead senior designer toward
                      system-level leadership (establishing team
                      standards and processes beyond individual
                      execution), recognizing her data-driven
                      design and experiment leadership, and
                      documenting expanded impact.
                    </li>
                    <li>
                      <strong>Stretch Assignment:</strong> The
                      lead designer successfully covered a
                      colleague&apos;s family leave, taking on
                      additional product scope and demonstrating
                      delivery under ambiguity—evidence of
                      growth through intentional stretch
                      assignments.
                    </li>
                    <li>
                      <strong>
                        Cross-Discipline Collaboration:
                      </strong>{" "}
                      Established a tight Product Design and
                      User Insights partnership with shared
                      weekly design reviews. I encouraged rapid,
                      ad-hoc critique in real-time channels
                      (e.g., Slack) with input from
                      Accessibility specialists on focus
                      patterns and keyboard navigation.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Outcomes & Impact */}
          <section className="blog-grid flex flex-col gap-6">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              Outcomes & Impact
            </h2>
            <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
              Strategic Business Advancement (New Revenue
              Stream)
            </h3>
            <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <p>
                Established the foundation for a new
                AI-as-a-Service business model, allowing JSTOR
                to monetize the platform beyond standard content
                access. By positioning the tool as a
                &quot;high-trust&quot; alternative to consumer
                AI, we successfully secured buy-in for a
                scalable SaaS offering.
              </p>
            </div>

            <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
              Exceptional Product-Market Fit (3× Engagement)
            </h3>
            <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <p>
                The research-backed &quot;pedagogical&quot;
                design resulted in significantly deeper user
                interaction compared to standard search:
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>3× more searches per session.</li>
                <li>2× more item requests.</li>
                <li>
                  4.1× increase in monthly return rate for beta
                  users.
                </li>
              </ul>
            </div>

            <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
              Competitive Differentiation (Solving the Trust
              Gap)
            </h3>
            <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <p>
                Successfully differentiated JSTOR from generic
                LLMs by implementing &quot;Traceable
                Conversations&quot;—a design pattern that
                grounds every AI response in verified text. This
                feature directly addressed the academic
                market&apos;s primary barrier to adoption (fear
                of hallucination) and preserved the
                platform&apos;s reputation for integrity.
              </p>
            </div>

            <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
              Scale & Industry Recognition
            </h3>
            <div className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  Rapid Scale: Moved from closed beta to ~1,500
                  institutions by Q1 2025 (Early Access).
                </li>
                <li>
                  Award-Winning: Recognized with the 2025 C.F.W.
                  Coker Award for innovation in archival and
                  research access.
                </li>
                <li>
                  User Acclaim: Described by institutional
                  partners as the "most impressive and polished
                  integration of AI for libraries" on the
                  market.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <CaseStudyFooter
        currentProjectId="ethical-ai"
        onNavigate={onNavigate}
      />
    </motion.div>
  );
};