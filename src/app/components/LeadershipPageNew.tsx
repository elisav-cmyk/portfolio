import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'motion/react';

// Leadership and About combined. Each story appears once.
// Section ids are used by the "How I Lead" links on the Home page.
export const LEADERSHIP_SECTIONS = [
  { id: 'career', label: 'Career at a Glance' },
  { id: 'working-with-google', label: 'Working with Google' },
  { id: 'building-teams', label: 'Building Teams and Systems' },
  { id: 'partners-say', label: 'What Partners Say' },
];

const card =
  "bg-white rounded-[2px] border border-border p-8";
const body = "font-body text-foreground text-body max-w-[68ch]";
const cardTitle = "font-body font-medium text-foreground mb-3 text-body";
// Card content sits in one reading column, centered in the card, so headings,
// paragraphs and links share the same left and right edges.
const cardInner = "max-w-[68ch] mx-auto";

const Section: React.FC<{ id: string; title: string; intro?: string; last?: boolean; children: React.ReactNode }> = ({
  id,
  title,
  intro,
  last,
  children,
}) => (
  <section id={id} className="bg-accent w-full scroll-mt-24">
    <div className={`marketing-grid pt-12 lg:pt-16 ${last ? 'pb-12 lg:pb-16' : 'pb-0'}`}>
      <div className="max-w-(--page-width) mx-auto">
        <h2 className="font-heading text-foreground mb-8 text-h2 uppercase tracking-caps">{title}</h2>
        {intro && <p className={`${body} mb-8`}>{intro}</p>}
        {children}
      </div>
    </div>
  </section>
);

const Card: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className={card}>
    <div className={cardInner}>
      {title && <h3 className={cardTitle}>{title}</h3>}
      {children}
    </div>
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

// Grouped by strength: Strategic, Connector, Catalyst. On the page, the first
// Catalyst quote leads as the pull quote.
const quotes = [
  {
    tag: 'Strategic',
    text: 'Her knowledge and ability to balance business and customer needs are impressive. Her rational and decision-making process is clear, there is no guesswork with her.',
    source: 'Product/Engineering Partner',
    detail: 'Linkage Institute, Advancing Women Leaders 360 Assessment, 2019',
  },
  {
    tag: 'Connector',
    text: "Elisa’s greatest leadership asset is her collaboration skills. She has the ability to work across various levels and departments. She is able to understand needs from the C-suite and translate them into actionable goals.",
    source: 'Senior Partner/Executive',
    detail: 'Leadership Circle Profile assessment, 2024',
  },
  {
    tag: 'Connector',
    text: "Elisa is so good at collaborating with customers and with the engineering team she is working with to achieve the best design that fulfills goals and is able to be implemented within the technical capabilities and the time constraints. She knows how to be firm when it matters and to give when it doesn’t matter.",
    source: 'Product/Engineering Partner',
    detail: 'Linkage Institute, Advancing Women Leaders 360 Assessment, 2019',
  },
  {
    tag: 'Catalyst',
    text: "Elisa’s super power is her ability to move ideas forward and help teams hone in on the best solution when we get stuck. She does this working iteratively and collaboratively.",
    source: 'Peer/Partner',
    detail: 'Leadership Circle Profile assessment, 2024',
  },
  {
    tag: 'Catalyst',
    text: "Elisa’s best asset is giving the people who report to her the space to take leadership over our work, while still being supportive. She guides when needed and gives autonomy when wanted.",
    source: 'Direct Report',
    detail: 'Leadership Circle Profile assessment, 2024',
  },
];

