import React from 'react';

// Leadership and About combined. Each story appears once.
// Section ids are used by the "How I Lead" links on the Home page.
export const LEADERSHIP_SECTIONS = [
  { id: 'career', label: 'Career at a Glance' },
  { id: 'working-with-google', label: 'Working with Google' },
  { id: 'influence', label: 'Influence Across Functions and Levels' },
  { id: 'building-teams', label: 'Building Teams and Leaders' },
  { id: 'systems', label: 'Systems That Scale Quality' },
  { id: 'partners-say', label: 'What Partners Say' },
];

const card =
  "bg-white rounded-[10px] shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)] p-8";
const body = "font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground";
const cardTitle = "font-['Spline_Sans'] text-[16px] leading-[24px] font-medium text-foreground mb-3";

const Section: React.FC<{ id: string; title: string; intro?: string; last?: boolean; children: React.ReactNode }> = ({
  id,
  title,
  intro,
  last,
  children,
}) => (
  <section id={id} className="bg-accent w-full scroll-mt-24">
    <div className={`marketing-grid pt-12 lg:pt-16 ${last ? 'pb-12 lg:pb-16' : 'pb-0'}`}>
      <div className="max-w-[75ch] mx-auto">
        <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-foreground mb-8">{title}</h2>
        {intro && <p className={`${body} mb-8`}>{intro}</p>}
        {children}
      </div>
    </div>
  </section>
);

const Card: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className={card}>
    {title && <h3 className={cardTitle}>{title}</h3>}
    {children}
  </div>
);

const career = [
  {
    org: 'JSTOR / ITHAKA',
    role: 'Director, Product Design',
    years: '2021–present',
    text: 'Lead product design for the JSTOR AI research tool, Dynamic Search (hybrid LLM, semantic and keyword search), platform integration and accessibility, for institutions ranging from major research universities to small colleges in 194 countries. I manage the product designers and a Senior Accessibility Manager.',
  },
  {
    org: 'Grubhub',
    role: 'Director, Product Design, Restaurant & Driver',
    years: '2020–2021',
    text: 'Led design for restaurant and driver products, including Grubhub Direct. Hired 5 people in one year (1 design manager, 3 senior designers, 1 content strategist).',
  },
  {
    org: 'Motorola Mobility',
    role: 'Global UX Director',
    years: '2018–2020',
    text: 'Led all UX at Motorola: 33 designers across 6 studios (Chicago, São Paulo, Beijing, Shanghai, Shenzhen, Nanjing) within $9.78B operations. When Motorola\u2019s Asia Pacific design organization joined the global team, I took on the Beijing, Shanghai, Shenzhen and Nanjing studios. Directed design for a 24-device portfolio across a 13-hour time difference, with global approval authority over hiring, tools and travel budgets.',
  },
  {
    org: 'Motorola Mobility',
    role: 'Director, São Paulo Design Studio',
    years: '2016–2017',
    text: 'Moved to São Paulo in 2015 to manage the 3 UX designers. About a year later, I became Director and studio lead of the multidisciplinary studio of 13 (UX, industrial design, research, surface engineering). Grew the UX/UI team to 6 designers in one year (7 hires) and delivered the DTV Mod, which sold out in Brazil.',
  },
  {
    org: 'Motorola',
    role: 'Research to Senior Design Manager, UX',
    years: '2002–2015',
    text: 'Researched 22 mobile platforms, then led the team whose work became the foundation for Motorola’s first Android device, the CLIQ. Leading teams since 2006.',
  },
];

