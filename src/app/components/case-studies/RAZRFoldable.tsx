import React from 'react';
import razrHeroImage from 'figma:asset/a9d3a2304cfdb51608b897fa52985cf480028150.png';
import redDotImage from 'figma:asset/d7aeea6eaf3a1140e04f16b7913fb2ec289f2aea.png';
import { CaseStudyTemplate, CaseStudyData } from './CaseStudyTemplate';

const data: CaseStudyData = {
  id: 'razr-foldable',
  hero: { src: razrHeroImage, alt: 'Android RAZR Foldable' },
  tag: 'Devices',
  years: '2016-2020',
  title: 'Bringing Back the RAZR',
  subtitle: "The Android RAZR: reimagining an icon for the smartphone age",
  role: 'Director, São Paulo Design Studio, then Global UX Director, Motorola Mobility',
  partners: 'Industrial Design, Research, Engineering (HW/SW), Product Management (HW/SW), Marketing',
  glance: "Led the design team that brought back the RAZR as a foldable Android phone, working with Google's Android team. Its glanceable cover screen shaped Google's patterns for small foldable screens and won a Red Dot \"Best of the Best.\"",
  extra: [{ label: 'Award', value: 'Red Dot "Best of the Best" 2020' }],
  context: ["Motorola was strong in mid-tier phones, but it had struggled to ship a premium device after its Droid partnership with Verizon ended. People still told me stories about their RAZR flip phones, so Motorola decided to bring it back as a foldable Android phone."],
  moves: [
    { title: "Started from what people loved", paragraphs: ["In early foldable concepts, the people we tested with didn't want screens that folded outward. They wanted the screen protected and a phone that fit in a pocket, exactly what they had loved about the original RAZR. One of my industrial designers, in her second year working on mobile devices, took on reimagining it."] },
    { title: "Caught a software problem early", paragraphs: ["Our device lead wanted Android Wear on the outside screen and full Android inside. I brought in our VP of global software and an engineering director, and together we worked out that Android could support two screens, but not two operating systems. Settling that while the hardware was still a concept kept the project from building toward something that couldn't ship."] },
    { title: "Bet on a new team, and tested with our hands", paragraphs: ["I gave the outside screen to UX and UI designers who had only worked on the web, and coached them on the principles Motorola built for the original RAZR. They tested paper prototypes to sort essentials from nice-to-haves: glanceable time, notifications, calls and alarms made the cut; boarding passes, maps and payments didn't."] },
    { title: "Designed for continuity", paragraphs: ["Research showed continuity mattered more than ever. A video call carries on when you close the phone, and an email you start on the outside opens right where you left off, so you can deal with something quickly without getting lost in your phone. On the design team, we called that calm computing."] },
    { title: "Worked with Android, then pushed for more", paragraphs: ["I worked with Google's Android framework team on the changes future foldables would need, and reviewed our Phone app changes with the Android Comms team. After launch, I ran a workshop that shaped the Android 10 upgrade: a panel for favorite contacts, an app panel and Android's reply chips, so you could answer a message without a keyboard."] },
  ],
  results: ["The razr won a 2020 Red Dot \"Best of the Best,\" the top distinction in Red Dot product design, among more than 6,500 products from 60 countries.", "I presented the razr experience to Verizon's senior leadership when they visited Chicago to plan the launch.", "The industrial designer was promoted to Senior Designer. She and the UI designer both became Design Managers after I left Motorola.", "\"The cover display makes much better use of its small size than the Galaxy Fold.\" (Android Central, December 2019)"],
  resultsFigure: { src: redDotImage, alt: 'Red Dot Award: Best of the Best 2020' },
  why: ["What I'm proudest of is the team. Designers new to mobile built a phone that reviewers called one of the most novel in years."],
};

interface Props {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const RAZRFoldable: React.FC<Props> = ({ onNavigate }) => (
  <CaseStudyTemplate data={data} onNavigate={onNavigate} />
);
