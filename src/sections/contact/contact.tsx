import Image from 'next/image';
import './contact.css';
import { ContactForm } from '@/components/contactForm/contactForm';
import contactImage from '@/assets/contactImage.webp';

export function Contact() {
  return (
    <section className="contactSection">
      <Image src={contactImage} alt="Contact image" className="imageContact" />
      <div className="divContainerContact" id='contact'>
        <header>
          <h3 className="contactTitle">Contact Us</h3>
        </header>
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
