import Link from 'next/link';
import VideoBackground from '@/components/videoBackground/videoBackground';
import { acuminFont } from '@/utils/fonts';
import './hero.css';
export function Hero() {
  return (
    <section id="hero" className="heroSection">
      <VideoBackground />
      <div className="heroContainer">
        <div className="heroTitleContainer">
          <h1 className="heroTitle">
            We offer <strong>empathetic</strong>, <strong>personalized</strong>{' '}
            and <strong>impactful</strong> financial solutions
          </h1>
          <h2 className={`heroSubTitle ${acuminFont.variable}`}>
            Beyond financial innovation
          </h2>
        </div>
        <div className="heroButtonContainer">
          <Link href={'#contact'}>
            <button className="heroButton">Contact Us</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
