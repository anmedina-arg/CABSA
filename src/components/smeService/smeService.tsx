import { smeCards } from '@/utils/CardsValues';
import './smeService.css';
import { Card } from '../cards/cards';

export function SmeService() {
  const width = '45rem';
  const height = '20rem';

  return(
    <div className='divContainerSme'>
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