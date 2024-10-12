import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageTitle from '@/components/PageTitle'
import gekkoImg from '@/public/images/gekko.png';
import sketchParticleImg from '@/public/images/sketch_particle.png';
import sakurafubukiImg from '@/public/images/sakurafubuki.png';
import chirimomijiImg from '@/public/images/chirimomiji.png';

export const metadata: Metadata = {
  title: 'Gallery | ozawakun.io',
};

export default function Page() {
  return (
    <div className="mx-4 sm:mx-20">
      <main>
        <section id="gallery" className="uk-section">
          <PageTitle>Gallery</PageTitle>
          <section id='photos' className='mb-32'>
            <h3 className='text-xl tracking-wide mb-8'>Photos</h3>
            <div>
              <div className='lr_embed' style={{position: 'relative', paddingBottom: '50%', height: 0, overflow: 'hidden'}}>
                <iframe id='iframe' src='https://lightroom.adobe.com/embed/shares/71663dcf01b0433193bbc0d6f04e04f8/slideshow?background_color=%232D2D2D&color=%23999999' frameBorder='0' style={{width:'100%', height:'100%', position: 'absolute', top:0, left:0}}></iframe>
              </div>
              <div className="uk-align-right uk-margin-small">
                <Link href="https://portfolio.ozawakun.io" className='uk-link-text'>Some more photos are available<span uk-icon="arrow-right" className='align-text-bottom'></span></Link>
              </div>
            </div>
          </section>
          <section id="something">
            <h3 className="text-xl tracking-wide mb-14">
              Something
            </h3>
            <div className="flex flex-col sm:flex-row place-items-center text-[#101010]" data-uk-grid>
              <div className="basis-1/4 uk-text-center">
                <a href="https://editor.p5js.org/zakuni/full/ryqQseOYM">
                  <Image alt="sketch gekko" className="uk-box-shadow-medium uk-box-shadow-hover-large" src={gekkoImg} width="200" />
                </a>
              </div>
              <div className="basis-3/4">
                <p>
                  p5.jsで発光表現の練習するぞと思って作ってみた、月です。
                </p>
                <p>
                  <a href="https://editor.p5js.org/zakuni/sketches/ryqQseOYM" className='text-[#808080] hover:text-gray-900 hover:no-underline'>ソースはこちら</a>。
                </p>
                <p>あと、<a href="https://editor.p5js.org/zakuni/full/S1uBsjMYM" className='text-[#808080] hover:text-gray-900 hover:no-underline'>オマケ</a>。作り始めがこれはこれで味のある感じだっので取っといた。<a href="https://editor.p5js.org/zakuni/sketches/S1uBsjMYM" className='text-[#808080] hover:text-gray-900 hover:no-underline'>ソース</a>もとても適当で、申し訳程度に雲に動きをつけてあります。</p>
              </div>
            </div>
            <hr className="my-12" />
            <div className="flex flex-col sm:flex-row place-items-center text-[#101010]" uk-grid="">
              <div className="basis-1/4 uk-text-center">
                <a href="https://editor.p5js.org/zakuni/full/r1kK6YVqf">
                  <Image alt="sketch particle" className="uk-box-shadow-medium uk-box-shadow-hover-large" src={sketchParticleImg} width="200" />
                </a>
              </div>
              <div className="basis-3/4">
                <p>
                  こちらも発光表現の練習に作ってみたサムシング。
                </p>
                <p>
                  ソースは<a href="https://editor.p5js.org/zakuni/sketches/r1kK6YVqf" className='text-[#808080] hover:text-gray-900 hover:no-underline'>こちら</a>。
                </p>
              </div>
            </div>
            <hr className="my-12" />
            <div className="flex flex-col sm:flex-row place-items-center text-[#101010]" uk-grid="">
              <div className="basis-1/4">
                <a href="/chirimomiji/index.html">
                  <Image alt="chirimomiji" className="uk-box-shadow-medium uk-box-shadow-hover-large" src={chirimomijiImg} width="200" />
                </a>
              </div>
              <div className="basis-3/4">
                <h5 className='text-md mb-2'>
                  散り紅葉
                </h5>
                <p>
                  one divとかsingle divとか呼ばれる、divタグ一つにCSSだけで絵を描く試み。葉っぱ一枚が一つのdivタグ。紅葉を降らせているのはJSです。
                </p>
              </div>
            </div>
            <hr className="my-12" />
            <div className="flex flex-col sm:flex-row place-items-center text-[#101010]" uk-grid="">
              <div className="basis-1/4">
                <a href="/sakurafubuki/index.html">
                  <Image alt="sakurafubuki" className="uk-box-shadow-medium uk-box-shadow-hover-large" src={sakurafubukiImg} width="200" />
                </a>
              </div>
              <div className="basis-3/4">
                <h5 className='text-md mb-2'>
                  桜吹雪
                </h5>
                <p>
                  散り紅葉と同じく、single div。こっちの方が後に作ったが、こっちの方が形が簡単。
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
