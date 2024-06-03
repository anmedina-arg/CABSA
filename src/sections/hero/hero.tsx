import Link from 'next/link';
import SectionLayout from '@/components/sectionLayout/sectionLayout';
import { acuminFont } from '@/utils/fonts';
import './hero.css';
export function Hero() {
  return (
    <SectionLayout id="hero">
      <>
        <section id="hero" className="heroSection">
          <video
            autoPlay
            loop
            src="/videos/VIDEO_WEB_MAIN_HERO.webm"
            muted
            className="heroBackground"
          ></video>
          <div className="heroContainer">
            <div className="heroTitleContainer">
              <h1 className="heroTitle">
                We offer <strong>empathetic</strong>,{' '}
                <strong>personalized</strong> and <strong>impactful</strong>{' '}
                financial solutions
              </h1>
              <h2 className={`heroSubTitle ${acuminFont.variable}`}>
                Beyond financial innovation
              </h2>
            </div>
            <div className="heroButtonContainer">
              <button className="heroButton">
                <Link href={'#contact'}>Contact us</Link>{' '}
              </button>
            </div>
          </div>
        </section>
        <div className="heroSeparator"></div>
      </>
    </SectionLayout>
  );
}
