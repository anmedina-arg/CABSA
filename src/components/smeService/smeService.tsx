'use client';
import { smeCards } from '@/utils/CardsValues';
import './smeService.css';
import { Card } from '../cards/cards';
import { useEffect, useState } from 'react';
import { orientation } from '@/utils/setOrientation';

export function SmeService() {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [key, setKey] = useState(0);

  useEffect(() => {
    orientation(setWidth, setHeight, setKey, '15rem', '45rem', '10rem', '18rem');
    window.screen.orientation.addEventListener('change', () => orientation(setWidth, setHeight, setKey, '15rem', '34rem', '10rem', '18rem'));
    return () => {
      window.screen.orientation.removeEventListener(
        'change',
        () => orientation(setWidth, setHeight, setKey, '15rem', '45rem', '10rem', '18rem')
      );
    };
  }, []);

  return(
    <div className='divContainerSme' key={key}>
      {
        smeCards.map((card, key) => {
          return(
            <Card
              key={key}
              title={card.title}
              width={width}
              height={height}
              flexDirection={card.flexDirection}
              turnCard={card.turnCard}
            >
              <h3 className='h3Styles'>{card.subtitle}</h3>
            </Card>
          );
        })
      }
    </div>
  );
}