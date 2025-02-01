'use client';
import Image from 'next/image';
import { Card } from '../cards/cards';
import './structuredNotes.css';
import { useEffect, useState } from 'react';
import { orientation } from '@/utils/setOrientation';

type StructuredNotesProps = {
  input: any
}

export function StructuredNotes({ input }: StructuredNotesProps) {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [key, setKey] = useState(0);

  useEffect(() => {
    orientation(
      setWidth,
      setHeight,
      setKey,
      '15rem',
      '34rem',
      '25rem',
      '10rem',
      '18rem'
    );
    if ('orientation' in screen) {
      window.screen.orientation.addEventListener('change', () =>
        orientation(
          setWidth,
          setHeight,
          setKey,
          '15rem',
          '34rem',
          '25rem',
          '10rem',
          '18rem'
        )
      );
      return () => {
        window.screen.orientation.removeEventListener('change', () =>
          orientation(
            setWidth,
            setHeight,
            setKey,
            '15rem',
            '34rem',
            '25rem',
            '10rem',
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
        '15rem',
        '34rem',
        '25rem',
        '10rem',
        '18rem'
      )
    );
    return () => {
      window.removeEventListener('resize', () =>
        orientation(
          setWidth,
          setHeight,
          setKey,
          '15rem',
          '34rem',
          '25rem',
          '10rem',
          '18rem'
        )
      );
    };
  }, []);

  return (
    <div className="divContainerCards" key={key}>
      {input.map((card: any, key: any) => {
        return (
          <Card
            key={key}
            title={card.title}
            width={width}
            height={height}
            flexDirection={card.flexDirection}
            turnCard={card.turnCard}
          >
            <Image src={card.icon || ''} alt="icon" className="logo" />
          </Card>
        );
      })}
    </div>
  );
}
