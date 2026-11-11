import React from 'react';
import { motion } from 'motion/react';
import { CaseStudyFooter } from '../CaseStudyFooter';

// One layout for every case study: header, Context, What we did,
// Results and Why it mattered to me. Each case study file supplies its
// own text and images as data.

export interface CaseStudyFigure {
  /** Show the figure after this move (0-based). Use -1 for after Context. */
  after: number;
  src?: string;
  alt?: string;
  caption?: string;
  /** "body" matches the text column; "wide" spans more of the page. */
  width?: 'body' | 'wide';
  /** A row of screenshots that scrolls sideways. */
  gallery?: { src: string; alt: string }[];
}

export interface CaseStudyMove {
  title: string;
  paragraphs: string[];
}

export interface CaseStudyData {
  id: string;
  hero: { src: string; alt: string; position?: string };
  tag: string;
  years: string;
  title: string;
  subtitle: string;
  role: string;
  partners: string;
  /** One sentence a reader can stop at: what you did and the main result. */
  glance?: string;
  extra?: { label: string; value: string }[];
  context: string[];
  movesHeading?: string;
  moves: CaseStudyMove[];
  figures?: CaseStudyFigure[];
  results: string[];
  resultsFigure?: { src: string; alt: string };
  why: string[];
  /** Embedded videos shown at the end of the case study. */
  videos?: { src: string; title: string; caption?: string }[];
}

const body = "font-['Spline_Sans'] text-[16px] leading-[26px] tracking-[0.25px] text-[#1b1c15]";
const h2 = "font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]";

const Figure: React.FC<{ figure: CaseStudyFigure }> = ({ figure }) => {
  if (figure.gallery) {
    return (
      <figure className="marketing-grid">
        <div
          className="flex gap-4 overflow-x-auto pb-4 snap-x"
          tabIndex={0}
          aria-label={figure.caption || 'Screenshots'}
        >
          {figure.gallery.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="h-64 sm:h-80 w-auto rounded-lg border border-border snap-start shrink-0"
            />
          ))}
        </div>
        {figure.caption && (
          <figcaption className="font-['Spline_Sans'] text-[14px] leading-[20px] text-muted-foreground mt-2">
            {figure.caption}
          </figcaption>
        )}
      </figure>
    );
  }
  const wide = figure.width === 'wide';
  return (
    <figure className={wide ? 'marketing-grid' : 'blog-grid'}>
      <img
        src={figure.src}
        alt={figure.alt}
        className={`h-auto rounded-lg ${wide ? 'w-full max-w-[80ch] mx-auto' : 'w-full sm:w-4/5'}`}
      />
      {figure.caption && (
        <figcaption
          className={`font-['Spline_Sans'] text-[14px] leading-[20px] text-muted-foreground mt-2 ${wide ? 'text-center' : ''}`}
        >
          {figure.caption}
        </figcaption>
      )}
    </figure>
  );
};

export const CaseStudyTemplate: React.FC<{
  data: CaseStudyData;
  onNavigate?: (caseStudyId: string) => void;
}> = ({ data, onNavigate }) => {
  const figuresAfter = (i: number) =>
    (data.figures || []).filter((f) => f.after === i).map((f, k) => <Figure key={`${i}-${k}`} figure={f} />);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white"
    >
      <div className="w-full">
        <img
          src={data.hero.src}
          alt={data.hero.alt}
          className={`w-full h-64 md:h-[500px] object-cover ${data.hero.position || ''}`}
        />
      </div>

      <div className="w-full bg-secondary">
        <div className="blog-grid py-12 sm:py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary text-primary-foreground font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] px-3 py-1 rounded-full">
              {data.tag}
            </span>
            <span className="font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] text-[#1b1c15]">
              {data.years}
            </span>
          </div>
          <h1 className="font-['EB_Garamond'] text-[40px] leading-[44px] tracking-[-0.8px] text-[#1b1c15] mb-4">
            {data.title}
          </h1>
          <p className="font-['EB_Garamond'] text-[26px] leading-[34px] sm:text-[32px] sm:leading-[40px] text-[#1b1c15] mb-8">
            {data.subtitle}
          </p>
          <dl className="space-y-2 font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.25px] text-[#1b1c15]">
            {[{ label: 'Role', value: data.role }, { label: 'Work Partners', value: data.partners }, ...(data.extra || [])].map(
              (row) => (
                <div key={row.label}>
                  <dt className="inline font-bold">{row.label}: </dt>
                  <dd className="inline">{row.value}</dd>
                </div>
              ),
            )}
          </dl>
          {data.glance && (
            <p className="mt-8 bg-white rounded-[10px] border-l-4 border-primary px-6 py-4 font-['Spline_Sans'] text-[18px] leading-[28px] text-[#1b1c15]">
              <strong className="block text-[12px] leading-[16px] tracking-[0.5px] uppercase text-primary mb-1">At a glance</strong>
              {data.glance}
            </p>
          )}
        </div>
      </div>

      <div className="w-full py-12">
        <div className="flex flex-col gap-12">
          <section className="blog-grid flex flex-col gap-4">
            <h2 className={h2}>Context</h2>
            {data.context.map((p, i) => (
              <p key={i} className={body}>
                {p}
              </p>
            ))}
          </section>
          {figuresAfter(-1)}

          {data.moves.map((move, i) => (
            <React.Fragment key={move.title}>
              <section className={`blog-grid flex flex-col gap-3 ${i > 0 ? '-mt-6' : ''}`}>
                {i === 0 && <h2 className={`${h2} mb-3`}>{data.movesHeading || 'What we did'}</h2>}
                <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">{move.title}</h3>
                {move.paragraphs.map((p, k) => (
                  <p key={k} className={body}>
                    {p}
                  </p>
                ))}
              </section>
              {figuresAfter(i)}
            </React.Fragment>
          ))}

          <section className="blog-grid flex flex-col gap-4">
            <h2 className={h2}>Results</h2>
            <ul className="list-disc pl-6 space-y-3">
              {data.results.map((r, i) => (
                <li key={i} className={body}>
                  {r}
                </li>
              ))}
            </ul>
            {data.resultsFigure && (
              <img src={data.resultsFigure.src} alt={data.resultsFigure.alt} className="h-auto w-full max-w-[280px] mt-4" />
            )}
          </section>

          <section className="blog-grid">
            <div className="bg-accent border-l-4 border-primary rounded-[10px] p-6 sm:p-8">
              <h2 className="font-['Spline_Sans'] text-[14px] leading-[20px] tracking-[0.5px] uppercase text-primary mb-3">
                Why it mattered to me
              </h2>
              {data.why.map((p, i) => (
                <p
                  key={i}
                  className="font-['EB_Garamond'] text-[22px] leading-[32px] text-[#1b1c15] mb-2 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>
          </section>
          {data.videos?.map((v) => (
            <figure key={v.src} className="blog-grid w-full">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
                <iframe
                  src={v.src}
                  title={v.title}
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                />
              </div>
              {v.caption && (
                <figcaption className="font-['Spline_Sans'] text-[14px] leading-[20px] text-muted-foreground mt-2">
                  {v.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>

      <CaseStudyFooter currentProjectId={data.id} onNavigate={onNavigate} />
    </motion.div>
  );
};
