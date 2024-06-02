import Image from 'next/image';
import backgroundImg from '../../assets/HeroBackground.webp';
import './hero.css';
import SectionLayout from '@/components/sectionLayout/sectionLayout';

export function Hero() {
  return (
    <SectionLayout id="hero">
      <section id="hero" className="heroSection">
        <Image
          src={backgroundImg}
          alt="background image"
          className="heroBackground"
          fill={true}
        />
        <div className="heroContainer">
          <div className="heroTitleContainer">
            <h1 className="heroTitle">
              We offer <strong>empathetic</strong>,{' '}
              <strong>personalized</strong> and <strong>impactful</strong>{' '}
              financial solutions
            </h1>
            <h2 className="heroSubTitle">Beyond financial innovation</h2>
          </div>
          <div className="heroButtonContainer">
            <button className="heroButton">Contact us</button>
          </div>
        </div>
      </section>
      <div className="heroSeparator"></div>
    </SectionLayout>
  );
}
