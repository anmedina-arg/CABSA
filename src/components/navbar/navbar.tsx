import './navbar.css';
import mainLogo from '../../assets/main-logo.png';
import Image from 'next/image';
import Link from 'next/link';
import Anchor from '../anchor/anchor';

type NavbarProps = {
	items: string[]
}

export function Navbar({ items }:NavbarProps) {
  return(
    <nav className='navbarContainer'>
      <Link href={'/'} className='link'>
        <Image src={mainLogo} alt='logo CABSA' className='image'/>
      </Link>
      <div className='itemsNavbarContainer'>
        {items?.map((item, index) => <Anchor key={item} label={item} to='/'/>)}
      </div>
    </nav>
  );
}

export const itemsNavbar = ['about us','our services','news','contact us'];