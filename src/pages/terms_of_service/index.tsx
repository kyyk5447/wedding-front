import type { NextPage } from 'next';
import Head from 'next/head'

const Page: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <Head>
        <title>利用規約 - Your Company Name</title>
        <meta name="description" content="利用規約" />
      </Head>

      <div className="relative py-3 sm:max-w-4xl sm:mx-auto">
        <div className="absolute inset-0 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-semibold mb-6">利用規約</h1>
            <div className="prose prose-sm">
              <p>この利用規約（以下，「本規約」といいます。）は，ジャイアントキリング（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。</p>

              <h2 className="text-xl font-semibold mt-6 mb-2">第1条（適用）</h2>
              <ol className="list-decimal list-inside">
                <li>本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</li>
                <li>当社は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。</li>
                <li>本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。</li>
              </ol>

              <h2 className="text-xl font-semibold mt-6 mb-2">第2条（利用登録）</h2>
              <ol className="list-decimal list-inside">
                <li>本サービスにおいては，登録希望者が本規約に同意の上，当社の定める方法によって利用登録を申請し，当社がこれを承認することによって，利用登録が完了するものとします。</li>
                <li>当社は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。
                  <ol className="list-[lower-alpha] list-inside pl-4">
                    <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
                    <li>本規約に違反したことがある者からの申請である場合</li>
                    <li>その他，当社が利用登録を相当でないと判断した場合</li>
                  </ol>
                </li>
              </ol>

              <h2 className="text-xl font-semibold mt-6 mb-2">第3条（ユーザーIDおよびパスワードの管理）</h2>
              <ol className="list-decimal list-inside">
                <li>ユーザーは，自己の責任において，本サービスのユーザーIDおよびパスワードを適切に管理するものとします。</li>
                <li>ユーザーは，いかなる場合にも，ユーザーIDおよびパスワードを第三者に譲渡または貸与し，もしくは第三者と共用することはできません。当社は，ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には，そのユーザーIDを登録しているユーザー自身による利用とみなします。</li>
                <li>ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は，当社に故意又は重大な過失がある場合を除き，当社は一切の責任を負わないものとします。</li>
              </ol>

              <h2 className="text-xl font-semibold mt-6 mb-2">第4条（禁止事項）</h2>
              <p>ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。</p>
              <ol className="list-decimal list-inside">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為</li>
                <li>当社，ほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為</li>
                <li>本サービスによって得られた情報を商業的に利用する行為</li>
                <li>当社のサービスの運営を妨害するおそれのある行為</li>
                <li>不正アクセスをし，またはこれを試みる行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>不正な目的を持って本サービスを利用する行為</li>
                <li>本サービスの他のユーザーまたはその他の第三者に不利益，損害，不快感を与える行為</li>
                <li>他のユーザーに成りすます行為</li>
                <li>当社が許諾しない本サービス上での宣伝，広告，勧誘，または営業行為</li>
                <li>面識のない異性との出会いを目的とした行為</li>
                <li>当社のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>その他，当社が不適切と判断する行為</li>
              </ol>

              <h2 className="text-xl font-semibold mt-6 mb-2">第5条（本サービスの提供の停止等）</h2>
              <ol className="list-decimal list-inside">
                <li>当社は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                  <ol className="list-[lower-alpha] list-inside pl-4">
                    <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                    <li>地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合</li>
                    <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                    <li>その他，当社が本サービスの提供が困難と判断した場合</li>
                  </ol>
                </li>
                <li>当社は，本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。</li>
              </ol>

              <h2 className="text-xl font-semibold mt-6 mb-2">第6条（利用制限および登録抹消）</h2>
              <ol className="list-decimal list-inside">
                <li>当社は，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，ユーザーに対して，本サービスの全部もしくは一部の利用を制限し，またはユーザーとしての登録を抹消することができるものとします。
                  <ol className="list-[lower-alpha] list-inside pl-4">
                    <li>本規約のいずれかの条項に違反した場合</li>
                    <li>登録事項に虚偽の事実があることが判明した場合</li>
                    <li>料金等の支払債務の不履行があった場合</li>
                    <li>当社からの連絡に対し，一定期間返答がない場合</li>
                    <li>本サービスについて，最終の利用から一定期間利用がない場合</li>
                    <li>その他，当社が本サービスの利用を適当でないと判断した場合</li>
                  </ol>
                </li>
                <li>当社は，本条に基づき当社が行った行為によりユーザーに生じた損害について，一切の責任を負いません。</li>
              </ol>

              <h2 className="text-xl font-semibold mt-6 mb-2">第7条（退会）</h2>
              <p>ユーザーは，当社の定める退会手続により，本サービスから退会できるものとします。</p>

              <h2 className="text-xl font-semibold mt-6 mb-2">第8条（保証の否認および免責事項）</h2>
              <ol className="list-decimal list-inside">
                <li>当社は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</li>
                <li>当社は，本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意又は重過失による場合を除き、一切の責任を負いません。ただし，本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合，この免責規定は適用されません。</li>
                <li>前項ただし書に定める場合であっても，当社は，当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当社またはユーザーが損害発生につき予見し，または予見し得た場合を含みます。）について一切の責任を負いません。また，当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は，ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。</li>
                <li>当社は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。</li>
              </ol>

              <h2 className="text-xl font-semibold mt-6 mb-2">第9条（サービス内容の変更等）</h2>
              <p>当社は，ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。</p>

              <h2 className="text-xl font-semibold mt-6 mb-2">第10条（利用規約の変更）</h2>
              <ol className="list-decimal list-inside">
                <li>当社は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
                  <ol className="list-[lower-alpha] list-inside pl-4">
                    <li>本規約の変更がユーザーの一般の利益に適合するとき。</li>
                    <li>本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。</li>
                  </ol>
                </li>
                <li>当社はユーザーに対し、前項による本規約の変更にあたり、事前に、本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。</li>
              </ol>

              <h2 className="text-xl font-semibold mt-6 mb-2">第11条（個人情報の取扱い）</h2>
              <p>当社は，本サービスの利用によって取得する個人情報については，当社「プライバシーポリシー」に従い適切に取り扱うものとします。</p>

              <h2 className="text-xl font-semibold mt-6 mb-2">第12条（通知または連絡）</h2>
              <p>ユーザーと当社との間の通知または連絡は，当社の定める方法によって行うものとします。当社は,ユーザーから,当社が別途定める方式に従った変更届け出がない限り,現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い,これらは,発信時にユーザーへ到達したものとみなします。</p>

              <h2 className="text-xl font-semibold mt-6 mb-2">第13条（権利義務の譲渡の禁止）</h2>
              <p>ユーザーは，当社の書面による事前の承諾なく，利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し，または担保に供することはできません。</p>

              <h2 className="text-xl font-semibold mt-6 mb-2">第14条（準拠法・裁判管轄）</h2>
              <ol className="list-decimal list-inside">
                <li>本規約の解釈にあたっては，日本法を準拠法とします。</li>
                <li>本サービスに関して紛争が生じた場合には，当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</li>
              </ol>

              <p className="mt-6">以上</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Page;