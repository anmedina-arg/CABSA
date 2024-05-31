import './navbar.css';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Anchor from '../anchor/anchor';

type NavbarProps = {
  items: itemsNavbarProps[],
  logo: StaticImageData
}

export function Navbar({ items, logo }:NavbarProps) {
  return(
    <nav className='navbarContainer'>
      <Link href={'/'} className='link'>
        <Image src={logo} alt='logo CABSA' className='image'/>
      </Link>
      <div className='itemsNavbarContainer'>
        {items?.map(({ title, path }:itemsNavbarProps) => <Anchor key={title} label={title} to={path}/>)}
      </div>
    </nav>
  );
}

type itemsNavbarProps = {
  title: string,
  path: string
}

export const itemsNavbar: itemsNavbarProps[] = [
  {
    title: 'about us',
    path: '/about'
  },
  {
    title: 'our services',
    path: '/services'
  },
  {
    title: 'news',
    path: '/news'
  },
  {
    title: 'contact us',
    path: 'contact'
  }];