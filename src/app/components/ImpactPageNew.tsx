import React from "react";
import { motion } from "motion/react";

interface ImpactPageProps {
  pageVariants: any;
  pageTransition: any;
}

interface Stat {
  value: string;
  label: string;
  detail: string;
}

const numbers: Stat[] = [
  { value: "20+", label: "Years Experience", detail: "Leading design teams since 2006" },
  { value: "111M+", label: "Annual Users", detail: "JSTOR, across 194 countries" },
  { value: "14,000", label: "Libraries", detail: "Supported by JSTOR" },
  { value: "~11,400", label: "Institutions", detail: "Where JSTOR's AI research tool rolled out" },
  { value: "33", label: "Designers Led", detail: "6 studios in the US, China and Brazil, within $9.78B operations" },
  { value: "20+", label: "Designers Hired", detail: "Across my Director roles" },
  { value: "~1B", label: "Devices", detail: "Motorola phones from 2002–2020 that my work touched, as a researcher, carrier negotiator, designer and design leader" },
  { value: "23M+", label: "Moto App Active Users", detail: "Motorola" },
];

const results: Stat[] = [
  {
    value: "52% vs 39%",
    label: "AI-Assisted Search",
    detail: "Share of Dynamic Search queries that led people to content, versus keyword search",
  },
  {
    value: "~20x",
    label: "Local Restaurant Orders",
    detail: "Grubhub Direct restaurants that listed their site on Google Business Profile received nearly 20x the orders in testing",
  },
  {
    value: "+35.2%",
    label: "Individual Subscriptions",
    detail: "JPASS sales year over year, with net revenue up 25%",
  },
  {
    value: "40% → 63%",
    label: "Login Success",
    detail: "Clearer login error messages raised sign-in success for institutional users",
  },
];

const recognition = [
  {
    title: "Red Dot \"Best of the Best\"",
    text: "Android RAZR foldable, the top distinction in the Red Dot product design awards. I led the design team from concept through launch.",
  },
  {
    title: "Top 1% in the WebAIM Million",
    text: "Zero automated errors on the JSTOR homepage and a 98% improvement in accessibility errors, through a dedicated program of automated checks and manual audits.",
  },
  {
    title: "AI Built on Trust",
    text: "Set the design principles for JSTOR's AI research tool: answers link to their source text, and the tool guides research rather than writing for the researcher.",
  },
  {
    title: "Android Platform Influence",
    text: "Shared Motorola's gesture research with Google and adopted the Android 10 standard. Our RAZR cover-screen model shaped Google's patterns for small foldable screens.",
  },
];

const SectionHeading: React.FC<{ id: string; children: React.ReactNode }> = ({
  id,
  children,
}) => (
  <h2
    id={id}
    className="mb-8 font-heading text-white text-h2 uppercase tracking-caps"
  >
    {children}
  </h2>
);

const StatCard: React.FC<Stat & { large?: boolean }> = ({ value, label, detail, large }) => (
  <div className="bg-secondary border-2 border-border rounded-[2px] p-6 text-center flex flex-col gap-2">
    <div
      className="font-heading text-secondary-foreground text-stat"
    >
      {value}
    </div>
    <div className="font-body text-muted-foreground text-body">
      {label}
    </div>
    <div className="font-body text-foreground text-small">
      {detail}
    </div>
  </div>
);

export const ImpactPageContent: React.FC<ImpactPageProps> = ({
  pageVariants,
  pageTransition,
}) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    transition={pageTransition}
  >
    <div className="w-full bg-secondary-foreground">
      <div className="marketing-grid py-16">
        <div className="max-w-[75ch] mx-auto">
          <div className="mb-12">
            <h1 className="mb-4 font-heading text-white text-display uppercase tracking-caps">
              Impact
            </h1>
            <p className="font-body text-white text-lead">
              Results from AI search, local commerce, mobile platforms and the teams behind them
            </p>
          </div>

          <section className="mb-12">
            <SectionHeading id="results">Business Results</SectionHeading>
            <div className="grid sm:grid-cols-2 gap-6">
              {results.map((s) => (
                <StatCard key={s.label} {...s} large />
              ))}
            </div>
          </section>

          <section className="mb-12">
            <SectionHeading id="by-the-numbers">By the Numbers</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {numbers.map((s) => (
                <StatCard key={s.label} {...s} />
              ))}
            </div>
          </section>

          <section>
            <SectionHeading id="industry-recognition">Recognition</SectionHeading>
            <div className="grid md:grid-cols-2 gap-6">
              {recognition.map((r) => (
                <div key={r.title} className="bg-white rounded-[2px] p-6">
                  <h3 className="font-body text-primary mb-2 text-body">
                    {r.title}
                  </h3>
                  <p className="font-body text-secondary-foreground text-small">
                    {r.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  </motion.div>
);
