import { Metadata } from 'next';
import GalleryPage from './gallery-page';

export const metadata: Metadata = {
  title: 'GALLERY | ozawakun.io',
};

export default function Page() {
  return <GalleryPage />;
}
