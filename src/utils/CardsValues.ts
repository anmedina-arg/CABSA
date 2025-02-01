import preIpos from '@/assets/preIpos.webp';
import film from '@/assets/film.webp';
import sport from '@/assets/sport.webp';
import dunk from '@/assets/dunk.webp';
import compass from '@/assets/guidance.webp';
import access from '@/assets/access.webp';
import marketIntelligence from '@/assets/marketIntelligence.webp';
import customizedProducts from '@/assets/customizedProducts.webp';
import dataDriven from '@/assets/dataDrivenIcon.png';
import aproveIcon from '@/assets/approveIcon.png';
import benefitIcon from '@/assets/benefitIcon.png';
import briefcaseIcon from '@/assets/briefcaseIcon.png';
import investmentIcon from '@/assets/investmentIcon.png';
import { StaticImageData } from 'next/image';


interface Card {
  title: string;
  flexDirection: 'column' | 'column-reverse';
  turnCard: boolean;
  paragraph?: string;
  icon?: StaticImageData;
  subtitle?: string;
}

export const nicheCards: Card[] = [
  {
    title: 'PRE IPOS',
    flexDirection: 'column',
    turnCard: true,
    paragraph: 'Access to privately held companies with significant growth potential.',
    icon: preIpos
  },
  {
    title: 'DEBT FILM INDUSTRY',
    flexDirection: 'column',
    turnCard: true,
    paragraph: 'Loans to content production companies such as Netflix, Amazon, Apple, Disney, among others.',
    icon: film
  },
  {
    title: 'SPORT FINANCE',
    flexDirection: 'column',
    turnCard: true,
    paragraph: 'Loans to players in the top American sports leagues with an A-rating',
    icon: sport
  },
  {
    title: 'SLUM DUNK',
    flexDirection: 'column',
    turnCard: true,
    paragraph: 'Slam dunk is a fund that provides access to the future earnings of NBA players.',
    icon: dunk
  }
];

export const structuredNotesCards: Card[] = [
  {
    title: 'GUIDANCE',
    flexDirection: 'column',
    turnCard: false,
    icon: compass
  },
  {
    title: 'ACCESS',
    flexDirection: 'column',
    turnCard: false,
    icon: access
  },
  {
    title: 'MARKET INTELLIGENCE',
    flexDirection: 'column',
    turnCard: false,
    icon: marketIntelligence
  },
  {
    title: 'CUSTOMIZED PRODUCTS',
    flexDirection: 'column',
    turnCard: false,
    icon: customizedProducts
  },
  {
    title: 'DATA DRIVEN',
    flexDirection: 'column',
    turnCard: false,
    icon: dataDriven
  }
];

export const alternativeFoundCards: Card[] = [
  {
    title: 'PRIVATE',
    flexDirection: 'column',
    turnCard: false,
    icon: aproveIcon
  },
  {
    title: 'REAL STATE',
    flexDirection: 'column',
    turnCard: false,
    icon: investmentIcon
  },
  {
    title: 'PRIVATE EQUITY',
    flexDirection: 'column',
    turnCard: false,
    icon: briefcaseIcon
  },
  {
    title: 'INNOVATIVE NICHE OPPORTUNITY',
    flexDirection: 'column',
    turnCard: false,
    icon: benefitIcon
  },
];

export const smeCards: Card[] = [
  // {
  //   title: 'ESTIMATED RETURN',
  //   flexDirection: 'column',
  //   turnCard: false,
  //   subtitle: '10%'
  // },
  {
    title: 'TOTAL FINANCING',
    flexDirection: 'column',
    turnCard: false,
    subtitle: '5B'
  },
  // {
  //   title: 'LIQUIDITY IN',
  //   flexDirection: 'column-reverse',
  //   turnCard: false,
  //   subtitle: '90 DAYS'
  // },
  {
    title: 'ASSET BACKED',
    flexDirection: 'column-reverse',
    turnCard: false,
    subtitle: 'LOANS'
  }
];