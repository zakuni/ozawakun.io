import Layout from '../layouts/default'
import PageTitle from '../components/PageTitle'

export default () => (
  <Layout title="LINKS | ozawakun.io">
  <div className="uk-container uk-container-small uk-width-3-5@s uk-margin-remove-top">
    <main>
      <section id="otherservices" className="uk-section">
        <PageTitle>LINKS</PageTitle>
        <ul className="uk-list uk-list-bullet uk-link-muted">
          <li>
            <a href="https://muuseo.com/zakuni" target="_blank" rel="noopener">muuseo</a>
          </li>
          <li>
            <a href="https://scrapbox.io/zakuni/" target="_blank" rel="noopener">scrapbox</a>
          </li>
          <li>
            <a href="https://zakuni.blogspot.jp/" target="_blank" rel="noopener">blog</a>
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
