import React from "react";
import { TrendingUp, Award, Users, Globe } from "lucide-react";
import { motion } from "motion/react";
import svgPaths from "../imports/svg-742xyrth9l";

interface ImpactPageProps {
  pageVariants: any;
  pageTransition: any;
}

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
          {/* Header */}
          <div className="mb-12">
            <h1 className="mb-4 font-['EB_Garamond'] text-[2rem] leading-[2.5rem] text-white">
              IMPACT
            </h1>
            <p className="font-['Spline_Sans'] text-[1.25rem] leading-[1.75rem] text-white">
              Measurable outcomes demonstrating leadership
              effectiveness and design excellence at scale
            </p>
          </div>

          {/* BY THE NUMBERS */}
          <div className="mb-12">
            <h2
              id="by-the-numbers"
              className="mb-8 pb-2 border-b-2 border-white font-['EB_Garamond'] text-[1.75rem] leading-[2.25rem] text-white"
            >
              BY THE NUMBERS
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* 111M+ Card */}
              <div className="bg-secondary border-2 border-border rounded-[10px] p-8 text-center">
                <div className="font-['EB_Garamond'] text-[2.8125rem] leading-[3.25rem] text-secondary-foreground mb-2">
                  111M+
                </div>
                <div className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-muted-foreground mb-2">
                  Annual Users Impacted
                </div>
                <div className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-foreground">
                  Across JSTOR&apos;s global platform
                </div>
              </div>

              {/* 33 Card */}
              <div className="bg-secondary border-2 border-border rounded-[10px] p-8 text-center">
                <div className="font-['EB_Garamond'] text-[2.8125rem] leading-[3.25rem] text-secondary-foreground mb-2">
                  33
                </div>
                <div className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-muted-foreground mb-2">
                  Global Designers Led
                </div>
                <div className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-foreground">
                  6 studios: US, China, Brazil
                </div>
              </div>

              {/* 20 Card */}
              <div className="bg-secondary border-2 border-border rounded-[10px] p-8 text-center">
                <div className="font-['EB_Garamond'] text-[2.8125rem] leading-[3.25rem] text-secondary-foreground mb-2">
                  20
                </div>
                <div className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-muted-foreground mb-2">
                  Years Experience
                </div>
                <div className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-foreground">
                  Leading design at scale
                </div>
              </div>
            </div>
          </div>

          {/* Grid Cards - Team Building, Product Impact, Global Reach, Quality & Recognition */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Team Building */}
            <div className="bg-white rounded-[10px] p-8 shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-primary" size={24} />
                <h3 className="font-['Spline_Sans'] text-[1.375rem] leading-[2rem] text-neutral-950">
                  Team Building
                </h3>
              </div>
              <div className="space-y-3 font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem]">
                <div className="flex justify-between items-center">
                  <span className="text-secondary-foreground">
                    Designers hired & developed
                  </span>
                  <span className="font-['Spline_Sans'] text-primary">
                    20+
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-foreground">
                    Team members promoted
                  </span>
                  <span className="font-['Spline_Sans'] text-primary">
                    Multiple
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-foreground">
                    UX team growth (Brazil Studio)
                  </span>
                  <span className="font-['Spline_Sans'] text-primary">
                    3×
                  </span>
                </div>
              </div>
            </div>

            {/* Product Impact */}
            <div className="bg-white rounded-[10px] p-8 shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp
                  className="text-primary"
                  size={24}
                />
                <h3 className="font-['Spline_Sans'] text-[1.375rem] leading-[2rem] text-neutral-950">
                  Product Impact
                </h3>
              </div>
              <div className="space-y-3 font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem]">
                <div className="flex justify-between items-center">
                  <span className="text-secondary-foreground">
                    AI Tool engagement increase
                  </span>
                  <span className="font-['Spline_Sans'] text-primary">
                    3×
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-foreground">
                    Accessibility improvement
                  </span>
                  <span className="font-['Spline_Sans'] text-primary">
                    98%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-foreground">
                    Moto App active users
                  </span>
                  <span className="font-['Spline_Sans'] text-primary">
                    23M+
                  </span>
                </div>
              </div>
            </div>

            {/* Global Reach */}
            <div className="bg-white rounded-[10px] p-8 shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-primary" size={24} />
                <h3 className="font-['Spline_Sans'] text-[1.375rem] leading-[2rem] text-neutral-950">
                  Global Reach
                </h3>
              </div>
              <div className="space-y-3 font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem]">
                <div className="flex justify-between items-center">
                  <span className="text-secondary-foreground">
                    Countries served (JSTOR)
                  </span>
                  <span className="font-['Spline_Sans'] text-primary">
                    194
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-foreground">
                    Libraries supported
                  </span>
                  <span className="font-['Spline_Sans'] text-primary">
                    14,000
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-foreground">
                    Motorola revenue scale
                  </span>
                  <span className="font-['Spline_Sans'] text-primary">
                    $9.78B
                  </span>
                </div>
              </div>
            </div>

            {/* Quality & Recognition */}
            <div className="bg-white rounded-[10px] p-8 shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-primary" size={24} />
                <h3 className="font-['Spline_Sans'] text-[1.375rem] leading-[2rem] text-neutral-950">
                  Quality & Recognition
                </h3>
              </div>
              <div className="space-y-3 font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem]">
                <div className="flex justify-between items-center">
                  <span className="text-secondary-foreground">
                    WAVE accessibility ranking
                  </span>
                  <span className="font-['Spline_Sans'] text-primary">
                    Top 1%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-foreground">
                    Red Dot awards
                  </span>
                  <span className="font-['Spline_Sans'] text-primary">
                    Best of Best
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* BUSINESS PERFORMANCE */}
          <div className="mb-12">
            <h2
              id="business-performance"
              className="mb-8 pb-2 border-b-2 border-white font-['EB_Garamond'] text-[1.75rem] leading-[2.25rem] text-white"
            >
              BUSINESS PERFORMANCE
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Subscription Revenue Card */}
              <div className="bg-secondary border-2 border-border rounded-[10px] p-8 text-center">
                <div className="font-['EB_Garamond'] text-[2.8125rem] leading-[3.25rem] text-secondary-foreground mb-2">
                  45% → 50%
                </div>
                <div className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-muted-foreground mb-2">
                  Subscription Revenue
                </div>
                <div className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-foreground">
                  Increased JPASS checkout conversion rates
                </div>
              </div>

              {/* Access Efficiency Card */}
              <div className="bg-secondary border-2 border-border rounded-[10px] p-8 text-center">
                <div className="font-['EB_Garamond'] text-[2.8125rem] leading-[3.25rem] text-secondary-foreground mb-2">
                  40% → 63%
                </div>
                <div className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-muted-foreground mb-2">
                  Access Efficiency
                </div>
                <div className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-foreground">
                  Optimized institutional authentication rates
                  removing critical friction for high-value B2B
                  accounts
                </div>
              </div>

              {/* Retention Economy Card */}
              <div className="bg-secondary border-2 border-border rounded-[10px] p-8 text-center">
                <div className="font-['EB_Garamond'] text-[2.8125rem] leading-[3.25rem] text-secondary-foreground mb-2">
                  11% → 17%
                </div>
                <div className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-muted-foreground mb-2">
                  Retention Economy
                </div>
                <div className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] tracking-[0.015625rem] text-foreground">
                  Drove a statistically significant lift in
                  monthly auto-renewals directly reducing churn
                  and support costs
                </div>
              </div>
            </div>
          </div>

          {/* INDUSTRY RECOGNITION */}
          <div className="mb-12">
            <h2
              id="industry-recognition"
              className="mb-8 pb-2 border-b-2 border-white font-['EB_Garamond'] text-[1.75rem] leading-[2.25rem] text-white"
            >
              INDUSTRY RECOGNITION
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-[10px] p-6">
                <h4 className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-primary mb-2">
                  Red Dot Design Award
                </h4>
                <p className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] text-secondary-foreground">
                  &quot;Best of the Best&quot; for Android RAZR
                  foldable—highest recognition in product
                  design. Led design team from concept through
                  launch.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6">
                <h4 className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-primary mb-2">
                  WAVE Accessibility Excellence
                </h4>
                <p className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] text-secondary-foreground">
                  Achieved Top 1% WAVE ranking through strategic
                  hiring and team empowerment. 98% improvement
                  in accessibility errors.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6">
                <h4 className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-primary mb-2">
                  AI Ethics Leadership
                </h4>
                <p className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] text-secondary-foreground">
                  Leading industry conversations on ethical AI
                  in academic research. Speaking at conferences
                  and guiding product strategy to balance
                  innovation with academic integrity.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6">
                <h4 className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-primary mb-2">
                  Platform Alignment Excellence
                </h4>
                <p className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] text-secondary-foreground">
                  Collaborated with Google on Android gesture
                  navigation patterns. Influenced foldable
                  framework standards through RAZR development
                  work.
                </p>
              </div>
            </div>
          </div>

          {/* LEADERSHIP THROUGH EMPOWERMENT */}
          <div className="mb-12">
            <h2
              id="leadership-empowerment"
              className="mb-8 pb-2 border-b-2 border-white font-['EB_Garamond'] text-[1.75rem] leading-[2.25rem] text-white"
            >
              LEADERSHIP THROUGH EMPOWERMENT
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-[10px] p-6">
                <h4 className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-primary mb-2">
                  Strategic Hiring Driving Outcomes
                </h4>
                <p className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] text-secondary-foreground">
                  I identify capability gaps and hire for
                  specific skills. At JSTOR: hired accessibility
                  lead to drive 98% error reduction and
                  empowered them to institute shift-left
                  accessibility practices that earned a Top 1%
                  WAVE ranking.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6">
                <h4 className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-primary mb-2">
                  Accessibility Transformation (JSTOR)
                </h4>
                <p className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] text-secondary-foreground">
                  Led accessibility transformation by hiring
                  specialist technical lead. Empowered him to
                  institute shift-left testing, achieving 98%
                  error improvement. Project demonstrates
                  strategic hiring and team empowerment
                  approach—I identify capability gaps, hire
                  expertise, then empower teams to execute with
                  autonomy.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6">
                <h4 className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-primary mb-2">
                  UX/UI Expansion (Brazil Studio)
                </h4>
                <p className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] text-secondary-foreground">
                  Tripled UX/UI team from 2 to 6 designers in 12
                  months through strategic hiring. Led team to
                  deliver DTV Mod (sold out in Brazil market)
                  and concepts that influenced the global
                  product portfolio.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6">
                <h4 className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-primary mb-2">
                  Brazil Studio Career Outcomes
                </h4>
                <p className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] text-secondary-foreground">
                  All 3 RAZR team members (all new to
                  Motorola/mobile) led high-stakes 2019 foldable
                  relaunch. Today: Industrial designer is Design
                  Manager in Brazil driving innovation. UI
                  designer is Design Manager leading design
                  efforts. UX designer developed deep mobile
                  expertise informing subsequent portfolio
                  launches.
                </p>
              </div>
            </div>
          </div>

          {/* CAPABILITIES AT SCALE */}
          <div className="mb-12">
            <h2
              id="capabilities-at-scale"
              className="mb-8 pb-2 border-b-2 border-white font-['EB_Garamond'] text-[1.75rem] leading-[2.25rem] text-white"
            >
              CAPABILITIES AT SCALE
            </h2>

            <div className="bg-white rounded-[10px] p-8 mb-8">
              <p className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] text-secondary-foreground">
                I&apos;ve demonstrated leadership effectiveness
                and design excellence across consumer products,
                platform strategy, and global team
                coordination—managing teams from 5 to 33
                designers delivering products used by millions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-[10px] p-6">
                <h4 className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-primary mb-3">
                  Scale of Impact
                </h4>
                <ul className="space-y-2 font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] text-secondary-foreground">
                  <li>• Led 33 global designers</li>
                  <li>• 111M+ annual users</li>
                  <li>• 6 international studios</li>
                  <li>• $9.78B operations</li>
                </ul>
              </div>

              <div className="bg-white rounded-[10px] p-6">
                <h4 className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-primary mb-3">
                  Strategic Capabilities
                </h4>
                <ul className="space-y-2 font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] text-secondary-foreground">
                  <li>• Portfolio roadmapping</li>
                  <li>• Budget ownership</li>
                  <li>• Tool selection</li>
                  <li>• Process development</li>
                </ul>
              </div>

              <div className="bg-white rounded-[10px] p-6">
                <h4 className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-primary mb-3">
                  Strategic Intelligence
                </h4>
                <ul className="space-y-2 font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] text-secondary-foreground">
                  <li>• AI/ML implementation</li>
                  <li>• Foldable innovation</li>
                  <li>• Platform integration</li>
                  <li>• Accessibility standards</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Large-scale Historical Example */}
          <div className="bg-white rounded-[10px] p-8 mb-12">
            <h4 className="font-['Spline_Sans'] text-[1.125rem] leading-[1.5rem] text-primary mb-3">
              Large-scale Historical Example
            </h4>
            <p className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] text-secondary-foreground">
              As Head of UX at Motorola (2017-2020): Led 33
              designers across 6 global studios (Chicago,
              Beijing, São Paulo, others) within $9.78B
              operations. Directed design for 24-device
              portfolio serving 23M+ users. Led iconic RAZR
              foldable launch and collaborated with Google on
              Android framework standards.
            </p>
          </div>

          {/* THOUGHT LEADERSHIP & INDUSTRY INFLUENCE */}
          <div>
            <h2
              id="thought-leadership"
              className="mb-8 pb-2 border-b-2 border-white font-['EB_Garamond'] text-[1.75rem] leading-[2.25rem] text-white"
            >
              THOUGHT LEADERSHIP & INDUSTRY INFLUENCE
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-[10px] p-6">
                <h4 className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-primary mb-2">
                  Teaching & Mentorship
                </h4>
                <p className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] text-secondary-foreground">
                  Adjunct Faculty at Northwestern University
                  (Master of Product Design & Development
                  Innovation, Engineering Design Innovation).
                  Currently Graduate Student Advisor in EDI
                  program.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6">
                <h4 className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-primary mb-2">
                  Building Excellence Cultures
                </h4>
                <p className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] text-secondary-foreground">
                  I establish practices and processes that
                  institutionalize quality. At JSTOR: hired
                  accessibility lead who instituted shift-left
                  testing; at Motorola: implemented design
                  excellence framework across global studios.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6">
                <h4 className="font-['Spline_Sans'] text-[1rem] leading-[1.5rem] text-primary mb-2">
                  Specialized Expertise
                </h4>
                <p className="font-['Spline_Sans'] text-[0.875rem] leading-[1.25rem] text-secondary-foreground">
                  Physical/Digital Integration (20 years mobile,
                  foldable pioneer) • International Product
                  Leadership (multilingual, cross-cultural) • AI
                  Ethics & Academic Integrity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);