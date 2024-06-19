'use client';
import Image from 'next/image';
import { Card } from '../cards/cards';
import './nicheOpportunities.css';
import { nicheCards } from '@/utils/CardsValues';
import { useEffect, useState } from 'react';
import { orientation } from '@/utils/setOrientation';

export function NicheOpportunities() {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [key, setKey] = useState(0);

  useEffect(() => {
    orientation(
      setWidth,
      setHeight,
      setKey,
      '16rem',
      '45rem',
      '32rem',
      '16rem',
      '18rem'
    );
    if ('orientation' in screen) {
      window.screen.orientation.addEventListener('change', () =>
        orientation(
          setWidth,
          setHeight,
          setKey,
          '16rem',
          '45rem',
          '32rem',
          '16rem',
          '18rem'
        )
      );
      return () => {
        window.screen.orientation.removeEventListener('change', () =>
          orientation(
            setWidth,
            setHeight,
            setKey,
            '16rem',
            '45rem',
            '32rem',
            '16rem',
            '18rem'
          )
        );
      };
    }
    window.addEventListener('resize', () =>
      orientation(
        setWidth,
        setHeight,
        setKey,
        '16rem',
        '45rem',
        '32rem',
        '16rem',
        '18rem'
      )
    );
    return () => {
      window.removeEventListener('resize', () =>
        orientation(
          setWidth,
          setHeight,
          setKey,
          '16rem',
          '45rem',
          '32rem',
          '16rem',
          '18rem'
        )
      );
    };
  }, []);

  return (
    <div className="divContainerNiche" key={key}>
      {nicheCards.map((card, key) => {
        return (
          <Card
            key={key}
            title={card.title}
            width={width}
            height={height}
            flexDirection={card.flexDirection}
            turnCard={card.turnCard}
            paragraph={card.paragraph}
          >
            <Image src={card.icon || ''} alt="icon" className="logo" />
          </Card>
        );
      })}
    </div>
  );
}
