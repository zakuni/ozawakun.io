import Link from 'next/link'
import Layout from '../components/layout.jsx'
import ScrambleTitle from '../components/ScrambleTitle.jsx'

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
    <div className="uk-container uk-container-small uk-width-2-3@s uk-margin-remove-top">
      <main>
        <section className="uk-section uk-margin-remove-bottom" id="about">
          <h2 className="uk-h3 uk-margin-medium-bottom">
            ABOUT
          </h2>
          <div className='uk-margin-medium-bottom'>
            <p className="uk-margin-small-bottom">
              Kunio Ozawa a.k.a. zakuni
            </p>
            <p className="uk-margin-remove-top">
              ドラえもんの未来が来て欲しい。
            </p>
          </div>
          <div className='uk-margin-medium-bottom'>
            <h5 className="uk-margin-small-bottom">Bio</h5>
            <p className="uk-margin-small-bottom">Webのエンジニア的な何か。UIとか情報とかコミュニケーションについて考えていることが多い。</p>
            <p className="uk-margin-remove-top">神奈川出身。アメリカ滞在、ドイツ留学、湘南藤沢の大学、ジャパニーズトラディショナル大企業での勤務を経て、現在は山形の庄内地方で暮らしています。</p>
          </div>
          <div>
            <h5>Date of birth</h5>
            <p>Mar. 30, 1987</p>
          </div>
        </section>
        <section className="uk-section" id="gallery">
          <h2 className="uk-h3 uk-margin-large-bottom">
            GALLERY
          </h2>
          <h4>Photos</h4>
          <div>
            <div className='lr_embed'
              style={{position: 'relative', paddingBottom: '50%', height: 0, overflow: 'hidden'}}
            >
              <iframe id='iframe' src='https://lightroom.adobe.com/embed/shares/c67a65f7d5f949858cad7eb5b56ef398/slideshow?background_color=%23191919&color=%23cccdcd'
                frameborder='0'
                style={{width:'100%', height:'100%', position: 'absolute', top:0, left:0}}
              ></iframe>
            </div>
            <div>
              more photos available from <a href='https://lightroom.adobe.com/gallery/b174cd1e3d6e4e5fb97984c9136b187d' target="_blank" rel="noopener">here</a>
            </div>
          </div>
          <h4>Something</h4>
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
        <section className="uk-section uk-margin-small-top" id="otherservices">
          <h2 className="uk-h3">
            LINKS
          </h2>
          <ul className="uk-list uk-list-bullet uk-link-muted">
            <li>
              <a href="https://scrapbox.io/zakuni/" target="_blank" rel="noopener">scrapbox</a>
            </li>
            <li>
              <a href="https://zakuni.blogspot.jp/" target="_blank" rel="noopener">blog</a>
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
          </ul>
        </section>
      </main>
    </div>
  </Layout>
)