// Career timeline. As the reader scrolls through it, a green line draws down
// from the current role to the first one, and each dot fills when the line
// reaches it: the motion traces the career in reading order. The current
// role's dot is a little larger, so it stays marked once every dot is filled.
// With reduce motion on, the timeline is still: full line, current dot filled.
const CareerTimeline: React.FC = () => {
  const list = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const [dotTops, setDotTops] = useState<number[]>([]);
  const [reached, setReached] = useState(1);
  const { scrollYProgress } = useScroll({ target: list, offset: ['start 75%', 'end 55%'] });
  const span = dotTops.length ? dotTops[dotTops.length - 1] - dotTops[0] : 0;
  const fill = useTransform(scrollYProgress, [0, 1], [0, span]);

  useLayoutEffect(() => {
    const measure = () => {
      const el = list.current;
      if (!el) return;
      const base = el.getBoundingClientRect().top;
      setDotTops(
        Array.from(el.querySelectorAll<HTMLElement>('[data-dot]')).map((d) => {
          const r = d.getBoundingClientRect();
          return r.top - base + r.height / 2;
        }),
      );
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useMotionValueEvent(fill, 'change', (h) => {
    const n = dotTops.filter((t) => t - dotTops[0] <= h + 1).length;
    if (n !== reached) setReached(n);
  });

  const still = reduce || !dotTops.length;
  return (
    <ol ref={list} className="relative max-w-[68ch]">
      {dotTops.length > 1 && (
        <>
          <span aria-hidden="true" className="absolute left-[5px] w-0.5 bg-primary/25" style={{ top: dotTops[0], height: span }} />
          <motion.span
            aria-hidden="true"
            className="absolute left-[5px] w-0.5 bg-primary"
            style={{ top: dotTops[0], height: still ? span : fill }}
          />
        </>
      )}
      {career.map((c, i) => {
        const current = i === 0;
        const filled = current || (!still && i < reached);
        return (
          <li key={c.role} className="relative pl-10 pb-10 last:pb-0">
            <span
              data-dot
              aria-hidden="true"
              className={`absolute rounded-full border-2 border-primary transition-colors duration-200 ease-out ${current ? 'left-[-2px] -top-[3px] size-4' : 'left-0 -top-px size-3'} ${filled ? 'bg-primary' : 'bg-white'}`}
            />
            <p className="font-body font-medium text-secondary-foreground text-label uppercase tracking-[0.08em] [text-box:trim-start_cap_alphabetic] mb-2">
              {c.years}
            </p>
            <h3 className="font-body font-medium text-foreground text-body mb-1">
              {c.role}, {c.org}
            </h3>
            <p className={body}>{c.text}</p>
          </li>
        );
      })}
    </ol>
  );
};

export const LeadershipPageContent = () => {
  return (
    <div className="w-full bg-background">
      {/* Intro */}
      <section className="bg-accent w-full">
        <div className="marketing-grid pt-12 lg:pt-16 pb-0">
          <div className="max-w-(--page-width) mx-auto">
            <h1 className="font-heading text-foreground mb-12 text-display uppercase tracking-caps">Leadership</h1>

            {/* Intro card: text on the left, jump links in a sidebar that stacks below on narrow screens */}
            <div className="bg-white rounded-[2px] p-6 md:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
                <div className="flex-1 space-y-5">
                  <p className={body}>
                    I build design teams and take on hard problems at scale: the Android RAZR foldable, which earned a
                    Red Dot &quot;Best of the Best&quot;; an LLM research tool rolled out to about 11,400 institutions;
                    and hybrid AI search for a platform that serves 111M+ people a year.
                  </p>
                  <p className={body}>
                    My job is to connect what customers need with what engineering can build, make the call clearly, and
                    give senior leads room to do their best work. I&apos;ve led teams on three continents, including two
                    and a half years living in São Paulo and running studios in China across a 13-hour time difference.
                  </p>
                </div>

                <nav
                  aria-label="On this page"
                  className="w-full lg:w-72 shrink-0 border-t lg:border-t-0 lg:border-l border-border pt-5 lg:pt-0 lg:pl-8"
                >
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                    {LEADERSHIP_SECTIONS.map((s) => (
                      <li key={s.id}>
                        <a href={`#${s.id}`} className="font-body text-primary hover:underline text-body">
                          → {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="career" title="Career at a Glance">
        <CareerTimeline />
      </Section>

      <Section
        id="working-with-google"
        title="Working With Google"
        intro="My work with Android started before Android did. Over 18.5 years at Motorola, I worked with Google's platform teams as a partner and across a negotiating table."
      >
        <div className="space-y-6">
          <div className="bg-primary rounded-[2px] p-8">
            <div className={cardInner}>
              <h3 className="font-body font-medium text-white mb-3 text-body">
                Strategic Subtraction: the &quot;One Nav&quot; Decision
              </h3>
              <p className="font-body text-white text-body max-w-[68ch]">
                When Android 10 introduced native gestures that competed with our own navigation, I brought my lead
                designer into the negotiations with the Android team. We ran a trade-off analysis, retired our popular
                feature for ecosystem compatibility, moved the effort to the RAZR launch, and shared our gesture research
                with Google as it finalized Android 10.
              </p>
            </div>
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
        title="Building Teams and Systems"
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
          <div className="max-w-(--page-width) mx-auto mb-8">
            <h2 className="font-heading text-foreground mb-4 text-h2 uppercase tracking-caps">What Partners Say</h2>
            <p className="font-body text-foreground mb-1 text-body">
              What direct reports, peers and managers say when I don&apos;t know who&apos;s speaking.
            </p>
            <p className="font-body text-muted-foreground text-small">
              From anonymous 360 assessments by Leadership Circle (2024) and the Linkage Institute (2019).
            </p>
          </div>
          {(() => {
            const [strategic, connectorA, connectorB, feature, catalystB] = quotes;
            const Caption = ({ q, dark }: { q: typeof quotes[number]; dark?: boolean }) => (
              <figcaption className={`font-body ${dark ? 'text-white/85' : 'text-secondary-foreground'} text-small`}>
                <strong>{q.source}</strong>, {q.detail}
              </figcaption>
            );
            // A bento grid modeled on literal.club: three columns, rows of equal
            // height, and boxes one or two columns wide. Each box is a flat white
            // panel with generous padding; the quote sits at the top and the
            // credit at the bottom. On phones the boxes stack in reading order.
            const Box = ({ q, className, dark, lead }: { q: typeof quotes[number]; className: string; dark?: boolean; lead?: boolean }) => (
              <figure
                className={`${className} ${dark ? 'on-dark bg-primary' : 'bg-white'} rounded-[2px] flex flex-col p-6 md:p-8 lg:p-10`}
              >
                <span className={`pill mb-6 ${dark ? 'pill-dark' : ''}`}>{q.tag}</span>
                <blockquote
                  className={`font-heading mb-6 flex-1 ${dark ? 'text-white' : 'text-secondary-foreground'} ${lead ? 'text-quote-lg max-w-[40ch]' : 'text-quote'}`}
                >
                  &ldquo;{q.text}&rdquo;
                </blockquote>
                <Caption q={q} dark={dark} />
              </figure>
            );
            // Phone: one column. Tablet: the lead quote across the full width,
            // the other four in a 2 x 2 grid. Desktop: three columns, with the
            // lead two columns wide beside one quote, then three below.
            return (
              <div className="max-w-(--page-width) mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                <Box q={feature} lead dark className="md:col-span-2" />
                <Box q={catalystB} className="" />
                <Box q={strategic} className="" />
                <Box q={connectorA} className="" />
                <Box q={connectorB} className="" />
              </div>
            );
          })()}
        </div>
      </section>
    </div>
  );
};
