import Layout from '../layouts/default'
import PageTitle from '../components/PageTitle'
import Link from 'next/link'

export default () => (
  <Layout>
    <div className="uk-container uk-container-small uk-width-3-4@s uk-margin-remove-top">
      <main>
        <section className="uk-section uk-margin-remove-bottom">
          <div id="about">
            <PageTitle>INTRODUCTION</PageTitle>
            <div className="uk-margin-medium-bottom">
              <p className="uk-margin-small-bottom">
                I'm Kunio Ozawa, a.k.a. zakuni
              </p>
              <p className="uk-margin-small-bottom">
                Webのエンジニア的な何か。UIとか情報とかコミュニケーションについて考えていることが多い。
              </p>
            </div>
          </div>
          <Link href="/about"><a className='uk-align-right uk-link-text'>MORE ABOUT ME <span uk-icon="arrow-right"></span></a></Link>
        </section>
      </main>
    </div>
  </Layout>
);
