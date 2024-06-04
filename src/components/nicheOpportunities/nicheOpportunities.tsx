import Image from 'next/image';
import { Card } from '../cards/cards';
import './nicheOpportunities.css';
import { nicheCards } from '@/utils/CardsValues';

export function NicheOpportunities() {
  const width = '45rem';
  const height = '20rem';

  return (
    <div className="divContainerNiche">
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
            <Image src={card.icon || ''} alt="icon" className='logo'/>
          </Card>
        );
      })}
    </div>
  );
}
