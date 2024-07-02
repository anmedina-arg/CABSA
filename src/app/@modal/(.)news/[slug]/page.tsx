import { News } from '@/app/news/[slug]/news';
import { Modal } from './modal';

export default function NewsModal({
  params: { id: newsId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <News id={newsId} />
    </Modal>
  );
}
