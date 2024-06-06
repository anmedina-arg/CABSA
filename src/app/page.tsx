
import HomePage from './home';
import { Navbar, itemsNavbar } from '../components/navbar/navbar';

export default function Home() {
  return (
    <main>
      <Navbar items={itemsNavbar}/>
      <HomePage/>
    </main>
  );
}
