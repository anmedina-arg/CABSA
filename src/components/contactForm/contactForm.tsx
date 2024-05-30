import {
  APIKEY_EMAILJS,
  SERVICE_ID_EMAILJS,
  TEMPLATE_ID_EMAILJS,
} from '@/utils/config';
import './contactForm.css';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const [click, setClick] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const refForm = useRef();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const serviceId: string = SERVICE_ID_EMAILJS;
    const templateId: string = TEMPLATE_ID_EMAILJS;
    const apikey: string = APIKEY_EMAILJS;

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apikey)
      .then((result: any) => {
        if (result.status === 200) {
          setClick(true);
          setTimeout(() => {
            setClick(false);
          }, 4000);

          setEmail('');
          setFirstName('');
          setLastName('');
          setMessage('');
          setPhone('');
        }
      })
      .catch((error: string) => console.error(error));
  };

  function scrollToElement(element: any) {
    if (window.innerWidth <= 991) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  }

  return (
    <>
      {click ? (
        <div className="messageSent">
          <p className="pSentMessage">Message sent</p>
        </div>
      ) : undefined}
      <form
        ref={refForm}
        action=""
        onSubmit={handleSubmit}
        className="formStyles"
      >
        <div className="divNameForm">
          <input
            name="first-name"
            type="text"
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
            onFocus={event => scrollToElement(event.target)}
            placeholder="John"
            required
            className="inputStylesName marginRight"
          />
          <input
            name="last-name"
            type="text"
            value={lastName}
            onChange={event => setLastName(event.target.value)}
            onFocus={event => scrollToElement(event.target)}
            placeholder="Smith"
            required
            className="inputStylesName"
          />
        </div>
        <input
          type="text"
          name="phone-number"
          value={phone}
          onChange={event => setPhone(event.target.value)}
          onFocus={event => scrollToElement(event.target)}
          placeholder="+1 (000) 000 00 00"
          required
          className="inputStyles"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          onFocus={event => scrollToElement(event.target)}
          placeholder="example@example.com"
          required
          className="inputStyles"
        />
        <textarea
          name="message"
          className="textAreaMessage"
          value={message}
          onChange={event => setMessage(event.target.value)}
          onFocus={event => scrollToElement(event.target)}
          placeholder="Write here your message..."
        ></textarea>
        <button className={'btnStyles'}>Submit</button>
      </form>
    </>
  );
}
