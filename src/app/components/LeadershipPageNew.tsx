import React from 'react';

export const LeadershipPageContent = () => {
  return (
    <div className="w-full bg-background">
      {/* LEADERSHIP Section - Purple */}
      <section className="bg-accent w-full">
        <div className="marketing-grid pt-12 lg:pt-16 pb-0">
          <div className="max-w-[75ch] mx-auto">
            <h1 className="font-['EB_Garamond'] text-foreground text-[40px] leading-[44px] tracking-[-0.8px] mb-12">LEADERSHIP</h1>
            
            {/* Combined Intro Card */}
            <div className="bg-white rounded-[10px] p-8">
              <div className="mb-6">
                <span className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground">
                  <strong>TLDR;</strong> I am a bridge-builder who closes the gap between complex engineering constraints and human-centered experiences. I don&apos;t just manage design; I translate business risk into design strategy.
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                <div className="flex flex-col gap-1">
                  <a href="#global-operations" className="font-['Spline_Sans'] text-[16px] leading-[24px] text-primary hover:underline">→ Global Operations & Scale</a>
                  <a href="#strategic-decision" className="font-['Spline_Sans'] text-[16px] leading-[24px] text-primary hover:underline">→ Strategic Decision-Making</a>
                  <a href="#cross-functional" className="font-['Spline_Sans'] text-[16px] leading-[24px] text-primary hover:underline">→ Cross-Functional Influence</a>
                  <a href="#translating" className="font-['Spline_Sans'] text-[16px] leading-[24px] text-primary hover:underline">→ Translating Between Levels</a>
                </div>
                <div className="flex flex-col gap-1">
                  <a href="#developing-leaders" className="font-['Spline_Sans'] text-[16px] leading-[24px] text-primary hover:underline">→ Developing Future Leaders</a>
                  <a href="#operational-excellence" className="font-['Spline_Sans'] text-[16px] leading-[24px] text-primary hover:underline">→ Operational Excellence & Systems</a>
                  <a href="#partners-say" className="font-['Spline_Sans'] text-[16px] leading-[24px] text-primary hover:underline">→ What Partners Say</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL OPERATIONS & SCALE Section - Beige */}
      <section id="global-operations" className="bg-accent w-full">
        <div className="marketing-grid pt-12 lg:pt-16 pb-0">
          <div className="max-w-[75ch] mx-auto">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-foreground mb-8">GLOBAL OPERATIONS & SCALE</h2>
            
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground mb-8">
              I have led design organizations across vastly different operating contexts: global consumer electronics and institutional B2B platforms.
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-[10px] shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)] p-8">
                <h6 className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground mb-3">Global Head of UX (Motorola)</h6>
                <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground">
                  Directed a team of 33 designers across 6 global studios (US, China, Brazil). Managed the UX strategy for a 24-device portfolio within a $9.78B operational scope, coordinating across 14-hour time zones.
                </p>
              </div>

              <div className="bg-white rounded-[10px] shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)] p-8">
                <h6 className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground mb-3">Studio Director (Brazil)</h6>
                <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground">
                  Established and scaled a multidisciplinary studio of 15 professionals (UX, ID, Research, Surface Engineering). I tripled the local UX capacity (from 2 to 6 designers) in one year through strategic hiring and integrated the team with local R&D and factory engineering partners.
                </p>
              </div>

              <div className="bg-white rounded-[10px] shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)] p-8">
                <h6 className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground mb-3">Talent Pipeline</h6>
                <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground">
                  Personally hired ~30 designers across Director roles. My &quot;hire-and-empower&quot; model has successfully grown individual contributors into Design Managers and Principal leads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC DECISION-MAKING Section - Light Cream */}
      <section id="strategic-decision" className="bg-accent w-full">
        <div className="marketing-grid pt-12 lg:pt-16 pb-0">
          <div className="max-w-[75ch] mx-auto">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-foreground mb-8">STRATEGIC DECISION-MAKING</h2>
            
            <div className="bg-white rounded-[10px] shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)] p-8">
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground mb-8">
                My superpower is bridging the gap between customer demands and platform constraints. I don&apos;t just advocate for design; I translate business risk into strategy.
              </p>

              <div className="bg-primary rounded-[10px] p-6">
                <h6 className="font-['Spline_Sans'] text-[16px] leading-[24px] text-white mb-3">Strategic Subtraction (The &quot;One Nav&quot; Decision)</h6>
                <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-white">
                  When Android 10 released native gestures that competed with our proprietary navigation, I facilitated a data-driven analysis that led to deprecating our popular feature. This decision prioritized ecosystem compatibility over fragmentation and reallocated critical engineering resources to the RAZR foldable launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-FUNCTIONAL INFLUENCE Section - Purple */}
      <section id="cross-functional" className="bg-accent w-full">
        <div className="marketing-grid pt-12 lg:pt-16 pb-0">
          <div className="max-w-[75ch] mx-auto">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-foreground mb-8">CROSS-FUNCTIONAL INFLUENCE</h2>
            
            <div className="bg-white rounded-[10px] border-2 border-border shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)] p-8 mb-6">
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground">
                I excel at &quot;skillful smooth negotiation through influence&quot;—adapting communication style to audiences, building consensus across functions, and driving decisions that stick.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-[10px] border-2 border-border shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)] p-8">
                <h6 className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground mb-3">Engineering Partnerships</h6>
                <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground">
                  Initiated software feasibility discussions while RAZR hardware was still conceptual. Coordinated first-of-its-kind hardware/software alignment process that became template for future foldables.
                </p>
              </div>

              <div className="bg-white rounded-[10px] border-2 border-border shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)] p-8">
                <h6 className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground mb-3">Legal/Security Negotiation</h6>
                <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground">
                  Represented design in Android framework discussions; Influenced Google&apos;s GMS Calling app roadmap for foldable support. Collaborated with Visual Resource Association on JSTOR metadata standards.
                </p>
              </div>

              <div className="bg-white rounded-[10px] border-2 border-border shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)] p-8">
                <h6 className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground mb-3">Platform Partnerships</h6>
                <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground">
                  Represented design in Android framework discussions. Influenced Google&apos;s GMS Calling app roadmap for foldable support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSLATING BETWEEN LEVELS Section - Beige */}
      <section id="translating" className="bg-accent w-full">
        <div className="marketing-grid pt-12 lg:pt-16 pb-0">
          <div className="max-w-[75ch] mx-auto">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-foreground mb-8">TRANSLATING BETWEEN LEVELS</h2>
            
            <div className="bg-white rounded-[10px] border-2 border-border shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)] p-8">
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground mb-8">
                One of my key strengths is the ability to move fluidly between strategic executive conversations and tactical execution details—translating vision into action and surfacing insights upward.
              </p>

              <div className="bg-accent rounded-[10px] p-6">
                <h6 className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground mb-3">Example: Executive Strategy to Team Action</h6>
                <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground">
                  When JSTOR leadership decided to integrate multiple platforms, I translated the high-level business strategy into concrete design initiatives, identified risks, created migration plans, and empowered teams to execute—while keeping executives informed of progress and challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPING FUTURE LEADERS Section - Light Cream */}
      <section id="developing-leaders" className="bg-accent w-full">
        <div className="marketing-grid pt-12 lg:pt-16 pb-0">
          <div className="max-w-[75ch] mx-auto">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-foreground mb-8">DEVELOPING FUTURE LEADERS</h2>
            
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground mb-8">
              I am committed to growing the next generation of design leaders through mentorship, high-visibility assignments, and seeing their potential and growth.
            </p>

            <div className="bg-white rounded-[10px] border-2 border-border shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)] p-8">
              <h6 className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground mb-3">Example: Coaching a Novice Team (RAZR 2019)</h6>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground mb-8">
                For the high-stakes 2019 RAZR relaunch, I entrusted the work to a team of emerging talent, including an industrial designer in her first year and UX designers new to mobile. I directly managed them through the launch, coaching them through difficult negotiations with US product teams who didn&apos;t understand software constraints and helping them navigate executive stakeholder dynamics.
              </p>

              <div className="bg-accent rounded-[10px] p-6">
                <h6 className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground mb-3">Outcomes:</h6>
                <div className="space-y-2">
                  <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground">
                    <strong>Award-Winning:</strong> The team delivered a Red Dot &quot;Best of the Best&quot; award.
                  </p>
                  <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground">
                    <strong>Career Growth:</strong> The industrial designer was promoted to Senior and is now a Design Manager driving innovation projects; the UX/UI designers developed deep mobile expertise that informed subsequent product launches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATIONAL EXCELLENCE & SYSTEMS Section - Purple */}
      <section id="operational-excellence" className="bg-accent w-full">
        <div className="marketing-grid pt-12 lg:pt-16 pb-0">
          <div className="max-w-[75ch] mx-auto">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-foreground mb-8">OPERATIONAL EXCELLENCE & SYSTEMS</h2>
            
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground mb-8">
              I move teams from &quot;hero-based&quot; effort to &quot;system-based&quot; consistency. I build the infrastructure that allows design quality to scale without bottlenecks.
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-[10px] border-2 border-border shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)] p-8">
                <h6 className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground mb-3">Technical Platform Innovation</h6>
                <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground">
                  Identified and drove the adoption of the Lottie animation framework at Motorola. I negotiated security approvals and core integration, resulting in 10× efficiency gains in animation workflows across all 6 global studios.
                </p>
              </div>

              <div className="bg-white rounded-[10px] border-2 border-border shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)] p-8">
                <h6 className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground mb-3">Design System Governance</h6>
                <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground">
                  As Executive Champion for Pharos (JSTOR), I enforced federated governance and modern tooling (Storybook, Chromatic), ensuring component consistency across multiple applications.
                </p>
              </div>

              <div className="bg-white rounded-[10px] border-2 border-border shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)] p-8">
                <h6 className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground mb-3">Institutionalizing Quality</h6>
                <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground">
                  Transformed accessibility from a compliance risk to a competitive advantage. By hiring a specialized technical lead and instituting &quot;shift-left&quot; testing, we achieved a 98% improvement in accessibility errors and a Top 1% WAVE ranking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT PARTNERS SAY Section - Beige */}
      <section id="partners-say" className="bg-accent w-full">
        <div className="marketing-grid pt-12 lg:pt-16 pb-12 lg:pb-16">
          <div className="max-w-[75ch] mx-auto">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-foreground mb-8">WHAT PARTNERS SAY</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Column 1 */}
            <div className="space-y-6">
              <div className="bg-white rounded-[10px] border-2 border-border p-8">
                <div className="bg-secondary rounded-full px-3 py-1 inline-block mb-4">
                  <span className="font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] text-secondary-foreground">Team Empowerment</span>
                </div>
                <p className="font-['EB_Garamond'] text-[16px] leading-[24px] text-secondary-foreground tracking-[0.5px] mb-4">
                  &quot;Elisa&apos;s best asset is giving the people who report to her the space to take leadership over our work, while still being supportive. She guides when needed and gives autonomy when wanted.&quot;
                </p>
                <p className="font-['Spline_Sans'] text-[14px] leading-[20px] text-secondary-foreground tracking-[0.25px]">
                  <strong>— Direct Report</strong>, Leadership Circle Profile assessment, 2024
                </p>
              </div>

              <div className="bg-white rounded-[10px] border-2 border-border p-8">
                <div className="bg-secondary rounded-full px-3 py-1 inline-block mb-4">
                  <span className="font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] text-accent-foreground">Executive Translation</span>
                </div>
                <p className="font-['EB_Garamond'] text-[16px] leading-[24px] text-secondary-foreground tracking-[0.5px] mb-4">
                  &quot;Elisa&apos;s greatest leadership asset is her collaboration skills. She has the ability to work across various levels and departments. She is able to understand needs from the C-suite and translate them into actionable goals.&quot;
                </p>
                <p className="font-['Spline_Sans'] text-[14px] leading-[20px] text-secondary-foreground tracking-[0.25px]">
                  <strong>— Senior Partner/Executive</strong>, Leadership Circle Profile assessment, 2024
                </p>
              </div>

              <div className="bg-white rounded-[10px] border-2 border-border p-8">
                <div className="bg-secondary rounded-full px-3 py-1 inline-block mb-4">
                  <span className="font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] text-accent-foreground">Strategic Clarity</span>
                </div>
                <p className="font-['EB_Garamond'] text-[16px] leading-[24px] text-secondary-foreground tracking-[0.5px] mb-4">
                  &quot;Her knowledge and ability to balance business and customer needs are impressive. Her rational and decision-making process is clear, there is no guesswork with her.&quot;
                </p>
                <p className="font-['Spline_Sans'] text-[14px] leading-[20px] text-secondary-foreground tracking-[0.25px]">
                  <strong>— Product/Engineering Partner</strong>, Linkage Institute, Advancing Women Leaders 360 Assessment, 2019
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <div className="bg-white rounded-[10px] border-2 border-border p-8">
                <div className="bg-secondary rounded-full px-3 py-1 inline-block mb-4">
                  <span className="font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] text-accent-foreground">Problem-Solving</span>
                </div>
                <p className="font-['EB_Garamond'] text-[16px] leading-[24px] text-secondary-foreground tracking-[0.5px] mb-4">
                  &quot;Elisa&apos;s super power is her ability to move ideas forward and help teams hone in on the best solution when we get stuck. She does this working iteratively and collaboratively.&quot;
                </p>
                <p className="font-['Spline_Sans'] text-[14px] leading-[20px] text-secondary-foreground tracking-[0.25px]">
                  <strong>— Peer/Partner</strong>, Leadership Circle Profile assessment, 2024
                </p>
              </div>

              <div className="bg-white rounded-[10px] border-2 border-border p-8">
                <div className="bg-secondary rounded-full px-3 py-1 inline-block mb-4">
                  <span className="font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] text-accent-foreground">Cross-Functional Leadership</span>
                </div>
                <p className="font-['EB_Garamond'] text-[16px] leading-[24px] text-secondary-foreground tracking-[0.5px] mb-4">
                  &quot;Elisa is so good at collaborating with customers and with the engineering team she is working with to achieve the best design that fulfills goals and is able to be implemented within the technical capabilities and the time constraints. She knows how to be firm when it matters and to give when it doesn&apos;t matter.&quot;
                </p>
                <p className="font-['Spline_Sans'] text-[14px] leading-[20px] text-secondary-foreground tracking-[0.25px]">
                  <strong>— Product/Engineering Partner</strong>, Linkage Institute, Advancing Women Leaders 360 Assessment, 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};