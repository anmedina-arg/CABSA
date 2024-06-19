'use client';

import PDFObject from 'pdfobject';
import { useEffect, useRef } from 'react';

export function News({ id }: { id: string }) {
  const articleRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const article = articleRef?.current;
    PDFObject.embed('/CABSA_SPORTS_TESIS.pdf', article);
  }, []);
  return <article className="newsPage" ref={articleRef} id={id}></article>;
}
