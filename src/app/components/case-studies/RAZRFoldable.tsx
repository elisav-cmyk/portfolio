import React from 'react';
import razrHeroImage from 'figma:asset/a9d3a2304cfdb51608b897fa52985cf480028150.png';
import redDotImage from 'figma:asset/d7aeea6eaf3a1140e04f16b7913fb2ec289f2aea.png';
import { CaseStudyTemplate, CaseStudyData } from './CaseStudyTemplate';

const data: CaseStudyData = {
  id: 'razr-foldable',
  hero: { src: razrHeroImage, alt: 'Android RAZR Foldable' },
  tag: 'Hardware/Software',
  years: '2016-2020',
  title: 'Bringing Back the RAZR',
  subtitle: "The Android RAZR: reimagining an icon for the smartphone age",
  role: 'Director, São Paulo Design Studio, then Global UX Director, Motorola Mobility',
  partners: 'Industrial Design, Research, Engineering (HW/SW), Product Management (HW/SW), Marketing',
  extra: [{ label: 'Award', value: 'Red Dot "Best of the Best" 2020' }],
  context: [
    "Whenever I told people I worked at Motorola, I'd hear stories about their first phones, and years after we'd moved to Android, people still wanted to talk about their flip phones and the RAZR in particular. Motorola was strong in mid-tier phones, but it had struggled to ship a premium device after its Droid partnership with Verizon ended. To return to the high end, Motorola decided to bring back the RAZR as a foldable Android phone.",
  ],
  moves: [
    {
      title: 'Started from what people loved',
      paragraphs: [
        "While I led the São Paulo studio, one of my industrial designers worked with Lenovo's Research and Technology group on foldable concepts shown at Tech World 2016. They had real problems: they ran on builds of Android that didn't meet Google's requirements, and the people we tested them with didn't want screens that folded outward. They wanted the screen protected, and a phone that fit in a pocket, which were exactly the things people had loved about the original RAZR. So that industrial designer, then in her second year working on mobile devices, took on reimagining a foldable in the age of smartphones.",
      ],
    },
    {
      title: 'Caught a software problem early',
      paragraphs: [
        "Our device lead's vision was Android Wear on the outside screen and full Android on the inside. I understood what he wanted, but I was fairly sure it wasn't feasible, so I went to our VP of global software, who connected me with the right engineering director. Looking at the industrial designers' sketches together, we worked out that Android could support two screens, but not two operating systems, and that the smooth handoff between screens meant you wouldn't want two anyway. Settling that while the hardware was still a concept kept the project from building toward something that couldn't ship.",
      ],
    },
    {
      title: 'Went back to first principles',
      paragraphs: [
        "That conversation reminded me of a document I'd helped write with our research team for the original RAZR, when product teams kept trying to add features to the outside screen. It set three rules: from three feet away, you can tell whether the phone needs you; in your hand, it reveals a little more; and moving between closed and open feels continuous.",
      ],
    },
    {
      title: 'Bet on a new team, and tested with our hands',
      paragraphs: [
        'I dedicated two product designers to the question of what an outside screen should do now: UX and UI designers who had only worked on the web. I coached the industrial designer through her negotiations with product and engineering teams in Chicago, and walked the UX and UI designers through the foldable principles Motorola had built with the original RAZR V3.',
        "They tested paper prototypes of a long list of ideas to sort the essentials from the nice-to-haves. Glanceable time, notifications you could peek at, calls and alarms made the cut; boarding passes, maps, weather and payments didn't. Knowing what to cut is often as important as knowing what to keep. One delightful surprise made it in: an animation on the outside screen that catches your subject's eye while you take their photo.",
      ],
    },
    {
      title: 'Gave the project a north star',
      paragraphs: [
        'The designers updated the original principles: tailor every experience to the small screen, build on Moto Display, keep the logic simple, and remember people can always open the phone. Research showed continuity mattered even more than before. A video call carries on when you close the phone, and an email you start on the outside opens right where you left off, so you can deal with something quickly without getting lost in your phone. On the design team, we called that calm computing.',
      ],
    },
    {
      title: 'Worked with Android, then pushed for more',
      paragraphs: [
        "Back in the US leading the Americas studios, I coordinated hardware and software teams on a custom solution for launch, and worked with Google's Android framework team on the changes future foldables would need. The Android platform team shared the navigation map they were developing for Wear OS, which let us lock our swipe model, and in late 2019 I reviewed our Phone app changes with the Android Comms team so Google could bring similar functions to its core GMS Calling app.",
        "After launch, everyone wanted more from the outside screen, so I pushed to lock the launch software and focus on Android 10. A day-long workshop I ran with software product management and engineering shaped the upgrade: a panel for favorite contacts, an app panel, clearer locked and unlocked states, and Android's new reply chips, so you could answer a message without a keyboard.",
      ],
    },
    {
      title: 'Made room for play',
      paragraphs: [
        "People love fiddling with an outside screen when they're bored. My copywriter, creative lead and a UX designer in Chicago concepted games for it, and with a product partner's help they built on Google's open-source dinosaur game. Astro Odyssey shipped with the Android 10 upgrade to the original Android razr and on the second razr, released at the end of 2020.",
      ],
    },
  ],
  results: [
    'The razr won a Red Dot "Best of the Best" award in 2020, the top distinction in Red Dot product design. That year, more than 6,500 products from 60 countries were entered.',
    "I presented the razr experience to Verizon's senior leadership when they visited Chicago to plan the launch.",
    'The UX and UI designers built deep mobile expertise over the project. The industrial designer was promoted to Senior Designer. She and the UI designer both became Design Managers after I left Motorola.',
    '"The cover display makes much better use of its small size than the Galaxy Fold." (Android Central, December 2019)',
  ],
  resultsFigure: { src: redDotImage, alt: 'Red Dot Award: Best of the Best 2020' },
  why: [
    "What I'm proudest of is the team. Designers new to mobile built a phone that reviewers called one of the most novel in years.",
  ],
};

interface Props {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const RAZRFoldable: React.FC<Props> = ({ onNavigate }) => (
  <CaseStudyTemplate data={data} onNavigate={onNavigate} />
);
