import PageTitle from '@/components/PageTitle'
import Link from 'next/link'
import Image from 'next/image';
import coverImg from '@/public/images/cover.webp';

const IndexPage = () => (
  <div className="uk-container uk-container-large uk-width-3-4@s">
    <main>
      <section className="uk-section uk-margin-remove-bottom uk-padding-remove-bottom">
        <Image
          src={coverImg}
          alt="Cover image"
          priority
        />
        <Link href="/gallery" className='uk-align-right uk-link-text uk-margin-top'>Gallery<span uk-icon="arrow-right" className='align-text-bottom'></span></Link>
      </section>
      <section className="uk-section uk-margin-remove-top uk-margin-remove-bottom uk-padding-small-top">
        <div id="about">
          <PageTitle>Introduction</PageTitle>
          <div className="uk-margin-medium-bottom">
            <p className="uk-margin-small-bottom">
              I&apos;m Kunio Ozawa, a.k.a. zakuni
            </p>
            <p className="uk-margin-small-bottom">
              Webのエンジニア的な何か。UIとか情報とかコミュニケーションについて考えていることが多い。
            </p>
          </div>
        </div>
        <Link href="/about" className='uk-align-right uk-link-text'>More about me<span uk-icon="arrow-right" className='align-text-bottom'></span></Link>
      </section>
    </main>
  </div>
);

export default IndexPage;
