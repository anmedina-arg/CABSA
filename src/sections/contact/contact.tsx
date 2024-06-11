import Image from 'next/image';
import './contact.css';
import { ContactForm } from '@/components/contactForm/contactForm';
import contactImage from '@/assets/contactImage.webp';
import MainTitle from '@/components/mainTitle/mainTitle';

export function Contact() {
  return (
    <section className="contactSection" id='contact'>
      <div className="divContainerContact" >
        <Image src={contactImage} alt="Contact image" className="imageContact" />
        <div className='divContainerTitleContactUs'>
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
