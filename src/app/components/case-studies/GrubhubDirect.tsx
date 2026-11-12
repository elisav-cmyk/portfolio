import React from 'react';
import grubhubHeroImage from 'figma:asset/e1e956d921c735f672569fc508b766a5bbeb7877.webp';
import grubhubCarousel1 from 'figma:asset/ce9b0d482bf14a0dec7f8fef052693906d15e2cd.webp';
import grubhubCarousel2 from 'figma:asset/5bc2dd241a4208ad2c76d2e2ddd0f71cbd604975.webp';
import grubhubCarousel3 from 'figma:asset/05d26cd3f98f6f53a1adfe77e2a403c8c32f53bf.webp';
import grubhubCarousel4 from 'figma:asset/041fafbc2cefccb465f6133dea1ba426671155f0.webp';
import grubhubCarouselFirst from 'figma:asset/f5a674b320e452309440ef67cd02f49e10b181fc.webp';
import grubhubSpectrum from 'figma:asset/f7419de451c9c826e143901fd7f37974104a6de2.webp';
import { CaseStudyTemplate, CaseStudyData } from './CaseStudyTemplate';

const data: CaseStudyData = {
  id: 'grubhub-direct',
  hero: {
    src: grubhubHeroImage,
    alt: 'Grubhub Direct dashboard showing restaurant analytics for La Cocina, including total sales, orders and average order size',
    position: 'object-top',
  },
  tag: 'Local Commerce',
  years: '2020-2021',
  title: 'Restaurants Own Their Orders',
  subtitle: "Grubhub Direct: commission-free ordering for local restaurants",
  role: 'Director, Product Design, Grubhub',
  partners: 'Product Management, Engineering, Research, restaurant operators',
  glance: "Led design for Grubhub Direct, commission-free ordering for local restaurants, launched six months after kickoff. In testing, restaurants that listed it on Google Business Profile saw nearly 20x the orders.",
  context: ["During the pandemic, independent restaurants were fighting to stay open, while the delivery apps they relied on charged commissions that could top 40% of revenue and kept the customer data. Grubhub set out to give independent restaurants and small chains the branded, commission-free ordering site that only large chains had been able to build.", "A big part of the plan was meeting diners where they already look for a place to eat: Google Search and Maps."],
  moves: [
    { title: "Assembled the team for the next chapter", paragraphs: ["In the year leading up to the $7.3B Just Eat Takeaway acquisition, I hired 5 people (a design manager, 3 senior designers and a content strategist) so the team could carry the platform through the transition."] },
    { title: "Designed for two kinds of owners", paragraphs: ["I directed the vision for bringing LevelUp's enterprise technology into Grubhub's self-service platform. An owner with no technical help could set up a branded site in minutes; a chain with its own developers got APIs, SDKs and a developer portal."] },
    { title: "Started with operators", paragraphs: ["Our product definition came from research with restaurant operators, from a first-time owner who wanted to change a logo in minutes to a chain with an engineering team."] },
    { title: "Made running a restaurant simpler", paragraphs: ["Menus imported and updated automatically, and one Merchant Portal let owners manage menus, hours, finances and orders in one place."] },
  ],
  figures: [
    {
      after: 1,
      src: grubhubSpectrum,
      alt: "Grubhub's spectrum from low-code setup for owners to pro-code tools for developers",
      width: 'wide',
    },
    {
      after: 3,
      caption: 'Grubhub Direct: dashboard, site design, images, colors and the diner ordering experience.',
      gallery: [
        { src: grubhubCarouselFirst, alt: 'Grubhub Direct dashboard showing restaurant analytics' },
        { src: grubhubCarousel1, alt: 'Grubhub Direct site design customization' },
        { src: grubhubCarousel2, alt: 'Grubhub Direct image upload settings' },
        { src: grubhubCarousel3, alt: 'Grubhub Direct color customization' },
        { src: grubhubCarousel4, alt: 'Restaurant digital ordering experience' },
      ],
    },
  ],
  results: ["In testing, restaurants that listed their Direct site on their Google Business Profile, so it appeared on Search and Maps, received on average nearly 20x the orders of those that didn't.", "Grubhub Direct launched in May 2021, six months after kickoff.", "Restaurants kept 100% of their direct sales and owned their customer data, which they could use for loyalty and promotions."],
  why: ["I love hunting for the next great local restaurant. Helping those restaurants keep their customers, at a time when many were at risk of closing, was work I cared about."],
  videos: [
    {
      src: 'https://www.youtube-nocookie.com/embed/ig7eN5xzPos',
      title: 'Grubhub Direct video',
    },
  ],
};

interface Props {
  onBack: () => void;
  onNavigate?: (caseStudyId: string) => void;
}

export const GrubhubDirect: React.FC<Props> = ({ onNavigate }) => (
  <CaseStudyTemplate data={data} onNavigate={onNavigate} />
);
