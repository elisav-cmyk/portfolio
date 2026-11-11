import React from 'react';
import imgMobileParity from '../../../assets/jstor-mobile.png';
import { CaseStudyTemplate, CaseStudyData } from './CaseStudyTemplate';

const data: CaseStudyData = {
  id: 'mobile-parity',
  hero: { src: imgMobileParity, alt: 'Designing for Mobile Parity at JSTOR', position: 'object-center' },
  tag: 'Platform Strategy',
  years: '2021-2025',
  title: 'Research on the Go',
  subtitle: "JSTOR on phones, as someone's main screen or a second one",
  role: 'Director, Product Design, JSTOR',
  partners: 'Product Management, Engineering, User Insights Research, Accessibility, Visual Resources Association library leads',
  glance: "Set one mobile point of view across four JSTOR projects as mobile grew to 40% of traffic. A new phone reader raised text engagement 27.9% in an A/B test with 225,000+ users.",
  context: ["JSTOR could no longer treat mobile as an afterthought. Between 2018 and 2025, mobile traffic grew from 17% to 40% (surpassing 34% in 2024), yet the mobile experience had failed to keep pace. The page viewer was the clearest example: only 63% of users were satisfied with it, and people couldn't search within a document."],
  moves: [
    { title: "Set one point of view across four projects", paragraphs: ["We agreed on a way of seeing the problem: put essential tasks first, assume short sessions, and treat mobile as an access problem, not a responsive-CSS problem."] },
    { title: "Homepage (2021-2022)", paragraphs: ["People told us they \"just want search,\" so we rebuilt navigation around a single menu and simplified the header."] },
    { title: "Reader (2023)", paragraphs: ["We replaced the page-image viewer with a PDF reader built for phones, with continuous scrolling, search within the document and pinch-to-zoom."] },
    { title: "Audio and video (2023)", paragraphs: ["New media pages were designed mobile-first, with an audio player anchored at the bottom of the screen and transcripts linked to timestamps."] },
    { title: "Research tool (2025)", paragraphs: ["A year of hardening: a launch button people could actually find, a chat sheet that no longer covered the page, and a keyboard that no longer blocked typing."] },
  ],
  results: ["In an A/B test with more than 225,000 users, the new reader raised the share of users reading text on JSTOR by 27.9% and doubled pages viewed.", "In usability testing, reading ease for modern articles rose from 3.8 to 4.4.", "A sticky launch button raised research tool open rates from 1.6% to as high as 6%."],
  why: ["For many students around the world, a phone is the only computer they have. In the US, students regularly use their phone as a second screen while they work. Making JSTOR work well on phones is how we keep access to knowledge open."],
};

interface Props {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const MobileParity: React.FC<Props> = ({ onNavigate }) => (
  <CaseStudyTemplate data={data} onNavigate={onNavigate} />
);
