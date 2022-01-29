import Head from 'next/head'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'

type Props = {
  title?: string
}

const DefaultLayout: React.FC<Props> = ({title="ozawakun.io", children}) => (
  <>
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

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/css/uikit.min.css" />
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit-icons.min.js"></script>
      <title>{title}</title>
    </Head>
    <TopBar />
    {children}
    <Footer />
    <style jsx global>{`
      html, body {
        background: #fbfbfb;
        font-family: Georgia, 'Times New Roman', Times, serif;
      }
      #about {
        color: #333;
      }

      b {
        font-weight: 500;
      }

      h2, h3, h4 {
        font-family: Georgia, 'Times New Roman', Times, serif;
      }

      h2 {
        font-weight: 450;
      }
      h5 {
        font-weight: 500;
      }

      article > p {
        font-family: Georgia, 'Times New Roman', Times, serif;
      }

      .uk-h3, .uk-h4 {
        font-family: Georgia, 'Times New Roman', Times, serif;
      }
      .uk-icon-button {
        background: #fbfbfb;
      }
    `}
    </style>
  </>
)
export default DefaultLayout;
