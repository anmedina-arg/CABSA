import Link from 'next/link';
import './anchor.css';

type AnchorProps = {
	label: string,
	to: string,
}

function Anchor({ label, to }:AnchorProps) {

  return (
    <li className='anchor'>
      <Link href={to} className='link'>{label}</Link>
    </li>
  );
}

export default Anchor;