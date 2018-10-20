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
              <a href="#about" uk-scroll="offset: 100;">About</a>
            </li>
            <li>
              <a href="#gallery" uk-scroll="offset: 100;">Gallery</a>
            </li>
            <li>
              <a href="#otherservices" uk-scroll="offset: 100;">LINKS</a>
            </li>
            <li>
              <Link href='/now'><a>Now</a></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="uk-container uk-container-small uk-width-2-3@s uk-margin-medium-top">
      <main>
        <section className="uk-section">
          <h2 className="uk-h4" id="about">
            ABOUT
          </h2>
          <p className="uk-h5">
            <b>Kunio Ozawa</b> a.k.a.&nbsp;<b>zakuni</b>
          </p>
          <p className='uk-text-small uk-margin-medium-bottom'>
            ドラえもんの未来が来て欲しい。
          </p>
          <dl className="uk-description-list">
            <dt>Bio</dt>
            <dd className='uk-text-small'>Webのエンジニア的な何か。UIとか情報とかコミュニケーションについて考えていることが多い。</dd>
            <dd className='uk-text-small'>神奈川出身。アメリカ滞在、ドイツ留学、湘南藤沢の大学、ジャパニーズトラディショナル大企業勤務を経て、現在は山形の庄内地方で暮らしています。</dd>
            <dt>Date of birth</dt>
            <dd className='uk-text-small'>Mar. 30, 1987</dd>
          </dl>
        </section>
        <section className="uk-section">
          <h2 className="uk-h4" id="gallery">
            GALLERY
          </h2>
          <div className="uk-flex-middle" uk-grid="">
            <div className="uk-width-1-4@s uk-text-center">
            <a href="https://editor.p5js.org/full/ryqQseOYM"><img alt="gekko" className="uk-box-shadow-medium uk-box-shadow-hover-large" src="static/images/gekko.png" width="200px" /></a>
            </div>
            <div className="uk-width-3-4@s">
              <p>
                p5.jsで発光表現の練習するぞと思って作ってみた、月です。
              </p>
              <p>
                ソースは<a href="https://editor.p5js.org/zakuni/sketches/ryqQseOYM">こちら</a>。
              </p>
              <p>あと、<a href='https://editor.p5js.org/full/S1uBsjMYM'>オマケ</a>。作り始めがこれはこれで味のある感じだっので取っといた。<a href='https://editor.p5js.org/zakuni/sketches/S1uBsjMYM'>ソース</a>もとても適当で、申し訳程度に雲に動きをつけてあります。</p>
            </div>
          </div>
          <hr />
          <div className="uk-flex-middle" uk-grid="">
            <div className="uk-width-1-4@s uk-text-center">
            <a href="https://editor.p5js.org/full/r1kK6YVqf"><img alt="sketch particle" className="uk-box-shadow-medium uk-box-shadow-hover-large" src="static/images/sketch_particle.png" width="200px" /></a>
            </div>
            <div className="uk-width-3-4@s">
              <p>
                こちらも発光表現の練習に作ってみたサムシング。
              </p>
              <p>
                ソースは<a href="https://editor.p5js.org/zakuni/sketches/r1kK6YVqf">こちら</a>。
              </p>
            </div>
          </div>
          <hr />
          <div className="uk-flex-middle" uk-grid="">
            <div className="uk-width-1-4@s uk-text-center">
              <a className="uk-link-reset" href="http://machiawase.herokuapp.com">
                <div className="uk-box-shadow-medium uk-box-shadow-hover-large uk-padding">
                  街合わせ
                </div>
              </a>
            </div>
            <div className="uk-width-3-4@s">
              <h5>
                街合わせ
              </h5>
              <p>
                待ち合わせをするためのwebサービス。二つの場所の中間らへんの場所を教えてくれる。
              </p>
              <p>
                電車の駅名を入れると中間らへんの駅を教えてくれるようにもしようかと思っていたが、そうこうしているうちに山形に引っ越し、車移動メインになったことで、サービス自体を使う機会がほぼ無くなった。
              </p>
            </div>
          </div>
          <hr />
          <div className="uk-flex-middle" uk-grid="">
            <div className="uk-width-1-4@s uk-text-center">
              <a className="uk-link-reset" href="http://boy2man.herokuapp.com">
                <div className="uk-box-shadow-medium uk-box-shadow-hover-large uk-padding">
                  Boy2Man
                </div>
              </a>
            </div>
            <div className="uk-width-3-4@s">
              <h5>
                Boy2Man
              </h5>
              <p>
                ジャンケンマン。
              </p>
              <p>
                ユーザーが出す手を選択する → プログラムが出した手と対戦結果が帰ってくる、という作りにしたことで、イカサマを疑われても潔白の証明が難しくなった。
              </p>
            </div>
          </div>
          <hr />
          <div className="uk-flex-middle" uk-grid="">
            <div className="uk-width-1-4@s uk-text-center">
              <a className="uk-link-reset" href="static/smoothsnap/sample.html">
                <div className="uk-box-shadow-medium uk-box-shadow-hover-large uk-padding">
                  SmoothSnap
                </div>
              </a>
            </div>
            <div className="uk-width-3-4@s">
              <h5>
                SmoothSnap
              </h5>
              <p>
                jQuery UIのプラグインとして作ったのだが、これからjQuery UIを使う人などもういない。
              </p>
            </div>
          </div>
          <hr />
          <div className="uk-flex-middle" uk-grid="">
            <div className="uk-width-1-4@s">
              <a href="static/sakurafubuki/index.html"><img alt="sakurafubuki" className="uk-box-shadow-medium uk-box-shadow-hover-large" src="static/images/sakurafubuki.png" width="200px" /></a>
            </div>
            <div className="uk-width-3-4@s">
              <h5>
                桜吹雪
              </h5>
              <p>
                散り紅葉と同じく、single div。こっちの方が後に作ったが、こっちの方が形が簡単。
              </p>
            </div>
          </div>
          <hr />
          <div className="uk-flex-middle" uk-grid="">
            <div className="uk-width-1-4@s">
              <a href="static/chirimomiji/index.html"><img alt="chirimomiji" className="uk-box-shadow-medium uk-box-shadow-hover-large" src="static/images/chirimomiji.png" width="200px" /></a>
            </div>
            <div className="uk-width-3-4@s">
              <h5>
                散り紅葉
              </h5>
              <p>
                one divとかsingle divとか呼ばれる、divタグ一つにCSSだけで絵を描く試み。葉っぱ一枚が一つのdivタグ。紅葉を降らせているのはJSです。
              </p>
            </div>
          </div>
        </section>
        <section className="uk-section uk-margin-small-top">
          <h2 className="uk-h4" id="otherservices">
            LINKS
          </h2>
          <ul className="uk-list uk-list-bullet uk-link-muted">
            <li>
              <a href="https://zakuni.blogspot.jp/" target="_blank" rel="noopener">blog</a>
            </li>
            <li>
              <a href="https://twitter.com/zakuni" target="_blank" rel="noopener">twitter</a>
            </li>
            <li>
              <a href="https://www.facebook.com/zakuni" target="_blank" rel="noopener">facebook</a>
            </li>
            <li>
              <a href="https://github.com/zakuni" target="_blank" rel="noopener">github</a>
            </li>
            <li>
              <a href="https://zakuni.tumblr.com/" target="_blank" rel="noopener">tumblr</a>
            </li>
            <li>
              <a href="https://www.flickr.com/photos/zakuni/" target="_blank" rel="noopener">flickr</a>
            </li>
            <li>
              <a href="http://amzn.asia/hbl49iH" target="_blank" rel="noopener">wishlist</a>
            </li>
            <li>
              <a href='https://lightroom.adobe.com/gallery/b174cd1e3d6e4e5fb97984c9136b187d' target="_blank" rel="noopener">photos</a>
            </li>
          </ul>
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
