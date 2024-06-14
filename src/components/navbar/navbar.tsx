'use client';
import './navbar.css';

import Anchor from '../anchor/anchor';
import CABSAMainLogo from '../CABSAMainLogo/cabsaMainLogo';
import NavBarMobile from './navbar-mobile';
import { useState } from 'react';
import { useScrollSpy } from '@/hooks/useScrolSpy';

type NavbarProps = {
  items: itemsNavbarProps[],
}

export function Navbar({ items }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useScrollSpy(items);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbarContainer'>
      <div className="logoWeb">
        <CABSAMainLogo />
      </div>
      <div className='logoMobolie'>
        <CABSAMainLogo little />
      </div>
      <button className="navbarToggle" onClick={toggleMenu}>
        <NavBarMobile itemsNavbar={items} />
      </button>
      <div className='itemsNavbarContainer'>
        {items?.map(({ title, path }: itemsNavbarProps) => (
          <Anchor
            key={title}
            label={title}
            to={path}
            className={activeSection === path.substring(1) ? 'active' : ''}
          />
        ))}
      </div>
    </nav>
  );
}

export type itemsNavbarProps = {
  title: string,
  path: string
}

export const itemsNavbar: itemsNavbarProps[] = [
  {
    title: 'about us',
    path: '#about'
  },
  {
    title: 'our services',
    path: '#services'
  },
  // {
  //   title: 'news',
  //   path: '#news'
  // },
  {
    title: 'contact us',
    path: '#contact'
  }];