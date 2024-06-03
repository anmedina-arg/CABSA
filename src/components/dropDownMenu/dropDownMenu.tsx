'use client';
import { ReactElement, useState } from 'react';
import './dropDownMenu.css';

type DropDownMenuProps = {
	children: any,
	title: string,
	open?: boolean
}

function DropDownMenu({ children, title, open = false }: DropDownMenuProps) {
  const [isOpen, setIsOpen] = useState(open);

  function handleDropDown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='dropDownContainer' onClick={handleDropDown}>
      <div className='headerDropDown'>
        <IconDD/>
        <span className='spanTitles' >{title}</span>
      </div>
      <div className={isOpen ? 'showMenu' : 'hiddenMenu' }>
        {children}
      </div>
    </div>
  );
}

export default DropDownMenu;

export const IconDD = () => {
  return <span className='iconDD'></span>;
};
