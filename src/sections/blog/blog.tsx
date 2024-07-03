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
import blogImage from '@/assets/nba.webp';
import './blog.css';
import BlogCard, { NewsEntry } from './BlogCard';
import CrossDecoratorHover from '@/components/decorators/crossDecoratorHover';
import MainTitle from '@/components/mainTitle/mainTitle';

export function Blog(): ReactNode {
  const carrouselRef = useRef<ElementRef<'div'> | null>(null);
  const newsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [showArrows, setShowArrows] = useState(false);
  const [newsEntries, setNewsEntries] = useState<NewsEntry[]>([
    {
      id: '5931a932-2be4-46d4-87b4-b687e84c93aa',
      img: blogImage,
      title: 'CABSA SPORTS VIEW',
      slug: 'CABSA_SPORTS_TESIS',
      description: 'The global sport s and entertainment indus try has experienced significant and consistent growth in the recent period...'
    }
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
    <section id="news" className="blogSection">
      <div className="crossDecoratorWeb">
        <CrossDecoratorHover />
      </div>
      <MainTitle title='Latest News'/>
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
              slug={entry.slug}
              description={entry.description}
            />
          );
        })}
        {showArrows && <FaAngleRight className="arrow" onClick={slideRight} />}
      </div>
    </section>
  );
}
