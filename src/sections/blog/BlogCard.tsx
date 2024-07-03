'use client';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ReactNode, forwardRef } from 'react';
import { GoArrowUpRight } from 'react-icons/go';

export type NewsEntry = {
  id: string;
  img: StaticImageData;
  title: string;
  slug: string;
  description: string;
};

function BlogCard(props: NewsEntry, ref: React.Ref<HTMLDivElement>): ReactNode {
  return (
    <article ref={ref} id={`news-${props.id}`} className="blogCard">
      <div className="blogImageContainer">
        <Image src={props.img} alt="blog image" width={300} height={250} />
      </div>
      <div className="blogInfoContainer">
        <h3>{props.title}</h3>
        <p className="pDescBlog">
          <span className="description">{props.description}</span>
          <span>
            <Link href={`/news/${props.slug}.pdf`} passHref>
              Read More
              <GoArrowUpRight className="iconReadMore" />
            </Link>
          </span>
        </p>
      </div>
    </article>
  );
}

export default forwardRef<HTMLDivElement, NewsEntry>(BlogCard);
