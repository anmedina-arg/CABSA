import { Hero } from '@/sections/hero/hero';
import { Services } from '@/sections/services/services';
import { About } from '@/sections/about/about';
import { Footer } from '@/components/footer/footer';
import { Contact } from '@/sections/contact/contact';
import { NewsBlog } from '@/sections/NewBlog/newsBlog';
import { footerItems } from '@/components/footer/footer';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <NewsBlog />
      <Contact />
      <Footer footerItems={footerItems} />
    </>
  );
};

export default HomePage;
