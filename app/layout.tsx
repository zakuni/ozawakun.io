import './global.css';
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer';
import Script from 'next/script';
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
        <TopBar />
        {children}
        <Footer />
      </body>
      <Script src="https://cdn.jsdelivr.net/npm/uikit@3.21.13/dist/js/uikit.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/uikit@3.21.13/dist/js/uikit-icons.min.js" />
    </html>
  );
}
