import { Hero } from '@/sections/hero/hero';
import { Services } from '@/sections/services/services';
import { About } from '@/sections/about/about';
import { Footer } from '@/components/footer/footer';
import { Navbar } from '@/components/navbar/navbar';
import { Contact } from '@/sections/contact/contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
