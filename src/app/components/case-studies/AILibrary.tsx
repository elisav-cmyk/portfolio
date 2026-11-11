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
  title: 'Unlocking Hidden Archives',
  subtitle: "JSTOR Seeklight: describing archives in hours, not weeks",
  role: 'Director, Product Design, JSTOR',
  partners: 'Product Management, Engineering, Research, Outreach, Legal, Insights, Portico',
  glance: "Led design for JSTOR Seeklight, AI that drafts archival descriptions for archivists to review, cutting a 9 to 10 week project to a first pass in under 2 hours. Winner of the 2025 C.F.W. Coker Award.",
  context: ["Up to 95% of special collections in libraries and archives are unprocessed or undigitized, so they stay hidden from the researchers who need them. ITHAKA set out to build JSTOR Digital Stewardship Services to clear that backlog with responsible AI and add a source of revenue beyond content licensing."],
  moves: [
    { title: "Drew the vision first", paragraphs: ["Before there was a product, I created the \"Better Together\" narrative, a visiontype and Horizon 1 to 3 design narratives. Teams said they helped them understand the strategy and move fast while so much was still undefined."] },
    { title: "Designed AI that archivists control", paragraphs: ["JSTOR Seeklight uses multiple LLMs to draft item descriptions and transcripts, and archivists review and approve everything it produces."] },
    { title: "Built it with the people who would use it", paragraphs: ["A two-year charter program brought institutions into working groups on hard problems like rights, privacy and flagging personal information."] },
    { title: "Put the right designer on it", paragraphs: ["When Seeklight needed a dedicated designer, I turned a 6-month contract into a full-time role and hired for it. That designer still leads Seeklight's design today."] },
  ],
  results: ["Stewardship launched publicly on April 2, 2025.", "A description project that takes 9 to 10 weeks by hand can reach a first pass in under 2 hours. The University of Manitoba processed over 1,000 items in 15 days.", "More than 30 institutions joined the charter program by November 2025.", "Seeklight won the 2025 C.F.W. Coker Award for Description from the Society of American Archivists, and a 2025 Anthem Award (Bronze, Best Use of AI in Education, Art & Culture).", "\"How soon can I get a subscription to this?\" (University of Rochester)"],
  why: ["Archivists know their collections better than any model. Our team set out to build AI that clears the backlog and leaves the judgment with them."],
};

interface Props {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const AILibrary: React.FC<Props> = ({ onNavigate }) => (
  <CaseStudyTemplate data={data} onNavigate={onNavigate} />
);
