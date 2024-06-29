'use client';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ReactNode, forwardRef, useEffect, useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';

export type NewsEntry = {
  id: string;
  img: StaticImageData;
  title: string;
  slug: string;
};

function BlogCard(props: NewsEntry, ref: React.Ref<HTMLDivElement>): ReactNode {
  const [isMobile, SetIsMobile] = useState(false);
  useEffect(() => {
    if ('maxTouchPoints' in window.navigator) {
      SetIsMobile(navigator.maxTouchPoints > 0);
    } else {
      const mQ = matchMedia?.('(pointer:coarse)');
      if (mQ?.media === '(pointer:coarse)') {
        SetIsMobile(!!mQ.matches);
      } else if ('orientation' in window) {
        SetIsMobile(true); // deprecated, but good fallback
      } else {
        // Only as a last resort, fall back to user agent sniffing
        const UA = navigator.userAgent;
        SetIsMobile(
          /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
        );
      }
    }
  }, []);
  return (
    <article ref={ref} id={`news-${props.id}`} className="blogCard">
      <div className="blogImageContainer">
        <Image src={props.img} alt="blog image" width={300} height={250} />
      </div>
      <div className="blogInfoContainer">
        <h3>{props.title}</h3>{' '}
        <Link
          href={`/news/${props.slug}.pdf`}
          passHref
          // target={isMobile ? '_blank' : '_self'}
        >
          Read More <GoArrowUpRight />
        </Link>
      </div>
    </article>
  );
}

export default forwardRef<HTMLDivElement, NewsEntry>(BlogCard);
