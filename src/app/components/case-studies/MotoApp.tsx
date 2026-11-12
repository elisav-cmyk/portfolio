import React from 'react';
import motoHeroImage from '../../../assets/moto-app.jpg';
import motoDesignSystem from '../../../assets/moto-design-system.jpg';
import motoIllustrations from '../../../assets/moto-illustration-system.jpg';
import { CaseStudyTemplate, CaseStudyData } from './CaseStudyTemplate';

const data: CaseStudyData = {
  id: 'moto-app',
  hero: {
    src: motoHeroImage,
    alt: 'Screens from the redesigned Moto app, with its illustrated welcome screen, Moto Actions and tips',
    position: 'object-top',
  },
  tag: 'Devices',
  years: '2016-2020',
  title: 'Turning Hidden Features into Daily Habits',
  subtitle: "The Moto app: from a list of settings to a reason to explore",
  role: 'Design Director, then Global UX Director, Motorola Mobility',
  partners: 'Product Management, Engineering, Research, Marketing',
  glance: "Led the redesign of the Moto app from a list of settings into an editorial app that helped 23M+ active users discover features like Moto Display.",
  context: ["Motorola phones ran a mostly \"pure\" version of Android, so people rarely noticed the features unique to Moto phones. Yet the ones people found became daily habits: Moto Display, which let them screen notifications at a glance without getting pulled into their phone; chopping twice to turn on the flashlight; and twisting the wrist to open the camera. The Moto app, where those features lived, was mostly a collection of settings."],
  moves: [
    { title: "Showcasing Moto’s Best Features", paragraphs: ["I drove the vision of the Moto app as an educational, brand-building app, coordinating several product management and software teams. The redesign, launched on the Moto G7, turned a list of settings into quick tips and tutorials for the features that mattered most."] },
    { title: "Gave writing a bigger role", paragraphs: ["I encouraged my copywriter to set the content strategy and a roadmap for new categories, such as Tips and Personalize, which gave people more reasons to come back and explore their phones."] },
    { title: "Built a shared illustration system", paragraphs: ["My creative lead and a senior designer in Chicago created a mix-and-match illustration library, so designers in any studio could build new illustrations quickly."] },
    { title: "Made animation work everywhere", paragraphs: ["Earlier attempts to use Lottie animations had run into technical conflicts. I set up a proof of concept with developers in Brazil, drove security approval with legal, and negotiated Lottie's integration into Motorola's framework, which fixed problems with different screen shapes and saved significant space."] },
  ],
  figures: [
    {
      after: 0,
      src: motoDesignSystem,
      alt: 'Two phones showing the Moto app welcome screen and the Peek Display tip, beside the title Moto App 3.0 Design System',
      caption: 'The Moto app 3.0 design system: an editorial app in place of a list of settings.',
      width: 'wide',
    },
    {
      after: 2,
      src: motoIllustrations,
      alt: 'A grid of illustrated people shown in a range of skin tones',
      caption: 'The shared illustration library: mix-and-match people in a full range of skin tones, so any studio could build new scenes.',
    },
  ],
  results: [
    "Two 2019 Brazil Design Awards: People's Choice and Application Design.",
    'Preloaded on the Moto G7 and later mid- and high-tier Motorola phones.',
    'More than 23 million active users and a 4.3 rating on the Play Store, as of 2020. The app has changed significantly since.',
  ],
  why: [
    'This app is an example of my passion for brand, craft and design fidelity, and of how closely my team worked with research, other studios, product management and engineering.',
  ],
  videos: [
    {
      src: 'https://player.vimeo.com/video/347808760?h=4418d191b2&dnt=1',
      title: 'Moto app video',
    },
  ],
};

interface Props {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const MotoApp: React.FC<Props> = ({ onNavigate }) => (
  <CaseStudyTemplate data={data} onNavigate={onNavigate} />
);
