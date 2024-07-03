import Image, { StaticImageData } from 'next/image';
import './blogCard.css';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

export type NewsEntry = {
  id: string;
  img: StaticImageData;
  title: string;
  slug: string;
  description: string;
};

export function NewsBlogCard(props: NewsEntry) {
  return(
    <article className='articleCardContainer'>
      <Image src={props.img} alt="image" className='imageCardNews'/>
      <div className="blogInfoContainer">
        <h3 className='titleCard'>{props.title}</h3>
        <p className="pDescBlog">
          <span className='description'>
            {props.description}
          </span>
          <span>
            <Link
              className='linkReadMore'
              href={`/news/${props.slug}.pdf`}
              passHref
            >
              Read More<GoArrowUpRight className='iconReadMore'/>
            </Link>
          </span>
        </p>
      </div>
    </article>
  );
}

export default NewsEntry;