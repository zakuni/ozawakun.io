import Head from 'next/head'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'

export default ({children}) => (
  <div>
    <Head>
      // Global site tag (gtag.js) - Google Analytics
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-19099790-3"></script>
      <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-19099790-3');
      `}} />
      // Always force latest IE rendering engine or request Chrome Frame
      <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

      <meta content="width=device-width, initial-scale=1" name="viewport" />

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.2.6/dist/css/uikit.min.css" />
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.6/dist/js/uikit.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.6/dist/js/uikit-icons.min.js"></script>
      <link rel="stylesheet" href="/style.css" />
      <title>ozawakun.io</title>
    </Head>
    <TopBar />
    {children}
    <Footer />
  </div>
)
