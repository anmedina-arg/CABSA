import './navbar.css';

import Anchor from '../anchor/anchor';
import CABSAMainLogo from '../CABSAMainLogo/cabsaMainLogo';


type NavbarProps = {
  items: itemsNavbarProps[],
}

export function Navbar({ items }:NavbarProps) {
  return(
    <nav className='navbarContainer'>
      <CABSAMainLogo/>
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