import Link from 'next/link';
import './anchor.css';

type AnchorProps = {
  label: string;
  to: string;
  setShow?: any;
  className?: string
};

function Anchor({ label, to, className }: AnchorProps) {
  return (
    <Link href={to} className={`anchor link ${className}`}>
      {label}
    </Link>
  );
}

export default Anchor;
