import PageTitle from '@/components/PageTitle'

const PrivacyPolicyPage = () => (
  <div className="mx-auto px-10 sm:w-3/4 box-border max-w-full mt-0">
    <main>
      <section id="about" className="py-[70px] flow-root mb-0">
        <PageTitle>Privacy Policy</PageTitle>
        <div className="mb-10">
          <p>
            第三者に個人を特定できる情報を提供することはありません。
          </p>
          <p>
            利便性の向上を目的として、個人を特定しない範囲にて、利用状況の収集を行うことがあります。
          </p>
          <p>
            個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。
          </p>
        </div>
      </section>
    </main>
  </div>
)
export default PrivacyPolicyPage;
