'use client';
import Image from 'next/image';
import './contact.css';
import { ContactForm } from '@/components/contactForm/contactForm';
import contactImage from '@/assets/contactImage.webp';
import MainTitle from '@/components/mainTitle/mainTitle';
import { useEffect, useState } from 'react';
import CrossDecoratorHover from '@/components/decorators/crossDecoratorHover';

export function Contact() {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) setIsPortrait(true);
    else setIsPortrait(false);
  }, []);

  return (
    <section className="contactSection" id={isPortrait ? undefined : 'contact'}>
      <div className="crossDecorator">
        <CrossDecoratorHover />
      </div>
      <div className="divContainerContact" >
        <Image src={contactImage} alt="Contact image" className="imageContact" />
        <div className='divContainerTitleContactUs' id={isPortrait ? 'contact' : undefined}>
          <MainTitle title="contact us" />
        </div>
        <p className="contactText">
          Welcome to CABSA. We are here to assist you with all your financial
          needs. Please complete the form below, and a member of our team will
          get in touch with you shortly.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
