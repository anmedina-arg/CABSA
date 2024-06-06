import Image from 'next/image';
import './clubDeals.css';
import player from '@/assets/Player.webp';
import Link from 'next/link';

export function ClubDeals() {
  return (
    <div className="divContainerClubDeals">
      <p className="clubDealsText">
        We provide an exclusive service that allows you to acquire ownership
        stakes in elite sports teams from the world’s top leagues, along with
        the business opportunities that come with them.
      </p>
      <Link href={'#contact'} className="buttonLinkClubDeals">
        Learn more
      </Link>
      <Image src={player} alt="Player image" className="playerImage" />
    </div>
  );
}