// Grouped by strength: Strategic, Connector, Catalyst.
const quotes = [
  {
    tag: 'Strategic',
    text: 'Her knowledge and ability to balance business and customer needs are impressive. Her rational and decision-making process is clear, there is no guesswork with her.',
    source: 'Product/Engineering Partner',
    detail: 'Linkage Institute, Advancing Women Leaders 360 Assessment, 2019',
  },
  {
    tag: 'Connector',
    text: "Elisa's greatest leadership asset is her collaboration skills. She has the ability to work across various levels and departments. She is able to understand needs from the C-suite and translate them into actionable goals.",
    source: 'Senior Partner/Executive',
    detail: 'Leadership Circle Profile assessment, 2024',
  },
  {
    tag: 'Connector',
    text: "Elisa is so good at collaborating with customers and with the engineering team she is working with to achieve the best design that fulfills goals and is able to be implemented within the technical capabilities and the time constraints. She knows how to be firm when it matters and to give when it doesn't matter.",
    source: 'Product/Engineering Partner',
    detail: 'Linkage Institute, Advancing Women Leaders 360 Assessment, 2019',
  },
  {
    tag: 'Catalyst',
    text: "Elisa's super power is her ability to move ideas forward and help teams hone in on the best solution when we get stuck. She does this working iteratively and collaboratively.",
    source: 'Peer/Partner',
    detail: 'Leadership Circle Profile assessment, 2024',
  },
  {
    tag: 'Catalyst',
    text: "Elisa's best asset is giving the people who report to her the space to take leadership over our work, while still being supportive. She guides when needed and gives autonomy when wanted.",
    source: 'Direct Report',
    detail: 'Leadership Circle Profile assessment, 2024',
  },
];

