import Layout from '../components/layout.jsx'
import TobBar from '../components/TopBar.jsx'

export default () => (
  <Layout>
    <TobBar />
    <div className="uk-container uk-container-small uk-width-2-3@s uk-margin-remove-top">
      <main>
        <section className="uk-section" id="otherservices">
          <h3 className="uk-h3">
            LINKS
          </h3>
          <ul className="uk-list uk-list-bullet uk-link-muted">
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
