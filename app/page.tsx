import PageTitle from '@/components/PageTitle'
import Link from 'next/link'
import Image from 'next/image';
import coverImg from '@/public/images/cover.webp';

export default function Page() {
  return (
    <div className="mx-4 md:mx-32">
      <main>
        <section className="uk-section uk-margin-remove-bottom uk-padding-remove-bottom">
          <Image
            src={coverImg}
            alt="Cover image"
            priority
          />
          <Link href="/gallery" className='inline-flex place-items-center uk-align-right uk-margin-top hover:text-gray-400 hover:no-underline transition duration-150'>
            <span className='tracking-wide'>Gallery</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-[1.1px] ml-[2px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </Link>
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
          <Link href="/about" className='inline-flex uk-align-right hover:text-gray-400 hover:no-underline transition duration-150'>
            More about me
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-[1.1px] ml-[2px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </section>
      </main>
    </div>
  );
}