export const LeadershipPageContent = () => {
  return (
    <div className="w-full bg-background">
      {/* Intro */}
      <section className="bg-accent w-full">
        <div className="marketing-grid pt-12 lg:pt-16 pb-0">
          <div className="max-w-[75ch] mx-auto">
            <h1 className="font-['EB_Garamond'] text-foreground text-[40px] leading-[44px] tracking-[-0.8px] mb-12">LEADERSHIP</h1>

            <div className="bg-white rounded-[10px] p-8">
              <p className={`${body} mb-4`}>
                I build design teams and take on hard problems at scale. That has meant the Android RAZR foldable,
                which earned a Red Dot &quot;Best of the Best&quot;; an LLM research tool rolled out to about 11,400
                institutions; and hybrid AI search for a platform that serves 111M+ people a year.
              </p>
              <p className={`${body} mb-4`}>
                I&apos;m drawn to work where the stakes are real: research that people rely on, devices they carry
                everywhere, and platforms where one decision reaches millions. My job is to connect what customers need
                with what engineering can build, make the call clearly, and then give senior leads the room to do their
                best work. As one partner put it, I &quot;know how to be firm when it matters and give when it
                doesn&apos;t.&quot;
              </p>
              <p className={`${body} mb-6`}>
                I&apos;ve built and led teams on three continents, living in São Paulo for two and a half years and
                running the China studios across a 13-hour time difference and different business practices.
              </p>

              <nav aria-label="On this page" className="grid grid-cols-1 md:grid-cols-2 gap-1">
                {LEADERSHIP_SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="font-['Spline_Sans'] text-[16px] leading-[24px] text-primary hover:underline"
                  >
                    → {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>

      <Section id="career" title="CAREER AT A GLANCE">
        <ol className="space-y-6">
          {career.map((c) => (
            <li key={c.role} className={card}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-3">
                <h3 className="font-['Spline_Sans'] text-[16px] leading-[24px] font-medium text-foreground">
                  {c.role}, {c.org}
                </h3>
                <span className="font-['Spline_Sans'] text-[14px] leading-[20px] text-muted-foreground">{c.years}</span>
              </div>
              <p className={body}>{c.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="working-with-google"
        title="WORKING WITH GOOGLE"
        intro="My work with Android started before Android did. Across 18.5 years shipping mobile hardware and software, I worked with Google's platform teams again and again, sometimes as a partner and sometimes across a negotiating table."
      >
        <div className="space-y-6">
          <div className="bg-primary rounded-[10px] p-8">
            <h3 className="font-['Spline_Sans'] text-[16px] leading-[24px] font-medium text-white mb-3">
              Strategic Subtraction: the &quot;One Nav&quot; Decision
            </h3>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-white">
              When Android 10 released native gestures that competed with our own navigation, I brought my lead designer
              into the negotiations with the Android team, to build her ability to advocate for design at that level.
              Rather than defend our feature on instinct, we ran a trade-off analysis and let the data decide. We retired
              our popular feature in favor of ecosystem compatibility, moved engineering effort to the RAZR foldable
              launch, and shared our usability and onboarding research with the Android team as it finalized Android 10
              gestures.
            </p>
          </div>

          <Card title="Foldables and the Android Framework">
            <p className={body}>
              I directed the UX for the Android RAZR foldable as a partner to the Android team. Our three-part
              cover-screen model shaped Google&apos;s patterns for small foldable screens. My team reviewed our Phone app
              changes with the Android Comms team so Google&apos;s GMS Calling app could support foldables.
            </p>
          </Card>

          <Card title="Platform Foundations">
            <p className={body}>
              From 2002 to 2005, I was part of the teams that built Motorola&apos;s own mobile platforms. I later led
              the team whose work became the foundation for Motorola&apos;s first Android device, the CLIQ.
            </p>
          </Card>
        </div>
      </Section>

      <Section
        id="influence"
        title="INFLUENCE ACROSS FUNCTIONS AND LEVELS"
        intro="Most of my influence comes from how I work with people rather than from my title. I adapt how I communicate to each audience, build agreement across functions, and drive decisions that hold; I move between executive strategy and the details of execution, and I bring what I learn back up."
      >
        <div className="space-y-6">
          <Card title="Executive Strategy to Team Action (JSTOR)">
            <p className={body}>
              When JSTOR leadership decided to integrate multiple platforms, I turned the business strategy into concrete
              design initiatives, identified risks, created migration plans and gave teams room to execute, while keeping
              executives informed of progress and challenges.
            </p>
          </Card>
          <Card title="Engineering Partnerships (RAZR)">
            <p className={body}>
              Started software feasibility discussions while the RAZR hardware was still a concept. Coordinated a new
              hardware and software alignment process that became the template for future foldables.
            </p>
          </Card>
          <Card title="Privacy and Legal">
            <p className={body}>
              Negotiated privacy and data-use terms with legal for HelloU, and limited how often users heard from us.
            </p>
          </Card>
        </div>
      </Section>

      <Section
        id="building-teams"
        title="BUILDING TEAMS AND LEADERS"
        intro="I've led nearly every discipline a design organization needs: UX, UI, product, graphic and motion design; industrial design; user research; content strategy and copywriting; and web accessibility, along with outside specialists such as sound designers. Across my Director roles, I've hired 20+ designers and design leaders. My approach is simple: hire for the gap, then give people the space to lead. That is how individual contributors on my teams have grown into design managers and staff-level roles."
      >
        <div className="space-y-6">
          <Card title="Coaching a New Team Through the RAZR Relaunch (2019)">
            <p className={`${body} mb-6`}>
              For the high-stakes 2019 RAZR relaunch, I gave the work to a team new to this kind of project: an
              industrial designer in her second year working on mobile devices and UX and UI designers who had only
              worked on web. I managed them directly through launch, coaching them through hard negotiations with US product
              teams and executive stakeholder dynamics.
            </p>
            <div className="bg-accent rounded-[10px] p-6 space-y-2">
              <p className={body}>
                <strong>Award:</strong> The team earned a Red Dot &quot;Best of the Best.&quot;
              </p>
              <p className={body}>
                <strong>Careers:</strong> The UX and UI designers built deep mobile expertise over the course of the
                project. The industrial designer, who revitalized the RAZR, was promoted to Senior Designer. She and the UI
                designer both became Design Managers after I left Motorola.
              </p>
            </div>
          </Card>

          <Card title="Hiring for a Capability Gap: Accessibility (JSTOR)">
            <p className={body}>
              I hired a specialist accessibility lead in 2021 and gave him room to build &quot;shift-left&quot; testing
              into how teams work. The result: a 98% improvement in accessibility errors and a Top 1% ranking in the
              WebAIM Million. When he left for a bigger role in 2026, I made the case for a higher-level backfill and
              hired a Senior Accessibility Manager.
            </p>
          </Card>

          <Card title="Teaching and Mentorship">
            <p className={body}>
              Adjunct Faculty at Northwestern University: graduate capstone and thesis advisor in Engineering Design
              Innovation (2018–2026), and co-taught Customer-Driven Opportunities in the Master of Product Design and
              Development Management program (2024–2025). Founding board member of the InsideOut design leader community.
            </p>
          </Card>
        </div>
      </Section>

      <Section
        id="systems"
        title="SYSTEMS THAT SCALE QUALITY"
        intro="I build the systems that let design quality scale, so good work doesn't depend on a few heroes."
      >
        <div className="space-y-6">
          <Card title="Design Principles (JSTOR)">
            <p className={body}>
              Co-developed ITHAKA&apos;s five design principles, including &quot;Be the guide, not the hero,&quot; with
              the Director of Brand + Creative. We built them as tools for evaluating work, with guiding questions and an
              adjustable strength per project. They were adopted across recruiting, social and product, and later shaped
              the interaction model of JSTOR&apos;s AI research tool.
            </p>
          </Card>
          <Card title="Design System and Design-to-Code (JSTOR)">
            <p className={body}>
              As Executive Champion for Pharos, JSTOR&apos;s design system, I set federated governance and modern tooling
              (Storybook, Chromatic) to keep components consistent across applications. I championed AI-enabled
              design-to-code workflows with Figma Code Connect and MCP servers to unify federated teams.
            </p>
          </Card>
          <Card title="One Animation Format (Motorola)">
            <p className={body}>
              Drove adoption of the Lottie animation framework at Motorola. I secured legal and security approval and
              core integration, so all 6 global studios shared one animation format.
            </p>
          </Card>
        </div>
      </Section>

      <section id="partners-say" className="bg-accent w-full scroll-mt-24">
        <div className="marketing-grid pt-12 lg:pt-16 pb-12 lg:pb-16">
          <div className="max-w-[75ch] mx-auto">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-foreground mb-4">WHAT PARTNERS SAY</h2>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] text-foreground mb-1">
              What direct reports, peers and managers say when I don&apos;t know who&apos;s speaking.
            </p>
            <p className="font-['Spline_Sans'] text-[14px] leading-[20px] italic text-muted-foreground mb-8">
              From anonymous 360 assessments by Leadership Circle (2024) and the Linkage Institute (2019).
            </p>
          {(() => {
            const [feature, connectorA, connectorB, catalystA, catalystB] = quotes;
            const Tag = ({ text, dark, onAccent }: { text: string; dark?: boolean; onAccent?: boolean }) => (
              <div className={`${dark ? 'bg-white/15' : onAccent ? 'bg-white' : 'bg-secondary'} rounded-full px-3 py-1 inline-block self-start mb-4`}>
                <span className={`font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] ${dark ? 'text-white' : 'text-secondary-foreground'}`}>
                  {text}
                </span>
              </div>
            );
            const Caption = ({ q, dark }: { q: typeof quotes[number]; dark?: boolean }) => (
              <figcaption className={`font-['Spline_Sans'] text-[14px] leading-[20px] tracking-[0.25px] ${dark ? 'text-white/85' : 'text-secondary-foreground'}`}>
                <strong>{q.source}</strong>, {q.detail}
              </figcaption>
            );
            return (
              <div className="space-y-8">
                {/* Featured pull quote: large type, no card */}
                <figure className="border-l-4 border-primary pl-6 py-2">
                  <Tag text={feature.tag} onAccent />
                  <blockquote className="font-['EB_Garamond'] text-[24px] leading-[34px] sm:text-[28px] sm:leading-[38px] text-foreground mb-4">
                    &ldquo;{feature.text}&rdquo;
                  </blockquote>
                  <Caption q={feature} />
                </figure>

                {/* Connector: two cards side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[connectorA, connectorB].map((q) => (
                    <figure key={q.text.slice(0, 24)} className="bg-white rounded-[10px] border-2 border-border p-6 flex flex-col">
                      <Tag text={q.tag} />
                      <blockquote className="font-['EB_Garamond'] text-[17px] leading-[26px] text-secondary-foreground tracking-[0.25px] mb-4 flex-1">
                        &ldquo;{q.text}&rdquo;
                      </blockquote>
                      <Caption q={q} />
                    </figure>
                  ))}
                </div>

                {/* Catalyst: two green cards side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[catalystA, catalystB].map((q) => (
                    <figure key={q.text.slice(0, 24)} className="on-dark bg-primary rounded-[10px] border-2 border-primary p-6 flex flex-col">
                      <Tag text={q.tag} dark />
                      <blockquote className="font-['EB_Garamond'] text-[17px] leading-[26px] text-white tracking-[0.25px] mb-4 flex-1">
                        &ldquo;{q.text}&rdquo;
                      </blockquote>
                      <Caption q={q} dark />
                    </figure>
                  ))}
                </div>
              </div>
            );
          })()}
          </div>
        </div>
      </section>
    </div>
  );
};
