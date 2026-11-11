import React from 'react';
import cameraIntroImage from 'figma:asset/camera-intro.png';
import cameraResearch from '../../../assets/camera-research-zoom.jpg';
import cameraFinal from '../../../assets/camera-final.jpg';
import cameraPanel from '../../../assets/camera-panel.jpg';
import cameraTip from '../../../assets/camera-tip.jpg';
import { CaseStudyTemplate, CaseStudyData } from './CaseStudyTemplate';

const data: CaseStudyData = {
  id: 'camera-redesign',
  hero: { src: cameraIntroImage, alt: 'Camera app redesign at Motorola' },
  tag: 'Camera',
  years: '2019-2020',
  title: 'Starting the Camera Over',
  subtitle: "Motorola's Camera app, rebuilt so it could grow",
  role: 'Global UX Director, Motorola Mobility',
  partners: 'Product Marketing, Product Management, Engineering, User Insights Research',
  glance: "Coached a team of 3 designers through rebuilding Motorola's Camera app across every device tier, using three rounds of remote research to settle design debates.",
  extra: [{ label: 'Core team', value: '3 designers' }],
  context: ["Product managers wanted the Camera app to show off the dual, triple and quad lenses now on several tiers of Motorola phones. An earlier redesign had put one core app on every device, but within a year it looked dated, and new 21:9 screens would put the top row of controls out of reach. My 3 designers on the camera team asked to start over."],
  moves: [
    { title: "Earned the right to start over", paragraphs: ["I supported them, with conditions: target a high-tier phone the business wanted to feature, and get buy-in from product marketing, software product management and engineering. The team held a kickoff with those partners and gathered their pain points and ideas."] },
    { title: "Prototyped without waiting for engineering", paragraphs: ["I encouraged the team to build interactive prototypes in ProtoPie, which a design team in Brazil had been testing. When lockdown hit, they kept going remotely and completed three rounds of research across four design directions."] },
    { title: "Coached the coach", paragraphs: ["Two of the designers were new, so I paired them with a UX mentor I was coaching to become a design manager. She led an audit that sorted every camera feature by how often people used it, and the team updated its design principles to test every decision."] },
    { title: "Rethought how the camera talks to people", paragraphs: ["An audit found Motorola phones were saying too much. People received about 60 notifications a day and dismissed 80 to 85% of feature-discovery notifications. The camera app alone used seven ways to show a message, so the team matched each message to one clear pattern."] },
    { title: "Let research settle the debates", paragraphs: ["When testing didn't settle taps versus swipes, I drew on my own years as a researcher and encouraged them to support both. In the final design, you can swipe along the bottom to change modes, or tap a mode to switch."] },
  ],
  figures: [
    {
      after: 1,
      src: cameraResearch,
      alt: 'Research summary: a lens toggle at the bottom of the viewfinder, shown at 1x and while dragging to 1.4x zoom, with notes from testing',
      caption: 'From the research summary: people found both zoom controls easily, tapping to switch lenses and holding and dragging for finer control.',
      width: 'wide',
    },
    {
      after: 4,
      caption: 'The final design: the viewfinder with modes along the bottom, the mode panel, and a tip that appears only for a feature you haven\'t tried.',
      gallery: [
        { src: cameraFinal, alt: 'The redesigned camera with Photo and Video modes and a shutter button along the bottom' },
        { src: cameraPanel, alt: 'The camera mode panel listing photo and video modes as icons' },
        { src: cameraTip, alt: 'A Change cameras tip card explaining how to switch back to the standard camera' },
      ],
    },
  ],
  results: ["Only the essentials stay on screen. Controls moved to a panel you open with one swipe up from the bottom, so you can reach them with one hand.", "Photo and Video are the only modes shown by default. You can drag others into the carousel to build your own set.", "Short animated tips introduce a feature only after a delay, and only if you haven't tried it. Designers on other Motorola apps adopted the pattern.", "The design principles gave product marketing a shared way to describe what improved, from development to launch."],
  why: ["What I'm most proud of is that the designers took the analysis to heart and checked every round of feedback against the principles they set. Seeing their patterns show up in other apps was a bonus."],
};

interface Props {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const CameraRedesign: React.FC<Props> = ({ onNavigate }) => (
  <CaseStudyTemplate data={data} onNavigate={onNavigate} />
);
