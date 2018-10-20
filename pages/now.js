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
              <Link href="/#about"><a>About</a></Link>
            </li>
            <li>
              <Link href="/#gallery"><a>Gallery</a></Link>
            </li>
            <li>
              <Link href="/#otherservices"><a>LINKS</a></Link>
            </li>
            <li>
              <Link href='/now'><a>Now</a></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="uk-container uk-container-small uk-width-3-5@s" uk-height-viewport="expand: true">
      <main>
        <section className="uk-section">
          <h2 className="uk-h4">
            NOW
          </h2>
          <div className="uk-text-meta">Aug. 19, 2018</div>
          <p>クラウドソーシングで副業を始めてみた。</p>
          <p>1件1円のアンケートとかがたくさんあってすごい。1個やってみたら2分ぐらい掛かった。時給30円ですよ、何なんですか。</p>
          <p>その後、1件20円ぐらいのアンケートもあったからやってみた。時給が一気に20倍ですよ、どうなってるんですか。</p>
          <p>アンケートは二度とやりませんが、副業自体は真面目にやっているので、楽しいお仕事とかあれば教えてください。</p>
        </section>
        <section className="uk-section">
          <h2 className="uk-h4">
            WAS
          </h2>
          <article className="uk-section-xsmall">
            <div className="uk-text-meta">Jul. 23, 2018</div>
            <p>冬が長かったと思ったら今度は夏が暑い。</p>
            <p>初めてペルソナ5をやってみたら、クリアするのに130時間弱も掛かった。</p>
            <p>色んなことに思いを馳せているが、インプットもアウトプットも少ない。小説でも書いてみようかしら。</p>
          </article>
          <article className="uk-section-xsmall">
            <div className="uk-text-meta">Mar. 15, 2018</div>
            <p>庄内の冬もようやく終わりを迎えそう。今年は長かった。</p>
            <p>このサイトをnext.jsを使って色々いじりつつ、<a href='http://alpha.editor.p5js.org/full/ryqQseOYM'>p5.jsで発光表現の練習中</a>。</p>
          </article>
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
