import './footer.css';
import facebookIcon from '../../assets/icons/facebook.png';
import instagramIcon from '../../assets/icons/instagram.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import mainLogo from '../../assets/main-logo.png';
import Image from 'next/image';
import { NEXT_PUBLIC_FACEBOOK, NEXT_PUBLIC_INSTAGRAM, NEXT_PUBLIC_LINKEDIN } from '@/utils/config';
import Link from 'next/link';
import CABSAMainLogo from '../CABSAMainLogo/cabsaMainLogo';

type FooterProps = {
  footerItems: FooterLinkProps[]
}

export function Footer({ footerItems }: FooterProps) {
  
  return(
    <footer>
      <div className="footerLeft">
        <CABSAMainLogo/>
        <div className="socials">
          <Link href={NEXT_PUBLIC_FACEBOOK} target='_blank'>
            <Image src={ facebookIcon } alt='facebook icon'/>
          </Link>
          <Link href={NEXT_PUBLIC_INSTAGRAM} target='_blank'>
            <Image src={ instagramIcon } alt='instagram icon'/>
          </Link>
          <Link href={NEXT_PUBLIC_LINKEDIN} target='_blank'>
            <Image src={ linkedinIcon } alt='linkedin icon'/>
          </Link>
        </div>
      </div>
      <div className="footerRight">
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
    label: 'site map',
    pathTo: ''
  },
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