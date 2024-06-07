import './cabsaMainLogo.css';
import CABSALogo from '../../assets/main-logo.webp';
import Link from 'next/link';
import Image from 'next/image';
import CABSAMainLogoVertical from '../../assets/mainLogoVertical.webp';
import CABSAIcon from '../../assets/CABSAIcon.webp';


type CABSAMainLogoProps = {
  little?: boolean,
  vertical?: boolean
}

const CABSAMainLogo = ({ little, vertical }: CABSAMainLogoProps) => {

  return (
    <Link href={'#hero'} className='linkNavbar'>
      {!little && !vertical && <Image src={CABSALogo} alt='logo CABSA' className='imageHor' />}
      {little && <Image src={CABSAIcon} alt='logo CABSA' className='image' />}
      {vertical && <Image src={CABSAMainLogoVertical} alt='logo CABSA' className='imageVertical' />}
    </Link>
  );
};

export default CABSAMainLogo;