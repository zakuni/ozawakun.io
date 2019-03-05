import Layout from '../components/layout.jsx'
import TobBar from '../components/TopBar.jsx'

export default () => (
  <Layout>
    <TobBar />
    <div className="uk-container uk-container-small uk-width-3-4@s uk-margin-remove-top">
      <main>
        <section className="uk-section uk-margin-remove-bottom" id="about">
          <h3 className="uk-margin-medium-bottom">
            Introduction
          </h3>
          <div className='uk-margin-medium-bottom'>
            <p className="uk-margin-small-bottom">
              I'm Kunio Ozawa, a.k.a. zakuni
            </p>
          </div>
          <div className='uk-margin-medium-bottom'>
            <p className="uk-margin-small-bottom">Webのエンジニア的な何か。UIとか情報とかコミュニケーションについて考えていることが多い。</p>
            <p className="uk-margin-remove-top">神奈川出身。アメリカ滞在、ドイツ留学、湘南藤沢の大学、ジャパニーズトラディショナル大企業での勤務を経て、現在は山形の庄内地方で暮らしています。</p>
          </div>
        </section>
      </main>
    </div>
  </Layout>
)
