"use client"

import { useState } from "react"
import Link from "next/link"
import { Zap, Wallet, Gamepad2, Users, Code, Home, Presentation, Newspaper } from "lucide-react"
import { useLanguage } from "../../hooks/use-language"
import { LanguageSwitcher } from "../../components/language-switcher"
import { useMobile } from "../../hooks/use-mobile"
import { MobileNavigation } from "../../components/mobile-navigation"

export default function TechPage() {
  const { language } = useLanguage()
  const [homeHover, setHomeHover] = useState(false)
  const [teamHover, setTeamHover] = useState(false)
  const [deckHover, setDeckHover] = useState(false)
  const [newsHover, setNewsHover] = useState(false)
  const isMobile = useMobile()

  // 技術情報の定義
  const techData = [
    {
      id: "predy",
      name: "Predy",
      subtitle: language === "en" ? "DeFi Derivatives" : "DeFiデリバティブ",
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      description:
        language === "en"
          ? "Making gamma short strategies accessible to everyone in DeFi. Enabling on-chain delta-neutral position management using CFMM (automated market makers)."
          : "DeFiにおけるガンマショート戦略を誰でも使えるようにすること。CFMMを使って、オンチェーンでデルタニュートラルなポジション管理を可能にする。",
      features:
        language === "en"
          ? [
              "Perpetual gamma short",
              "Automatic pair token borrowing for risk mitigation",
              "Smart contract-based market making",
            ]
          : [
              "永続的なガンマショート",
              "ペアトークンの自動借入によるリスク抑制",
              "スマートコントラクトによるマーケットメイク",
            ],
      target:
        language === "en"
          ? ["Advanced DeFi users", "Arbitrageurs, traders, and operators"]
          : ["高度なDeFiユーザー", "アービトラージャー、トレーダー、運用者"],
      gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
      accentColor: "cyan-400",
    },
    {
      id: "prex",
      name: "Prex",
      subtitle: language === "en" ? "Wallet as a Service" : "Wallet as a Service",
      icon: <Wallet className="w-8 h-8 text-purple-400" />,
      description:
        language === "en"
          ? "Leveraging insights from Predy to solve blockchain UX challenges. Providing a no-code wallet integration service to lower the barrier for Web3 app development."
          : "Predyで得た知見を活かし、ブロックチェーンのUX課題を解消。ノーコードでウォレットを組み込めるサービスを提供することで、トークンを活用したWeb3アプリ開発の敷居を下げる。",
      features:
        language === "en"
          ? [
              "Create and sign wallets with passkeys",
              "Send ERC20 tokens via websites or SNS",
              "Pay gas fees with credit cards via Stripe",
              "Transaction APIs (send, swap, NFT trading)",
            ]
          : [
              "パスキーでウォレットを作成・署名可能",
              "WebサイトやSNS経由でERC20トークンを送れる",
              "Stripe連携でガス代をクレカ払い",
              "取引API（送信、Swap、NFT取引など）を提供",
            ],
      target:
        language === "en"
          ? ["Companies issuing tokens", "Frontend engineers", "Web3 developers looking to reduce development costs"]
          : ["トークンを発行している企業", "フロントエンドエンジニア", "開発工数を削減したいWeb3開発者"],
      gradient: "from-purple-500/20 via-fuchsia-500/20 to-pink-500/20",
      accentColor: "purple-400",
    },
    {
      id: "pumpum",
      name: "pumpum",
      subtitle: language === "en" ? "Next-Gen Web3 Native App" : "次世代Web3ネイティブアプリ",
      icon: <Gamepad2 className="w-8 h-8 text-pink-400" />,
      description:
        language === "en"
          ? "Utilizing Prex as infrastructure to provide a Web3 native app where anyone can 'send, receive, and play' with tokens. Incorporating SNS-like and game-like elements to reach a wider user base."
          : "Prexをインフラとして活用し、誰でもトークンを「送る・受け取る・遊ぶ」体験を提供するWeb3ネイティブアプリを展開。SNS的・ゲーム的な要素を取り入れ、より広いユーザー層にリーチする。",
      features:
        language === "en"
          ? [
              "Receive USDC or NFTs with just a click",
              "Distribute benefits at stores using QR codes or URLs",
              "Earn tokens in mini-games (Play2Earn)",
            ]
          : [
              "リンクをクリックするだけでUSDCやNFTを受け取れる",
              "QRコードやURLを使って店舗で特典を配布",
              "ミニゲーム内でのトークン獲得（Play2Earn要素）",
            ],
      target:
        language === "en"
          ? [
              "General users (including Web3 beginners)",
              "Companies considering marketing applications",
              "Event and community organizers",
            ]
          : ["一般ユーザー（Web3初心者含む）", "マーケティング活用を考える企業", "イベントやコミュニティ運営者"],
      gradient: "from-pink-500/20 via-red-500/20 to-orange-500/20",
      accentColor: "pink-400",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white p-8 relative overflow-hidden">
      {/* サイバーパンク風の背景エフェクト */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500 rounded-full filter blur-[150px] opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500 rounded-full filter blur-[150px] opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid-pattern opacity-5"></div>
      </div>

      {/* 言語切り替えボタン */}
      <LanguageSwitcher />

      {/* ナビゲーションメニュー - モバイルとデスクトップで分岐 */}
      {isMobile ? (
        <div className="absolute top-4 left-4 z-50">
          <MobileNavigation />
        </div>
      ) : (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 flex space-x-4">
          <Link href="/">
            <div
              className="group relative"
              onMouseEnter={() => setHomeHover(true)}
              onMouseLeave={() => setHomeHover(false)}
            >
              <div
                className={`px-4 py-2 bg-black/50 backdrop-blur-sm border ${homeHover ? "border-cyan-400" : "border-white/10"} rounded-md flex items-center space-x-2 transition-colors`}
              >
                <Home size={16} className={`${homeHover ? "text-cyan-400" : "text-white/70"} transition-colors`} />
                <span
                  className={`text-sm font-medium ${homeHover ? "text-cyan-400" : "text-white/70"} transition-colors`}
                >
                  {language === "en" ? "HOME" : "ホーム"}
                </span>
              </div>
            </div>
          </Link>

          <Link href="/news">
            <div
              className="group relative"
              onMouseEnter={() => setNewsHover(true)}
              onMouseLeave={() => setNewsHover(false)}
            >
              <div
                className={`px-4 py-2 bg-black/50 backdrop-blur-sm border ${newsHover ? "border-cyan-400" : "border-white/10"} rounded-md flex items-center space-x-2 transition-colors`}
              >
                <Newspaper size={16} className={`${newsHover ? "text-cyan-400" : "text-white/70"} transition-colors`} />
                <span
                  className={`text-sm font-medium ${newsHover ? "text-cyan-400" : "text-white/70"} transition-colors whitespace-nowrap`}
                >
                  {language === "en" ? "NEWS" : "ニュース"}
                </span>
              </div>
            </div>
          </Link>

          <div className="px-4 py-2 bg-black/70 backdrop-blur-sm border border-cyan-400 rounded-md flex items-center space-x-2">
            <Code size={16} className="text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400 whitespace-nowrap">
              {language === "en" ? "PRODUCTS" : "プロダクト"}
            </span>
          </div>

          <Link href="/team">
            <div
              className="group relative"
              onMouseEnter={() => setTeamHover(true)}
              onMouseLeave={() => setTeamHover(false)}
            >
              <div
                className={`px-4 py-2 bg-black/50 backdrop-blur-sm border ${teamHover ? "border-cyan-400" : "border-white/10"} rounded-md flex items-center space-x-2 transition-colors`}
              >
                <Users size={16} className={`${teamHover ? "text-cyan-400" : "text-white/70"} transition-colors`} />
                <span
                  className={`text-sm font-medium ${teamHover ? "text-cyan-400" : "text-white/70"} transition-colors whitespace-nowrap`}
                >
                  {language === "en" ? "TEAM" : "チーム"}
                </span>
              </div>
            </div>
          </Link>

          <Link href="/deck" target="_blank" rel="noopener noreferrer">
            <div
              className="group relative"
              onMouseEnter={() => setDeckHover(true)}
              onMouseLeave={() => setDeckHover(false)}
            >
              <div
                className={`px-4 py-2 bg-black/50 backdrop-blur-sm border ${deckHover ? "border-cyan-400" : "border-white/10"} rounded-md flex items-center space-x-2 transition-colors`}
              >
                <Presentation
                  size={16}
                  className={`${deckHover ? "text-cyan-400" : "text-white/70"} transition-colors`}
                />
                <span
                  className={`text-sm font-medium ${deckHover ? "text-cyan-400" : "text-white/70"} transition-colors whitespace-nowrap`}
                >
                  {language === "en" ? "DECK" : "デッキ"}
                </span>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* ヘッダー */}
      <div className="relative z-10 pt-20 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4">
            <div className="relative">
              <h1 className="text-5xl font-bold text-white mb-2 relative z-10">
                {language === "en" ? "OUR PRODUCTS" : "プロダクト"}
              </h1>
              <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-cyan-400/50"></div>
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-[2px] bg-cyan-400"></div>
            </div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto tracking-wide">
            {language === "en"
              ? "Innovative blockchain products powering the next generation of financial applications"
              : "次世代の金融アプリケーションを支える革新的なブロックチェーンプロダクト"}
          </p>
        </div>
      </div>

      {/* 技術カード */}
      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {techData.map((tech, index) => (
          <div key={tech.id} className="relative">
            {/* 背景グラデーション */}
            <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} rounded-2xl opacity-30 blur-sm`}></div>

            <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300 overflow-hidden">
              {/* デコレーティブなグリッドパターン */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

              {/* ヘッダー部分 */}
              <div className="flex flex-col md:flex-row md:items-center mb-6 gap-4">
                <div className={`w-16 h-16 rounded-xl bg-${tech.accentColor}/10 flex items-center justify-center`}>
                  {tech.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{tech.name}</h2>
                  <p className={`text-${tech.accentColor} text-lg`}>{tech.subtitle}</p>
                </div>
              </div>

              {/* 説明文 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-white/80">{language === "en" ? "Purpose" : "目的"}</h3>
                <p className="text-gray-300 leading-relaxed">{tech.description}</p>
              </div>

              {/* 特徴 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-white/80">{language === "en" ? "Features" : "特徴"}</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tech.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full bg-${tech.accentColor} mt-2 mr-2`}></span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ターゲット */}
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white/80">
                  {language === "en" ? "Target Users" : "ターゲット"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.target.map((target, i) => (
                    <span
                      key={i}
                      className={`inline-block px-3 py-1 rounded-full bg-${tech.accentColor}/10 border border-${tech.accentColor}/30 text-${tech.accentColor} text-sm`}
                    >
                      {target}
                    </span>
                  ))}
                </div>
              </div>

              {/* 装飾的な要素 */}
              <div
                className={`absolute -bottom-6 -right-6 w-32 h-32 bg-${tech.accentColor} rounded-full filter blur-[80px] opacity-10`}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* フッター */}
      <div className="mt-20 text-center text-gray-500 text-sm relative z-10">
        <p>
          {language === "en"
            ? "© 2025 Teliha Limited. Revolutionizing value transfer through blockchain technology."
            : "© 2025 株式会社Teliha. ブロックチェーンで金融の未来を創造する。"}
        </p>
      </div>
    </div>
  )
}
