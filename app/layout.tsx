import './global.css';
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer';
import UIKitProvider from '@/components/UIKitProvider';
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata = {
  title: 'ozawakun.io',
  description: 'ozawakun.io, a portfolio site of zakuni',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Website',
  name: 'ozawakun.io',
  url: 'https://www.ozawakun.io',
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-K9TLVVM7" />
      <body className='has-[:modal]:overflow-hidden has-[:modal]:overscroll-none'>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <UIKitProvider>
          <TopBar />
          {children}
          <Footer />
        </UIKitProvider>
      </body>
    </html>
  );
}
