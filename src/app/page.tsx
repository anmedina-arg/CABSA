
import HomePage from './home';
import { Navbar, itemsNavbar } from '../components/navbar/navbar';
import mainLogo from '../assets/main-logo.png';

export default function Home() {
  return (
    <main>
      <Navbar items={itemsNavbar}/>
      <HomePage/>
    </main>
  );
}
