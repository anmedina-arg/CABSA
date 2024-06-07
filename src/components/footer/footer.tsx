import './footer.css';
import Image from 'next/image';
import { NEXT_PUBLIC_FACEBOOK, NEXT_PUBLIC_INSTAGRAM, NEXT_PUBLIC_LINKEDIN } from '@/utils/config';
import Link from 'next/link';
import CABSAMainLogo from '../CABSAMainLogo/cabsaMainLogo';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

type FooterProps = {
  footerItems: FooterLinkProps[]
}

export function Footer({ footerItems }: FooterProps) {

  return (
    <footer>
      <div className="footerLeft">
        <CABSAMainLogo vertical />
        <div className="socials">
          {/* <Link href={NEXT_PUBLIC_FACEBOOK} target='_blank'>
            <BsFacebook className='logoRedes'/>
          </Link>
          <Link href={NEXT_PUBLIC_INSTAGRAM} target='_blank'>
            <BsInstagram className='logoRedes'/>
          </Link> */}
          <Link href='https://www.linkedin.com/company/cabsa-intl/' target='_blank'>
            <BsLinkedin className='logoRedes'/>
          </Link>
        </div>
      </div>
      <div className="footerRight">
        <h4 className='siteMap'>Site map</h4>
        {
          footerItems?.map(({ pathTo, label }: FooterLinkProps) => <FooterLink key={label} pathTo={pathTo} label={label} />)
        }
      </div>
    </footer>
  );
};

export default Footer;

type FooterLinkProps = {
  label: string
  pathTo: string,
}

export const FooterLink = ({ pathTo, label }: FooterLinkProps): JSX.Element => {
  return (
    <Link href={pathTo} className='footerItem'>{label}</Link>
  );
};

export const footerItems: FooterLinkProps[] = [
  {
    label: 'about us',
    pathTo: '#about'
  },
  {
    label: 'our service',
    pathTo: '#services'
  },
  {
    label: 'contact us',
    pathTo: '#contact'
  },
];