import Image from 'next/image';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import './blog.css';

export function Blog() {
  return (
    <section id="blog" className="blogSection">
      <h2 className="blogTitle">Latest News</h2>
      <div className="blogCarrousel">
        <FaAngleLeft className="arrow" />
        <article className="blogCard">
          <div className="blogImageContainer">
            <Image
              src="https://picsum.photos/seed/computer/250/250.webp"
              alt="blog image"
              width={300}
              height={250}
            />
          </div>
          <div className="blogInfoContainer">
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            </h3>
            <p>Leer mas</p>
          </div>
        </article>
        <article className="blogCard">
          <div className="blogImageContainer">
            <Image
              src="https://picsum.photos/seed/computer/250/250.webp"
              alt="blog image"
              width={300}
              height={250}
            />
          </div>
          <div className="blogInfoContainer">
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            </h3>
            <p>Leer mas</p>
          </div>
        </article>
        <article className="blogCard">
          <div className="blogImageContainer">
            <Image
              src="https://picsum.photos/seed/computer/250/250.webp"
              alt="blog image"
              width={300}
              height={250}
            />
          </div>
          <div className="blogInfoContainer">
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            </h3>
            <p>Leer mas</p>
          </div>
        </article>
        <article className="blogCard">
          <div className="blogImageContainer">
            <Image
              src="https://picsum.photos/seed/computer/250/250.webp"
              alt="blog image"
              width={300}
              height={250}
            />
          </div>
          <div className="blogInfoContainer">
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            </h3>
            <p>Leer mas</p>
          </div>
        </article>
        <article className="blogCard">
          <div className="blogImageContainer">
            <Image
              src="https://picsum.photos/seed/computer/250/250.webp"
              alt="blog image"
              width={300}
              height={250}
            />
          </div>
          <div className="blogInfoContainer">
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            </h3>
            <p>Leer mas</p>
          </div>
        </article>
        <article className="blogCard">
          <div className="blogImageContainer">
            <Image
              src="https://picsum.photos/seed/computer/250/250.webp"
              alt="blog image"
              width={300}
              height={250}
            />
          </div>
          <div className="blogInfoContainer">
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            </h3>
            <p>Leer mas</p>
          </div>
        </article>
        <FaAngleRight className="arrow" />
      </div>
    </section>
  );
}
