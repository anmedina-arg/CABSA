import styles from './page.module.css';
import { Hero } from '@/components/Hero';
export default function Home() {
  return (
    <main className={styles.main}>
      <p>Hello World</p>
      <Hero />
    </main>
  );
}
