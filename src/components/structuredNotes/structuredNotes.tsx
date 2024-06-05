import Image from 'next/image';
import { Card } from '../cards/cards';
import './structuredNotes.css';
import { structuredNotesCards } from '@/utils/CardsValues';

export function StructuredNotes() {
  const width = '34rem';
  const height = '18rem';

  return (
    <div className="divContainerCards">
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
