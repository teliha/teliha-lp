"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function FCRyukyuPartnershipAnnouncement() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/news" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
            <ChevronLeft className="h-4 w-4 mr-1" />
            ニュース一覧に戻る
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8">
        <article className="prose prose-lg max-w-none">
          {/* ヘッダー部分 */}
          <div className="border-b border-gray-200 pb-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">プレスリリース</span>
              <time className="text-gray-500">2024年11月22日</time>
            </div>
            <h1 className="text-4xl font-bold leading-tight mb-6">
              Teliha株式会社のPrexサービス、FC琉球の新ファンプラットフォーム「FCR COIN.」に採用
            </h1>
          </div>

          {/* メインビジュアル */}
          <div className="relative w-full aspect-video mb-12 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/news/image_FCR.png"
              alt="FC琉球とTelihaの提携"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          {/* 概要セクション */}
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">概要</h2>
            <p className="text-lg leading-relaxed">
              Teliha株式会社(以下、Teliha)は、同社のブロックチェーン技術を活用したサービス「Prex」が、
              株式会社FC琉球(以下、FC琉球)の新サービス「FC琉球応援プラットフォーム FCR COIN.」に採用されたことをお知らせいたします。
              本サービスは、Prexの第一号採用事例となります。
            </p>
          </div>

          {/* Prexサービスリンク */}
          <div className="bg-blue-50 p-6 rounded-lg mb-12 flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-4 sm:mb-0">
              <h3 className="font-bold text-lg mb-2">Prexサービスについて</h3>
              <p className="text-gray-600">
                Prexの詳細な機能や特長については、公式サイトをご覧ください。
              </p>
            </div>
            <a
              href="https://www.prex0.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Prexを見る
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Prexサービスの特長と価値 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Prexサービスの特長と価値</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4">アプリケーション開発者向け機能</h3>
                <p className="mb-4">Prexは、ブロックチェーンアプリケーションの開発者に以下の価値を提供します：</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>開発の効率化：</strong>Prexのコンポーネントを利用することで、UI/フロントエンド部分との完全な分業が可能となります。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>専門知識不要：</strong>ブロックチェーンの専門知識がなくてもフロントエンド開発が可能になります。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>開発期間の短縮：</strong>ブロックチーン技術の複雑さを抽象化することで、より迅速かつ効率的なアプリケーション開発が実現します。</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4">エンドユーザー向け機能</h3>
                <p className="mb-4">Prexを用いて開発されたアプリケーションにより、エンドユーザーは以下の体験が可能になります：</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Gasless Transactions:</strong>ユーザーはETH等のブロックチェーンネイティブトークンを自ら取得する必要がありません。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Passkey Wallet:</strong>MetaMask等の外部ウォレットアプリケーションのインストールが不要です。</span>
                  </li>
                </ul>
                <p className="mt-4 text-gray-600">
                  これらの機能により、エンドユーザーは暗号資産の知識や経験がなくても、
                  ブロックチェーン技術を活用したサービスをシームレスに利用することが可能になります。
                </p>
              </div>
            </div>
          </section>

          {/* FC琉球応援プラットフォーム FCR COIN.について */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">FC琉球応援プラットフォーム FCR COIN.について</h2>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="mb-4">
                「FC琉球応援プラットフォーム FCR COIN.」は、面白法人カヤック社がUI/フロントエンド部分を担当し、
                TelihaがバックエンドとしてPrexを提供する形で開発されました。FCRはイーサリアムで発行され、
                Layer2にブリッジされてプラットフォーム上で利用されます。
              </p>
              <p className="text-gray-600">
                将来的に、GMOコイン等の取引所がLayer2の入庫に対応次第、
                ユーザーが取得したFCRを取引所等へ送付することが可能になる予定です。
              </p>
            </div>
          </section>

          {/* FC琉球 ホーム最終戦キャンペーン */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">FC琉球 ホーム最終戦キャンペーン</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="mb-4">2024年11月24日に開催されるFC琉球ホーム最終戦にて、以下のキャンペーンを実施予定です：</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-600 text-white rounded-full mr-3">1</span>
                  <span>新規アカウント登録者に5,000FCRを付与</span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-600 text-white rounded-full mr-3">2</span>
                  <span>グッズショップでの購入者に5,000FCRを付与</span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-600 text-white rounded-full mr-3">3</span>
                  <span>FC琉球勝利時、全登録ユーザーに10,000FCRを付与</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 今後の展望 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">今後の展望</h2>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-lg leading-relaxed">
                TelihaとFC琉球は、本パートナーシップを通じて、スポーツファンのエンゲージメント向上と
                ブロックチェーン技術の実用化を推進してまいります。今後も両社は密接に連携し、
                革新的なファンサービスの開発と提供に取り組んでまいります。
              </p>
            </div>
          </section>

          {/* 各社コメント */}
           <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">各社コメント</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-lg italic mb-4 leading-relaxed">
                  FC琉球様との協業により、Prexの実用化という大きな一歩を踏み出せたことを大変嬉しく思います。本サービスを通じて、ブロックチェーン技術の可能性を多くの方々に体感していただけることを期待しています。
                </p>
                <p className="font-semibold text-right">
                  - Teliha株式会社 代表取締役CEO 部谷 修平
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-lg italic mb-4 leading-relaxed">
                  Prexを利用することで、ブロックチェーン技術の複雑さが抽象化され、UI/フロントエンド開発が大幅に簡素化されました。これにより、開発期間を大幅に短縮することができ、より迅速にサービスを提供することが可能になりました。Prexは、ブロックチェーン技術を活用したアプリケーション開発の新たな可能性を開いたと言えるでしょう。
                </p>
                <p className="font-semibold text-right">
                  - 面白法人カヤック すぱいす
                </p>
              </div>
            </div>
          </section> 

          {/* 会社概要 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">会社概要</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Teliha株式会社</h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-gray-600">所在地</dt>
                    <dd>福岡県福岡市</dd>
                  </div>
                  <div>
                    <dt className="text-gray-600">設立</dt>
                    <dd>2021年7月</dd>
                  </div>
                  <div>
                    <dt className="text-gray-600">代表者</dt>
                    <dd>代表取締役CEO 部谷 修平</dd>
                  </div>
                  <div>
                    <dt className="text-gray-600">事業内容</dt>
                    <dd>ブロックチェーン関連サービスの開発・提供</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4">琉球フットボールクラブ株式会社</h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-gray-600">所在地</dt>
                    <dd>沖縄県沖縄市</dd>
                  </div>
                  <div>
                    <dt className="text-gray-600">設立</dt>
                    <dd>2013年5月</dd>
                  </div>
                  <div>
                    <dt className="text-gray-600">代表者</dt>
                    <dd>代表取締役社長　柳澤　大輔</dd>
                  </div>
                  <div>
                    <dt className="text-gray-600">事業内容</dt>
                    <dd>プロサッカーチームの運営及び関連事業</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          {/* お問い合わせ */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">本プレスリリースに関するお問い合わせ</h2>
            <div className="space-y-2">
              <p className="font-semibold">Teliha株式会社</p>
              <p>Email:  support@prex0.com </p>
              <p></p>
            </div>
          </section>
        </article>
      </main>
    </div>
  )
}
