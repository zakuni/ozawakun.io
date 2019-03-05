import Layout from '../components/layout.jsx'
import TobBar from '../components/TopBar.jsx'

export default () => (
  <Layout>
    <TobBar />
    <div className="uk-container uk-container-small uk-width-3-4@s uk-margin-remove-top">
      <main>
        <section className="uk-section uk-margin-remove-bottom" id="about">
          <h2 className="uk-h3 uk-margin-medium-bottom">
            ABOUT
          </h2>
          <div className='uk-margin-medium-bottom'>
            <p>
              Kunio Ozawa a.k.a. zakuni
            </p>
          </div>
          <div className='uk-margin-medium-bottom'>
            <h5>Date of birth</h5>
            <p>Mar. 30, 1987</p>
          </div>
          <div className='uk-margin-medium-bottom'>
            <h5>Bio</h5>
            <p>Webのエンジニア的な何か。UIとか情報とかコミュニケーションについて考えていることが多い。</p>
            <p>神奈川出身。アメリカ滞在、ドイツ留学、湘南藤沢の大学、ジャパニーズトラディショナル大企業での勤務を経て、現在は山形の庄内地方で暮らしています。</p>
            <p>藤子・F・不二雄の描いた、ドラえもんの未来が来て欲しい。</p>
          </div>

          <div>
            <h5>Careers</h5>
            <p>2014.4 ~ Spiber株式会社</p>
            <p>2011.4 ~ 2014.3 株式会社リコー</p>
            <p>2007.4 ~ 2011.3 慶應義塾大学 環境情報学部</p>
          </div>
        </section>
      </main>
    </div>
  </Layout>
)
