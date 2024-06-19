import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, forwardRef } from 'react';
import { GoArrowUpRight } from 'react-icons/go';

export type NewsEntry = {
  id: string;
  img: string;
  title: string;
};

function BlogCard(props: NewsEntry, ref: React.Ref<HTMLDivElement>): ReactNode {
  return (
    <article ref={ref} id={`news-${props.id}`} className="blogCard">
      <div className="blogImageContainer">
        <Image src={props.img} alt="blog image" width={300} height={250} />
      </div>
      <div className="blogInfoContainer">
        <h3>{props.title}</h3>
        <Link href={`/news/${props.id}`} passHref>
          Read More <GoArrowUpRight />
        </Link>
      </div>
    </article>
  );
}

export default forwardRef<HTMLDivElement, NewsEntry>(BlogCard);
