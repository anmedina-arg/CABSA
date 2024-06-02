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
      {/* <ul className={init ? 'hiden' : isOpen ? 'modalIn' : 'modalOut'}> */}
      <ul className={isOpen ? 'modalIn' : 'hiden' }>
        <li>{children}</li>
      </ul>
    </div>
  );
}

export default DropDownMenu;

export const IconDD = () => {
  return <span className='iconDD'></span>;
};
