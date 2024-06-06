'use client';
import Image from 'next/image';
import { Card } from '../cards/cards';
import './structuredNotes.css';
import { structuredNotesCards } from '@/utils/CardsValues';
import { useEffect, useState } from 'react';
import { orientation } from '@/utils/setOrientation';

export function StructuredNotes() {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [key, setKey] = useState(0);

  useEffect(() => {
    orientation(setWidth, setHeight, setKey, '15rem', '34rem', '10rem', '18rem');
    window.screen.orientation.addEventListener('change', () => orientation(setWidth, setHeight, setKey, '15rem', '34rem', '10rem', '18rem'));
    return () => {
      window.screen.orientation.removeEventListener(
        'change',
        () => orientation(setWidth, setHeight, setKey, '15rem', '34rem', '10rem', '18rem')
      );
    };
  }, []);

  return (
    <div className="divContainerCards" key={key}>
      {structuredNotesCards.map((card, key) => {
        return (
          <Card
            key={key}
            title={card.title}
            width={width}
            height={height}
            flexDirection={card.flexDirection}
            turnCard={card.turnCard}
          >
            <Image src={card.icon || ''} alt="icon" className='logo'/>
          </Card>
        );
      })}
    </div>
  );
}
