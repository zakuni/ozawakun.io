import Layout from '../layouts/default'

const NowPage = () => (
  <Layout title="NOW | ozawakun.io">
    <div className="uk-container uk-container-small uk-width-3-5@s" uk-height-viewport="expand: true">
      <main>
        <section className="uk-section uk-padding-small-bottom">
          <h2 className="uk-h4">
            NOW
          </h2>
          <article className="uk-section-xsmall">
            <div className="uk-text-meta">
              Jan. 4, 2020
            </div>
            <p>明けましておめでとうございます。</p>
            <p>このページを1年間更新していなかったことに驚いております。サイト自体は更新していたんですが。</p>
            <p>本年も、どうぞよろしくお願い申し上げます。</p>
          </article>
        </section>
        <section className="uk-section">
          <h2 className="uk-h4">
            WAS
          </h2>
          <article className="uk-section-xsmall">
            <div className="uk-text-meta">
              Jan. 3, 2019
            </div>
            <p>明けましておめでとうございます。</p>
            <p>冬休みの自由研究に、<a href="https://github.com/zakuni/ALife">人工生命を作ってみました</a>。</p>
            <p>解説は<a href="https://scrapbox.io/zakuni/人工生命を作ってみた">こちら</a>に。</p>
          </article>
          <article className="uk-section-xsmall">
            <div className="uk-text-meta">
              Aug. 19, 2018
            </div>
            <p>クラウドソーシングで副業を始めてみた。</p>
            <p>1件1円のアンケートとかがたくさんあってすごい。1個やってみたら2分ぐらい掛かった。時給30円ですよ、何なんですか。</p>
            <p>その後、1件20円ぐらいのアンケートもあったからやってみた。時給が一気に20倍ですよ、どうなってるんですか。</p>
            <p>アンケートは二度とやりませんが、副業自体は真面目にやっているので、楽しいお仕事とかあれば教えてください。</p>
          </article>
          <article className="uk-section-xsmall">
            <div className="uk-text-meta">
              Jul. 23, 2018
            </div>
            <p>冬が長かったと思ったら今度は夏が暑い。</p>
            <p>初めてペルソナ5をやってみたら、クリアするのに130時間弱も掛かった。</p>
            <p>色んなことに思いを馳せているが、インプットもアウトプットも少ない。小説でも書いてみようかしら。</p>
          </article>
          <article className="uk-section-xsmall">
            <div className="uk-text-meta">
              Mar. 15, 2018
            </div>
            <p>庄内の冬もようやく終わりを迎えそう。今年は長かった。</p>
            <p>このサイトをnext.jsを使って色々いじりつつ、<a href="http://alpha.editor.p5js.org/full/ryqQseOYM">p5.jsで発光表現の練習中</a>。</p>
          </article>
        </section>
      </main>
    </div>
  </Layout>
)
export default NowPage;
