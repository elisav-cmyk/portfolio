import React from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CaseStudyFooter } from '../CaseStudyFooter';
import grubhubHeroImage from 'figma:asset/e1e956d921c735f672569fc508b766a5bbeb7877.png';
import grubhubCarousel1 from 'figma:asset/ce9b0d482bf14a0dec7f8fef052693906d15e2cd.png';
import grubhubCarousel2 from 'figma:asset/5bc2dd241a4208ad2c76d2e2ddd0f71cbd604975.png';
import grubhubCarousel3 from 'figma:asset/05d26cd3f98f6f53a1adfe77e2a403c8c32f53bf.png';
import grubhubCarousel4 from 'figma:asset/041fafbc2cefccb465f6133dea1ba426671155f0.png';
import grubhubCarouselFirst from 'figma:asset/f5a674b320e452309440ef67cd02f49e10b181fc.png';
import grubhubSpectrum from 'figma:asset/f7419de451c9c826e143901fd7f37974104a6de2.png';

interface GrubhubDirectProps {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const GrubhubDirect: React.FC<GrubhubDirectProps> = ({ onBack, onNavigate }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const carouselImages = [
    { src: grubhubCarouselFirst, alt: 'Grubhub Direct dashboard showing restaurant analytics' },
    { src: grubhubCarousel1, alt: 'Grubhub Direct site design customization interface' },
    { src: grubhubCarousel2, alt: 'Grubhub Direct image upload settings' },
    { src: grubhubCarousel3, alt: 'Grubhub Direct color customization interface' },
    { src: grubhubCarousel4, alt: 'Restaurant digital ordering interface' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, carouselImages.length - 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

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
          src={grubhubHeroImage} 
          alt="Grubhub Direct dashboard showing restaurant analytics for La Cocina including total sales, orders, and average order size with sales performance charts"
          className="w-full h-64 md:h-[500px] object-cover object-top"
        />
      </div>

      {/* Title Section - Full Width Background */}
      <div className="w-full bg-secondary">
        <div className="blog-grid py-12 sm:py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary text-primary-foreground font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] px-3 py-1 rounded-full">
              Product Design Leadership
            </span>
            <span className="font-['Spline_Sans'] text-[11px] leading-[16.5px] tracking-[0.5px] text-[#1b1c15]">
              2020-2021
            </span>
          </div>
          <h1 className="font-['EB_Garamond'] text-[40px] leading-[44px] tracking-[-0.8px] text-[#1b1c15] mb-6">
            Grubhub Direct
          </h1>
          <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15] mb-8">
            Declarative Low-Code Builder Platform
          </h2>
          <div className="space-y-2">
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              <strong>Role:</strong> Director, Product Design, Grubhub
            </p>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              Led the design vision and managed the strategic design teams for the Restaurant and Driver platforms during a critical acquisition and integration phase. Rapidly scaled design capacity by hiring 5 strategic roles to stabilize the organization and support 310.2 million annual orders across 4,000+ cities.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full py-12">
        <div className="flex flex-col gap-12">
          {/* Context & Business Challenge Section */}
          <section className="blog-grid flex flex-col gap-6">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              Context & Business Challenge
            </h2>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              The food delivery ecosystem required a paradigm shift to support independent operators struggling with high costs and competitive disadvantages.
            </p>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Industry Pain Points
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                Independent restaurants faced unprecedented challenges, exacerbated by the economic impact of the COVID-19 pandemic. Traditional third-party delivery services commonly put their brand first and imposed substantial commissions, sometimes exceeding 40% of revenue, making the economics unsustainable for many businesses.
              </p>
            </div>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Data Asymmetry
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                Third-party aggregators typically retained sole access to valuable diner data, preventing restaurants from building direct, profitable customer relationships and targeted marketing campaigns.
              </p>
            </div>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                The Mandate
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                Grubhub aimed to better serve restaurants by creating a self-service solution that provided independent operators and small chains (up to approximately 25 locations) with the powerful technology that larger players with dedicated budgets had previously built for themselves. This platform needed to enable restaurants to control their brand, access customer data, and drive commission-free orders.
              </p>
            </div>
          </section>

          {/* Design Leadership & Approach */}
          <section className="blog-grid flex flex-col gap-6">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              Design Leadership & Approach
            </h2>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              My role centered on leading design vision and team strategy during a complex technical and organizational transition, directing design execution through the teams I rapidly scaled.
            </p>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Strategic Context & Team Building
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                During the $7.3B Just Eat Takeaway acquisition (2021), I directed Restaurant and Driver product design while simultaneously stabilizing and scaling design capacity. I hired 5 strategic roles in one year (1 design manager, 3 senior designers, 1 content strategist) to support 310.2 million annual orders across 4,000+ cities and manage the critical platform transitions ahead.
              </p>
            </div>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Platform Vision & Integration Strategy
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                <strong>Architecting a Multi-Persona Ecosystem</strong> Leveraging enterprise technology from the LevelUp acquisition, I directed the vision to integrate proven enterprise capabilities with Grubhub's self-service platform. I designed a scalable configuration engine serving the full technical spectrum:
              </p>
              <ul className="list-disc pl-6">
                <li className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                  Declarative Low-Code Experience: Self-service tools enabling non-technical business owners to customize branded ordering experiences (fonts, colors, images) in minutes.
                </li>
                <li className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                  Pro-Code Developer Track: API/SDK resources and developer portals for enterprise technical teams requiring custom integration into existing stacks.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-[var(--space-16)]">
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                <strong>Business Impact:</strong> This white-label solution enabled partners to own their first-party CRM data (identity, history, retention), solving a critical industry pain point regarding data ownership
              </p>
            </div>
          </section>

          {/* Spectrum Diagram - Breaking out of content column */}
          <div className="w-full px-4 sm:px-6 lg:px-8 my-12">
            <div className="max-w-[1400px] mx-auto">
              <img 
                src={grubhubSpectrum}
                alt="Grubhub's low-code to pro-code spectrum"
                className="w-full h-auto max-w-[80ch] mx-auto"
              />
            </div>
          </div>

          {/* Design Leadership & Approach Section Continued */}
          <section className="blog-grid flex flex-col gap-6">
            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Customer-Centric Product Direction
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                I directed my team&rsquo;s approach to product definition, which was informed by extensive research with restaurant operators. This research-driven process ensured the platform addressed real operator needs across the technical sophistication spectrum.
              </p>
            </div>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Leadership Focus
              </h3>
              <ul className="list-disc pl-6">
                <li className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                  Rapid team scaling while maintaining quality bar (5 hires in 1 year)
                </li>
                <li className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                  Strategic vision for multi-persona platform integration
                </li>
                <li className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                  Cross-functional coordination during $7.3B acquisition transition
                </li>
                <li className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                  Protecting design quality during organizational change
                </li>
                <li className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                  Directing teams managing the Restaurant and Driver product ecosystem
                </li>
              </ul>
            </div>
          </section>

          {/* Outcomes & Impact */}
          <section className="blog-grid flex flex-col gap-6">
            <h2 className="font-['EB_Garamond'] text-[32px] leading-[40px] text-[#1b1c15]">
              Outcomes
            </h2>
            <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
              Grubhub Direct successfully launched in May 2021, integrating LevelUp&rsquo;s enterprise technology with Grubhub&rsquo;s restaurant platform. The platform differentiated Grubhub&rsquo;s offering by empowering restaurants with digital control, leading to dramatic conversion improvements and financial benefits.
            </p>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Commission-Free Revenue
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                Enabled partners to drive orders through their branded sites with zero commissions and no platform or maintenance fees, requiring them only to pay order processing and applicable delivery fees. This provided a way for restaurants to keep 100% of their sales on direct orders.
              </p>
            </div>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Customer Data Ownership
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                Successfully delivered full customer data ownership to partners, including names, email addresses, order history, and lifetime spend, which helped mitigate the industry-wide issue of aggregators hoarding diner data. This data is crucial for generating customer loyalty and targeted promotional campaigns.
              </p>
            </div>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Hyper-Accelerated Adoption
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                The adoption strategy included easy integration with Google Search and Maps. During testing, Direct merchants who listed their sites on their Google Business Profile received, on average, nearly 20x the orders compared to those who did not. Overall, restaurants with Direct linked on their website typically see 72x more average daily orders than those without the link.
              </p>
            </div>

            <div className="flex flex-col gap-[var(--space-16)]">
              <h3 className="font-['EB_Garamond'] text-[24px] leading-[32px] text-[#1b1c15]">
                Operational Streamlining
              </h3>
              <p className="font-['Spline_Sans'] text-[16px] leading-[24px] tracking-[0.5px] text-[#1b1c15]">
                The platform provided automatic menu imports, automatic online menu updates, and a unified Merchant Portal to manage menus, hours, financials, and orders (confirm/cancel), simplifying operations.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Video Section - Full Width */}
      <div className="w-full py-12">
        <div className="max-w-[90ch] mx-auto px-4 lg:px-8">
          <div className="w-full overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.12)]" style={{ aspectRatio: '16/9' }}>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/XxE59YEJn4k?si=rqAjwW4yKjCEgbQZ" 
              title="Grubhub Direct Platform Overview" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <CaseStudyFooter currentProjectId="grubhub-direct" onNavigate={onNavigate} />
    </motion.div>
  );
};