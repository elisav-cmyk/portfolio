import React from 'react';
import aiLibraryHeroImage from 'figma:asset/8cf3e6ec6a19346c1adefa9bf4dfc6e4967bbb2c.png';
import { CaseStudyTemplate, CaseStudyData } from './CaseStudyTemplate';

const data: CaseStudyData = {
  id: 'ai-library',
  hero: {
    src: aiLibraryHeroImage,
    alt: 'Library archival stacks showing the scale of physical materials waiting to be described and digitized',
  },
  tag: 'AI Strategy',
  years: '2022-Present',
  title: 'AI-Assisted Library Transformation',
  subtitle: 'Helping archives describe collections in hours, not weeks',
  role: 'Product Design Director, JSTOR',
  partners: 'Product Management, Engineering, Research, Outreach, Legal, Insights, Portico',
  context: [
    "Up to 95% of special collections in libraries and archives are unprocessed or undigitized. Staff can't describe items fast enough, so collections stay hidden from the researchers who need them, and the tools built to manage them are often expensive, hard to use and disconnected from where research starts.",
    'ITHAKA set out to turn its separate infrastructure services into one product, JSTOR Digital Stewardship Services, that could clear that backlog with responsible AI and give the organization a source of revenue beyond content licensing.',
  ],
  moves: [
    {
      title: 'Drew the vision first',
      paragraphs: [
        'Before there was a product, there was a story. I created the "Better Together" narrative and a visiontype, plus Horizon 1 to 3 design narratives showing how the services could come together over time. Teams cited them as what helped them understand the strategy and move fast while so much was still undefined.',
      ],
    },
    {
      title: 'Designed AI that archivists control',
      paragraphs: [
        'JSTOR Seeklight uses multiple LLMs to draft item descriptions and transcripts, and archivists review and approve everything it produces. The team mapped the core workflow (create a project, generate and preview AI metadata, publish to JSTOR, export) and the three service tiers, from simple sharing up to full digital asset management with AI-assisted processing.',
      ],
    },
    {
      title: 'Built it with the people who would use it',
      paragraphs: [
        'A charter program brought institutions into a two-year shared learning group, with working groups on hard problems like rights, privacy, flagging personal information and flexible metadata schemas. Participants told us the openness itself was part of the value.',
      ],
    },
    {
      title: 'Put the right designers on it',
      paragraphs: [
        'Both designers on Stewardship are people I hired as Designer IIs. After I restructured my team, I moved one of them onto Stewardship. I then made the case for turning a contract role into a full-time position, and hired the second specifically for Seeklight.',
      ],
    },
  ],
  results: [
    'Stewardship launched publicly on April 2, 2025.',
    'A description project that takes 9 to 10 weeks by hand can reach a first pass in under 2 hours. Early beta use generated about 1,800 items and about 20,000 metadata terms, and the University of Manitoba processed over 1,000 items in 15 days.',
    'More than 30 institutions joined the charter program by November 2025.',
    'Seeklight won the 2025 C.F.W. Coker Award for Description from the Society of American Archivists, and a 2025 Anthem Award (Bronze, Best Use of AI in Education, Art & Culture).',
    'Early reactions: "This is exactly the kind of tool we want to see!" (National Parliament, Ireland) and "How soon can I get a subscription to this?" (University of Rochester).',
  ],
  why: [
    'Archivists know their collections better than any model. Our team set out to build AI that clears the backlog and leaves the judgment with them.',
  ],
};

interface Props {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const AILibrary: React.FC<Props> = ({ onNavigate }) => (
  <CaseStudyTemplate data={data} onNavigate={onNavigate} />
);
