import { News } from './news';
import './news.css';
export default function NewsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <News id={id} />;
}
