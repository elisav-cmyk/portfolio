import React from 'react';
import ecosystemHeroImage from 'figma:asset/774fe7984e90b868f7bef781139dec0d74a4f332.png';
import { CaseStudyTemplate, CaseStudyData } from './CaseStudyTemplate';

const data: CaseStudyData = {
  id: 'ecosystem-infrastructure',
  hero: { src: ecosystemHeroImage, alt: 'Design system and infrastructure', position: 'object-top' },
  tag: 'Design Systems',
  years: '2022-2025',
  title: 'One System, Many Products',
  subtitle: "Pharos, One Admin and accessibility across JSTOR",
  role: 'Director, Product Design, JSTOR',
  partners: 'Product Design, Engineering, Product Management',
  context: [
    "JSTOR's products had grown apart. Teams built with different components, institutions managed their accounts through several separate admin tools, and accessibility varied from page to page. For a platform serving institutions in 194 countries, that meant slower launches, more inconsistency, and a real risk of shutting people out.",
  ],
  moves: [
    {
      title: 'Kept the design system alive',
      paragraphs: [
        'When the core team behind Pharos, JSTOR\'s design system, was dissolved, I joined its cross-functional guild (the "Pharos Wickies") and became its executive champion. I made the case for modern tooling: a component library documented in Storybook, distributed as an npm package and checked by visual regression testing in Chromatic. More recently, I\'ve championed Figma Code Connect and MCP servers to turn design tokens into production code automatically.',
      ],
    },
    {
      title: 'Built accessibility into the work',
      paragraphs: [
        'I hired an accessibility lead in 2021 and gave him room to build a program of automated checks, manual audits and early reviews with designers, so problems were caught before they shipped instead of after.',
      ],
    },
    {
      title: 'Brought admin tools together',
      paragraphs: [
        'I guided the designer who combined scattered admin tools (reporting, user management and access) into one experience. It was designed around four very different roles (institutions, consortia, contributors and publishers) and connected to library systems such as Alma to keep holdings up to date automatically.',
      ],
    },
  ],
  results: [
    '98% fewer accessibility errors, placing JSTOR in the Top 1% of the WebAIM Million homepage evaluation.',
    "60 to 70% of JSTOR's products use Pharos, with the rest planned.",
    'One admin experience in place of several separate tools.',
  ],
  why: [
    'Good systems let a small design team do consistent, accessible work across a larger organization. They are how quality outlasts any one project.',
  ],
};

interface Props {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const EcosystemInfrastructure: React.FC<Props> = ({ onNavigate }) => (
  <CaseStudyTemplate data={data} onNavigate={onNavigate} />
);
