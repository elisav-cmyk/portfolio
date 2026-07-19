# Template Component Systems

This document provides comprehensive documentation for the Marketing and Blog page template component systems.

## Table of Contents

- [Overview](#overview)
- [Marketing Page Components](#marketing-page-components)
- [Blog Page Components](#blog-page-components)
- [Design System Integration](#design-system-integration)
- [Usage Examples](#usage-examples)

---

## Overview

The template component systems provide reusable, composable components for building consistent marketing and blog pages following the Elisa Vargas portfolio design system.

### Key Principles

1. **Spacing Variables**: All components use CSS custom properties for spacing
2. **Typography Tokens**: Pre-defined typography classes for consistent text styling
3. **4px Baseline Grid**: Vertical rhythm maintained throughout
4. **Semantic Structure**: Components enforce proper HTML semantics
5. **No Manual Margins**: Child elements rely on parent spacing only

---

## Marketing Page Components

Location: `/components/marketing/`

### Architecture Overview

**Marketing Page Archetype:**
- 12-column stretch grid
- 24px gutters (space-24)
- 64px margins (space-64)
- 1440px max width
- 4px baseline grid

### Components

#### 1. `MarketingPageTemplate`

Main page wrapper with 12-column grid system.

```tsx
<MarketingPageTemplate
  pageVariants={pageVariants}
  pageTransition={pageTransition}
  className="bg-white"
>
  {/* Page content */}
</MarketingPageTemplate>
```

**Props:**
- `children`: React.ReactNode - Page content
- `className`: string - Additional CSS classes
- `pageVariants`: any - Motion animation variants
- `pageTransition`: any - Motion transition config

---

#### 2. `MarketingContentWrapper`

Vertical auto layout container for page content.

```tsx
<MarketingContentWrapper>
  {/* Sections with 64px spacing between */}
</MarketingContentWrapper>
```

**Specifications:**
- Direction: Vertical
- Spacing: 64px (space-64) between items
- Padding: 64px top/bottom, 24px left/right
- Width: Fill container

---

#### 3. `MarketingHeroSection`

Hero section component with centered content.

```tsx
<MarketingHeroSection
  headline="Your Headline Here"
  subcopy="Supporting text goes here"
  animated
  className="bg-secondary"
>
  <button>CTA Button</button>
</MarketingHeroSection>
```

**Props:**
- `headline`: string | ReactNode - Main headline (uses marketing-hero-h1)
- `subcopy`: string | ReactNode - Supporting text (uses marketing-body)
- `children`: ReactNode - CTA buttons or additional content
- `className`: string - Background color/styling
- `animated`: boolean - Enable fade-in animation

**Specifications:**
- Padding: 64px top/bottom, 32px left/right (space-64, space-32)
- Content max-width: 75ch for readability
- Text alignment: Centered

---

#### 4. `MarketingSection`

Reusable section component with two variants.

```tsx
<MarketingSection
  variant="standard"
  spacing="default"
  className="bg-white"
>
  {/* Section content */}
</MarketingSection>
```

**Props:**
- `variant`: 'standard' | 'featured'
  - **standard**: 32px padding all sides
  - **featured**: 24px vertical, 16px horizontal
- `spacing`: 'default' | 'tight' | 'loose'
  - **default**: 48px between chunks
  - **tight**: 32px between chunks
  - **loose**: 64px between chunks
- `id`: string - For section anchoring
- `animated`: boolean - Enable animation

---

#### 5. `MarketingSectionHeader`

Section header with title and description.

```tsx
<MarketingSectionHeader
  title="Section Title"
  description="Section description text"
  align="center"
/>
```

**Props:**
- `title`: string | ReactNode - Uses marketing-h2
- `description`: string | ReactNode - Uses marketing-body
- `align`: 'left' | 'center' | 'right'

**Specifications:**
- Max-width: 75ch for readability
- Typography: marketing-h2 (title), marketing-body (description)

---

#### 6. `MarketingGrid`

Flexible grid layout component.

```tsx
<MarketingGrid columns={3} gap="large">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</MarketingGrid>
```

**Props:**
- `columns`: 2 | 3 | 4 | 12 - Number of columns
- `columnSpans`: number[] - Custom spans for 12-column grid
- `gap`: 'small' | 'medium' | 'large'
  - **small**: 16px (space-16)
  - **medium**: 24px (space-24)
  - **large**: 32px (space-32)

---

#### 7. `MarketingCard`

Card component with multiple variants.

```tsx
<MarketingCard
  variant="default"
  padding="medium"
  hoverable
  animated
>
  {/* Card content */}
</MarketingCard>
```

**Props:**
- `variant`: 'default' | 'outlined' | 'flat'
  - **default**: Shadow and rounded corners
  - **outlined**: Border only, no shadow
  - **flat**: No shadow or border
- `padding`: 'small' | 'medium' | 'large'
  - **small**: 16px (space-16)
  - **medium**: 24px (space-24)
  - **large**: 32px (space-32)
- `hoverable`: boolean - Enable hover effect
- `onClick`: () => void - Click handler
- `animated`: boolean - Enable animation

---

## Blog Page Components

Location: `/components/blog/`

### Architecture Overview

**Blog Page Archetype:**
- Single centered column
- Max width: 650px (~65ch)
- 16px spacing between elements (stack-base)
- 4px baseline grid
- Oldstyle numerals for dates/times

### Components

#### 1. `BlogPageTemplate`

Main page wrapper with centered single-column layout.

```tsx
<BlogPageTemplate
  pageVariants={pageVariants}
  pageTransition={pageTransition}
  className="bg-white py-16"
>
  {/* Page content */}
</BlogPageTemplate>
```

**Specifications:**
- Max width: 650px (measure-blog / ~65ch)
- Centered horizontally
- Uses blog-container CSS class

---

#### 2. `BlogContentWrapper`

Vertical auto layout container for article content.

```tsx
<BlogContentWrapper>
  {/* Article sections with 16px spacing */}
</BlogContentWrapper>
```

**Specifications:**
- Direction: Vertical
- Spacing: 16px (stack-base / space-16) between items
- Padding: 0 top/bottom, 16px left/right
- Max width: 650px (centered)
- **IMPORTANT**: No manual margins on children

---

#### 3. `BlogHeader`

Article header with title, subtitle, and metadata.

```tsx
<BlogHeader
  title="Article Title"
  subtitle="Article subtitle or introduction"
  meta={{
    author: 'Elisa Vargas',
    date: 'December 7, 2024',
    readTime: '8 min read',
    tags: ['Design', 'Leadership'],
  }}
/>
```

**Props:**
- `title`: string | ReactNode - Uses Blog/H1 (40px / 2.5rem)
- `subtitle`: string | ReactNode - Uses Blog/Body large
- `meta`: Object - Metadata (see BlogMetaRow)

---

#### 4. `BlogSection`

Content section with optional heading.

```tsx
<BlogSection heading="Section Title">
  <BlogText>Paragraph content...</BlogText>
  <BlogList items={['Item 1', 'Item 2']} />
</BlogSection>
```

**Props:**
- `heading`: string | ReactNode - Uses Blog/H2 (24px / 1.5rem)
- `children`: ReactNode - Section content

**Specifications:**
- Spacing: 16px (stack-base) between child elements
- No manual margins on children

---

#### 5. `BlogText`

Body text component with variants.

```tsx
<BlogText variant="body">
  Standard paragraph text goes here.
</BlogText>
```

**Props:**
- `variant`: 'body' | 'lead' | 'small'
  - **body**: 16px / 1rem (Blog/Body)
  - **lead**: 20px / 1.25rem (Intro text)
  - **small**: 14px / 0.875rem (Captions/notes)

---

#### 6. `BlogQuote`

Blockquote with optional attribution.

```tsx
<BlogQuote author="Author Name">
  Quote text goes here.
</BlogQuote>
```

**Props:**
- `children`: ReactNode - Quote text
- `author`: string - Attribution

**Specifications:**
- Left border: 4px, primary color
- Padding-left: 24px (space-24)
- Typography: EB Garamond, 20px, italic

---

#### 7. `BlogList`

Ordered or unordered list component.

```tsx
<BlogList
  type="unordered"
  items={[
    'First item',
    'Second item',
    'Third item',
  ]}
/>
```

**Props:**
- `type`: 'unordered' | 'ordered'
- `items`: (string | ReactNode)[]

**Specifications:**
- Spacing: 8px (space-8) between items
- Oldstyle numerals for ordered lists
- Uses Blog/Body typography

---

#### 8. `BlogImage`

Image with optional caption.

```tsx
<BlogImage
  src="https://..."
  alt="Descriptive alt text"
  caption="Image caption text"
  size="full"
/>
```

**Props:**
- `src`: string - Image URL
- `alt`: string - Alt text (required)
- `caption`: string | ReactNode - Optional caption
- `size`: 'full' | 'large' | 'medium'
  - **full**: 100% width
  - **large**: 83% width (5/6)
  - **medium**: 67% width (2/3)

---

#### 9. `BlogMetaRow`

Metadata row for articles or cards.

```tsx
<BlogMetaRow
  author="Elisa Vargas"
  date="December 7, 2024"
  readTime="8 min read"
  tags={['Design', 'AI']}
/>
```

**Props:**
- `author`: string
- `date`: string
- `readTime`: string
- `tags`: string[]

**Specifications:**
- Layout: Horizontal with 8px gaps (space-8)
- Oldstyle numerals for dates and read times
- Typography: Blog/Meta (14px / 0.875rem)
- Tag styling: Background color badges

---

#### 10. `BlogCard`

Standard card component (shared with marketing).

```tsx
<BlogCard
  title="Card Title"
  body="Card description text"
  meta={{
    author: 'Author',
    tags: ['Tag1', 'Tag2'],
  }}
  onClick={() => navigate('/article')}
/>
```

**Props:**
- `title`: string | ReactNode - Uses Blog/H2
- `body`: string | ReactNode - Uses Blog/Body
- `meta`: Object - Metadata
- `onClick`: () => void - Click handler

**Specifications:**
- Padding: 16px all sides (inset-square)
- Internal spacing: 8px (space-8)
- Shadow and rounded corners

---

#### 11. `BlogDivider`

Section divider component.

```tsx
<BlogDivider variant="line" />
```

**Props:**
- `variant`: 'line' | 'dots' | 'space'
  - **line**: Horizontal line (2px border)
  - **dots**: Three centered dots
  - **space**: 32px vertical spacing

---

## Design System Integration

### Spacing Variables

All components use these CSS custom properties:

```css
/* Primary spacing values */
--space-8: 8px;      /* Tight spacing */
--space-16: 16px;    /* Base spacing */
--space-24: 24px;    /* Section grouping */
--space-32: 32px;    /* Loose grouping */
--space-48: 48px;    /* Section breaks */
--space-64: 64px;    /* Major breaks */

/* Semantic aliases */
--stack-base: 16px;        /* Paragraph rhythm */
--stack-tight: 4px;        /* Labels to inputs */
--stack-loose: 32px;       /* Section headers */
--inset-square: 16px;      /* Card padding */
--inset-stretch-y: 24px;   /* Featured vertical */
--inset-stretch-x: 16px;   /* Featured horizontal */
--inset-squish-y: 8px;     /* Button vertical */
--inset-squish-x: 16px;    /* Button horizontal */

/* Measures */
--measure-blog: 650px;      /* ~65ch */
--measure-marketing: 1440px; /* Marketing pages */
```

### Typography Classes

Pre-defined typography classes used by components:

```css
/* Marketing Typography */
.marketing-hero-h1  /* 48px → 72px responsive */
.marketing-h2       /* 32px → 40px responsive */
.marketing-body     /* 16px → 18px responsive */

/* Blog Typography */
/* These are applied inline via component styles */
/* Blog/H1: 40px / 2.5rem EB Garamond */
/* Blog/H2: 24px / 1.5rem EB Garamond */
/* Blog/Body: 16px / 1rem Spline Sans */
/* Blog/Meta: 14px / 0.875rem Spline Sans */
```

### Grid Classes

Pre-defined grid classes in globals.css:

```css
/* Marketing Grid */
.marketing-grid {
  /* 1440px max width, 64px margins */
  /* Responsive: 32px tablet, 16px mobile */
}

.marketing-grid-cols {
  /* 12-column grid, 24px gutters */
}

/* Blog Grid */
.blog-container {
  /* Full-width container, 1440px max */
}

.blog-grid {
  /* 650px centered column (~65ch) */
}
```

---

## Usage Examples

### Complete Marketing Page

```tsx
import {
  MarketingPageTemplate,
  MarketingContentWrapper,
  MarketingHeroSection,
  MarketingSection,
  MarketingSectionHeader,
  MarketingGrid,
  MarketingCard,
} from './components/marketing';

export const MyMarketingPage = () => {
  return (
    <MarketingPageTemplate className="bg-white">
      <MarketingContentWrapper>
        {/* Hero */}
        <MarketingHeroSection
          headline="Transform Your Design Process"
          subcopy="Build better products with our comprehensive design system"
          animated
          className="bg-secondary"
        >
          <button className="btn-primary">Get Started</button>
        </MarketingHeroSection>

        {/* Features Section */}
        <MarketingSection variant="standard">
          <MarketingSectionHeader
            title="Key Features"
            description="Everything you need to succeed"
            align="center"
          />
          
          <MarketingGrid columns={3} gap="large">
            <MarketingCard variant="default" padding="large" animated>
              <h3 className="marketing-h2 mb-4">Feature One</h3>
              <p className="marketing-body">Description...</p>
            </MarketingCard>
            {/* More cards... */}
          </MarketingGrid>
        </MarketingSection>

        {/* CTA Section */}
        <MarketingSection variant="featured" className="bg-primary text-primary-foreground">
          <div className="text-center max-w-[75ch] mx-auto">
            <h2 className="marketing-hero-h1 mb-6">Ready to Start?</h2>
            <button className="btn-secondary">Contact Us</button>
          </div>
        </MarketingSection>
      </MarketingContentWrapper>
    </MarketingPageTemplate>
  );
};
```

### Complete Blog Article

```tsx
import {
  BlogPageTemplate,
  BlogContentWrapper,
  BlogHeader,
  BlogSection,
  BlogText,
  BlogQuote,
  BlogList,
  BlogImage,
  BlogDivider,
} from './components/blog';

export const MyBlogArticle = () => {
  return (
    <BlogPageTemplate className="bg-white py-16">
      <BlogContentWrapper>
        {/* Article Header */}
        <BlogHeader
          title="Building Ethical AI Research Tools"
          subtitle="A case study in responsible design"
          meta={{
            author: 'Elisa Vargas',
            date: 'December 7, 2024',
            readTime: '8 min read',
            tags: ['AI', 'Ethics', 'Design'],
          }}
        />

        <BlogDivider />

        {/* Introduction */}
        <BlogSection>
          <BlogText variant="lead">
            At JSTOR, we faced a critical question about AI integration...
          </BlogText>
        </BlogSection>

        {/* Content Sections */}
        <BlogSection heading="The Challenge">
          <BlogText>
            Academic research demands the highest standards...
          </BlogText>
          
          <BlogList
            type="unordered"
            items={[
              'Transparency in AI results',
              'Verifiable citations',
              'User control and agency',
            ]}
          />
        </BlogSection>

        <BlogDivider variant="dots" />

        {/* Quote */}
        <BlogQuote author="Research Partner">
          The transparency gave me confidence in using the tool...
        </BlogQuote>

        <BlogDivider variant="dots" />

        {/* Image */}
        <BlogSection heading="Design Solution">
          <BlogImage
            src="https://..."
            alt="Interface screenshot"
            caption="The main interface with source attribution"
          />
          
          <BlogText>
            The final design incorporated several features...
          </BlogText>
        </BlogSection>
      </BlogContentWrapper>
    </BlogPageTemplate>
  );
};
```

---

## Best Practices

### Marketing Pages

1. **Use MarketingContentWrapper** for all page content to ensure consistent spacing
2. **Hero sections** should use `marketing-hero-h1` for headlines
3. **Section headers** should use `marketing-h2` with max-w-[75ch]
4. **Card grids** should use 2, 3, or 4 columns depending on content
5. **CTAs** should be prominent and use primary color

### Blog Pages

1. **Keep content within BlogContentWrapper** (650px / 65ch max)
2. **Use BlogSection** to group related paragraphs
3. **Never add manual margins** to child elements
4. **Include alt text** for all images
5. **Use BlogDivider** to separate major sections
6. **Add metadata** to establish context and credibility

### General

1. **Spacing**: Always use design tokens (var(--space-16))
2. **Typography**: Use pre-defined classes (marketing-h2, etc.)
3. **Colors**: Use theme colors (primary, secondary, etc.)
4. **Accessibility**: Maintain semantic HTML structure
5. **Responsiveness**: Test on mobile, tablet, desktop

---

## File Structure

```
/components/
├── marketing/
│   ├── MarketingPageTemplate.tsx
│   ├── MarketingContentWrapper.tsx
│   ├── MarketingHeroSection.tsx
│   ├── MarketingSection.tsx
│   ├── MarketingSectionHeader.tsx
│   ├── MarketingGrid.tsx
│   ├── MarketingCard.tsx
│   ├── MarketingPageExample.tsx
│   └── index.tsx
│
├── blog/
│   ├── BlogPageTemplate.tsx
│   ├── BlogContentWrapper.tsx
│   ├── BlogHeader.tsx
│   ├── BlogSection.tsx
│   ├── BlogText.tsx
│   ├── BlogQuote.tsx
│   ├── BlogList.tsx
│   ├── BlogImage.tsx
│   ├── BlogMetaRow.tsx
│   ├── BlogCard.tsx
│   ├── BlogDivider.tsx
│   ├── BlogPageExample.tsx
│   └── index.tsx
│
└── TEMPLATE_COMPONENTS.md (this file)
```

---

## Additional Resources

- Design system: `/styles/globals.css`
- Example implementations:
  - Marketing: `/components/marketing/MarketingPageExample.tsx`
  - Blog: `/components/blog/BlogPageExample.tsx`
- Existing pages using these patterns:
  - Home, Work, Leadership, Impact, About (marketing grid)
  - Case studies (blog grid)

---

**Last Updated:** December 7, 2024  
**Maintainer:** Elisa Vargas Portfolio Design System
