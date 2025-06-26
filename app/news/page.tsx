"use client"

import { useState } from "react"
import Link from "next/link"
import { Grid3X3, Play, X, Calendar, Home, Code, Users, Presentation, Newspaper } from "lucide-react"
import { useLanguage } from "../../hooks/use-language"
import { LanguageSwitcher } from "../../components/language-switcher"
import { useMobile } from "../../hooks/use-mobile"
import { MobileNavigation } from "../../components/mobile-navigation"

interface NewsItem {
  id: string
  type: "image" | "reel"
  thumbnail: string
  date: string
  title: string
  description: string
  videoUrl?: string
}

export default function NewsPage() {
  const { language } = useLanguage()
  const [homeHover, setHomeHover] = useState(false)
  const [techHover, setTechHover] = useState(false)
  const [teamHover, setTeamHover] = useState(false)
  const [deckHover, setDeckHover] = useState(false)
  const [activeTab, setActiveTab] = useState<"images" | "reels">("images")
  const [selectedItem, setSelectedItem] = useState<NewsItem | null>(null)
  const isMobile = useMobile()

  // サンプルニュースデータ
  const newsData: NewsItem[] = [
    {
      id: "1",
      type: "image",
      thumbnail: "/placeholder.svg?height=300&width=300",
      date: "2024-12-15",
      title: language === "en" ? "FCRApp Stadium Launch" : "FCRAppスタジアムローンチ",
      description:
        language === "en"
          ? "Successfully launched FCRApp at FC Ryukyu stadium with over 5,000 token distributions to fans during the match."
          : "FC琉球スタジアムでFCRAppを成功裏にローンチ。試合中にファンに5,000以上のトークンを配布しました。",
    },
    {
      id: "2",
      type: "reel",
      thumbnail: "/placeholder.svg?height=300&width=300",
      date: "2024-12-10",
      title: language === "en" ? "Prex SDK Demo" : "Prex SDKデモ",
      description:
        language === "en"
          ? "Watch how easy it is to integrate Prex SDK into your application with just a few lines of code."
          : "わずか数行のコードでPrex SDKをアプリケーションに統合する簡単さをご覧ください。",
      videoUrl: "https://example.com/prex-demo.mp4",
    },
    {
      id: "3",
      type: "image",
      thumbnail: "/placeholder.svg?height=300&width=300",
      date: "2024-12-05",
      title: language === "en" ? "Team Development Sprint" : "チーム開発スプリント",
      description:
        language === "en"
          ? "Our engineering team working on the next generation of blockchain infrastructure solutions."
          : "次世代のブロックチェーンインフラソリューションに取り組むエンジニアリングチーム。",
    },
    {
      id: "4",
      type: "reel",
      thumbnail: "/placeholder.svg?height=300&width=300",
      date: "2024-11-28",
      title: language === "en" ? "Gasless Transaction Demo" : "ガスレス取引デモ",
      description:
        language === "en"
          ? "Experience seamless gasless transactions with our wallet infrastructure - no gas fees, instant transfers."
          : "ウォレットインフラによるシームレスなガスレス取引を体験 - ガス代なし、即座の転送。",
      videoUrl: "https://example.com/gasless-demo.mp4",
    },
    {
      id: "5",
      type: "image",
      thumbnail: "/placeholder.svg?height=300&width=300",
      date: "2024-11-20",
      title: language === "en" ? "Web3 Conference Presentation" : "Web3カンファレンス発表",
      description:
        language === "en"
          ? "CEO Shuhei Hiya presenting Teliha's vision for programmable finance at Tokyo Web3 Summit."
          : "CEO部谷修平が東京Web3サミットでTelihaのプログラマブルファイナンスビジョンを発表。",
    },
    {
      id: "6",
      type: "image",
      thumbnail: "/placeholder.svg?height=300&width=300",
      date: "2024-11-15",
      title: language === "en" ? "New Office Setup" : "新オフィスセットアップ",
      description:
        language === "en"
          ? "Our new development workspace in Fukuoka, equipped with cutting-edge technology for blockchain development."
          : "ブロックチェーン開発のための最先端技術を備えた福岡の新しい開発ワークスペース。",
    },
    {
      id: "7",
      type: "reel",
      thumbnail: "/placeholder.svg?height=300&width=300",
      date: "2024-11-10",
      title: language === "en" ? "QR Code Token Distribution" : "QRコードトークン配布",
      description:
        language === "en"
          ? "See how easy it is to distribute tokens using QR codes at events and retail locations."
          : "イベントや小売店でQRコードを使ってトークンを配布する簡単さをご覧ください。",
      videoUrl: "https://example.com/qr-distribution.mp4",
    },
    {
      id: "8",
      type: "image",
      thumbnail: "/placeholder.svg?height=300&width=300",
      date: "2024-11-01",
      title: language === "en" ? "Strategic Partnership" : "戦略的パートナーシップ",
      description:
        language === "en"
          ? "Announcing new strategic partnerships to expand our blockchain infrastructure across Asia."
          : "アジア全域でブロックチェーンインフラを拡大するための新しい戦略的パートナーシップを発表。",
    },
    {
      id: "9",
      type: "reel",
      thumbnail: "/placeholder.svg?height=300&width=300",
      date: "2024-10-25",
      title: language === "en" ? "Mobile Wallet Interface" : "モバイルウォレットインターフェース",
      description:
        language === "en"
          ? "Explore the intuitive design of our mobile wallet interface with seamless user experience."
          : "シームレスなユーザーエクスペリエンスを備えたモバイルウォレットインターフェースの直感的なデザインをご覧ください。",
      videoUrl: "https://example.com/mobile-wallet.mp4",
    },
  ]

  const filteredNews = newsData.filter((item) => item.type === activeTab.slice(0, -1))

  const openModal = (item: NewsItem) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
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

          <div className="px-4 py-2 bg-black/70 backdrop-blur-sm border border-cyan-400 rounded-md flex items-center space-x-2">
            <Newspaper size={16} className="text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400 whitespace-nowrap">
              {language === "en" ? "NEWS" : "ニュース"}
            </span>
          </div>

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
      <div className="relative z-10 pt-20 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4">
            <div className="relative">
              <h1 className="text-5xl font-bold text-white mb-2 relative z-10">
                {language === "en" ? "COMPANY NEWS" : "会社ニュース"}
              </h1>
              <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-cyan-400/50"></div>
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-[2px] bg-cyan-400"></div>
            </div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto tracking-wide">
            {language === "en"
              ? "Stay updated with our latest developments and achievements"
              : "最新の開発状況と成果をお届けします"}
          </p>
        </div>
      </div>

      {/* タブ切り替え */}
      <div className="max-w-4xl mx-auto mb-8 relative z-10">
        <div className="flex justify-center">
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab("images")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all duration-300 ${
                activeTab === "images"
                  ? "bg-cyan-400/20 border border-cyan-400/30 text-cyan-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Grid3X3 size={18} />
              <span className="font-medium">{language === "en" ? "POSTS" : "投稿"}</span>
            </button>
            <button
              onClick={() => setActiveTab("reels")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all duration-300 ${
                activeTab === "reels"
                  ? "bg-purple-400/20 border border-purple-400/30 text-purple-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Play size={18} />
              <span className="font-medium">{language === "en" ? "REELS" : "リール"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* グリッドレイアウト */}
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
              onClick={() => openModal(item)}
            >
              {/* サムネイル画像 */}
              <img
                src={item.thumbnail || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* リール再生アイコン */}
              {item.type === "reel" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                    <Play size={20} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              )}

              {/* 日付表示 */}
              <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md border border-white/20">
                <div className="flex items-center space-x-1">
                  <Calendar size={12} className="text-cyan-400" />
                  <span className="text-xs text-white font-medium">
                    {new Date(item.date).toLocaleDateString(language === "en" ? "en-US" : "ja-JP", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>

              {/* ホバーオーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* モーダル */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-black/80 backdrop-blur-md border border-cyan-400/30 rounded-xl overflow-hidden">
            {/* 閉じるボタン */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-cyan-400/50 transition-colors"
            >
              <X size={20} className="text-white" />
            </button>

            <div className="grid md:grid-cols-2 h-full">
              {/* 画像/動画エリア */}
              <div className="relative bg-black flex items-center justify-center">
                {selectedItem.type === "image" ? (
                  <img
                    src={selectedItem.thumbnail || "/placeholder.svg"}
                    alt={selectedItem.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-black/40">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-400/30">
                        <Play size={32} className="text-purple-400 ml-1" />
                      </div>
                      <p className="text-purple-400 font-medium">{language === "en" ? "Video Demo" : "動画デモ"}</p>
                      <p className="text-gray-400 text-sm mt-2">
                        {language === "en" ? "Click to play" : "クリックして再生"}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* 詳細情報エリア */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Calendar size={16} className="text-cyan-400" />
                    <span className="text-cyan-400 text-sm font-medium">
                      {new Date(selectedItem.date).toLocaleDateString(language === "en" ? "en-US" : "ja-JP", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-4">{selectedItem.title}</h2>

                  <p className="text-gray-300 leading-relaxed">{selectedItem.description}</p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-cyan-400 text-sm font-medium">
                      {language === "en" ? "Teliha Limited" : "株式会社Teliha"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
