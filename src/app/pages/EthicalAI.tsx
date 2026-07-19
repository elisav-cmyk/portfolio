import React from 'react';
import { CaseStudyTemplate } from '../components/CaseStudyTemplate';

export default function EthicalAI() {
  return (
    <CaseStudyTemplate
      title="JSTOR Research Tool"
      subtitle="Ethical AI for Academic Integrity"
      heroImage="/path-to-hero-image.jpg"
      tags={["AI Ethics", "2023-2025"]}
      context={{
        title: "Context & Business Challenge",
        content: (
          <p>
            The rapid emergence of generative AI in 2023 presented a critical strategic threat. Consumer AI tools lacked the{' '}
            <strong>transparency and rigor</strong> necessary for scholarly work, directly threatening academic integrity and JSTOR&apos;s relevance. To remain relevant and{' '}
            <strong>avoid disintermediation</strong>, JSTOR needed to rapidly introduce an AI product aligned with academic values. The research tool was also costly to operate, demanding an equitable and financially sustainable model to{' '}
            <strong>monetize the platform beyond content access alone.</strong>
          </p>
        ),
      }}
      leadership={{
        title: "Design Leadership & Approach",
        sections: [
          {
            heading: "Ethical AI Framework and Governance",
            content: (
              <>
                <p className="mb-8">
                  The Research Tool was guided by an ethical, user-first AI framework I established with the team, emphasizing{' '}
                  <strong>transparency, trust, and respect for publishers.</strong>
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <strong>Core Principle: Human-in-the-Loop.</strong> Designed workflows that ensure the researcher retains ethical oversight, treating the AI as a reasoning engine rather than a replacement.
                  </li>
                  <li>
                    <strong>Traceable Conversations (The Evaluation Model):</strong> I established the non-negotiable requirement for the core interaction model: Traceable Conversations. This links every AI-generated answer directly to its exact location in the verified source text, effectively{' '}
                    <strong>grounding the AI in verified truth</strong> to prevent hallucinations.
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>
                        <strong>RAG-First Architecture:</strong> Defined the product constraints to strictly limit the model to Retrieval-Augmented Generation (RAG) on the specific item in view, explicitly blocking access to the open web to prevent hallucinations.
                      </li>
                      <li>
                        <strong>Pedagogical Tuning:</strong> Tuned the model behavior to refuse &quot;content production&quot; requests (e.g., &quot;Write my essay&quot;) while prioritizing &quot;comprehension&quot; tasks, reinforcing the tool as a learning aid rather than a replacement.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Multi-Stakeholder Governance:</strong> Designed a &quot;Tri-Partite&quot; control framework to secure ecosystem buy-in:
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>
                        <strong>Institutional Control:</strong> Built &quot;Admin-First&quot; capabilities allowing institutions to toggle access globally or by user group, aligning with local AI policies.
                      </li>
                      <li>
                        <strong>Publisher Sovereignty:</strong> Engineered a &quot;Break Glass&quot; opt-out pathway for rights-holders to restrict content usage without removing it from the platform.
                      </li>
                      <li>
                        <strong>Data Sovereignty:</strong> Established strict &quot;Zero-Training&quot; protocols—ensuring JSTOR content is never used to train third-party LLMs and data retention is limited to 30 days
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Citation-Ready Outputs:</strong> Designed metadata-linked answers supporting citation of responses (including the original prompt and stable link), preserving scholarly rigor and differentiating JSTOR from consumer AI tools.
                  </li>
                </ul>
              </>
            ),
          },
          {
            heading: "Strategic Scope Management & Iteration",
            content: (
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Pre-Launch Boundary Setting:</strong> Despite organizational pressure to infuse AI everywhere immediately, I partnered with PMs to define the pre-launch boundary as a focused chat-box experience with targeted additions (Save, Download, Cite). This constraint demonstrated strategic discipline in managing innovation risk while enabling rapid iteration and controlled beta launch.
                </li>
                <li>
                  <strong>Evidence-Driven Design:</strong> Established and ran a steady cadence of Design Reviews and collaborative sessions, ensuring research synthesis fed decisions and actually drove iteration priorities (not just informing them). This included using human evaluation readouts and mobile experiment results to guide design improvements.
                </li>
                <li>
                  <strong>&quot;Beta → Graduation&quot; Readiness:</strong> I set the priority to drive design debt cleanup, Pharos component integration, coordinate onboarding messaging, and retire the &quot;beta&quot; label—establishing a clear quality bar for institutional launch.
                </li>
              </ul>
            ),
          },
          {
            heading: "Team Development & Scaling Impact",
            content: (
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>System-Level Leadership:</strong> I coached the lead senior designer toward system-level leadership (establishing team standards and processes beyond individual execution), recognizing her data-driven design and experiment leadership, and documenting expanded impact for promotion consideration (IC6).
                </li>
                <li>
                  <strong>Stretch Assignment:</strong> The lead designer successfully covered a colleague&apos;s family leave, taking on additional product scope (Use It/Research Tool) and demonstrating delivery under ambiguity—evidence of growth through intentional stretch assignments.
                </li>
                <li>
                  <strong>Cross-Discipline Collaboration:</strong> Established a tight Product Design and User Insights partnership with shared weekly design reviews. I encouraged rapid, ad-hoc critique in real-time channels (e.g., Slack) with input from Accessibility specialists on focus patterns and keyboard navigation.
                </li>
              </ul>
            ),
          },
        ],
      }}
      outcomes={{
        title: "Outcomes & Impact",
        content: (
          <>
            <p className="mb-8">
              The Research Tool successfully differentiated JSTOR as a trusted, academically appropriate alternative to general consumer AI and established a foundation for a new revenue model.
            </p>

            <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] mb-8">
              Exceptional Engagement & Product-Market Fit
            </h3>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Research Tool users showed significantly higher engagement than peers: 0.96 more times per week and 4.10 more times per month.</li>
              <li>Successfully scaled from beta to full deployment, granting early access to 272 institutions by Q4 2024.</li>
              <li>Widely praised: one institution deemed it the &quot;most impressive and polished integration of AI... for libraries&quot;.</li>
            </ul>

            <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] mb-8">
              Strategic Business Advancement
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>New Revenue Model: Positioned JSTOR to monetize the platform beyond content access—establishing a foundation for an AI-as-a-service business model.</li>
              <li>Competitive Positioning: Avoided disintermediation by establishing the trusted academic AI platform, maintaining JSTOR&apos;s relevance in the AI era.</li>
              <li>Industry Recognition: Contributed to the 2025 C.F.W. Coker Award for related AI innovation (Seeklight).</li>
            </ul>
          </>
        ),
      }}
    />
  );
}
