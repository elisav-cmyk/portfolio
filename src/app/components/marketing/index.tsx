/**
 * Marketing Page Components
 * 
 * Component library for building marketing pages following the design system.
 * 
 * LAYOUT COMPONENTS:
 * - MarketingPageTemplate: Main page wrapper with 12-column grid
 * - MarketingContentWrapper: Vertical content container with 64px spacing
 * - MarketingGrid: Flexible grid layout with spacing variables
 * 
 * SECTION COMPONENTS:
 * - MarketingHeroSection: Hero section with Marketing/Hero H1 typography
 * - MarketingSection: Reusable section with standard/featured variants
 * - MarketingSectionHeader: Section headers with Marketing/H2 typography
 * 
 * CONTENT COMPONENTS:
 * - MarketingCard: Card component with multiple variants
 * 
 * DESIGN TOKENS:
 * All components use design system spacing variables:
 * - space-16, space-24, space-32, space-48, space-64
 * - inset-stretch-x, inset-stretch-y
 * 
 * GRID SYSTEM:
 * - 12-column stretch grid
 * - 24px gutters (space-24)
 * - 64px margins (space-64)
 * - 4px baseline grid for vertical rhythm
 */

export { MarketingPageTemplate } from './MarketingPageTemplate';
export { MarketingContentWrapper } from './MarketingContentWrapper';
export { MarketingHeroSection } from './MarketingHeroSection';
export { MarketingSection } from './MarketingSection';
export { MarketingSectionHeader } from './MarketingSectionHeader';
export { MarketingGrid } from './MarketingGrid';
export { MarketingCard } from './MarketingCard';

// Re-export types
export type { MarketingPageTemplateProps } from './MarketingPageTemplate';
export type { MarketingContentWrapperProps } from './MarketingContentWrapper';
export type { MarketingHeroSectionProps } from './MarketingHeroSection';
export type { MarketingSectionProps } from './MarketingSection';
export type { MarketingSectionHeaderProps } from './MarketingSectionHeader';
export type { MarketingGridProps } from './MarketingGrid';
export type { MarketingCardProps } from './MarketingCard';
