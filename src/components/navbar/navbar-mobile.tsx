import Anchor from '../anchor/anchor';
import BurguerIcon from '../icons/burguer-icon';
import CloseIcon from '../icons/close-icon';
import './navbar.css';
import { useState } from 'react';
import { itemsNavbarProps } from './navbar';

type NavBarMobileProps = {
  itemsNavbar: itemsNavbarProps[]
};

function NavBarMobile({ itemsNavbar }: NavBarMobileProps) {
  const [show, setShow] = useState(false);

  function toogleMenu() {
    setShow(!show);
  }
  return (
    <div onClick={() => setShow(!show)}>
      <div onClick={toogleMenu}>
        {show ? <CloseIcon /> : <BurguerIcon />}
      </div>
      {show &&
        <div className="itemsBurguerMenu">
          {
            itemsNavbar.map(({ title, path }) => <Anchor key={title} to={path} label={title} setShow={setShow} />)
          }
        </div>
      }
    </div>
  );
}

export default NavBarMobile;