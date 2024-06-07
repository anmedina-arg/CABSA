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
      <div className="footerContainer">
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
      </div>
      <hr />
      <div className='divDisclaimer'>
        <p className='disclaimer'>This site is published by CABSA International. The purpose of this site is to provide general information to its recipient and does not, in any way, constitute an offer, invitation, or recommendation for the purchase or sale of securities and/or financial instruments that may be mentioned here. This site should not be construed as a prospectus or a public offer. It is not intended for U.S. residents or citizens. While the information contained in this report has been obtained from sources deemed reliable, such information may be incomplete or partial, and the information contained in this site has not been independently verified, nor does it guarantee the accuracy of the information or that adverse changes have not occurred in the issuer&apos;s situation described in this report. CABSA International assumes no responsibility, explicit or implied, regarding the truthfulness or sufficiency of the information for making investment decisions. All opinions or estimates expressed are subject to intrinsic and extrinsic market variations. Nothing on this site is intended to provide tax, legal or investment advice.</p>
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