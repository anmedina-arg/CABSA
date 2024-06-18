'use client';
import crypto from 'crypto';
import {
  ElementRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
  createRef,
} from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import './blog.css';
import BlogCard, { NewsEntry } from './BlogCard';

export function Blog(): ReactNode {
  const [showArrows, setShowArrows] = useState(false);
  const carrouselRef = useRef<ElementRef<'div'> | null>(null);
  const newsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [newsEntries, setNewsEntries] = useState<NewsEntry[]>([
    {
      id: crypto.randomBytes(16).toString('hex'),
      img: 'https://picsum.photos/seed/computer/250/250.webp',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure',
      href: '/',
    },
    {
      id: crypto.randomBytes(16).toString('hex'),
      img: 'https://picsum.photos/seed/computer/250/250.webp',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure',
      href: '/',
    },
    {
      id: crypto.randomBytes(16).toString('hex'),
      img: 'https://picsum.photos/seed/computer/250/250.webp',
      title: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. iure',
      href: '/',
    },
    {
      id: crypto.randomBytes(16).toString('hex'),
      img: 'https://picsum.photos/seed/computer/250/250.webp',
      title: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. iure',
      href: '/',
    },
    {
      id: crypto.randomBytes(16).toString('hex'),
      img: 'https://picsum.photos/seed/computer/250/250.webp',
      title: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. iure',
      href: '/',
    },
    {
      id: crypto.randomBytes(16).toString('hex'),
      img: 'https://picsum.photos/seed/computer/250/250.webp',
      title: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. iure',
      href: '/',
    },
    {
      id: crypto.randomBytes(16).toString('hex'),
      img: 'https://picsum.photos/seed/computer/250/250.webp',
      title: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. iure',
      href: '/',
    },
    {
      id: crypto.randomBytes(16).toString('hex'),
      img: 'https://picsum.photos/seed/computer/250/250.webp',
      title: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. iure',
      href: '/',
    },
    {
      id: crypto.randomBytes(16).toString('hex'),
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
    const news = newsRef.current;
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
        {newsEntries.map((entry, index) => {
          return (
            <BlogCard
              ref={element => {
                newsRef.current[index] = element;
              }}
              id={entry.id}
              key={entry.id}
              title={entry.title}
              img={entry.img}
              href={entry.href}
            />
          );
        })}
        {showArrows && <FaAngleRight className="arrow" />}
      </div>
    </section>
  );
}
