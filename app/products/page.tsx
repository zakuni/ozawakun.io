import Image from 'next/image';
import PageTitle from '@/components/PageTitle'
import zCalImg from '@/public/images/z-cal.png';
import deepfryTimerIcon from '@/public/images/deepfry-timer_icon.png';
import appStoreImg from '@/public/images/Download_on_the_App_Store_blk_.svg';

export const metadata = {
  title: 'Products | ozawakun.io',
};

export default function Page() {
  return (
    <div className="mx-4 sm:mx-20">
      <main>
        <section className='mt-12 sm:mt-24 mb-36'>
          <PageTitle>Products</PageTitle>
          <section id="products">
            <article className="flex flex-col sm:flex-row place-items-center gap-y-8 sm:gap-y-0 sm:gap-x-8">
              <div className="w-1/4 uk-text-center justify-self-center text-center">
                <a href="https://apps.apple.com/jp/app/%E6%8F%9A%E3%81%92%E7%89%A9%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC/id6736895253" target='_blank' className='inline-block text-center'>
                  <Image alt="揚げ物タイマーのアイコン" className="shadow-lg hover:shadow-sm rounded-3xl" src={deepfryTimerIcon} width="170" />
                </a>
              </div>
              <div className="w-3/4">
                <h5 className='mb-2'>
                  揚げ物タイマー
                </h5>
                <p>
                  当初はzakuniシリーズにしようかと思っていたのですが、よりニッチなところを攻めることにしました。
                </p>
                <p>小さいものをとにかくリリース、と考えた結果でもあります。</p>
                <p>一方で、初めてSwiftUIを使って作ったアプリで、すなわち僕が初めてXcodeで開発〜リリースまでしたアプリということになります。</p>
                <p>大学の頃に初めてiPhoneアプリを作ってみたいと思ってから、XcodeとInterface Builderに悩まされ、Objective-C、MacRuby、PhoneGap、Swift(はあんま触れてないけど)などを経て、時にはApp Storeのレビューで跳ね返されたまま公開せずに終わったアプリなんかもあったけども、今やほんの数日で作り始めからリリースまでできるようになりました。思えば遠くへ来たものです、僕も、Xcodeも。</p>
                <div style={{paddingTop: '20px'}}>
                  <a href="https://apps.apple.com/jp/app/%E6%8F%9A%E3%81%92%E7%89%A9%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC/id6736895253" target='_blank'>
                    <Image alt='link to app store' src={appStoreImg} />
                  </a>
                </div>
              </div>
            </article>
            <hr className="my-12" />
            <article className="flex flex-col sm:flex-row place-items-center gap-y-8 sm:gap-y-0 sm:gap-x-8">
              <div className="w-1/4 justify-self-center text-center">
                <a className="block cursor-pointer hover:no-underline hover:text-gray-600" href="https://zakuni-components.pages.dev" target='_blank'>
                  <div className="shadow hover:shadow-sm p-6 py-10 bg-white">
                    zakuni components
                  </div>
                </a>
              </div>
              <div className="w-3/4">
                <h5 className='mb-2'>
                  zakuni components
                </h5>
                <p>
                  コンポーネント集を作りたいなとは以前から思っていたのです、デザインシステムとかね。
                </p>
                <p>
                  そう思いながら早幾年。こういうものはきっと作り始めなければ始まらない、なので作り始めました。
                </p>
                <p>
                  そして作り始めたなら公開してしまえばいい。今後少しずつ増やしていったりアップデートしていければいいですよね。
                </p>
              </div>
            </article>
            <hr className="my-12" />
            <article className="flex flex-col sm:flex-row place-items-center gap-y-8 sm:gap-y-0 sm:gap-x-8">
              <div className="w-1/4 uk-text-center justify-self-center text-center">
                <a href="https://itunes.apple.com/us/app/zakuni電卓/id1465087955?l=ja&ls=1&mt=8" className='inline-block text-center' target='_blank'>
                  <Image alt="zakuni電卓のアイコン" className="shadow hover:shadow-sm rounded-3xl" src={zCalImg} width="170" />
                </a>
              </div>
              <div className="w-3/4">
                <h5 className='mb-2'>
                  zakuni電卓
                </h5>
                <p>
                  ある日僕は思ったのです。電卓を作ってみよう、と。
                </p>
                <p>そしたら出来たのです。電卓が。</p>
                <div style={{paddingTop: '20px'}}>
                  <a href="https://itunes.apple.com/us/app/zakuni電卓/id1465087955?l=ja&ls=1&mt=8" target='_blank'>
                    <Image alt='link to app store' src={appStoreImg} />
                  </a>
                </div>
              </div>
            </article>
          </section>
          <section id='legacy' className='mt-24'>
            <h3 className='text-xl tracking-wide mb-3'>Legacy</h3>
            <p className='mb-12'>Something I made long, long ago...</p>
            <div className="flex flex-col sm:flex-row place-items-center gap-y-8 sm:gap-y-0 sm:gap-x-8">
              <div className="w-1/4 text-center">
                <div className="p-6 py-10 bg-gray-100 text-nowrap">
                  街合わせ
                </div>
              </div>
              <div className="w-3/4">
                <h5 className='mb-2'>
                  街合わせ(公開停止)
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
            <div className="flex flex-col sm:flex-row place-items-center gap-y-8 sm:gap-y-0 sm:gap-x-8">
              <div className="w-1/4 text-center">
                <div className="p-6 py-10 bg-gray-100">
                  Boy2Man
                </div>
              </div>
              <div className="w-3/4">
                <h5 className='mb-2'>
                  Boy2Man(公開停止)
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
            <div className="flex flex-col sm:flex-row place-items-center gap-y-8 sm:gap-y-0 sm:gap-x-8">
              <div className="w-1/4 text-center">
                <a className="uk-link-reset" href="/smoothsnap/sample.html">
                  <div className="shadow hover:shadow-sm p-6 py-10 bg-white">
                    SmoothSnap
                  </div>
                </a>
              </div>
              <div className="w-3/4">
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
