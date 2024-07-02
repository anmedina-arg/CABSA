import { News } from './news';
export default function NewsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <News className="newsPage" id={id} />;
}
