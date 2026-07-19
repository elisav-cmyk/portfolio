import React from 'react';
import {
  BlogPageTemplate,
  BlogContentWrapper,
  BlogHeader,
  BlogSection,
  BlogText,
  BlogQuote,
  BlogList,
  BlogImage,
  BlogCard,
  BlogDivider,
  BlogFullWidthSection,
} from './index';

/**
 * Example Blog Page
 * 
 * This example demonstrates how to use the blog page components
 * to build a complete article following the design system.
 */

interface ExampleBlogPageProps {
  pageVariants?: any;
  pageTransition?: any;
}

export const BlogPageExample: React.FC<ExampleBlogPageProps> = ({
  pageVariants,
  pageTransition,
}) => {
  return (
    <BlogPageTemplate
      pageVariants={pageVariants}
      pageTransition={pageTransition}
      className="bg-white py-16"
    >
      <BlogContentWrapper>
        {/* ARTICLE HEADER */}
        <BlogHeader
          title="Designing Ethical AI Research Tools"
          subtitle="How we approached the challenge of building AI-powered features that respect academic integrity and user autonomy."
          meta={{
            author: 'Elisa Vargas',
            date: 'December 7, 2024',
            readTime: '8 min read',
            tags: ['AI & Ethics', 'Product Design', 'Research'],
          }}
        />

        <BlogDivider />

        {/* INTRODUCTION SECTION */}
        <BlogSection>
          <BlogText variant="lead">
            At JSTOR, we faced a critical question: How do we integrate AI capabilities 
            into research tools while maintaining the integrity and trustworthiness that 
            scholars depend on?
          </BlogText>

          <BlogText>
            This case study explores our approach to building ethical AI features for 
            academic research, focusing on transparency, user control, and responsible 
            design practices.
          </BlogText>
        </BlogSection>

        {/* MAIN CONTENT SECTIONS */}
        <BlogSection heading="The Challenge">
          <BlogText>
            Academic research demands the highest standards of accuracy and attribution. 
            Traditional AI tools often operate as "black boxes," making it difficult for 
            researchers to understand how results are generated or to verify their accuracy.
          </BlogText>

          <BlogList
            type="unordered"
            items={[
              'Researchers need to understand how AI generates results',
              'Citations and sources must be traceable and verifiable',
              'Users must maintain agency over their research process',
              'The tool must respect academic integrity principles',
            ]}
          />
        </BlogSection>

        <BlogSection heading="Our Approach">
          <BlogText>
            We developed a framework centered on three core principles: transparency, 
            user control, and verifiable outputs. Every design decision was evaluated 
            against these principles.
          </BlogText>

          <BlogCard
            title="Design Principles"
            body="We established clear guidelines that governed every feature and interaction in the AI research tool."
            meta={{
              tags: ['Framework', 'Principles'],
            }}
          />
        </BlogSection>

        <BlogDivider variant="dots" />

        {/* QUOTE */}
        <BlogQuote author="Lead Researcher, University Partner">
          The transparency of the AI tool gave me confidence in using it for my research. 
          I could see exactly where each piece of information came from and verify it 
          against the original sources.
        </BlogQuote>

        <BlogDivider variant="dots" />

        {/* IMAGE EXAMPLE */}
        <BlogSection heading="Key Features">
          <BlogText>
            The final design incorporated several innovative features that balanced AI 
            capabilities with user control and transparency.
          </BlogText>
        </BlogSection>

        <BlogImage
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200"
          alt="Dashboard showing AI research tool interface"
          caption="The main interface showing transparent AI results with source attribution"
          size="full-bleed"
        />

        <BlogSection>
          <BlogList
            type="ordered"
            items={[
              'Source attribution for every AI-generated insight',
              'Confidence scores with explanations',
              'User controls to adjust AI assistance levels',
              'Clear visual indicators for AI-generated content',
            ]}
          />
        </BlogSection>

        {/* FULL WIDTH CALLOUT */}
        <BlogFullWidthSection backgroundColor="bg-secondary" padding="large">
          <BlogText variant="lead">
            87% of researchers indicated they felt confident using AI assistance in their work.
          </BlogText>
          <BlogText>
            User research showed that the transparency features were the most valued 
            aspect of the tool, with researchers praising the ability to trace and verify
            all AI-generated insights.
          </BlogText>
        </BlogFullWidthSection>

        <BlogSection heading="Results & Impact">
          <BlogText>
            After launch, we saw significant engagement with the new features while 
            maintaining high trust scores from our user base.
          </BlogText>
        </BlogSection>

        <BlogDivider />

        {/* CONCLUSION */}
        <BlogSection heading="Lessons Learned">
          <BlogText>
            This project reinforced several key insights about designing with AI:
          </BlogText>

          <BlogList
            type="unordered"
            items={[
              'Transparency builds trust, especially in high-stakes contexts',
              'Users want control, not just automation',
              'Ethical considerations must be embedded in the design process from day one',
              'Iterative testing with real users is essential for AI features',
            ]}
          />

          <BlogText variant="small">
            This case study represents work completed during my tenure as Product Design 
            Director at JSTOR (ITHAKA) from 2023-2025.
          </BlogText>
        </BlogSection>
      </BlogContentWrapper>
    </BlogPageTemplate>
  );
};

/**
 * USAGE PATTERNS
 * 
 * 1. BASIC ARTICLE STRUCTURE:
 * ```tsx
 * <BlogPageTemplate>
 *   <BlogContentWrapper>
 *     <BlogHeader title="..." subtitle="..." meta={{...}} />
 *     <BlogSection heading="...">
 *       <BlogText>...</BlogText>
 *     </BlogSection>
 *   </BlogContentWrapper>
 * </BlogPageTemplate>
 * ```
 * 
 * 2. TYPOGRAPHY HIERARCHY:
 * - H1: Article title (BlogHeader title prop)
 * - H2: Section headings (BlogSection heading prop)
 * - Body: BlogText component (default variant)
 * - Lead: BlogText variant="lead" for intro paragraphs
 * - Small: BlogText variant="small" for notes/captions
 * 
 * 3. SPACING SYSTEM:
 * - All spacing uses 16px (stack-base / space-16) between elements
 * - Tight spacing uses 8px (space-8) within components
 * - No manual margins on child elements - rely on parent gap
 * 
 * 4. METADATA:
 * - Use BlogMetaRow for author, date, read time, tags
 * - Dates and read times automatically use oldstyle numerals
 * - Tags are styled with background color
 * 
 * 5. CONTENT COMPONENTS:
 * - BlogText: Standard body paragraphs
 * - BlogQuote: Blockquotes with optional attribution
 * - BlogList: Ordered or unordered lists
 * - BlogImage: Images with optional captions
 * - BlogCard: Card layout for highlighted content
 * - BlogDivider: Section separators (line, dots, space)
 * - BlogFullWidthSection: Full-width sections for emphasis
 * 
 * 6. BEST PRACTICES:
 * - Keep article content within BlogContentWrapper (650px / 65ch)
 * - Use BlogSection to group related content
 * - Add meta information to establish context
 * - Use BlogDivider to separate major sections
 * - Include alt text for all images
 * - Use semantic HTML through component structure
 */