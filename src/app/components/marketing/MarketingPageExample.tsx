import React from 'react';
import {
  MarketingPageTemplate,
  MarketingContentWrapper,
  MarketingHeroSection,
  MarketingSection,
  MarketingSectionHeader,
  MarketingGrid,
  MarketingCard,
} from './index';

/**
 * Example Marketing Page
 * 
 * This example demonstrates how to use the marketing page components
 * to build a complete marketing page following the design system.
 */

interface ExamplePageProps {
  pageVariants?: any;
  pageTransition?: any;
}

export const MarketingPageExample: React.FC<ExamplePageProps> = ({
  pageVariants,
  pageTransition,
}) => {
  return (
    <MarketingPageTemplate
      pageVariants={pageVariants}
      pageTransition={pageTransition}
      className="bg-white"
    >
      <MarketingContentWrapper>
        {/* HERO SECTION */}
        <MarketingHeroSection
          headline="Build Amazing Products"
          subcopy="Transform your ideas into reality with our comprehensive design system and marketing page components."
          animated
          className="bg-secondary"
        >
          {/* CTA Buttons */}
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-[10px] hover:bg-primary/90 transition-colors">
            Get Started
          </button>
          <button className="px-6 py-3 bg-white text-foreground rounded-[10px] hover:bg-muted transition-colors border-2 border-border">
            Learn More
          </button>
        </MarketingHeroSection>

        {/* FEATURES SECTION - Standard Variant */}
        <MarketingSection variant="standard" className="bg-white">
          <MarketingSectionHeader
            title="Key Features"
            description="Everything you need to create professional marketing pages with consistent spacing and typography."
            align="center"
          />

          <MarketingGrid columns={3} gap="large">
            <MarketingCard variant="default" padding="large" animated hoverable>
              <h3 className="marketing-h2 mb-4">12-Column Grid</h3>
              <p className="marketing-body">
                Flexible grid system with 24px gutters and 64px margins for perfect alignment.
              </p>
            </MarketingCard>

            <MarketingCard variant="default" padding="large" animated hoverable>
              <h3 className="marketing-h2 mb-4">Spacing Variables</h3>
              <p className="marketing-body">
                Consistent spacing using design tokens: space-16, space-24, space-32, space-48, space-64.
              </p>
            </MarketingCard>

            <MarketingCard variant="default" padding="large" animated hoverable>
              <h3 className="marketing-h2 mb-4">4px Baseline</h3>
              <p className="marketing-body">
                Vertical rhythm maintained through 4px baseline grid for perfect typography alignment.
              </p>
            </MarketingCard>
          </MarketingGrid>
        </MarketingSection>

        {/* HIGHLIGHTED SECTION - Featured Variant */}
        <MarketingSection variant="featured" spacing="tight" className="bg-[#e9e9dd]">
          <MarketingSectionHeader
            title="Design System Integration"
            description="Built on top of your existing design tokens and typography system."
            align="center"
          />

          <MarketingGrid columns={2} gap="medium">
            <MarketingCard variant="outlined" padding="medium">
              <h4 className="marketing-h2 mb-3">Typography Classes</h4>
              <ul className="marketing-body space-y-2">
                <li>• marketing-hero-h1</li>
                <li>• marketing-h2</li>
                <li>• marketing-body</li>
              </ul>
            </MarketingCard>

            <MarketingCard variant="outlined" padding="medium">
              <h4 className="marketing-h2 mb-3">Spacing Variables</h4>
              <ul className="marketing-body space-y-2">
                <li>• var(--space-16)</li>
                <li>• var(--space-24)</li>
                <li>• var(--space-32)</li>
                <li>• var(--space-48)</li>
                <li>• var(--space-64)</li>
              </ul>
            </MarketingCard>
          </MarketingGrid>
        </MarketingSection>

        {/* CTA SECTION */}
        <MarketingSection variant="standard" className="bg-primary text-primary-foreground">
          <div className="text-center max-w-[75ch] mx-auto">
            <h2 className="marketing-hero-h1 mb-6">Ready to Get Started?</h2>
            <p className="marketing-body mb-8">
              Use these components to build professional marketing pages that follow your design system.
            </p>
            <button className="px-8 py-4 bg-white text-primary rounded-[10px] hover:bg-white/90 transition-colors shadow-[0px_1px_2px_0px_rgba(18,18,18,0.3),0px_1px_3px_1px_rgba(18,18,18,0.15)]">
              View Documentation
            </button>
          </div>
        </MarketingSection>
      </MarketingContentWrapper>
    </MarketingPageTemplate>
  );
};

/**
 * USAGE PATTERNS
 * 
 * 1. BASIC PAGE STRUCTURE:
 * ```tsx
 * <MarketingPageTemplate>
 *   <MarketingContentWrapper>
 *     <MarketingHeroSection headline="..." subcopy="..." />
 *     <MarketingSection>...</MarketingSection>
 *   </MarketingContentWrapper>
 * </MarketingPageTemplate>
 * ```
 * 
 * 2. SECTION VARIANTS:
 * - Standard: variant="standard" - 32px padding all sides
 * - Featured: variant="featured" - 24px vertical, 16px horizontal padding
 * 
 * 3. SPACING OPTIONS:
 * - Default: 48px between section chunks
 * - Tight: spacing="tight" - 32px between chunks
 * - Loose: spacing="loose" - 64px between chunks
 * 
 * 4. GRID LAYOUTS:
 * - 2 columns: <MarketingGrid columns={2}>
 * - 3 columns: <MarketingGrid columns={3}>
 * - 4 columns: <MarketingGrid columns={4}>
 * - 12 columns: <MarketingGrid columns={12} columnSpans={[6, 6]}>
 * 
 * 5. CARD VARIANTS:
 * - Default: variant="default" - Shadow and rounded corners
 * - Outlined: variant="outlined" - Border only
 * - Flat: variant="flat" - No shadow or border
 * 
 * 6. TYPOGRAPHY:
 * - Hero headlines: marketing-hero-h1 class
 * - Section titles: marketing-h2 class
 * - Body text: marketing-body class
 * 
 * 7. ANIMATIONS:
 * - Add animated prop to components for fade-in effects
 * - MarketingCard supports whileHover when hoverable={true}
 */
