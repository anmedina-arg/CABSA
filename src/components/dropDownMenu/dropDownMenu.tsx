'use client';
import { ReactElement, useState } from 'react';
import './dropDownMenu.css';
import Link from 'next/link';

type DropDownMenuProps = {
	children: any,
	title: string,
	open?: boolean,
  linkButton?: boolean
}

function DropDownMenu({ children, title, open = false, linkButton }: DropDownMenuProps) {
  const [isOpen, setIsOpen] = useState(open);

  function handleDropDown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='dropDownContainer'>
      <div className='headerDropDown'>
        <IconDD/>
        <span className='spanTitles' onClick={handleDropDown}>{title}</span>
      </div>
      <div className={isOpen ? 'showMenu' : 'hiddenMenu' }>
        {children}
        { linkButton ? 
          <Link href={'#contact'} className='buttonLink'>Learn more</Link> :
          undefined
        }
      </div>
    </div>
  );
}

export default DropDownMenu;

export const IconDD = () => {
  return <span className='iconDD'></span>;
};
