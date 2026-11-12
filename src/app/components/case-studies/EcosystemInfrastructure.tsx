import React from 'react';
import ecosystemHeroImage from 'figma:asset/774fe7984e90b868f7bef781139dec0d74a4f332.webp';
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
  glance: "Kept JSTOR's design system going as its executive champion, built an accessibility program that cut errors 98%, and guided one admin experience in place of several.",
  context: [
    "JSTOR's products had grown apart. Teams built with different components, institutions managed their accounts through several separate admin tools, and accessibility varied from page to page. For a platform serving institutions in 194 countries, that meant slower launches, more inconsistency, and a real risk of shutting people out.",
  ],
  moves: [
    {
      title: 'Kept the design system alive',
      paragraphs: [
        "The dedicated team behind Pharos, JSTOR's design system, had been disbanded, and the cross-functional Pharos Wickies guild was losing momentum. I joined the guild as its executive champion and have kept pushing updates to the system. I helped shape a federated stewardship model and advocated for a modern workflow built around reusable components documented in Storybook and checked with Chromatic visual regression testing. More recently, developers connected the Pharos GitHub repository to their AI coding tools. On the design side, I've explored Figma Code Connect and MCP, and our designers are improving how Figma connects to Storybook and our prototyping tools, so developers get more accurate examples.",
      ],
    },
    {
      title: 'Built accessibility into the work',
      paragraphs: [
        'I hired an accessibility lead in 2021 and gave him room to build a program of automated checks, manual audits and early reviews with designers, so problems were caught before they shipped instead of after.',
        'The team also designed an Alt text button on JSTOR images that generates AI-written alt text. School Library Journal reported in 2026 that it meets WCAG 2.0 Level A and AA.',
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
