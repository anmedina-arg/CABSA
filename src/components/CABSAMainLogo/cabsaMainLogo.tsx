import './cabsaMainLogo.css';
import CABSALogo from '../../assets/main-logo.png';
import Link from 'next/link';
import Image from 'next/image';

const CABSAMainLogo = () => {
  return (
    <Link href={'#hero'} className='linkNavbar'>
      <Image src={CABSALogo} alt='logo CABSA' className='image' />
    </Link>
  );
};

export default CABSAMainLogo;