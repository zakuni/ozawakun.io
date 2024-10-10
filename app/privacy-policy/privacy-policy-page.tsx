import PageTitle from '@/components/PageTitle'

const PrivacyPolicyPage = () => (
  <div className="uk-container uk-container-small uk-width-3-4@s uk-margin-remove-top">
    <main>
      <section id="about" className="uk-section uk-margin-remove-bottom">
        <PageTitle>Privacy Policy</PageTitle>
        <div className="uk-margin-medium-bottom">
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
