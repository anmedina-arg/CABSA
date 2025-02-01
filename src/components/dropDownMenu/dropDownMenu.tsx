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
  shineTitle?: boolean;
};

function DropDownMenu({
  children,
  title,
  open,
  linkButton,
  name,
  handleDropDown,
  shineTitle
}: DropDownMenuProps) {
  return (
    <div className="dropDownContainer">
      <div className="headerDropDown">
        <IconDD />
        <div className='divHandleDropDown' onClick={handleDropDown}>
          <div className="divTitleArrow" id={name}>
            {
              shineTitle ?
                <span className="shineTitle" id={name}>
                  {title}
                </span>
                :
                <span className="spanTitles" id={name}>
                  {title}
                </span>

            }
            <SlArrowDown
              className={`arrow ${open ? 'arrowD' : 'arrowR'}`}
              id={name}
            />
          </div>
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
