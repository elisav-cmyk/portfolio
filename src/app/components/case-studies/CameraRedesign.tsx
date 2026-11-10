import React from 'react';
import cameraIntroImage from 'figma:asset/camera-intro.png';
import { CaseStudyTemplate, CaseStudyData } from './CaseStudyTemplate';

const data: CaseStudyData = {
  id: 'camera-redesign',
  hero: { src: cameraIntroImage, alt: 'Camera app redesign at Motorola' },
  tag: 'Hardware/Software',
  years: '2019-2020',
  title: 'Camera Redesign',
  subtitle: 'Starting over so the app could grow',
  role: 'Global UX Director, Motorola Mobility',
  partners: 'Product Marketing, Product Management, Engineering, User Insights Research',
  extra: [{ label: 'Core team', value: '3 designers' }],
  context: [
    'When I came back from Brazil to lead the Americas studios, product managers in China were pushing design hard to show off the dual, triple and quad lenses Motorola now had across several tiers of phones. My 3 designers on the camera team had already redesigned the app so one core app could stretch across every device, and it did improve usability.',
    'But within a year it looked dated, and new 21:9 screens were coming that would put the top row of controls out of reach. Competitors were also trying new ways to switch between camera modes, so the designers asked to redesign it again.',
  ],
  moves: [
    {
      title: 'Earned the right to start over',
      paragraphs: [
        "I supported them, with conditions. To ship a new design, we'd need to target a high-tier phone the business wanted to feature, and we'd need buy-in from product marketing, software product management and engineering. The team organized a kickoff with those stakeholders and gathered a long list of their pain points and ideas.",
      ],
    },
    {
      title: 'Prototyped without waiting for engineering',
      paragraphs: [
        "A design team in Brazil had been experimenting with ProtoPie, so I encouraged the camera team to use it for interactive prototypes that didn't depend on software development. They finished discovery research and one round of testing just before lockdown. Because ProtoPie was easy to download and install, they could keep going remotely, and completed three rounds of research across four design directions.",
      ],
    },
    {
      title: 'Coached the coach',
      paragraphs: [
        'Two of the designers were new to the team, so I assigned them a UX mentor whom I was coaching to become a design manager. She suggested auditing every feature in the camera. Using usage data and what people said in testing, the team sorted features into ones people used often, ones that needed a status indicator, and ones that could be hidden.',
        "I also asked them to revisit the principles from the last redesign. Principles give designers a touchstone when they're making tradeoffs, and the updated ones (intuitive, empowering, intelligent, flexible, refined) became the test for every decision.",
      ],
    },
    {
      title: 'Rethought how the camera talks to people',
      paragraphs: [
        'To prepare for the redesign, the team also audited how Motorola phones communicate, and found they were saying too much, in too many ways. People received about 60 notifications a day, dismissed 80 to 85% of feature-discovery notifications, and chose "Not now" or "Skip" over "Learn more" 85% of the time. The camera app alone used seven different ways to show a message, so the team set out to match each message to one clear pattern.',
      ],
    },
    {
      title: 'Let research settle the debates',
      paragraphs: [
        "Some early designs used taps, others used swipes, and after watching people use the prototypes, the designers still weren't sure. From my own years as a researcher, I encouraged them to support both. In the final design, you can swipe your thumb along the bottom to move between modes, or tap a mode to switch.",
        'I also encouraged them to borrow from physical cameras: tap to switch lenses, or press and hold to get something that looks and works like a focus ring.',
      ],
    },
  ],
  results: [
    'Only the essentials stay on screen. Controls that used to sit at the top moved to a panel you open with one swipe up from the bottom, so you can reach them with one hand. The settings icon is the only thing you can tap at the top.',
    'Photo and Video are the only modes shown by default. You can drag others into the carousel to build your own set.',
    "Instead of showing every tip when you open the camera and are trying to take a picture, short animated tips introduce a feature only after a delay, and only if you haven't tried it. That satisfied product and marketing teams who wanted new features to be seen, without getting in the way of the photo. Designers on other Motorola apps adopted the pattern.",
    'The design principles gave product marketing and portfolio teams a shared way to describe what improved, so the message stayed consistent from development to launch.',
  ],
  why: [
    "What I'm most proud of is that the designers didn't just improve usability and refine the look; they took the analysis to heart, and checked every round of feedback against the principles they'd set. I was especially excited by how polished the new design looked, and by seeing their patterns show up in other apps.",
  ],
};

interface Props {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const CameraRedesign: React.FC<Props> = ({ onNavigate }) => (
  <CaseStudyTemplate data={data} onNavigate={onNavigate} />
);
