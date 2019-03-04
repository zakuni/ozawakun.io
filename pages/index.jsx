import Layout from '../components/layout.jsx'
import TobBar from '../components/TopBar.jsx'

export default () => (
  <Layout>
    <TobBar />
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
      </main>
    </div>
  </Layout>
)
