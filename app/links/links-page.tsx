import PageTitle from '@/components/PageTitle';

const LinksPage = () => (
  <div className="mx-auto px-10 sm:w-3/4 box-border max-w-full mt-0">
    <main>
      <section id="otherservices" className="py-[70px] flow-root [&>:last-child]:mb-0">
        <PageTitle>Links</PageTitle>
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
)
export default LinksPage;
