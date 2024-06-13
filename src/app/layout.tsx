import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '500', '700', '900'],
  style: ['italic', 'normal'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'CABSA',
  description: 'CABSA - We offer empathetic, personalized and impactful financial solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`atTop ${roboto.className}`}>{children}</body>
    </html>
  );
}
