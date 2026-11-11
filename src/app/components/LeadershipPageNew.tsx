import React from 'react';

// Leadership and About combined. Each story appears once.
// Section ids are used by the "How I Lead" links on the Home page.
export const LEADERSHIP_SECTIONS = [
  { id: 'career', label: 'Career at a Glance' },
  { id: 'working-with-google', label: 'Working with Google' },
  { id: 'building-teams', label: 'Building Teams and Systems' },
  { id: 'partners-say', label: 'What Partners Say' },
];

const card =
  "bg-white rounded-[10px] shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)] p-8";
const body = "font-body text-[16px] leading-[24px] text-foreground";
const cardTitle = "font-body text-[16px] leading-[24px] font-medium text-foreground mb-3";

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
        <h2 className="font-heading text-[32px] leading-[40px] text-foreground mb-8">{title}</h2>
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
    text: 'Lead design for the AI research tool, Dynamic Search, platform integration and accessibility, used at institutions in 194 countries. I manage the product designers and a Senior Accessibility Manager.',
  },
  {
    org: 'Grubhub',
    role: 'Director, Product Design, Restaurant & Driver',
    years: '2020–2021',
    text: 'Led design for restaurant and driver products, including Grubhub Direct. Hired 5 people in one year.',
  },
  {
    org: 'Motorola Mobility',
    role: 'Global UX Director',
    years: '2018–2020',
    text: 'Led 33 designers across 6 studios in Chicago, São Paulo, Beijing, Shanghai, Shenzhen and Nanjing, for a 24-device portfolio.',
  },
  {
    org: 'Motorola Mobility',
    role: 'Director, São Paulo Design Studio',
    years: '2016–2017',
    text: 'Moved to São Paulo in 2015 to manage the UX team, then became Director of the multidisciplinary studio of 13.',
  },
  {
    org: 'Motorola',
    role: 'Research to Senior Design Manager, UX',
    years: '2002–2015',
    text: 'Researched 22 mobile platforms, then moved into design leadership. Leading teams since 2006.',
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
            <h1 className="font-heading text-foreground text-[40px] leading-[44px] tracking-[-0.8px] mb-12">LEADERSHIP</h1>

            <div className="bg-white rounded-[10px] p-8">
              <p className={`${body} mb-4`}>
                I build design teams and take on hard problems at scale: the Android RAZR foldable, which earned a Red
                Dot &quot;Best of the Best&quot;; an LLM research tool rolled out to about 11,400 institutions; and
                hybrid AI search for a platform that serves 111M+ people a year.
              </p>
              <p className={`${body} mb-6`}>
                My job is to connect what customers need with what engineering can build, make the call clearly, and
                give senior leads room to do their best work. I&apos;ve led teams on three continents, including two and
                a half years living in São Paulo and running studios in China across a 13-hour time difference.
              </p>

              <nav aria-label="On this page" className="grid grid-cols-1 md:grid-cols-2 gap-1">
                {LEADERSHIP_SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="font-body text-[16px] leading-[24px] text-primary hover:underline"
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
        <ol className="space-y-4">
          {career.map((c) => (
            <li key={c.role} className={card}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                <h3 className="font-body text-[16px] leading-[24px] font-medium text-foreground">
                  {c.role}, {c.org}
                </h3>
                <span className="font-body text-[14px] leading-[20px] text-muted-foreground">{c.years}</span>
              </div>
              <p className={body}>{c.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="working-with-google"
        title="WORKING WITH GOOGLE"
        intro="My work with Android started before Android did. Over 18.5 years at Motorola, I worked with Google's platform teams as a partner and across a negotiating table."
      >
        <div className="space-y-6">
          <div className="bg-primary rounded-[10px] p-8">
            <h3 className="font-body text-[16px] leading-[24px] font-medium text-white mb-3">
              Strategic Subtraction: the &quot;One Nav&quot; Decision
            </h3>
            <p className="font-body text-[16px] leading-[24px] text-white">
              When Android 10 introduced native gestures that competed with our own navigation, I brought my lead
              designer into the negotiations with the Android team. We ran a trade-off analysis, retired our popular
              feature for ecosystem compatibility, moved the effort to the RAZR launch, and shared our gesture research
              with Google as it finalized Android 10.
            </p>
          </div>

          <Card title="Foldables and the Android Framework">
            <p className={body}>
              I directed the UX for the Android RAZR foldable as a partner to the Android team. Our three-part
              cover-screen model shaped Google&apos;s patterns for small foldable screens.
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
        id="building-teams"
        title="BUILDING TEAMS AND SYSTEMS"
        intro="I've led nearly every discipline a design organization needs, from UX, UI, motion and industrial design to research, content and accessibility, and hired 20+ designers and design leaders. I hire for the gap, then give people the space to lead. I've also advised graduate students at Northwestern University since 2018."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="A new team for the RAZR relaunch">
            <p className={body}>
              I gave the 2019 RAZR relaunch to a team new to this kind of work and managed them directly through
              launch. They earned a Red Dot &quot;Best of the Best,&quot; and two of them later became Design Managers.
            </p>
          </Card>
          <Card title="Hiring for accessibility">
            <p className={body}>
              I hired an accessibility lead in 2021 and gave him room to build testing into how teams work.
              Accessibility errors dropped 98%, and JSTOR ranks in the top 1% of the WebAIM Million.
            </p>
          </Card>
          <Card title="Design principles">
            <p className={body}>
              With the Director of Brand + Creative, I co-developed ITHAKA&apos;s five design principles, including
              &quot;Be the guide, not the hero.&quot; They later shaped how JSTOR&apos;s AI research tool works.
            </p>
          </Card>
          <Card title="Pharos design system">
            <p className={body}>
              As executive champion for Pharos, JSTOR&apos;s design system, I help shape its federated stewardship
              model and advocate for shared workflows in Storybook, Figma and MCP.
            </p>
          </Card>
        </div>
      </Section>

      <section id="partners-say" className="bg-accent w-full scroll-mt-24">
        <div className="marketing-grid pt-12 lg:pt-16 pb-12 lg:pb-16">
          <div className="max-w-[75ch] mx-auto">
            <h2 className="font-heading text-[32px] leading-[40px] text-foreground mb-4">WHAT PARTNERS SAY</h2>
            <p className="font-body text-[16px] leading-[24px] text-foreground mb-1">
              What direct reports, peers and managers say when I don&apos;t know who&apos;s speaking.
            </p>
            <p className="font-body text-[14px] leading-[20px] italic text-muted-foreground mb-8">
              From anonymous 360 assessments by Leadership Circle (2024) and the Linkage Institute (2019).
            </p>
          {(() => {
            const [feature, connectorA, connectorB, catalystA, catalystB] = quotes;
            const Tag = ({ text, dark, onAccent }: { text: string; dark?: boolean; onAccent?: boolean }) => (
              <div className={`${dark ? 'bg-white/15' : onAccent ? 'bg-white' : 'bg-secondary'} rounded-full px-3 py-1 inline-block self-start mb-4`}>
                <span className={`font-body text-[11px] leading-[16.5px] tracking-[0.5px] ${dark ? 'text-white' : 'text-secondary-foreground'}`}>
                  {text}
                </span>
              </div>
            );
            const Caption = ({ q, dark }: { q: typeof quotes[number]; dark?: boolean }) => (
              <figcaption className={`font-body text-[14px] leading-[20px] tracking-[0.25px] ${dark ? 'text-white/85' : 'text-secondary-foreground'}`}>
                <strong>{q.source}</strong>, {q.detail}
              </figcaption>
            );
            return (
              <div className="space-y-8">
                {/* Featured pull quote: large type, no card */}
                <figure className="border-l-4 border-primary pl-6 py-2">
                  <Tag text={feature.tag} onAccent />
                  <blockquote className="font-heading text-[24px] leading-[34px] sm:text-[28px] sm:leading-[38px] text-foreground mb-4">
                    &ldquo;{feature.text}&rdquo;
                  </blockquote>
                  <Caption q={feature} />
                </figure>

                {/* Connector: two cards side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[connectorA, connectorB].map((q) => (
                    <figure key={q.text.slice(0, 24)} className="bg-white rounded-[10px] border-2 border-border p-6 flex flex-col">
                      <Tag text={q.tag} />
                      <blockquote className="font-heading text-[17px] leading-[26px] text-secondary-foreground tracking-[0.25px] mb-4 flex-1">
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
                      <blockquote className="font-heading text-[17px] leading-[26px] text-white tracking-[0.25px] mb-4 flex-1">
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
