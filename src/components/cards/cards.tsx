import './cards.css';

type Card = {
  children: any; //pasar logo o titulo en rosa
  title: string; //pasar titulo en blanco
  width: string; //pasar el width que se le quiere dar
  height: string; //igual que height
  flexDirection: 'column' | 'column-reverse'; //el column-reverse invierte el titulo en rosa
  turnCard: boolean; //si se pasa en true es porque en el hover la card se da vuelta
  paragraph?: string; //pasar el texto que va detras de la card
};

export function Card({
  children,
  title,
  width,
  height,
  flexDirection,
  turnCard,
  paragraph,
}: Card) {
  return (
    <div
      className={turnCard ? 'turnCard' : 'divContainerCard'}
      style={{ width: width, height: height, flexDirection: flexDirection }}
    >
      <div className={turnCard ? 'front' : 'divContainerIcon'}>
        {children}
        <h5
          className={`titleStyles ${flexDirection === 'column' ? 'normal' : 'reverse'}`}
        >
          {title}
        </h5>
      </div>
      {turnCard ? (
        <div className="back">
          <p>{paragraph}</p>
        </div>
      ) : undefined}
    </div>
  );
}
