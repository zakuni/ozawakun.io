import Link from 'next/link'
import Layout from '../components/layout'
import ScrambleTitle from '../components/ScrambleTitle'

export default () => (
  <Layout>
    <div className="sticky">
      <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="">
        <div className="uk-navbar-center">
          <a className="uk-navbar-item uk-logo" href="/" id="title">
            <ScrambleTitle />
          </a>
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/#otherservices">LINKS</Link>
            </li>
            <li>
              <Link href='/now'><a>Now</a></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <style jsx>{`
      .sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        background: linear-gradient(rgba(255, 255, 255, 0.95) 80%, rgba(255, 255, 255, 0));
      }
      .uk-logo {
        color: #333;
      }
    `}</style>
    <div className="uk-container uk-container-small">
      <main>
        <section className="uk-section">
          <h2 className="uk-h4" id="about">
            NOW
            <div className="uk-text-meta">Mar. 15, 2018</div>
          </h2>
          <p>庄内の冬もようやく終わりを迎えそう。今年は長かった。</p>
          <p>このサイトをnext.jsを使って色々いじりつつ、<a href='http://alpha.editor.p5js.org/full/ryqQseOYM'>p5.jsで発光表現の練習中</a>。</p>
        </section>
      </main>
      <footer className="uk-text-center uk-link-muted uk-text-meta uk-margin-small-bottom">
        <div>
          <a href="http://ozawakun.io">ozawakun.io</a>, since 2013.&nbsp;<a href="mailto:contactme&amp;#64;ozawakun.io">contactme&#64;ozawakun.io</a>
        </div>
      </footer>
    </div>
  </Layout>
)
