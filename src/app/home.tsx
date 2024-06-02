import { Hero } from '@/sections/hero/hero';
import { Services } from '@/sections/services/services';
import { About } from '@/sections/about/about';
import { Footer } from '@/components/footer/footer';
import { Contact } from '@/sections/contact/contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;