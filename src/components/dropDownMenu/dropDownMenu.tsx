import './dropDownMenu.css';
import Link from 'next/link';
import { SlArrowDown } from 'react-icons/sl';

type DropDownMenuProps = {
  children: any;
  title: string;
  open?: boolean;
  linkButton?: boolean;
  name?: string;
  handleDropDown?: any;
};

function DropDownMenu({
  children,
  title,
  open,
  linkButton,
  name,
  handleDropDown,
}: DropDownMenuProps) {
  return (
    <div className="dropDownContainer">
      <div className="headerDropDown">
        <IconDD />
        <div className="divTitleArrow" onClick={handleDropDown}>
          <span className="spanTitles" id={name}>
            {title}
          </span>
          <SlArrowDown
            className={`arrow ${open ? 'arrowD' : 'arrowR'}`}
            id={name}
          />
        </div>
      </div>
      <div className={open ? 'showMenu' : 'hiddenMenu'}>
        {children}
        {linkButton ? (
          <Link href={'#contact'} className="buttonLink">
            Learn more
          </Link>
        ) : undefined}
      </div>
    </div>
  );
}

export default DropDownMenu;

export const IconDD = () => {
  return <span className="iconDD"></span>;
};
