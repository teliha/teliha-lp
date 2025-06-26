"use client"

import { useState } from "react"
import Link from "next/link"
import { Code, Users, Home, Mail, MapPin, Calendar, Presentation, Newspaper } from "lucide-react"
import { useLanguage } from "../../hooks/use-language"
import { LanguageSwitcher } from "../../components/language-switcher"
import { useMobile } from "../../hooks/use-mobile"
import { MobileNavigation } from "../../components/mobile-navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

export default function TeamPage() {
  const { language } = useLanguage()
  const [homeHover, setHomeHover] = useState(false)
  const [techHover, setTechHover] = useState(false)
  const [deckHover, setDeckHover] = useState(false)
  const isMobile = useMobile()
  const [newsHover, setNewsHover] = useState(false)

  // チームメンバーデータ
  const teamMembers = [
    {
      id: "shuhei",
      name: language === "en" ? "Shuhei Hiya" : "部谷 修平",
      role: "CEO",
      image: "/images/shuhei-avatar.png",
      twitterUrl: "https://x.com/syuhei176",
      bio:
        language === "en"
          ? "Selected for the MITOU Program while at Kyushu University. Certified as a Super Creator."
          : "九州大学在籍時未踏ース採択。スーパークリエター認定。",
    },
    {
      id: "noriaki",
      name: language === "en" ? "Noriaki Ibe" : "伊部 紀昭",
      role: "COO",
      image: "/images/ibe-avatar.png",
      twitterUrl: "https://x.com/ibeibe__",
      bio:
        language === "en"
          ? "Former Director of the Indonesian Futures Exchange Clearing House."
          : "元インドネシア先物商品取引所クリアリング機構取締役。",
    },
    {
      id: "wataru",
      name: language === "en" ? "Wataru Shinohara" : "篠原 航",
      role: language === "en" ? "Senior Engineer" : "シニアエンジニア",
      image: "/images/wataru-avatar.png",
      twitterUrl: "https://x.com/shinanonozenji_",
      bio:
        language === "en"
          ? "Author of 'Blockchain Application Development Textbook' and other publications."
          : "著書「ブロックチェーンアプリケーション開発の教科書」等。",
    },
  ]

  // Twitterリンクをクリックするハンドラー
  const handleTwitterClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  // メールリンクをクリックするハンドラー
  const handleMailClick = (email: string) => {
    window.location.href = `mailto:${email}`
  }

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
                  className={`text-sm font-medium ${homeHover ? "text-cyan-400" : "text-white/70"} transition-colors whitespace-nowrap`}
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

          <Link href="/tech">
            <div
              className="group relative"
              onMouseEnter={() => setTechHover(true)}
              onMouseLeave={() => setTechHover(false)}
            >
              <div
                className={`px-4 py-2 bg-black/50 backdrop-blur-sm border ${techHover ? "border-cyan-400" : "border-white/10"} rounded-md flex items-center space-x-2 transition-colors`}
              >
                <Code size={16} className={`${techHover ? "text-cyan-400" : "text-white/70"} transition-colors`} />
                <span
                  className={`text-sm font-medium ${techHover ? "text-cyan-400" : "text-white/70"} transition-colors whitespace-nowrap`}
                >
                  {language === "en" ? "PRODUCTS" : "プロダクト"}
                </span>
              </div>
            </div>
          </Link>

          <div className="px-4 py-2 bg-black/70 backdrop-blur-sm border border-cyan-400 rounded-md flex items-center space-x-2">
            <Users size={16} className="text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400 whitespace-nowrap">
              {language === "en" ? "TEAM" : "チーム"}
            </span>
          </div>

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
                {language === "en" ? "OUR TEAM" : "チーム"}
              </h1>
              <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-cyan-400/50"></div>
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-[2px] bg-cyan-400"></div>
            </div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto tracking-wide">
            {language === "en"
              ? "Meet the visionaries behind our blockchain revolution"
              : "ブロックチェーン革命を牽引するビジョナリーたち"}
          </p>
        </div>
      </div>

      {/* チームメンバーグリッド - シンプルなカードデザイン */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {teamMembers.map((member) => (
          <div key={member.id} className="group relative">
            <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
              {/* デコレーティブなグリッドパターン */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5 rounded-xl"></div>

              <div className="flex items-start space-x-4">
                {/* Avatarコンポーネントを使用 */}
                <Avatar className="h-16 w-16 border-2 border-cyan-400/20">
                  <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback className="bg-cyan-400/10 text-cyan-400">{member.name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-bold text-white">{member.name}</h2>
                      <p className="text-cyan-400 text-sm font-medium">{member.role}</p>
                    </div>
                    {/* Twitterアイコンをボタンに変更し、クリック領域を拡大 */}
                    <button
                      onClick={() => handleTwitterClick(member.twitterUrl)}
                      className="p-2 -m-2 text-gray-400 hover:text-cyan-400 transition-colors z-20 relative"
                      aria-label={`${member.name}'s X profile`}
                    >
                      <img
                        src="/images/x-logo.svg"
                        alt="X"
                        className="w-4 h-4 filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </button>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>

              {/* デコレーティブなエフェクト */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-400/5 rounded-bl-full"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-500 rounded-full filter blur-[60px] opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
            </div>
          </div>
        ))}
      </div>

      {/* 会社情報セクション */}
      <div className="mt-24 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block">
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-2 relative z-10">
                {language === "en" ? "COMPANY" : "会社概要"}
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-cyan-400/50"></div>
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-[1px] bg-cyan-400"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 会社情報 */}
          <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
            {/* デコレーティブなグリッドパターン */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 rounded-xl"></div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {language === "en" ? "Teliha Limited" : "株式会社Teliha"}
                </h3>
              </div>

              <div className="flex items-start space-x-3">
                <Calendar className="text-cyan-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    {language === "en" ? "Established: July 12, 2021" : "設立: 2021年（令和3年）7月12日"}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="text-cyan-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    {language === "en"
                      ? "2-6-11 Daimyo, Chuo-ku, Fukuoka 810-0041"
                      : "〒810-0041 福岡市中央区大名2-6-11"}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="text-cyan-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                <button
                  onClick={() => handleMailClick("info@teliha.jp")}
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  info@teliha.jp
                </button>
              </div>
            </div>

            {/* デコレーティブなエフェクト */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-400/5 rounded-bl-full"></div>
          </div>

          {/* オフィス画像 */}
          <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300">
            <div className="relative h-full w-full flex items-center justify-center p-4">
              <Image
                src="/images/office.png"
                alt={language === "en" ? "Teliha Office" : "Telihaオフィス"}
                width={600}
                height={400}
                className="object-contain w-full h-auto"
                style={{ maxHeight: "100%" }}
              />

              {/* オーバーレイグラデーション */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

              {/* キャプション */}
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-sm text-white/90 font-medium">
                  {language === "en" ? "Our Office in Fukuoka" : "福岡オフィス"}
                </p>
              </div>
            </div>
          </div>
        </div>
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
