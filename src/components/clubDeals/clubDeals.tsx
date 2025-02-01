import Image from 'next/image';
import './clubDeals.css';
import americaMaps from '@/assets/americaModernMap.webp';
import Link from 'next/link';

export function ClubDeals() {
  return (
    <div className="divContainerClubDeals">
      <p className="clubDealsText">
        We provide <strong>exclusive</strong> investment <strong>opportunities</strong> and co-investments, spanning sectors such as U.S. football clubs, agribusiness, and food industries across the Americas.
      </p>
      <Link href={'#contact'} className="buttonLinkClubDeals">
        Learn more
      </Link>
      <Image src={americaMaps} alt="Player image" className="americaImage" />
    </div>
  );
}
