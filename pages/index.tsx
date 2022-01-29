import Layout from '../layouts/default'
import PageTitle from '../components/PageTitle'
import Link from 'next/link'

const IndexPage = () => (
  <Layout>
    <div className="uk-container uk-container-large uk-width-3-4@s">
      <main>
        <section className="uk-section uk-margin-remove-bottom uk-padding-remove-bottom">
          <img src="images/cover.jpg" alt="Cover image" />
          <Link href="/gallery"><a className='uk-align-right uk-link-text uk-margin-top'>GALLERY<span uk-icon="arrow-right"></span></a></Link>
        </section>
        <section className="uk-section uk-margin-remove-top uk-margin-remove-bottom uk-padding-small-top">
          <div id="about">
            <PageTitle>INTRODUCTION</PageTitle>
            <div className="uk-margin-medium-bottom">
              <p className="uk-margin-small-bottom">
                I&apos;m Kunio Ozawa, a.k.a. zakuni
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

export default IndexPage;
