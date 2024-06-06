'use client';
import { ReactElement, useState } from 'react';
import './dropDownMenu.css';
import Link from 'next/link';
import { SlArrowRight } from 'react-icons/sl';
import { SlArrowDown } from 'react-icons/sl';

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
        <div className='divTitleArrow' onClick={handleDropDown}>
          <span className='spanTitles' >
            {title}
          </span>
          <SlArrowDown className={`arrow ${ isOpen ? 'arrowD' : 'arrowR'}`}/>
        </div>
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
