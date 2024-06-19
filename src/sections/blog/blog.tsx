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
  const carrouselRef = useRef<ElementRef<'div'> | null>(null);
  const newsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [showArrows, setShowArrows] = useState(false);
  const [newsEntries, setNewsEntries] = useState<NewsEntry[]>([
    {
      id: '5931a932-2be4-46d4-87b4-b687e84c93aa',
      img: 'https://picsum.photos/seed/computer/250/250.webp',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure',
    },
    {
      id: '5931a932-2be4-46d4-87b4-b687e84c93aa',
      img: 'https://picsum.photos/seed/computer/250/250.webp',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure',
    },
    {
      id: '5931a932-2be4-46d4-87b4-b687e84c93aa',
      img: 'https://picsum.photos/seed/computer/250/250.webp',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure',
    },
    {
      id: '5931a932-2be4-46d4-87b4-b687e84c93aa',
      img: 'https://picsum.photos/seed/computer/250/250.webp',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure',
    },
    {
      id: '5931a932-2be4-46d4-87b4-b687e84c93aa',
      img: 'https://picsum.photos/seed/computer/250/250.webp',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure',
    },
  ]);

  function slideLeft() {
    const carrousel = carrouselRef.current;
    const scrollAmount = newsRef.current[0]!.offsetWidth + 10;

    if (carrousel?.scrollLeft === 0) {
      carrousel.scrollTo({
        left: carrousel.scrollWidth,
        behavior: 'smooth',
      });
      return;
    }
    carrousel!.scrollTo({
      left: carrousel!.scrollLeft - scrollAmount,
      behavior: 'smooth',
    });
  }

  function slideRight() {
    const carrousel = carrouselRef.current;
    const scrollAmount = newsRef.current[0]!.offsetWidth + 10;

    if (
      Math.ceil(carrousel!.scrollLeft + carrousel!.clientWidth) >=
      carrousel!.scrollWidth
    ) {
      console.log('here');
      console.log(carrousel?.scrollWidth);
      carrousel!.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
      return;
    }
    carrousel?.scrollTo({
      left: carrousel.scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  }

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
        {showArrows && <FaAngleLeft className="arrow" onClick={slideLeft} />}
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
            />
          );
        })}
        {showArrows && <FaAngleRight className="arrow" onClick={slideRight} />}
      </div>
    </section>
  );
}
