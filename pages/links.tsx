import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'

const LinksPage = () => (
  <Layout title="LINKS | ozawakun.io">
  <div className="uk-container uk-container-small uk-width-3-4@s uk-margin-remove-top">
    <main>
      <section id="otherservices" className="uk-section">
        <PageTitle>LINKS</PageTitle>
        <ul className="uk-list uk-list-bullet uk-link-muted">
          <li>
            <a href="https://muuseo.com/zakuni" target="_blank" rel="noopener noreferrer">muuseo</a>
          </li>
          <li>
            <a href="https://scrapbox.io/zakuni/" target="_blank" rel="noopener noreferrer">scrapbox</a>
          </li>
          <li>
            <a href="https://zakuni.blogspot.jp/" target="_blank" rel="noopener noreferrer">blog</a>
          </li>
          <li>
            <a href="http://amzn.asia/hbl49iH" target="_blank" rel="noopener noreferrer">wishlist</a>
          </li>
        </ul>
      </section>
    </main>
  </div>
  </Layout>
)
export default LinksPage;
