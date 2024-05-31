'use client';
import {
  NEXT_PUBLIC_APIKEY_EMAILJS,
  NEXT_PUBLIC_SERVICE_ID_EMAILJS,
  NEXT_PUBLIC_TEMPLATE_ID_EMAILJS,
} from '@/utils/config';
import './contactForm.css';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const [click, setClick] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const refForm = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    emailjs
      .sendForm(
        NEXT_PUBLIC_SERVICE_ID_EMAILJS,
        NEXT_PUBLIC_TEMPLATE_ID_EMAILJS,
        refForm.current || '',
        {
          publicKey: NEXT_PUBLIC_APIKEY_EMAILJS,
        }
      )
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
        id='contact'
        ref={refForm}
        action=""
        onSubmit={handleSubmit}
        className="formStyles"
      >
        <div className="divNameForm">
          <fieldset className="fieldsetStyles marginRight">
            <label htmlFor="" className="labelStyles">
              First name*
            </label>
            <input
              name="firstName"
              type="text"
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
              onFocus={event => scrollToElement(event.target)}
              placeholder="John"
              required
              className="inputStylesName"
            />
          </fieldset>
          <fieldset className="fieldsetStyles">
            <label htmlFor="" className="labelStyles">
              Last name*
            </label>
            <input
              name="lastName"
              type="text"
              value={lastName}
              onChange={event => setLastName(event.target.value)}
              onFocus={event => scrollToElement(event.target)}
              placeholder="Smith"
              required
              className="inputStylesName"
            />
          </fieldset>
        </div>
        <fieldset className="fieldsetStyles">
          <label htmlFor="" className="labelStyles">
            Phone number*
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={phone}
            onChange={event => setPhone(event.target.value)}
            onFocus={event => scrollToElement(event.target)}
            placeholder="+1 (000) 000 00 00"
            required
            className="inputStyles"
          />
        </fieldset>
        <fieldset className="fieldsetStyles">
          <label htmlFor="" className="labelStyles">
            Email*
          </label>
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
        </fieldset>
        <fieldset className="fieldsetStyles">
          <label htmlFor="" className="labelStyles">
            Message
          </label>
          <textarea
            name="message"
            className="textAreaMessage"
            value={message}
            onChange={event => setMessage(event.target.value)}
            onFocus={event => scrollToElement(event.target)}
            placeholder="Write here your message..."
          ></textarea>
        </fieldset>
        <button className={'btnStyles'}>Submit</button>
      </form>
    </>
  );
}
