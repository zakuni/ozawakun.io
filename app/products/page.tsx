import Image from 'next/image';
import PageTitle from '@/components/PageTitle'
import zCalImg from '@/public/images/z-cal.png';
import appStoreImg from '@/public/images/Download_on_the_App_Store_blk_.svg';

export const metadata = {
  title: 'PRODUCTS | ozawakun.io',
};

export default function Page() {
  return (
    <div className="mx-4 sm:mx-20">
      <main>
        <section className='sm:mt-24 mb-36'>
          <PageTitle>PRODUCTS</PageTitle>
          <section id="products">
            <div className="flex flex-col sm:flex-row gap-y-8 sm:gap-y-0 sm:gap-x-8">
              <div className="uk-width-1-4@s uk-text-center justify-self-center text-center">
                <a href="https://itunes.apple.com/us/app/zakuni電卓/id1465087955?l=ja&ls=1&mt=8" className='inline-block text-center'>
                  <Image alt="zakuni電卓" className="shadow hover:shadow-sm rounded-3xl" src={zCalImg} width="170" />
                </a>
              </div>
              <div className="uk-width-3-4@s">
                <h5 className='mb-2'>
                  zakuni電卓
                </h5>
                <p>
                  ある日僕は思ったのです。電卓を作ってみよう、と。
                </p>
                <p>そしたら出来たのです。電卓が。</p>
                <div style={{paddingTop: '20px'}}>
                  <a href="https://itunes.apple.com/us/app/zakuni電卓/id1465087955?l=ja&ls=1&mt=8">
                    <Image alt='link to app store' src={appStoreImg} />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section id='legacy' className='mt-24'>
            <h3 className='text-xl mb-3'>LEGACY</h3>
            <p className='mb-12'>Something I made long long ago...</p>
            <div className="flex flex-col sm:flex-row gap-y-8 sm:gap-y-0 sm:gap-x-8">
              <div className="uk-width-1-4@s text-center">
                <a className="uk-link-reset" href="http://machiawase.herokuapp.com">
                  <div className="shadow hover:shadow-sm p-6 py-10 bg-white text-nowrap">
                    街合わせ
                  </div>
                </a>
              </div>
              <div className="uk-width-3-4@s">
                <h5 className='mb-2'>
                  街合わせ
                </h5>
                <p>
                  待ち合わせをするためのwebサービス。二つの場所の中間らへんの場所を教えてくれる。
                </p>
                <p>
                  電車の駅名を入れると中間らへんの駅を教えてくれるようにもしようかと思っていたが、そうこうしているうちに山形に引っ越し、車移動メインになったことで、サービス自体を使う機会がほぼ無くなった。
                </p>
              </div>
            </div>
            <hr className="my-12" />
            <div className="flex flex-col sm:flex-row gap-y-8 sm:gap-y-0 sm:gap-x-8">
              <div className="uk-width-1-4@s text-center">
                <a className="uk-link-reset" href="http://boy2man.herokuapp.com">
                  <div className="shadow hover:shadow-sm p-6 py-10 bg-white">
                    Boy2Man
                  </div>
                </a>
              </div>
              <div className="uk-width-3-4@s">
                <h5 className='mb-2'>
                  Boy2Man
                </h5>
                <p>
                  ジャンケンマン。
                </p>
                <p>
                  ユーザーが出す手を選択する → プログラムが出した手と対戦結果が帰ってくる、という作りにしたことで、イカサマを疑われても潔白の証明が難しくなった。
                </p>
              </div>
            </div>
            <hr className="my-12" />
            <div className="flex flex-col sm:flex-row gap-y-8 sm:gap-y-0 sm:gap-x-8">
              <div className="uk-width-1-4@s text-center">
                <a className="uk-link-reset" href="/smoothsnap/sample.html">
                  <div className="shadow hover:shadow-sm p-6 py-10 bg-white">
                    SmoothSnap
                  </div>
                </a>
              </div>
              <div className="uk-width-3-4@s">
                <h5 className='mb-2'>
                  SmoothSnap
                </h5>
                <p>
                  jQuery UIのプラグインとして作ったのだが、これからjQuery UIを使う人などもういない。
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
