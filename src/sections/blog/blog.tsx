'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ElementRef, ReactNode, useEffect, useRef, useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';
import './blog.css';

type BlogCard = {
  img: string;
  title: string;
  href: string;
};

export function Blog(): ReactNode {
  const [showArrows, setShowArrows] = useState(false);
  const carrouselRef = useRef<ElementRef<'div'> | null>(null);
  const [newsEntries, setNewsEntries] = useState<BlogCard[]>([
    {
      img: 'https://picsum.photos/seed/computer/250/250.webp',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure',
      href: '/',
    },
    {
      img: 'https://picsum.photos/seed/computer/250/250.webp',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure',
      href: '/',
    },
    {
      img: 'https://picsum.photos/seed/computer/250/250.webp',
      title: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. iure',
      href: '/',
    },
    {
      img: 'https://picsum.photos/seed/computer/250/250.webp',
      title: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. iure',
      href: '/',
    },
  ]);

  function checkWidthchange(carrousel: HTMLDivElement | null) {
    if (carrousel!.scrollWidth > carrousel!.clientWidth) {
      setShowArrows(true);
    } else {
      setShowArrows(false);
    }
  }

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (entry.target instanceof Element) {
          checkWidthchange(entry.target as HTMLDivElement);
        }
      }
    });
    const carrousel = carrouselRef.current;
    resizeObserver.observe(carrousel as Element);
    return () => {
      resizeObserver.unobserve(carrousel as Element);
    };
  }, []);
  return (
    <section id="blog" className="blogSection">
      <h2 className="blogTitle">Latest News</h2>
      <div ref={carrouselRef} className="blogCarrousel">
        {showArrows && <FaAngleLeft className="arrow" />}
        {newsEntries.map((entrie: BlogCard) => {
          return (
            <BlogCard
              key={entrie.title}
              title={entrie.title}
              img={entrie.img}
              href={entrie.href}
            />
          );
        })}
        {showArrows && <FaAngleRight className="arrow" />}
      </div>
    </section>
  );
}

export function BlogCard(props: BlogCard): ReactNode {
  return (
    <article className="blogCard">
      <div className="blogImageContainer">
        <Image src={props.img} alt="blog image" width={300} height={250} />
      </div>
      <div className="blogInfoContainer">
        <h3>{props.title}</h3>
        <Link href={props.href}>
          Read More <GoArrowUpRight />
        </Link>
      </div>
    </article>
  );
}
