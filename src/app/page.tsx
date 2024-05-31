import { Hero } from '@/sections/hero/hero';
import styles from './page.module.css';
import { Services } from '@/sections/services/services';
import { About } from '@/sections/about/about';
import { Footer } from '@/components/footer/footer';
import { Navbar, itemsNavbar } from '@/components/navbar/navbar';
import { Contact } from '@/sections/contact/contact';
import mainLogo from '../assets/main-logo.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar items={itemsNavbar} logo={mainLogo}/>
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
