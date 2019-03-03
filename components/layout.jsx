import Head from 'next/head'
import React from 'react';
import Footer from './Footer.jsx'
import "../style.css"

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    UIkit.icon('.uk-icon', {});
  }

  render() {
    return (
      <div>
        <Head>
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-19099790-3"></script>
          <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-19099790-3');`}} />
          <meta charSet="utf-8" />

          {/* Always force latest IE rendering engine or request Chrome Frame */}
          <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

          <meta content="width=device-width, initial-scale=1" name="viewport" />

          <link href="static/favicon.ico" rel="shortcut icon" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.19/css/uikit.min.css" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.19/js/uikit.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.19/js/uikit-icons.min.js"></script>
          <title>ozawakun.io</title>
        </Head>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
