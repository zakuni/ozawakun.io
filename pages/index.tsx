import Layout from '../layouts/default'
import PageTitle from '../components/PageTitle'

export default () => (
  <Layout>
    <div className="uk-container uk-container-small uk-width-3-4@s uk-margin-remove-top">
      <main>
        <section id="about" className="uk-section uk-margin-remove-bottom">
          <PageTitle>Introduction</PageTitle>
          <div className="uk-margin-medium-bottom">
            <p className="uk-margin-small-bottom">
              I'm Kunio Ozawa, a.k.a. zakuni
            </p>
          </div>
          <div className="uk-margin-medium-bottom">
            <p className="uk-margin-small-bottom">
              Webのエンジニア的な何か。UIとか情報とかコミュニケーションについて考えていることが多い。
            </p>
            <p className="uk-margin-remove-top">
              神奈川出身。アメリカ滞在、ドイツ留学、湘南藤沢の大学、ジャパニーズトラディショナル大企業での勤務を経て、現在は山形の庄内地方で暮らしています。
            </p>
          </div>
        </section>
      </main>
    </div>
  </Layout>
);
