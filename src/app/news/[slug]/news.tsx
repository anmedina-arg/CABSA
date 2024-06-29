'use client';

import PDFObject from 'pdfobject';
import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import './news.css';
export function News({ id, className }: { id: string; className?: string }) {
  const pathname = usePathname().replace('/news', '');
  const articleRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
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
    <article
      className={`${className ? className : ''}`}
      ref={articleRef}
      id={id}
    ></article>
  );
}
