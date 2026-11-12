import React from 'react';
import onePlatformImage from 'figma:asset/40bf45078ad84575a1178136d73d285002fdf9bc.webp';
import { CaseStudyTemplate, CaseStudyData } from './CaseStudyTemplate';

const data: CaseStudyData = {
  id: 'one-platform',
  hero: { src: onePlatformImage, alt: 'JSTOR platform integration' },
  tag: 'Platform',
  years: '2023-2024',
  title: 'When the Gallery Met the Library',
  subtitle: "Moving faculty's teaching workflows without losing them",
  role: 'Director, Product Design, JSTOR',
  partners: 'Product Management, Research, Marketing, Visual Resources Association librarians',
  glance: "Guided senior design leads moving Artstor's images, audio and video onto JSTOR, finished ahead of the retirement date. Artstor use rose about 35% in its first full year on JSTOR.",
  context: [
    "When JSTOR merged with Artstor, faculty teaching workflows hung in the balance. Instructors had built their courses around Artstor's tools for organizing images, and if the move went badly, they could take their teaching to competing image databases. In 2023 and 2024, JSTOR set out to bring Artstor fully onto the JSTOR platform before the legacy Artstor site retired on August 1, 2024.",
  ],
  moves: [
    {
      title: 'Let senior leads own it',
      paragraphs: [
        "My senior design leads owned the design and the technical integration. I set direction, advised executives, and stepped in when another team's roadblock slowed them down.",
      ],
    },
    {
      title: 'Protected how faculty teach',
      paragraphs: [
        "The team rebuilt Artstor's image groups as JSTOR Workspace folders, so faculty kept the image collections they had built. In April 2024 they launched Personal Uploads, so faculty could combine their own images with licensed ones in one place. They also designed the tools for teaching from a folder: comparing up to four images side by side, presenting in class, and exporting a folder as a handout or slideshow.",
      ],
    },
    {
      title: 'Alignment through all content types',
      paragraphs: [
        'The team designed JSTOR item pages for images, audio and video, and worked with Visual Resources Association librarians to agree on one metadata pattern for every new content type. A new Browse Images page, launched in February 2024, began showcasing Artstor collections to everyone on JSTOR.',
      ],
    },
  ],
  results: [
    'Audio and video support went live in December 2023.',
    "The integration was completed in June 2024, ahead of Artstor's August 1 retirement date.",
    'In 2024, the first full year on JSTOR, Artstor use rose about 35%, from about 2.22 million to 3 million uses.',
    "In October 2026, School Library Journal's review called the Workspace features \u201cpowerful ways to collect, organize, present and share images.\u201d",
  ],
  why: ['My job here was to trust my leads, stay close, and move fast when they hit a wall. They delivered early.'],
  videos: [
    {
      src: 'https://www.youtube-nocookie.com/embed/6lnD4r-0R9M',
      title: 'Artstor on JSTOR video',
    },
  ],
};

interface Props {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const OnePlatform: React.FC<Props> = ({ onNavigate }) => (
  <CaseStudyTemplate data={data} onNavigate={onNavigate} />
);
