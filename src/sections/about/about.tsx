import Image from 'next/image';
import cityImage from '../../assets/cityImage.webp';
import tabletImage from '../../assets/tabletImage.webp';
import workerImage from '../../assets/workerImage.webp';
import './about.css';

export function About() {
  return (
    <section id='about' className='sectionAbout'>
      <div className='divContainer'>
        <div className='divText'>
          <header>
            <h2 className='aboutTitle'>
              ABOUT US
            </h2>
          </header>
          <div>
            <p className='aboutText'>
              We <span>go beyond</span> conventional financial services, delivering personalized  solutions crafted with <span>empathy</span> and <span>innovation</span>.
            </p>
            <p className='aboutText'>
              Our commitment  lies in understanding the <span>unique needs</span> of each client and transforming market insights into <span>tailored products</span> that drive sustained growth.
            </p>
          </div>
        </div>
        <div className='divImages'>
          <Image src={workerImage} alt="About image" className='imagesAbout'/>
          <Image src={tabletImage} alt="About image" className='imagesAbout'/>
          <Image src={cityImage} alt="About image" className='imagesAbout'/>
        </div>
      </div>
    </section>
  );
}