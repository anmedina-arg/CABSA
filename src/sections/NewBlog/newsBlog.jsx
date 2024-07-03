'use client';

import CrossDecoratorHover from '@/components/decorators/crossDecoratorHover';
import './newsBlog.css';
import MainTitle from '@/components/mainTitle/mainTitle';
import { NewsBlogCard } from '@/components/blogCard/blogCard';
import { LatestNews } from '@/utils/latestNews';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function NewsBlog() {

  return (
    <section className='sectionNewsBlog' id='news'>
      <div className="crossDecoratorWeb">
        <CrossDecoratorHover />
      </div>
      <MainTitle title='Latest News' />
      <Swiper
        style={{
          '--swiper-navigation-color': 'var(--lightGray)',
          '--swiper-pagination-color': 'var(--lightGray)',
        }}
        modules={[Autoplay, Pagination]}
        grabCursor={true}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        pagination={{ clickable: true }}
        className='mySwipper'
      >
        <div>
          {
            LatestNews.map((entry) => {
              return (
                <SwiperSlide key={entry.id}>
                  <NewsBlogCard
                    id={entry.id}
                    title={entry.title}
                    img={entry.img}
                    slug={entry.slug}
                    description={entry.description}
                  />
                </SwiperSlide>
              );
            })
          }
        </div>
      </Swiper>
    </section>
  );
}