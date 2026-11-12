import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
  /** Draw a 1px hairline around the image, for screenshots on a white page. */
  bordered?: boolean;
  /** A short silent clip in place of an image: plays muted on a loop (only
      when reduce motion is off), with controls so it can be paused. */
  video?: { src: string; poster: string };
  /** A row of screenshots that scrolls sideways. */
  gallery?: { src: string; alt: string }[];
  /** Taller gallery images, for slides with small text. */
  galleryTall?: boolean;
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

const body = "font-body text-[#1b1c15] text-body";
const h2 = "font-heading text-[#1b1c15] text-h2";

// A row of screenshots you can scroll sideways. Arrow buttons move one image
// at a time, and each one fades out when there is nothing more that way.
const Gallery: React.FC<{ images: { src: string; alt: string }[]; caption?: string; tall?: boolean }> = ({ images, caption, tall }) => {
  const row = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  // When every image fits, center the row and hide the arrows; when it
  // doesn't, it scrolls sideways as a carousel.
  const [fits, setFits] = useState(false);
  const update = () => {
    const el = row.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    setFits(el.scrollWidth <= el.clientWidth + 1);
  };
  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  const step = (dir: 1 | -1) => {
    const el = row.current;
    if (!el) return;
    const first = el.querySelector('img');
    const by = first ? first.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: dir * by, behavior: smooth ? 'smooth' : 'auto' });
  };
  const arrow = (dir: 1 | -1, hidden: boolean) => (
    <button
      type="button"
      onClick={() => step(dir)}
      aria-label={dir === 1 ? 'Next screenshot' : 'Previous screenshot'}
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
      className={`absolute top-1/2 -translate-y-1/2 ${dir === 1 ? 'right-2' : 'left-2'} w-11 h-11 flex items-center justify-center bg-white border border-border rounded-[2px] text-primary hover:border-primary transition-[opacity,border-color] duration-150 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary ${hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {dir === 1 ? <ChevronRight size={20} aria-hidden="true" /> : <ChevronLeft size={20} aria-hidden="true" />}
    </button>
  );
  return (
    <figure className="marketing-grid my-16 md:my-20">
      <div className="relative">
        <div
          ref={row}
          onScroll={update}
          className={`flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory touch-manipulation ${fits ? 'justify-center' : ''}`}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label={caption || 'Screenshots'}
        >
          {images.map((img, i) => (
            <div
              key={img.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${images.length}`}
              className="snap-start shrink-0"
            >
              <img
                src={img.src}
                alt={img.alt}
                onLoad={update}
                className={`${tall ? 'h-56 sm:h-[26rem]' : 'h-64 sm:h-80'} w-auto rounded-[2px] border border-border`}
              />
            </div>
          ))}
        </div>
        {arrow(-1, fits || atStart)}
        {arrow(1, fits || atEnd)}
      </div>
      {caption && (
        <figcaption className={`font-body text-muted-foreground mt-2 text-small ${fits ? 'text-center' : ''}`}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

const Figure: React.FC<{ figure: CaseStudyFigure }> = ({ figure }) => {
  if (figure.gallery) {
    return <Gallery images={figure.gallery} caption={figure.caption} tall={figure.galleryTall} />;
  }
  const wide = figure.width === 'wide';
  if (figure.video) {
    const still = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return (
      <figure className="blog-grid my-16 md:my-20">
        <video
          src={figure.video.src}
          poster={figure.video.poster}
          aria-label={figure.alt}
          className="h-auto w-full max-w-[360px] rounded-[2px]"
          muted
          loop
          playsInline
          autoPlay={!still}
          controls
          preload="metadata"
        />
        {figure.caption && (
          <figcaption className="font-body text-muted-foreground mt-2 text-small">{figure.caption}</figcaption>
        )}
      </figure>
    );
  }
  return (
    <figure className={`${wide ? 'marketing-grid' : 'blog-grid'} my-16 md:my-20`}>
      <img
        src={figure.src}
        alt={figure.alt}
        className={`h-auto rounded-[2px] ${figure.bordered ? 'border border-border' : ''} ${wide ? 'w-full max-w-[80ch] mx-auto' : 'w-full sm:w-4/5'}`}
      />
      {figure.caption && (
        <figcaption
          className={`font-body text-muted-foreground mt-2 ${wide ? 'text-center' : ''} text-small`}
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
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
            <span className="pill">
              {data.tag}
            </span>
            <span className="font-body text-[#1b1c15] text-label">
              {data.years}
            </span>
          </div>
          <h1 className="font-heading text-[#1b1c15] mb-4 text-display">
            {data.title}
          </h1>
          <p className="font-heading text-[#1b1c15] mb-8 text-h3">
            {data.subtitle}
          </p>
          <dl className="space-y-2 font-body text-[#1b1c15] text-body">
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
            <p className="mt-8 bg-white rounded-[2px] border-l-4 border-primary px-6 py-4 font-body text-[#1b1c15] text-lead">
              <strong className="block uppercase text-primary mb-1 text-label">At a glance</strong>
              {data.glance}
            </p>
          )}
        </div>
      </div>

      {/* Spacing follows the Figma blog's rhythm: 120px from the header to the
          body (80px on phones), 80px around images and between sections, 40px
          between moves, and 24px between paragraphs. This is block layout, so
          the larger margin wins where two meet (an image after a move is 80px,
          not 120px). */}
      <div className="w-full pt-20 md:pt-[120px] pb-16 md:pb-20">
        <section className="blog-grid flex flex-col gap-5 md:gap-6">
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
            <section className={`blog-grid ${i === 0 ? 'mt-16 md:mt-20' : 'mt-10'}`}>
              {i === 0 && <h2 className={`${h2} mb-6`}>{data.movesHeading || 'What we did'}</h2>}
              <h3 className="font-heading text-[#1b1c15] text-h3 mb-3">{move.title}</h3>
              <div className="flex flex-col gap-5 md:gap-6">
                {move.paragraphs.map((p, k) => (
                  <p key={k} className={body}>
                    {p}
                  </p>
                ))}
              </div>
            </section>
            {figuresAfter(i)}
          </React.Fragment>
        ))}

        <section className="blog-grid flex flex-col gap-5 md:gap-6 mt-16 md:mt-20">
          <h2 className={h2}>Results</h2>
          <ul className="list-disc pl-6 space-y-4">
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

        <section className="blog-grid mt-16 md:mt-20">
          <div className="bg-accent border-l-4 border-primary rounded-[2px] p-6 sm:p-8">
            <h2 className="font-body uppercase text-primary mb-3 text-small">
              Why it mattered to me
            </h2>
            {data.why.map((p, i) => (
              <p
                key={i}
                className="font-heading text-[#1b1c15] mb-2 last:mb-0 text-h3"
              >
                {p}
              </p>
            ))}
          </div>
        </section>
        {data.videos?.map((v) => (
          <figure key={v.src} className="blog-grid w-full mt-16 md:mt-20">
            <div className="relative w-full aspect-video rounded-[2px] overflow-hidden bg-black">
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
              <figcaption className="font-body text-muted-foreground mt-2 text-small">
                {v.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      <CaseStudyFooter currentProjectId={data.id} onNavigate={onNavigate} />
    </motion.div>
  );
};
