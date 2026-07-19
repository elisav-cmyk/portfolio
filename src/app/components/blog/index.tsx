/**
 * Blog Page Components
 * 
 * Component library for building blog/case study pages following the design system.
 * 
 * LAYOUT COMPONENTS:
 * - BlogPageTemplate: Main page wrapper with single centered column (650px max)
 * - BlogContentWrapper: Vertical content container with 16px spacing
 * 
 * STRUCTURE COMPONENTS:
 * - BlogHeader: Article header with title, subtitle, and metadata
 * - BlogSection: Content section with optional heading
 * - BlogFullWidthSection: Full-width content section with optional heading
 * - BlogCard: Standard card component (shared with marketing)
 * 
 * CONTENT COMPONENTS:
 * - BlogText: Body text with variants (body, lead, small)
 * - BlogQuote: Blockquote with optional attribution
 * - BlogList: Ordered or unordered lists
 * - BlogImage: Images with optional captions
 * - BlogMetaRow: Metadata row (author, date, tags, read time)
 * - BlogDivider: Section dividers (line, dots, space)
 * 
 * DESIGN TOKENS:
 * All components use design system spacing variables:
 * - stack-base / space-16: 16px (primary vertical spacing)
 * - space-8: 8px (tight spacing)
 * - inset-square: 16px (card padding)
 * - measure-blog: 650px (~65ch max width)
 * 
 * TYPOGRAPHY:
 * - Blog/H1: Article titles (40px / 2.5rem)
 * - Blog/H2: Section headings (24px / 1.5rem)
 * - Blog/Body: Body text (16px / 1rem)
 * - Blog/Meta: Metadata text (14px / 0.875rem)
 * 
 * TYPOGRAPHIC RHYTHM:
 * - All text blocks use 16px spacing between items
 * - No manual margins on child elements
 * - 4px baseline grid for vertical rhythm
 * - Oldstyle numerals for dates and read times
 */

export { BlogPageTemplate } from './BlogPageTemplate';
export { BlogContentWrapper } from './BlogContentWrapper';
export { BlogHeader } from './BlogHeader';
export { BlogSection } from './BlogSection';
export { BlogFullWidthSection } from './BlogFullWidthSection';
export { BlogText } from './BlogText';
export { BlogQuote } from './BlogQuote';
export { BlogList } from './BlogList';
export { BlogImage } from './BlogImage';
export { BlogMetaRow } from './BlogMetaRow';
export { BlogCard } from './BlogCard';
export { BlogDivider } from './BlogDivider';

// Re-export types
export type { BlogPageTemplateProps } from './BlogPageTemplate';
export type { BlogContentWrapperProps } from './BlogContentWrapper';
export type { BlogHeaderProps } from './BlogHeader';
export type { BlogSectionProps } from './BlogSection';
export type { BlogFullWidthSectionProps } from './BlogFullWidthSection';
export type { BlogTextProps } from './BlogText';
export type { BlogQuoteProps } from './BlogQuote';
export type { BlogListProps } from './BlogList';
export type { BlogImageProps } from './BlogImage';
export type { BlogMetaRowProps } from './BlogMetaRow';
export type { BlogCardProps } from './BlogCard';
export type { BlogDividerProps } from './BlogDivider';