'use client';

import PDFObject from 'pdfobject';
import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';
import './news.css';


export function News({ id, className }: { id: string; className?: string }) {
  const pathname = usePathname().replace('/news', '');
  const articleRef = useRef<HTMLElement | null>(null);
  const [ isModal, setIsModal ] = useState(false);
  const router = useRouter();

  function onDismiss() {
    router.back();
  }

  useEffect(() => {
    if (document.getElementById('backToBlog')?.parentElement?.id === 'modal') setIsModal(true);
    else setIsModal(false);

    const article = articleRef?.current;
    const options = {
      fallbackLink: `
        <div class="pdfobject-fallback-container">
          <h3>Ups!</h3>
          <p>
            It seems your browser doesn&apos;t support PDF. Please download the file
            in order to read the <a href='[url]' download>${pathname.replace('/', '').replace(/_/g, ' ').replace('.pdf', '')} </a> article
          </p>
        </div>
    `,
    };
    PDFObject.embed(`${pathname}`, article, options);

    

  }, []);
  return (
    <>
      { isModal ? undefined :
        <button onClick={onDismiss} className="backToBlog" id="backToBlog">
          <IoIosArrowBack />
          Back
        </button>
      }
      <article
        className={`${className ? className : ''}`}
        ref={articleRef}
        id={id}
      ></article>
    </>
  );
}
