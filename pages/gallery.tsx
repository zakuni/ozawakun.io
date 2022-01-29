
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'

const GalleryPage = () => (
  <Layout title="GALLERY | ozawakun.io">
    <div className="uk-container uk-container-small uk-width-3-4@s uk-margin-remove-top">
      <main>
        <section id="gallery" className="uk-section">
          <PageTitle>GALLERY</PageTitle>
          <h4>Photos</h4>
          <div>
            <div className='lr_embed' style={{position: 'relative', paddingBottom: '50%', height: 0, overflow: 'hidden'}}>
              <iframe id='iframe' src='https://lightroom.adobe.com/embed/shares/71663dcf01b0433193bbc0d6f04e04f8/slideshow?background_color=%232D2D2D&color=%23999999' frameBorder='0' style={{width:'100%', height:'100%', position: 'absolute', top:0, left:0}}></iframe>
            </div>
            <div className="uk-align-right uk-margin-small">
              some more available from <a href="https://portfolio.ozawakun.io" target="_blank" rel="noopener noreferrer">here...</a>
            </div>
          </div>
          <h4 className="uk-margin-xlarge-top">
            Something
          </h4>
          <div className="uk-flex-middle" uk-grid="">
            <div className="uk-width-1-4@s uk-text-center">
              <a href="https://itunes.apple.com/us/app/zakuni電卓/id1465087955?l=ja&ls=1&mt=8"><img alt="gekko" className="uk-box-shadow-medium uk-box-shadow-hover-large" src="/images/z-cal.png" width="170px" /></a>
              <div style={{paddingTop: '20px'}}><a href="https://itunes.apple.com/us/app/zakuni電卓/id1465087955?l=ja&ls=1&mt=8"><img src="/images/Download_on_the_App_Store_blk_.svg" /></a></div>
            </div>
            <div className="uk-width-3-4@s">
              <p>
                ある日僕は思ったのです。電卓を作ってみよう、と。
              </p>
              <p>そしたら出来たのです。電卓が。</p>
            </div>
          </div>
          <hr />
          <div className="uk-flex-middle" uk-grid="">
            <div className="uk-width-1-4@s uk-text-center">
              <a href="https://editor.p5js.org/full/ryqQseOYM"><img alt="gekko" className="uk-box-shadow-medium uk-box-shadow-hover-large" src="/images/gekko.png" width="200px" /></a>
            </div>
            <div className="uk-width-3-4@s">
              <p>
                p5.jsで発光表現の練習するぞと思って作ってみた、月です。
              </p>
              <p>
                ソースは<a href="https://editor.p5js.org/zakuni/sketches/ryqQseOYM">こちら</a>。
              </p>
              <p>あと、<a href="https://editor.p5js.org/full/S1uBsjMYM">オマケ</a>。作り始めがこれはこれで味のある感じだっので取っといた。<a href="https://editor.p5js.org/zakuni/sketches/S1uBsjMYM">ソース</a>もとても適当で、申し訳程度に雲に動きをつけてあります。</p>
            </div>
          </div>
          <hr />
          <div className="uk-flex-middle" uk-grid="">
            <div className="uk-width-1-4@s uk-text-center">
              <a href="https://editor.p5js.org/full/r1kK6YVqf"><img alt="sketch particle" className="uk-box-shadow-medium uk-box-shadow-hover-large" src="/images/sketch_particle.png" width="200px" /></a>
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
              <a className="uk-link-reset" href="/smoothsnap/sample.html">
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
              <a href="/sakurafubuki/index.html"><img alt="sakurafubuki" className="uk-box-shadow-medium uk-box-shadow-hover-large" src="/images/sakurafubuki.png" width="200px" /></a>
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
              <a href="/chirimomiji/index.html"><img alt="chirimomiji" className="uk-box-shadow-medium uk-box-shadow-hover-large" src="/images/chirimomiji.png" width="200px" /></a>
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
      </main>
    </div>
  </Layout>
)

export default GalleryPage;
