import React from 'react';
import imgMobileParity from '../../../assets/jstor-mobile.png';
import { CaseStudyTemplate, CaseStudyData } from './CaseStudyTemplate';

const data: CaseStudyData = {
  id: 'mobile-parity',
  hero: { src: imgMobileParity, alt: 'Designing for Mobile Parity at JSTOR', position: 'object-center' },
  tag: 'Platform Strategy',
  years: '2021-2025',
  title: 'When a Phone Is the Only Screen',
  subtitle: 'Making JSTOR work for people who only have a phone',
  role: 'Product Design Director, JSTOR',
  partners: 'Product Management, Engineering, User Insights Research, Accessibility, Visual Resources Association library leads',
  context: [
    "Mobile had become too large a share of JSTOR's traffic to treat as an afterthought. Its share of users grew from 17% in 2018 to 34% in 2024 and 40% in 2025, but the experience hadn't kept up. Internal research showed JSTOR was losing use to poor mobile design in navigation, access flows and judging whether an article was worth reading.",
    "The clearest example was the viewer for reading journal pages: only 63% of users were satisfied with it, and only 57% found it easy to move between pages. People couldn't search within a document, the mouse wheel zoomed instead of scrolling, and pages flipped by mistake.",
  ],
  moves: [
    {
      title: 'Set one point of view across four projects',
      paragraphs: [
        "We didn't write a formal standard; we agreed on a way of seeing the problem: put essential tasks first, assume short sessions, and treat mobile as an access problem, not a responsive-CSS problem.",
      ],
    },
    {
      title: 'Homepage (2021-2022)',
      paragraphs: [
        'A survey of 205 people told us the homepage was "busy and cluttered" and that they "just want search." We rebuilt navigation around a single menu and simplified the header and the rotating hero.',
      ],
    },
    {
      title: 'Reader (2023)',
      paragraphs: [
        'We replaced the page-image viewer with a PDF reader built for phones: continuous vertical scrolling, search within the document with highlighted matches, pinch-to-zoom and a distraction-free reading mode.',
      ],
    },
    {
      title: 'Audio and video (2023)',
      paragraphs: [
        'When Artstor content moved to JSTOR, the team designed the new media pages mobile-first from the start, with an audio player anchored at the bottom of the screen and captioned video with transcripts linked to timestamps, which we validated with Visual Resources Association library leads.',
      ],
    },
    {
      title: 'Research tool (2025)',
      paragraphs: [
        'A year of hardening: a launch button people could actually find, a chat sheet that no longer covered the page, and a keyboard that no longer blocked typing.',
      ],
    },
  ],
  results: [
    'In an A/B test with more than 225,000 users, the new reader raised the share of users reading text on JSTOR by 27.9% and doubled pages viewed, with 83% more page changes.',
    'In usability testing, reading ease for modern articles rose from 3.8 to 4.4, and skimming ease for older articles nearly doubled, from 2.1 to 3.9.',
    'A sticky launch button raised research tool open rates from 1.6% to as high as 6%.',
  ],
  why: [
    'For many students around the world, a phone is the only computer they have. In the US, students regularly use their phone as a second screen while they work. Making JSTOR work well on phones is how we keep access to knowledge open.',
  ],
};

interface Props {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const MobileParity: React.FC<Props> = ({ onNavigate }) => (
  <CaseStudyTemplate data={data} onNavigate={onNavigate} />
);
