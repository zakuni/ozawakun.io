import "../node_modules/uikit/dist/css/uikit.min.css";
import './global.css';
import TopBar from './TopBar'
import Footer from './Footer';
import Script from 'next/script';


export const metadata = {
  title: 'ozawakun.io',
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-19099790-3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-19099790-3');
          `}
        </Script>
        <TopBar />
        {children}
        <Footer />
      </body>
      <Script src="../node_modules/uikit/dist/js/uikit.min.js" />
      <Script src="../node_modules/uikit/dist/js/uikit-icons.min.js" />
    </html>
  );
}