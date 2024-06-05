import Link from 'next/link';
import './anchor.css';

type AnchorProps = {
  label: string;
  to: string;
  setShow?: any;
};

function Anchor({ label, to }: AnchorProps) {
  return (
    <Link href={to} className="anchor link">
      {label}
    </Link>
  );
}

export default Anchor;
