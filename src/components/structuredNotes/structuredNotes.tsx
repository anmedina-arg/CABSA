import Image from 'next/image';
import { Card } from '../cards/cards';
import './structuredNotes.css';
import compass from '@/assets/guidance.webp';
import access from '@/assets/access.webp';
import marketIntelligence from '@/assets/marketIntelligence.webp';
import customizedProducts from '@/assets/customizedProducts.webp';
import brandBoost from '@/assets/brandBoost.webp';
import Link from 'next/link';

export function StructuredNotes() {
  const width = '34rem';
  const height = '22rem';
  const column = 'column';

  return (
    <div className='divContainerStructuredNotes'>
      <div className='divContainerCards'>
        <Card 
          title='GUIDANCE' 
          width={width} 
          height={height} 
          flexDirection = {column}
          turnCard = {false}
        >
          <Image src={compass} alt='icon'/>
        </Card>
        <Card 
          title='ACCESS' 
          width={width} 
          height={height} 
          flexDirection = {column}
          turnCard = {false}
        >
          <Image src={access} alt='icon' />
        </Card>
        <Card 
          title='MARKET INTELLIGENCE' 
          width={width} 
          height={height} 
          flexDirection = {column}
          turnCard = {false}
        >
          <Image src={marketIntelligence} alt='icon'/>
        </Card>
        <Card 
          title='CUSTOMIZED PRODUCTS' 
          width={width} 
          height={height} 
          flexDirection = {column}
          turnCard = {false}
        >
          <Image src={customizedProducts} alt='icon' />
        </Card>
        <Card 
          title='BRAND BOOST' 
          width={width} 
          height={height} 
          flexDirection = {column}
          turnCard = {false}
        >
          <Image src={brandBoost} alt='icon' />
        </Card>
      </div>
      <Link href={'#contact'} className='buttonLink'>Learn more</Link>
    </div>
  );
};