import { StaticImageData } from 'next/image';
import blogImage from '@/assets/nba.webp';
import city from '@/assets/cityImage.webp';

interface FormatNews {
  id: string;
  img: StaticImageData;
  title: string;
  slug: string;
  description: string;
}

export const LatestNews: FormatNews[] = [
  {
    id: '5931a932-2be4-46d4-87b4-b687e84c93aa',
    img: blogImage,
    title: 'CABSA SPORTS VIEW',
    slug: 'CABSA_SPORTS_TESIS',
    description: 'The global sport s and entertainment indus try has experienced significant and consistent growth in the recent period.'
  }
];

